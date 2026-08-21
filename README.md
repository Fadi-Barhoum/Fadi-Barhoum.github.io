# Fadi Barhoum

**IT Consultant & Senior Full Stack Developer** — Dubai, United Arab Emirates

I build enterprise platforms for UAE government and private sector organisations:
bilingual systems for service assessment, process management, strategic performance
and national identity integration.

- Portfolio — https://fadi-barhoum.github.io/
- LinkedIn — https://www.linkedin.com/in/fadi-barhoum/
- GitHub — https://github.com/Fadi-Barhoum
- Email — en.fadi.barhoum@gmail.com

## What I work with

| | |
|---|---|
| **Backend** | C#, ASP.NET Core, .NET 8, Web API, Entity Framework Core, PHP, Laravel |
| **Frontend** | React, TypeScript, JavaScript, Vite, Tailwind CSS, HTML, CSS, Bootstrap, RTL / bilingual UI |
| **Database** | SQL Server, T-SQL, MySQL, database design |
| **Integration** | REST APIs, OAuth 2.0, OpenID Connect, JWT, SSO, LDAP / Active Directory, Azure OpenAI |
| **Tools** | Git, IIS, Windows Server, Swagger, Azure, AWS |
| **CMS** | Sitecore, WordPress |

## Selected work

Enterprise platforms delivered for UAE government and private sector entities —
service excellence assessment, process and customer experience management, strategic
performance management, software licensing, and mystery shopping operations. Built on
ASP.NET Core with React and TypeScript, with full Arabic/English RTL support throughout.

Details, including web applications and websites, are on the portfolio site above.

---

# This repository

Source for the portfolio site at https://fadi-barhoum.github.io/

## Development

Static site — no dependencies, no framework. Open `index.html` to view it.

### Content

All content lives in two files:

| File | Holds |
|---|---|
| `assets/js/data.js` | images, links, ids, categories |
| `assets/js/lang.js` | every translatable string, EN and AR |

`assets/js/modern.js` renders those into the page.

### After editing content, re-run the pre-render

The projects, skills, experience and certificates are also written into
`index.html` as static HTML, so search engines and recruiter/ATS scrapers see
them without executing JavaScript. That static copy is generated:

```
node tools/prerender.js
```

Run it after **any** edit to `data.js` or `lang.js`, and commit the resulting
`index.html`. To verify it isn't stale (e.g. in CI):

```
node tools/prerender.js --check
```

The script runs the real renderers from `modern.js` against a small DOM shim, so
the static markup cannot drift from what the browser produces.
