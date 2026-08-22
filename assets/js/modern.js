/* ============================================
   MODERN PORTFOLIO JAVASCRIPT
   ============================================ */

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOMContentLoaded fired');

  // Initialize Language Manager first
  if (typeof LanguageManager !== 'undefined') {
    console.log('Initializing LanguageManager...');
    LanguageManager.init();
    console.log('LanguageManager initialized, current lang:', LanguageManager.currentLang);
  } else {
    console.log('LanguageManager not available');
  }

  // Initialize all modules
  Motion.init();
  Navigation.init();
  About.init();
  Tabs.init();
  Experience.init();
  Portfolio.init();
  Skills.init();
  Testimonials.init();
  Certificates.init();
  ScrollEffects.init();
  // must come last: the renderers above replace the markup Motion observes
  Motion.arm();
  console.log('All modules initialized');

});

/* ============================================
   PRE-RENDER SUPPORT
   Containers written by tools/prerender.js carry data-prerendered="<lang>".
   When that matches the active language we keep the server-rendered markup on
   first paint (so crawlers and users see identical HTML) and let every later
   language toggle re-render normally.
   ============================================ */
function usePrerendered(container) {
  if (!container || !container.dataset) return false;
  const lang = (typeof LanguageManager !== 'undefined' && LanguageManager.currentLang) || 'en';
  if (container.dataset.prerendered === lang) {
    delete container.dataset.prerendered;
    container.removeAttribute('data-prerendered');
    return true;
  }
  return false;
}



/* ============================================
   NAVIGATION
   ============================================ */
const Navigation = {
  init() {
    this.navbar = document.getElementById('topbar');
    this.navToggle = document.getElementById('nav-toggle');
    this.navMenu = document.getElementById('nav-menu');
    this.navOverlay = document.getElementById('nav-overlay');
    this.navLinks = document.querySelectorAll('.nav-link');

    if (!this.navbar) return;

    // handleScroll and updateActiveLink are driven from Motion's single rAF
    // loop rather than from their own scroll listeners.
    this.handleScroll(); // Initial check

    // Mobile toggle
    if (this.navToggle) {
      this.navToggle.addEventListener('click', () => this.toggleMobile());
    }

    // Close menu when clicking overlay
    if (this.navOverlay) {
      this.navOverlay.addEventListener('click', () => this.closeMobile());
    }

    // Nav links click
    this.navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('href');
        this.scrollToSection(target);
        this.closeMobile();
      });
    });

  },

  handleScroll() {
    // hairline appears only once the bar has something above it
    this.navbar.classList.toggle('is-stuck', window.scrollY > 8);
  },

  toggleMobile() {
    this.navToggle.classList.toggle('active');
    this.navMenu.classList.toggle('open');
    this.navToggle.setAttribute('aria-expanded', this.navMenu.classList.contains('open'));
    this.navOverlay?.classList.toggle('active');
    document.body.style.overflow = this.navMenu.classList.contains('active') ? 'hidden' : '';
  },

  closeMobile() {
    this.navToggle?.classList.remove('active');
    this.navMenu?.classList.remove('open');
    this.navOverlay?.classList.remove('active');
    document.body.style.overflow = '';
  },

  scrollToSection(target) {
    const section = document.querySelector(target);
    if (section) {
      const offset = 80;
      const top = section.offsetTop - offset;
      window.scrollTo({
        top: top,
        behavior: 'smooth'
      });
    }
  },

  updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.scrollY;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 150;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        this.navLinks.forEach(link => {
          link.classList.remove('is-active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('is-active');
          }
        });
      }
    });
  }
};


/* ============================================
   ABOUT SECTION
   ============================================ */
const About = {
  init() {
    console.log('About.init() called');
    if (typeof LanguageManager === 'undefined' || !LanguageManager.t) return;

    const lang = LanguageManager.t;

    // Update ALL section titles
    this.updateSectionTitles(lang);

    // About heading
    const aboutTitle = document.querySelector('[data-i18n-about="title"]');
    if (aboutTitle) aboutTitle.textContent = lang.about?.title || 'About';

    // Update job title
    const aboutJobTitle = document.querySelector('#about .about-text h3');
    if (aboutJobTitle) aboutJobTitle.textContent = lang.about?.jobTitle || 'IT Consultant & Senior Full Stack Developer';

    // Update bio (single paragraph - the hero carries its own, shorter line)
    const aboutDesc = document.querySelectorAll('#about .about-description');
    if (aboutDesc.length > 0 && lang.about?.bio) {
      aboutDesc[0].textContent = lang.about.bio;
    }

    // Facts list — labels from lang.js, values left as authored links where present
    if (lang.about?.labels && lang.about?.details) {
      const L = lang.about.labels, D = lang.about.details;
      const rows = [
        ['location', L.location, D.location],
        ['email', L.email, D.email],
        ['phone', L.phone, D.phone],
        ['nationality', L.nationality, D.nationality]
      ];
      document.querySelectorAll('#about .fact').forEach((item, i) => {
        const row = rows[i];
        if (!row) return;
        const labelEl = item.querySelector('.info-label');
        const valueEl = item.querySelector('.info-value');
        if (labelEl && row[1]) labelEl.textContent = row[1];
        if (valueEl && row[2]) {
          const link = valueEl.querySelector('a');
          if (link) link.textContent = row[2];
          else valueEl.textContent = row[2];
        }
      });
    }

    // Certificates / References headings and inline labels
    const tr = lang.training || {}, rf = lang.references || {}, cm = lang.common || {};
    document.querySelectorAll('[data-i18n-training]').forEach(el => {
      const k = el.getAttribute('data-i18n-training'); if (tr[k]) el.textContent = tr[k];
    });
    document.querySelectorAll('[data-i18n-references]').forEach(el => {
      const k = el.getAttribute('data-i18n-references'); if (rf[k]) el.textContent = rf[k];
    });
    document.querySelectorAll('[data-i18n-common]').forEach(el => {
      const k = el.getAttribute('data-i18n-common'); if (cm[k]) el.textContent = cm[k];
    });
    const onReq = document.getElementById('ref-on-request');
    if (onReq && cm.referencesOnRequest) onReq.textContent = cm.referencesOnRequest;

    // Experience headings + tab labels
    const rs = lang.resume || {};
    document.querySelectorAll('[data-i18n-resume]').forEach(el => {
      const key = el.getAttribute('data-i18n-resume');
      if (rs[key]) el.textContent = rs[key];
    });

    // Skills headings
    const sk = lang.skills || {};
    document.querySelectorAll('[data-i18n-skills]').forEach(el => {
      const key = el.getAttribute('data-i18n-skills');
      if (sk[key]) el.textContent = sk[key];
    });

    // Work section headings
    const secs = lang.portfolio?.sections || {};
    document.querySelectorAll('[data-i18n-section]').forEach(el => {
      const key = el.getAttribute('data-i18n-section');
      if (secs[key]) el.textContent = secs[key];
    });
    const selWork = document.querySelector('#work .eyebrow');
    if (selWork && lang.portfolio?.selectedWork) selWork.textContent = lang.portfolio.selectedWork;

    const entIntro = document.getElementById('enterprise-intro');
    if (entIntro && lang.portfolio?.enterpriseIntro) entIntro.textContent = lang.portfolio.enterpriseIntro;

    // Update navigation
    this.updateNavigation(lang);

    // Update hero section
    this.updateHero(lang);

    // Update contact section
    this.updateContact(lang);
  },

  updateSectionTitles(lang) {
    // Every heading and inline label in the redesigned markup carries a
    // data-i18n-* hook, so nothing here is position-dependent any more.
    const tables = {
      'data-i18n-section': lang.portfolio && lang.portfolio.sections,
      'data-i18n-skills': lang.skills,
      'data-i18n-resume': lang.resume,
      'data-i18n-training': lang.training,
      'data-i18n-references': lang.references,
      'data-i18n-about': lang.about,
      'data-i18n-common': lang.common,
      'data-i18n-profile': lang.profile
    };
    for (const attr in tables) {
      const table = tables[attr] || {};
      document.querySelectorAll('[' + attr + ']').forEach(el => {
        const key = el.getAttribute(attr);
        if (typeof table[key] === 'string') el.textContent = table[key];
      });
    }

    // dotted-path hooks, e.g. data-i18n="contact.title"
    document.querySelectorAll('[data-i18n]').forEach(el => {
      let v = lang;
      for (const k of el.getAttribute('data-i18n').split('.')) v = v && v[k];
      if (typeof v === 'string') el.textContent = v;
    });

    const selWork = document.querySelector('#work .eyebrow');
    if (selWork && lang.portfolio && lang.portfolio.selectedWork) selWork.textContent = lang.portfolio.selectedWork;

    const entIntro = document.getElementById('enterprise-intro');
    if (entIntro && lang.portfolio && lang.portfolio.enterpriseIntro) entIntro.textContent = lang.portfolio.enterpriseIntro;

    const sums = (lang.portfolio && lang.portfolio.summaries) || {};
    document.querySelectorAll('[data-cat-sum]').forEach(el => {
      const k = el.getAttribute('data-cat-sum');
      if (sums[k]) el.textContent = sums[k];
    });

    const onReq = document.getElementById('ref-on-request');
    if (onReq && lang.common && lang.common.referencesOnRequest) onReq.textContent = lang.common.referencesOnRequest;
  },

  updateNavigation(lang) {
    const navLinks = document.querySelectorAll('.nav-link');
    const navMap = {
      '#work': lang.nav?.portfolio || 'Systems',
      '#skills': lang.skills?.title || 'Skills',
      '#experience': lang.nav?.experience || 'Experience',
      '#certificates': lang.nav?.training || 'Certificates',
      '#about': lang.nav?.about || 'About',
      '#contact': lang.nav?.contact || 'Contact'
    };

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (navMap[href]) {
        link.textContent = navMap[href];
      }
    });
  },

  updateHero(lang) {
    const heroGreeting = document.querySelector('.hero-greeting');
    if (heroGreeting) {
      heroGreeting.textContent = LanguageManager.currentLang === 'ar' ? 'مرحباً، أنا' : "Hello, I'm";
    }

    // both halves are explicit elements — no reliance on child-node ordering
    const heroGiven = document.querySelector('.hero-given');
    if (heroGiven) heroGiven.textContent = lang.profile?.name || 'Fadi Barhoum';
    const heroTag = document.querySelector('.hero-name em');
    if (heroTag && lang.hero?.tagline) heroTag.textContent = lang.hero.tagline;

    // architecture layer labels — the label is the information, so it translates
    const layers = lang.hero?.layers || {};
    document.querySelectorAll('.layer .lbl[data-layer]').forEach(el => {
      const k = el.getAttribute('data-layer');
      if (layers[k]) el.textContent = layers[k];
    });

    const heroDesc = document.querySelector('.hero-description');
    if (heroDesc && lang.hero?.description) {
      heroDesc.textContent = lang.hero.description;
    }

    // Role line: three facets joined by an accented separator
    const heroRole = document.querySelector('.intro-role');
    if (heroRole && Array.isArray(lang.hero?.role)) {
      heroRole.innerHTML = lang.hero.role
        .map((r, i) => (i === 1 ? r : `<b>${r}</b>`))
        .join('<span class="sep" aria-hidden="true">·</span>');
    }

    const viewWork = document.querySelector('.intro-actions .act-solid');
    if (viewWork && lang.hero?.viewWork) viewWork.textContent = lang.hero.viewWork;

    const heroLocation = document.querySelector('.intro-meta li:first-child');
    if (heroLocation && lang.hero?.location) heroLocation.textContent = lang.hero.location;

    // Update hero buttons
    const viewWorkBtn = document.querySelector('.hero-cta .btn-primary span');
    if (viewWorkBtn) viewWorkBtn.textContent = LanguageManager.currentLang === 'ar' ? 'شاهد أعمالي' : 'View My Work';

    const getInTouchBtn = document.querySelector('.hero-cta .btn-outline span');
    if (getInTouchBtn) getInTouchBtn.textContent = LanguageManager.currentLang === 'ar' ? 'تواصل معي' : 'Get In Touch';

    // Update scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator span');
    if (scrollIndicator) scrollIndicator.textContent = LanguageManager.currentLang === 'ar' ? 'انتقل للأسفل' : 'Scroll Down';
  },

  updateContact(lang) {
    const downloadBtn = document.querySelector('.nav-cta span');
    if (downloadBtn) downloadBtn.textContent = (lang.contact && lang.contact.downloadCV) || 'Download CV';
    this.updateFooter(lang);
  },

  updateFooter(lang) {
    const footTitle = document.querySelector('.foot-title');
    if (footTitle && lang.footer && lang.footer.title) footTitle.textContent = lang.footer.title;

    const year = document.getElementById('current-year');
    if (year) year.textContent = new Date().getFullYear();
  }
};


/* ============================================
   EXPERIENCE TABS
   ============================================ */
const Tabs = {
  init() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const tabId = btn.dataset.tab;

        tabBtns.forEach(b => {
          b.classList.remove('is-active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('is-active');
        btn.setAttribute('aria-selected', 'true');

        tabContents.forEach(content => {
          const on = content.id === tabId;
          content.classList.toggle('is-active', on);
          content.hidden = !on;
        });
      });
    });
  }
};

/* ============================================
   EXPERIENCE RENDERING
   ============================================ */
const Experience = {
  init() {
    console.log('Experience.init() called');
    this.renderWorkExperience();
    this.renderEducation();
    this.renderActivities();
  },

  renderWorkExperience() {
    const container = document.getElementById('work-timeline');
    if (usePrerendered(container)) return;
    if (!container) {
      console.log('Work timeline container not found');
      return;
    }

    const lang = typeof LanguageManager !== 'undefined' && LanguageManager.t
      ? LanguageManager.t.resume
      : null;
    const commonLang = typeof LanguageManager !== 'undefined' && LanguageManager.t
      ? LanguageManager.t.common || {}
      : {};

    if (!lang || !lang.experienceItems) {
      console.log('No experience items found');
      return;
    }

    container.innerHTML = '';
    console.log('Rendering', lang.experienceItems.length, 'work experiences');

    lang.experienceItems.forEach((exp, index) => {
      const isPresent = exp.period.toLowerCase().includes('present') || exp.period.includes('حتى الآن');

      const item = document.createElement('div');
      item.className = 'timeline-item';
      let responsibilitiesHtml = '';
      if (exp.responsibilities && exp.responsibilities.length > 0) {
        responsibilitiesHtml = `
          <ul class="timeline-list">
            ${exp.responsibilities.map(r => `<li>${r}</li>`).join('')}
          </ul>
        `;
      }

      item.innerHTML = `
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <div class="timeline-header">
            <span class="timeline-date">${exp.period}</span>
            ${isPresent ? `<span class="timeline-badge">${commonLang.current || 'Current'}</span>` : ''}
          </div>
          <h3 class="timeline-title">${exp.title}</h3>
          <h4 class="timeline-company">${exp.company}</h4>
          ${responsibilitiesHtml}
        </div>
      `;

      container.appendChild(item);
    });
  },

  renderEducation() {
    const container = document.getElementById('education-timeline');
    if (usePrerendered(container)) return;
    if (!container) {
      console.log('Education timeline container not found');
      return;
    }

    const lang = typeof LanguageManager !== 'undefined' && LanguageManager.t
      ? LanguageManager.t.resume
      : null;

    if (!lang || !lang.educationItems) {
      console.log('No education items found');
      return;
    }

    container.innerHTML = '';
    console.log('Rendering', lang.educationItems.length, 'education items');

    lang.educationItems.forEach((edu, index) => {
      const item = document.createElement('div');
      item.className = 'timeline-item';
      item.innerHTML = `
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <div class="timeline-header">
            <span class="timeline-date">${edu.period}</span>
          </div>
          <h3 class="timeline-title">${edu.title}</h3>
          <h4 class="timeline-company">${edu.institution}</h4>
          ${edu.note ? `<p class="timeline-note">${edu.note}</p>` : ''}
        </div>
      `;

      container.appendChild(item);
    });
  },

  renderActivities() {
    const container = document.getElementById('activities-timeline');
    if (usePrerendered(container)) return;
    if (!container) {
      console.log('Activities timeline container not found');
      return;
    }

    const lang = typeof LanguageManager !== 'undefined' && LanguageManager.t
      ? LanguageManager.t.resume
      : null;
    const commonLang = typeof LanguageManager !== 'undefined' && LanguageManager.t
      ? LanguageManager.t.common || {}
      : {};

    if (!lang || !lang.activitiesItems) {
      console.log('No activities items found');
      return;
    }

    container.innerHTML = '';
    console.log('Rendering', lang.activitiesItems.length, 'activities');

    lang.activitiesItems.forEach((act, index) => {
      const isPresent = act.period.toLowerCase().includes('present') || act.period.includes('حتى الآن');

      const item = document.createElement('div');
      item.className = 'timeline-item';
      let contentHtml = '';

      // Check if it has roles (like Social Worker with multiple roles)
      if (act.roles && act.roles.length > 0) {
        contentHtml = act.roles.map(role => `
          <div class="timeline-role">
            <h5 class="role-title">${role.role} <span class="role-period">(${role.period})</span></h5>
            ${role.tasks ? `<ul class="timeline-list">${role.tasks.map(t => `<li>${t}</li>`).join('')}</ul>` : ''}
          </div>
        `).join('');
      } else if (act.responsibilities && act.responsibilities.length > 0) {
        contentHtml = `
          <ul class="timeline-list">
            ${act.responsibilities.map(r => `<li>${r}</li>`).join('')}
          </ul>
        `;
      }

      item.innerHTML = `
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <div class="timeline-header">
            <span class="timeline-date">${act.period}</span>
            ${isPresent ? `<span class="timeline-badge">${commonLang.current || 'Current'}</span>` : ''}
          </div>
          <h3 class="timeline-title">${act.title}</h3>
          <h4 class="timeline-company">${act.organization}</h4>
          ${contentHtml}
        </div>
      `;

      container.appendChild(item);
    });
  }
};

/* ============================================
   WORK — four categories, four treatments.
   No imagery: projects are carried by typography alone.
   Enterprise uses native <details> so every capability stays in the
   raw HTML (crawlable, keyboard accessible, works without JS).
   ============================================ */
const Portfolio = {
  init() { this.render(); },

  lang() { return (typeof LanguageManager !== 'undefined' && LanguageManager.t) ? LanguageManager.t : {}; },
  common() { return this.lang().common || {}; },
  byId() { const l = this.lang().portfolio?.items || []; return id => l.find(x => x.id === id) || {}; },

  chips(list) {
    if (!list || !list.length) return '';
    return '<div class="chips">' + list.map(t => `<span class="chip">${t}</span>`).join('') + '</div>';
  },

  // capability list, optionally split into two labelled columns
  caps(features, split) {
    if (!features) return '';
    const c = this.common();
    const li = items => items.map(x => typeof x === 'string'
      ? `<li>${x}</li>`
      : `<li><b>${x.bold}</b>${x.text}</li>`).join('');

    const named = [
      [features.owners, c.ownersEnjoy], [features.customers, c.customersBenefit],
      [features.beneficiaries, c.beneficiaries], [features.admin, c.admin],
      [features.chairman, c.chairmanMembers]
    ].filter(([arr]) => arr && arr.length);

    let out = '';
    if (features.items && features.items.length) {
      if (split) {
        // halve the capability list into two ruled columns
        const half = Math.ceil(features.items.length / 2);
        out += `<div class="capgroup"><ul class="caplist">${li(features.items.slice(0, half))}</ul></div>`;
        out += `<div class="capgroup"><ul class="caplist">${li(features.items.slice(half))}</ul></div>`;
      } else {
        out += `<div class="capgroup"><ul class="caplist">${li(features.items)}</ul></div>`;
      }
    }
    for (const [arr, label] of named) {
      out += `<div class="capgroup">${label ? `<h4>${label}</h4>` : ''}<ul class="caplist">${li(arr)}</ul></div>`;
    }
    return out;
  },

  prose(d, cls) {
    if (!d) return '';
    if (typeof d === 'string') return `<p class="${cls}">${d}</p>`;
    if (!Array.isArray(d)) return '';
    if (typeof d[0] === 'string') return `<p class="${cls}">${d.join(' ')}</p>`;
    if (d[0] && d[0].bold !== undefined) {
      return `<div class="capgroup"><ul class="caplist">${d.map(x => `<li><b>${x.bold}</b>${x.text}</li>`).join('')}</ul></div>`;
    }
    return '';
  },

  visit(link, cls) {
    if (!link) return '';
    const label = this.common().visitSite || 'Visit Site';
    return `<p class="${cls}"><a href="${link}" target="_blank" rel="noopener">${label} &rarr;</a></p>`;
  },

  render() {
    if (typeof portfolioData === 'undefined') return;
    const get = this.byId();
    const cat = c => portfolioData.portfolio.filter(p => p.category === c);
    this.enterprise(cat('enterprise'), get);
    this.webapps(cat('webapp'), get);
    this.websites(cat('website'), get);
    this.repos();
  },

  enterprise(list, get) {
    const el = document.getElementById('enterprise-list');
    if (!el || usePrerendered(el)) return;
    el.innerHTML = '';
    list.forEach((p, i) => {
      const d = get(p.id);
      const row = document.createElement('details');
      row.className = 'sys rv';
      if (i === 0) row.setAttribute('open', '');
      row.innerHTML = `
        <summary>
          <span class="idx">${String(i + 1).padStart(2, '0')}</span>
          <span class="t">${d.name || ''}${d.subtitle ? `<span class="sub">${d.subtitle}</span>` : ''}</span>
          <span class="plus" aria-hidden="true">+</span>
        </summary>
        <div class="sysbody">
          ${this.chips(d.builtWith)}
          ${d.headline ? `<p class="txt">${d.headline}</p>` : ''}
          ${this.caps(d.features, true)}
          ${this.prose(d.description, 'txt')}
          ${this.visit(p.link, 'sysvisit')}
        </div>`;
      el.appendChild(row);
    });
  },

  webapps(list, get) {
    const el = document.getElementById('webapp-list');
    if (!el || usePrerendered(el)) return;
    el.innerHTML = '';
    list.forEach(p => {
      const d = get(p.id);
      const art = document.createElement('article');
      // the two heaviest platforms are flagged featured in data.js and take a wider cell
      art.className = 'app rv' + (p.featured ? ' lead' : '');
      art.innerHTML = `
        <h3 class="app-name">${d.name || ''}</h3>
        ${d.subtitle ? `<p class="app-sub">${d.subtitle}</p>` : ''}
        ${this.chips(d.builtWith)}
        ${d.headline ? `<p class="app-headline">${d.headline}</p>` : ''}
        ${this.caps(d.features, false)}
        ${this.prose(d.description, 'app-headline')}
        ${this.visit(p.link, 'sysvisit')}`;
      el.appendChild(art);
    });
  },

  websites(list, get) {
    const el = document.getElementById('website-list');
    if (!el || usePrerendered(el)) return;
    const t = this.lang().portfolio || {};
    el.innerHTML = '';

    const names = list.map(p => {
      const d = get(p.id);
      return p.link
        ? `<a href="${p.link}" target="_blank" rel="noopener">${d.name || ''}</a>`
        : `<span class="nolink">${d.name || ''}</span>`;
    }).join('<i class="sep" aria-hidden="true">·</i>');

    const box = document.createElement('div');
    box.className = 'fold rv';
    box.innerHTML = `
      <p class="fold-note">${t.websitesNote || ''}</p>
      <p class="fold-names">${names}</p>`;
    el.appendChild(box);
  },

  repos() {
    const el = document.getElementById('github-list');
    if (!el || usePrerendered(el) || typeof portfolioData === 'undefined') return;
    const gh = this.lang().github?.items || [];
    const t = this.lang().portfolio || {};
    el.innerHTML = '';

    const links = portfolioData.githubProjects.map(p => {
      const d = gh.find(x => x.id === p.id) || {};
      return `<a href="${p.github}" target="_blank" rel="noopener">${d.name || ''}</a>`;
    }).join('<i class="sep" aria-hidden="true">·</i>');

    const box = document.createElement('div');
    box.className = 'fold rv';
    box.innerHTML = `
      <p class="fold-note">${t.openSourceNote || ''}</p>
      <p class="fold-names">${links}</p>`;
    el.appendChild(box);
  }
};

/* ============================================
   SKILLS RENDERING
   ============================================ */
const Skills = {
  init() {
    console.log('Skills.init() called');
    this.renderTechnicalSkills();
    this.renderSoftSkills();
  },

  renderTechnicalSkills() {
    const container = document.getElementById('technical-skills');
    if (!container || usePrerendered(container)) return;
    if (typeof portfolioData === 'undefined' || !portfolioData.skillGroups) return;

    container.innerHTML = '';
    const labels = (typeof LanguageManager !== 'undefined' && LanguageManager.t)
      ? (LanguageManager.t.skills?.groups || {}) : {};

    portfolioData.skillGroups.forEach(group => {
      const row = document.createElement('div');
      row.className = 'skill-group';
      row.innerHTML = `
        <div class="srow">
          <div class="k skill-group-title">${labels[group.group] || group.group}</div>
          <div class="v skill-names">${group.skills.map(s => `<span class="skill-name">${s.key}</span>`).join('')}</div>
        </div>`;
      container.appendChild(row);
    });
  },

  renderSoftSkills() {
    const container = document.getElementById('soft-skills');
    if (usePrerendered(container)) return;
    console.log('Soft skills container:', container);

    if (!container) {
      console.log('Soft skills container not found');
      return;
    }
    if (typeof portfolioData === 'undefined') {
      console.log('portfolioData not defined for soft skills');
      return;
    }
    if (!portfolioData.softSkills || !portfolioData.softSkills.length) {
      console.log('No soft skills data found');
      return;
    }

    container.innerHTML = ''; // Clear existing
    console.log('Rendering', portfolioData.softSkills.length, 'soft skills');

    portfolioData.softSkills.forEach(skill => {
      const item = document.createElement('li');
      item.className = 'soft-skill';      item.innerHTML = skill.key;
      container.appendChild(item);
    });
  }
};

/* ============================================
   CERTIFICATES - MODERN GRID WITH FILTERING
   ============================================ */
const Certificates = {
  showAll: false,
  // Categories hidden on first paint. Humanitarian training is 10 of the 20
  // certificates and would otherwise bury the technical ones.
  collapsedCategories: ['humanitarian'],

  // Category comes from data.js (language-independent). The keyword matching
  // below is only a fallback for entries that predate that field - it reads
  // English titles, so it cannot be relied on while the site is in Arabic.
  getCategory(cert, index) {
    if (typeof portfolioData !== 'undefined'
        && portfolioData.certificates
        && portfolioData.certificates[index]
        && portfolioData.certificates[index].category) {
      return portfolioData.certificates[index].category;
    }
    return this.getCategoryFromTitle(cert);
  },

  getCategoryFromTitle(cert) {
    const title = (cert.title || '').toLowerCase();
    const institution = (cert.institution || '').toLowerCase();

    // Technical
    if (title.includes('laravel') || title.includes('php') || title.includes('mobile') ||
        title.includes('programming') || title.includes('database') || title.includes('management')) {
      if (title.includes('database') || title.includes('laravel') || title.includes('php') || title.includes('mobile')) {
        return 'tech';
      }
    }

    // Language
    if (title.includes('english') || institution.includes('linguaphone') || institution.includes('language')) {
      return 'language';
    }

    // Soft Skills
    if (title.includes('soft skills') || title.includes('time management') ||
        title.includes('nlp') || title.includes('neuro linguistic') ||
        title.includes('entrepreneurial') || title.includes('proposal writing')) {
      return 'skills';
    }

    // Humanitarian (default for most NGO-related certs)
    if (title.includes('protection') || title.includes('child') ||
        title.includes('humanitarian') || title.includes('sphere') ||
        title.includes('psychosocial') || title.includes('food security') ||
        title.includes('safeguarding') || title.includes('livelihood') ||
        institution.includes('undp') || institution.includes('fdcd') ||
        institution.includes('cssd') || institution.includes('mecc') ||
        title.includes('logical framework') || title.includes('referrals')) {
      return 'humanitarian';
    }

    return 'skills'; // Default
  },

  getCategoryLabel(category, lang) {
    const labels = {
      en: { tech: 'Technical', humanitarian: 'Humanitarian', language: 'Language', skills: 'Soft Skills' },
      ar: { tech: 'تقني', humanitarian: 'إنساني', language: 'لغات', skills: 'مهارات شخصية' }
    };
    const currentLang = typeof LanguageManager !== 'undefined' ? LanguageManager.currentLang : 'en';
    return labels[currentLang]?.[category] || labels.en[category] || category;
  },


  init() {
    console.log('Certificates.init() called');
    const grid = document.getElementById('certificates-grid');
    console.log('Certificates grid:', grid);

    if (!grid) {
      console.log('Certificates grid not found');
      return;
    }
    if (typeof LanguageManager === 'undefined') {
      console.log('LanguageManager not defined for certificates');
      return;
    }

    const lang = LanguageManager.t;
    if (!lang || !lang.training || !lang.training.items) {
      console.log('Certificates: No training data found in', lang);
      return;
    }

    const prerendered = usePrerendered(grid);
    if (!prerendered) grid.innerHTML = '';

    const certificates = lang.training.items;
    const commonLang = lang.common || {};
    console.log('Rendering', certificates.length, 'certificates');

    // All three stats are derived from the data, never hardcoded
    const totalEl = document.getElementById('cert-total');
    if (totalEl) totalEl.textContent = certificates.length;

    // Count unique organizations
    const orgs = new Set(certificates.map(c => c.institution));
    const orgsEl = document.getElementById('cert-orgs');
    if (orgsEl) orgsEl.textContent = orgs.size;

    // Span between the earliest and latest year mentioned in any certificate date
    const years = certificates
      .flatMap(c => (c.date || '').match(/\d{4}/g) || [])
      .map(Number)
      .filter(y => !isNaN(y));
    const yearsEl = document.getElementById('cert-years');
    if (yearsEl && years.length) {
      yearsEl.textContent = Math.max(...years) - Math.min(...years) + 1;
    }

    if (prerendered) {
      this.initFilters();
      this.initLoadMore(certificates.length);
      return;
    }

    // Create cards
    certificates.forEach((cert, index) => {
      const category = this.getCategory(cert, index);
      const card = document.createElement('div');
      card.className = `cert ${category}`;
      card.setAttribute('data-category', category);
      // Humanitarian training is collapsed by default so the section reads as a
      // technical profile; it stays reachable via the filter and "Show All".
      if (this.collapsedCategories.includes(category) && !this.showAll) {
        card.classList.add('hidden');
      }

      const title = cert.title || 'Certificate';
      card.innerHTML = `
        <h3 class="cert-title">${cert.link
          ? `<a href="${cert.link}" target="_blank" rel="noopener" title="${commonLang.viewCertificate || 'View Certificate'}">${title}</a>`
          : title}</h3>
        <p class="cert-org">${cert.institution || ''}</p>
        <p class="cert-when">${cert.date || ''}</p>
        <span class="cert-tag ${category}">${this.getCategoryLabel(category)}</span>
      `;

      grid.appendChild(card);
    });

    // Initialize filter buttons
    this.initFilters();

    // Initialize load more button
    this.initLoadMore(certificates.length);
  },

  initFilters() {
    const filterBtns = document.querySelectorAll('.cert-filter-btn');

    // keep the filter labels in the active language
    const allLabel = (typeof LanguageManager !== 'undefined' && LanguageManager.currentLang === 'ar') ? 'الكل' : 'All';
    filterBtns.forEach(btn => {
      const f = btn.getAttribute('data-filter');
      btn.textContent = f === 'all' ? allLabel : this.getCategoryLabel(f);
    });

    filterBtns.forEach(btn => {
      if (btn.dataset.bound) return;
      btn.dataset.bound = '1';
      btn.addEventListener('click', () => {
        const cards = document.querySelectorAll('.cert');
        // Update active state
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        cards.forEach(card => {
          const category = card.getAttribute('data-category');
          const matchesFilter = filter === 'all' || category === filter;
          // A collapsed category is only hidden under "All"; asking for it
          // explicitly by filter always reveals it.
          const collapsed = filter === 'all'
            && !this.showAll
            && this.collapsedCategories.includes(category);

          if (matchesFilter && !collapsed) {
            card.classList.remove('hidden');
          } else {
            card.classList.add('hidden');
          }
        });

        // Update load more button visibility
        this.updateLoadMoreBtn(filter);
      });
    });
  },

  initLoadMore(totalCount) {
    const loadMoreBtn = document.getElementById('load-more-certs');
    if (!loadMoreBtn) return;
    if (loadMoreBtn.dataset.bound) return;
    loadMoreBtn.dataset.bound = '1';

    // Nothing is collapsed, so there is nothing to expand
    const hasCollapsed = Array.from(document.querySelectorAll('.cert'))
      .some(c => this.collapsedCategories.includes(c.getAttribute('data-category')));
    if (!hasCollapsed) {
      loadMoreBtn.classList.add('hidden');
      return;
    }

    loadMoreBtn.addEventListener('click', () => {
      this.showAll = !this.showAll;

      const activeFilter = document.querySelector('.cert-filter-btn.active');
      const filter = activeFilter ? activeFilter.getAttribute('data-filter') : 'all';
      const cards = document.querySelectorAll('.cert');

      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        const matchesFilter = filter === 'all' || category === filter;
        const collapsed = filter === 'all'
          && !this.showAll
          && this.collapsedCategories.includes(category);

        if (matchesFilter && !collapsed) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });

      // Update button text
      const lang = typeof LanguageManager !== 'undefined' ? LanguageManager.t : {};
      const commonLang = lang.common || {};

      loadMoreBtn.innerHTML = this.showAll
        ? `<span>${commonLang.showLess || 'Show less'}</span>`
        : `<span>${commonLang.showAll || 'Show all certificates'}</span>`;
    });
  },

  updateLoadMoreBtn(filter) {
    const loadMoreBtn = document.getElementById('load-more-certs');
    if (!loadMoreBtn) return;

    // The button only means anything under "All", where collapsing applies
    const collapsedCount = Array.from(document.querySelectorAll('.cert'))
      .filter(c => this.collapsedCategories.includes(c.getAttribute('data-category')))
      .length;

    if (filter !== 'all' || collapsedCount === 0) {
      loadMoreBtn.classList.add('hidden');
    } else {
      loadMoreBtn.classList.remove('hidden');
    }
  }
};

/* ============================================
   REFERENCES - MODERN DESIGN
   ============================================ */
const Testimonials = {
  init() {
    console.log('Testimonials.init() called');
    const container = document.getElementById('references-grid');
    console.log('References container:', container);

    if (!container) {
      console.log('References container not found');
      return;
    }
    if (typeof portfolioData === 'undefined') {
      console.log('portfolioData not defined for references');
      return;
    }
    if (!portfolioData.references || !portfolioData.references.length) {
      console.log('No references data found');
      return;
    }

    const prerendered = usePrerendered(container);
    if (!prerendered) container.innerHTML = ''; // Clear existing

    const lang = typeof LanguageManager !== 'undefined' && LanguageManager.t
      ? LanguageManager.t.references?.items
      : [];
    const commonLang = typeof LanguageManager !== 'undefined' && LanguageManager.t
      ? LanguageManager.t.common
      : {};
    const isArabic = typeof LanguageManager !== 'undefined' && LanguageManager.currentLang === 'ar';

    console.log('Rendering', portfolioData.references.length, 'references');

    // Update stats
    const totalEl = document.getElementById('ref-total');
    if (totalEl) totalEl.textContent = portfolioData.references.length;

    // Count unique companies
    const companies = new Set(lang.map(r => r.company));
    const companiesEl = document.getElementById('ref-companies');
    if (companiesEl) companiesEl.textContent = companies.size;

    if (prerendered) return;

    portfolioData.references.forEach((ref, index) => {
      const refData = lang && lang[index] ? lang[index] : {};

      const card = document.createElement('div');
      card.className = 'ref';
      // Position text with "at" connector
      const atText = isArabic ? 'في' : 'at';
      const positionText = refData.company
        ? `${refData.position || ''} <span class="company">${atText} ${refData.company}</span>`
        : refData.position || '';

      // the "available on request" line sits once under the list, not on every card
      card.innerHTML = `
        <span class="ref-initials" aria-hidden="true">${ref.initials || ''}</span>
        <div class="ref-who">
          <h3 class="ref-name">${refData.name || 'Reference'}</h3>
          <p class="ref-position">${positionText}</p>
        </div>
      `;

      container.appendChild(card);
    });
  }
};


/* ============================================
   SCROLL EFFECTS
   ============================================ */
const ScrollEffects = {
  init() {
    setTimeout(() => {
    }, 500);
  }
};



/* ============================================
   LANGUAGE TOGGLE
   ============================================ */
document.getElementById('lang-toggle')?.addEventListener('click', () => {
  if (typeof LanguageManager !== 'undefined') {
    LanguageManager.toggle();

    // Update button text
    const btn = document.getElementById('lang-toggle');
    if (btn) {
      btn.querySelector('span').textContent = LanguageManager.currentLang === 'en' ? 'AR' : 'EN';
    }

    // Update RTL
    document.documentElement.dir = LanguageManager.currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = LanguageManager.currentLang;

    // Re-render all dynamic content
    Experience.init();
    Skills.init();
    Testimonials.init();
    Certificates.init();
    Portfolio.init();
    About.init();
    if (typeof Motion !== 'undefined') Motion.refresh();

  }
});


/* ============================================
   DEBUG - Log when script loads
   ============================================ */
console.log('Modern.js loaded');
console.log('portfolioData available:', typeof portfolioData !== 'undefined');
console.log('LanguageManager available:', typeof LanguageManager !== 'undefined');
if (typeof portfolioData !== 'undefined') {
  console.log('portfolioData.skills count:', portfolioData.skills?.length || 0);
  console.log('portfolioData.softSkills count:', portfolioData.softSkills?.length || 0);
  console.log('portfolioData.references count:', portfolioData.references?.length || 0);
}
if (typeof LanguageManager !== 'undefined' && LanguageManager.t) {
  console.log('Current language:', LanguageManager.currentLang);
  console.log('Training items count:', LanguageManager.t.training?.items?.length || 0);
  console.log('References items count:', LanguageManager.t.references?.items?.length || 0);
}


/* ============================================
   AMBIENT FIELD, ARCHITECTURE STACK, REVEALS
   Ported from design-demo.html. One requestAnimationFrame loop drives the
   parallax, both glows and the stack — never the scroll event directly.
   ============================================ */
const Motion = {
  reduce: false,

  init() {
    this.reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.buildField();
    this.stack();
    // reveals are armed by Motion.arm() once the renderers have run
    if (this.reduce) {
      // no loop under reduced motion, so nav still needs its own listener
      addEventListener('scroll', () => {
        if (typeof Navigation !== 'undefined' && Navigation.navbar) {
          Navigation.handleScroll();
          Navigation.updateActiveLink();
        }
      }, { passive: true });
      return;
    }
    this.loop();
  },

  // scroll target, eased toward in the loop
  y: 0,
  target: 0,
  spread: 0,
  tSpread: 0,
  rx: -16,
  ry: -24,

  buildField() {
    const f = document.getElementById('field');
    if (!f) return;
    const shapes = [
      { d: 'M10 40 H70 L90 20 H150', w: 160, h: 60 },
      { d: 'M0 30 H40 L60 10 V0 M60 10 H120', w: 130, h: 40 },
      { d: 'M20 0 V30 H70 V70', w: 90, h: 80 }
    ];
    const ns = 'http://www.w3.org/2000/svg';
    for (let i = 0; i < 16; i++) {
      const depth = (i % 3) + 1;
      const s = shapes[i % 3];
      const svg = document.createElementNS(ns, 'svg');
      svg.setAttribute('width', s.w);
      svg.setAttribute('height', s.h);
      svg.setAttribute('viewBox', `0 0 ${s.w} ${s.h}`);
      svg.setAttribute('aria-hidden', 'true');
      const p = document.createElementNS(ns, 'path');
      p.setAttribute('d', s.d);
      p.setAttribute('stroke', i % 5 === 0 ? 'rgba(233,169,77,.4)' : 'rgba(62,217,196,.34)');
      p.setAttribute('stroke-width', '1');
      p.setAttribute('fill', 'none');
      svg.appendChild(p);
      const c = document.createElementNS(ns, 'circle');
      c.setAttribute('cx', '10');
      c.setAttribute('cy', s.h / 2 | 0);
      c.setAttribute('r', '2.5');
      c.setAttribute('fill', i % 5 === 0 ? 'rgba(233,169,77,.6)' : 'rgba(62,217,196,.55)');
      svg.appendChild(c);
      // deterministic scatter so the prerendered and live pages agree
      svg.style.left = ((i * 37) % 100) + '%';
      svg.style.top = ((i * 61) % 260) + '%';
      svg.style.opacity = (0.16 + depth * 0.09).toFixed(2);
      svg.dataset.depth = depth;
      f.appendChild(svg);
    }
    this.fieldEls = [...f.querySelectorAll('svg')];
    this.glowA = document.querySelector('.glow.a');
    this.glowB = document.querySelector('.glow.b');
  },

  // geometry: a shallower tilt and a wider gap so all four layers read as
  // four, with each layer's label and technology line fully clear of the one above
  // Y and Z steps are independent. They must be: the stack's own rotateX(rx)
  // maps a layer centre to y_screen = dy*cos|rx| - dz_gap*sin|rx|, so depth
  // SUBTRACTS from vertical offset. Coupling them (the earlier bug) collapsed
  // four layers into a smear. Y is sized to clear the label+name band (~49px
  // projected); Z stays small and only supplies the depth cue.
  STEP_Y: 108,      // on-screen vertical step between layers, px
  STEP_Z: 46,       // depth step, px
  SPREAD_Y: 26,     // extra vertical opening on scroll
  SPREAD_Z: 34,     // extra depth opening on scroll
  TILT: 42,         // per-layer rotateX, was 58 — less flattened
  BASE_RX: -12,     // stack tilt; shallower than -16 to reduce the subtraction

  stack() {
    this.stackEl = document.getElementById('stack');
    if (!this.stackEl) return;
    this.layers = [...this.stackEl.querySelectorAll('.layer')];
    this.stage = this.stackEl.parentElement;
    this.conns = document.getElementById('conns');
    this.buildRisers();

    // RTL mirrors the tilt so depth still recedes away from the reading edge
    const rtl = document.documentElement.dir === 'rtl';
    this.baseRy = rtl ? 24 : -24;
    this.ry = this.baseRy;
    this.rx = this.BASE_RX;

    if (this.reduce) { this.spread = 0.6; this.place(); return; }

    addEventListener('scroll', () => { this.target = scrollY; }, { passive: true });
    addEventListener('mousemove', e => {
      const cx = innerWidth / 2, cy = innerHeight / 2;
      this.ry = this.baseRy + ((e.clientX - cx) / cx) * 13;
      this.rx = this.BASE_RX - ((e.clientY - cy) / cy) * 7;
    }, { passive: true });
  },

  // one riser per adjacent pair of layers
  buildRisers() {
    if (!this.stackEl) return;
    this.stackEl.querySelectorAll('.conn-riser').forEach(el => el.remove());
    this.risers = [];
    for (let i = 0; i < this.layers.length - 1; i++) {
      const r = document.createElement('div');
      r.className = 'conn-riser';
      // sibling of .layer, so the shared preserve-3d context depth-sorts them
      this.stackEl.appendChild(r);
      this.risers.push(r);
    }
  },

  place() {
    if (!this.layers) return;
    const dy = this.STEP_Y + this.spread * this.SPREAD_Y;
    const dz = this.STEP_Z + this.spread * this.SPREAD_Z;
    const tilt = this.TILT - this.spread * 6;
    const n = this.layers.length;

    this.layers.forEach((l, i) => {
      l.style.transform =
        `translate3d(0,${(i - (n - 1) / 2) * dy}px,${-(i - (n - 1) / 2) * dz}px) rotateX(${tilt}deg)`;
      // fully opaque: a translucent layer lets the one behind print through its
      // text, which reads as a rendering fault rather than depth
      l.style.opacity = '1';
    });

    // one riser per pair, anchored at the upper layer's centre and pointing at
    // the next centre. Direction in stack space is (dy, -dz).
    if (this.risers) {
      const len = Math.hypot(dy, dz);
      const deg = Math.atan2(-dz, dy) * 180 / Math.PI;
      this.risers.forEach((r, i) => {
        const y = (i - (n - 1) / 2) * dy;
        const z = -(i - (n - 1) / 2) * dz;
        r.style.height = len + 'px';
        r.style.transform = `translate3d(0,${y}px,${z}px) rotateX(${deg}deg)`;
      });
    }

    this.stackEl.style.transform = `rotateX(${this.rx}deg) rotateY(${this.ry}deg)`;
  },

  loop() {
    const step = () => {
      // one loop: field parallax, both glows, and the stack
      this.y += (this.target - this.y) * 0.08;

      if (this.fieldEls) {
        for (const el of this.fieldEls) {
          el.style.transform = `translate3d(0,${-this.y * (0.05 * +el.dataset.depth)}px,0)`;
        }
      }
      if (this.glowA) this.glowA.style.transform = `translate3d(0,${this.y * 0.12}px,0)`;
      if (this.glowB) this.glowB.style.transform = `translate3d(0,${-this.y * 0.08}px,0)`;

      // nav state rides the same frame instead of its own scroll listeners
      if (typeof Navigation !== 'undefined' && Navigation.navbar) {
        Navigation.handleScroll();
        Navigation.updateActiveLink();
      }

      if (this.stage) {
        const r = this.stage.getBoundingClientRect();
        this.tSpread = Math.min(1, Math.max(0, (innerHeight * 0.9 - r.top) / (innerHeight * 0.9)));
        this.spread += (this.tSpread - this.spread) * 0.07;
        this.place();
      }
      requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  },

  // Safe to call repeatedly: anything already revealed is skipped, and a fresh
  // observer is created so nodes replaced by a re-render get picked up.
  reveals() {
    const els = [...document.querySelectorAll('.rv:not(.in)')];
    if (!els.length) return;
    if (this.reduce) { els.forEach(e => e.classList.add('in')); return; }

    if (this.io) this.io.disconnect();
    this.io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); this.io.unobserve(e.target); }
      });
    }, { threshold: .12 });

    els.forEach((el, i) => {
      el.style.transitionDelay = (Math.min(i, 6) * 55) + 'ms';
      this.io.observe(el);
    });
  },

  // called once the renderers have produced their markup, and again after any
  // language switch replaces it
  arm() {
    this.reveals();
    this.stack();
    this.place();
  },

  refresh() { this.arm(); }
};
