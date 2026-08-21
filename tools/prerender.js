#!/usr/bin/env node
/**
 * Pre-renders the JS-injected sections of index.html into static HTML.
 *
 * WHY: every project, skill, experience entry and certificate used to be injected
 * at runtime, so the HTML served to crawlers and ATS scrapers contained none of it.
 *
 * HOW: rather than reimplement the markup (which would drift from modern.js the
 * first time either side changed), this script runs the REAL renderers from
 * assets/js/modern.js against a minimal DOM shim, then writes their output into
 * index.html between PRERENDER markers. The static HTML is therefore identical,
 * byte for byte, to what the browser would have produced.
 *
 * Output is committed to the repo, so GitHub Pages needs no build step.
 *
 * USAGE:  node tools/prerender.js          (re-run after editing data.js or lang.js)
 *         node tools/prerender.js --check  (CI-friendly: fails if index.html is stale)
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const LANG = 'en'; // English is the default served language

/* ------------------------------------------------------------------ *
 * Minimal DOM shim - only what the renderers in modern.js actually use
 * ------------------------------------------------------------------ */

function escapeAttr(v) {
  return String(v).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

class ClassList {
  constructor(el) { this.el = el; }
  _list() { return this.el.className ? this.el.className.split(/\s+/).filter(Boolean) : []; }
  _set(a) { this.el.className = a.join(' '); }
  add(...c) { const a = this._list(); c.forEach(x => { if (!a.includes(x)) a.push(x); }); this._set(a); }
  remove(...c) { this._set(this._list().filter(x => !c.includes(x))); }
  contains(c) { return this._list().includes(c); }
  toggle(c) { this.contains(c) ? this.remove(c) : this.add(c); }
}

class El {
  constructor(tag) {
    this.tagName = (tag || 'div').toLowerCase();
    this.children = [];
    this._html = null;
    this.attrs = {};
    this.className = '';
    this.style = {};
    this.dataset = {};
    this.textContent = '';
    this.classList = new ClassList(this);
  }
  setAttribute(k, v) {
    this.attrs[k] = String(v);
    if (k.startsWith('data-')) this.dataset[k.slice(5).replace(/-(\w)/g, (m, c) => c.toUpperCase())] = String(v);
  }
  getAttribute(k) { return this.attrs[k] ?? null; }
  removeAttribute(k) { delete this.attrs[k]; }
  set innerHTML(v) { this._html = v; this.children = []; }
  get innerHTML() {
    if (this._html !== null) return this._html;
    return this.children.map(c => c.outerHTML).join('\n');
  }
  get outerHTML() {
    const cls = this.className ? ` class="${escapeAttr(this.className)}"` : '';
    const at = Object.entries(this.attrs)
      .filter(([k]) => k !== 'class')
      .map(([k, v]) => ` ${k}="${escapeAttr(v)}"`).join('');
    return `<${this.tagName}${cls}${at}>${this.innerHTML}</${this.tagName}>`;
  }
  appendChild(c) { this.children.push(c); return c; }
  remove() {}
  addEventListener() {}
  querySelector() { return null; }
  querySelectorAll() { return []; }
}

// Containers the renderers write into, plus the stat spans they update
const CONTAINERS = [
  'technical-skills', 'soft-skills',
  'work-timeline', 'education-timeline', 'activities-timeline',
  'enterprise-list', 'webapp-list', 'website-list', 'github-list',
  'certificates-grid', 'references-grid'
];
const STATS = ['cert-total', 'cert-orgs', 'cert-years', 'ref-total', 'ref-companies'];

const byId = {};
[...CONTAINERS, ...STATS].forEach(id => { byId[id] = new El('div'); });

global.document = {
  getElementById: id => byId[id] || null,
  createElement: t => new El(t),
  querySelector: () => null,
  querySelectorAll: () => [],
  addEventListener: () => {},
  documentElement: {},
  body: { classList: new ClassList({ className: '' }), style: {} }
};
global.window = { matchMedia: () => ({ matches: false }), addEventListener() {}, scrollTo() {} };
global.localStorage = { getItem: () => null, setItem: () => {} };
global.IntersectionObserver = class { observe() {} unobserve() {} };
global.MutationObserver = class { observe() {} };
global.requestAnimationFrame = () => {};
global.performance = { now: () => 0 };
global.setTimeout = fn => { try { fn(); } catch (_) {} };
global.clearTimeout = () => {};

/* ------------------------------------------------------------------ *
 * Load the site's own data + renderers
 * ------------------------------------------------------------------ */

const read = p => fs.readFileSync(path.join(ROOT, p), 'utf8');

const quietLog = console.log;
console.log = () => {}; // renderers are chatty

eval(read('assets/js/data.js').replace(/^const portfolioData/m, 'globalThis.portfolioData'));
eval(read('assets/js/lang.js').replace(/^const translations/m, 'globalThis.translations'));

global.LanguageManager = { currentLang: LANG, t: translations[LANG] };

eval(
  read('assets/js/modern.js')
    .replace(/^const (Portfolio|Skills|Experience|Certificates|Testimonials) =/gm, 'globalThis.$1 =')
    .replace(/^function usePrerendered/m, 'globalThis.usePrerendered = function')
);

Skills.renderTechnicalSkills();
Skills.renderSoftSkills();
Experience.renderWorkExperience();
Experience.renderEducation();
Experience.renderActivities();
Portfolio.render();
Certificates.init();
Testimonials.init();

console.log = quietLog;

/* ------------------------------------------------------------------ *
 * Splice the rendered HTML into index.html
 * ------------------------------------------------------------------ */

const INDEX = path.join(ROOT, 'index.html');
let html = fs.readFileSync(INDEX, 'utf8');
const eol = (html.match(/\r\n/g) || []).length > (html.match(/(?<!\r)\n/g) || []).length ? '\r\n' : '\n';
const original = html;

function indentBlock(s, pad) {
  return s.split(/\r?\n/).map(l => (l.trim() ? pad + l.trim() : '')).filter(Boolean).join(eol);
}

let replaced = 0;
for (const id of CONTAINERS) {
  const startMark = `<!-- PRERENDER:start:${id} -->`;
  const endMark = `<!-- PRERENDER:end:${id} -->`;
  const a = html.indexOf(startMark);
  const b = html.indexOf(endMark);
  if (a === -1 || b === -1) {
    console.error(`  ! missing PRERENDER markers for "${id}" - skipped`);
    continue;
  }
  // preserve the indentation of the start marker
  const lineStart = html.lastIndexOf('\n', a) + 1;
  const pad = html.slice(lineStart, a).match(/^[ \t]*/)[0] + '  ';

  const body = byId[id].children.map(c => c.outerHTML).join('\n');
  const block = startMark + eol + indentBlock(body, pad) + eol + pad.slice(2) + endMark;
  html = html.slice(0, a) + block + html.slice(b + endMark.length);
  replaced++;
}

// mark each container with the language it was rendered in
for (const id of CONTAINERS) {
  const re = new RegExp(`(<[^>]*\\sid="${id}")([^>]*>)`);
  html = html.replace(re, (m, head, tail) =>
    head + (/data-prerendered=/.test(tail) ? tail : ` data-prerendered="${LANG}"` + tail));
}

// stats computed from the data, not hardcoded
for (const id of STATS) {
  const val = byId[id].textContent;
  if (val === '' || val === undefined) continue;
  const re = new RegExp(`(<span[^>]*\\sid="${id}"[^>]*>)[^<]*(</span>)`);
  html = html.replace(re, `$1${val}$2`);
}

if (process.argv.includes('--check')) {
  if (html !== original) {
    console.error('index.html is STALE - run: node tools/prerender.js');
    process.exit(1);
  }
  console.log('index.html is up to date');
  process.exit(0);
}

fs.writeFileSync(INDEX, html);

const counts = CONTAINERS.map(id => `${id}=${byId[id].children.length}`).join('  ');
console.log(`pre-rendered ${replaced}/${CONTAINERS.length} sections (lang=${LANG})`);
console.log('  ' + counts);
console.log('  stats: ' + STATS.map(id => `${id}=${byId[id].textContent}`).join('  '));
