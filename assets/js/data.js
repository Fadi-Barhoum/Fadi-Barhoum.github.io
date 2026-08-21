// ============================================
// PORTFOLIO DATA - Static assets only (images, URLs, icons)
// All translatable text is in lang.js
// ============================================

const portfolioData = {

  // ==========================================
  // PROFILE - Static assets only
  // ==========================================
  profile: {
    image: "assets/img/profile-img.jpg",
    favicon: "assets/img/favicon.svg",
    appleTouchIcon: "assets/img/profile-img.jpg",
    cvFile: "assets/cv/Fadi_Barhoum_CV.pdf"
  },

  // ==========================================
  // SOCIAL LINKS - URLs and icons
  // ==========================================
  socialLinks: [
    { key: "linkedin", url: "https://www.linkedin.com/in/fadi-barhoum/", icon: "bx bxl-linkedin", class: "linkedin" },
    { key: "github", url: "https://github.com/Fadi-Barhoum", icon: "bx bxl-github", class: "github" },
    { key: "email", url: "mailto:en.fadi.barhoum@gmail.com", icon: "bx bxl-gmail", class: "email" },
    { key: "phone", url: "tel:+971507704776", icon: "bx bx-phone-call", class: "phone" },
    { key: "whatsapp", url: "https://wa.me/971507704776", icon: "bx bxl-whatsapp", class: "whatsapp" }
  ],

  // ==========================================
  // NAVIGATION - IDs and icons only
  // ==========================================
  navigation: [
    { id: "hero", icon: "bx bx-home" },
    { id: "about", icon: "bx bx-user" },
    { id: "resume", icon: "bx bx-file-blank" },
    { id: "training_certificates", icon: "bx bxs-award" },
    { id: "portfolio", icon: "bx bx-book-content" },
    { id: "github", icon: "bx bxl-github" },
    { id: "testimonials", icon: "bx bx-server" },
    { id: "contact", icon: "bx bx-envelope" }
  ],

  // ==========================================
  // TECHNICAL SKILLS - grouped. Rendered as typographic lists, no icons.
  // ==========================================
  skillGroups: [
    {
      group: "backend",
      skills: [
        { key: "C#" },
        { key: "ASP.NET Core" },
        { key: ".NET 8" },
        { key: "Web API" },
        { key: "Entity Framework Core" },
        { key: "PHP" },
        { key: "Laravel" }
      ]
    },
    {
      group: "frontend",
      skills: [
        { key: "React" },
        { key: "TypeScript" },
        { key: "JavaScript" },
        { key: "Vite" },
        { key: "Tailwind CSS" },
        { key: "HTML" },
        { key: "CSS" },
        { key: "Bootstrap" },
        { key: "RTL / Bilingual UI" }
      ]
    },
    {
      group: "database",
      skills: [
        { key: "SQL Server" },
        { key: "T-SQL" },
        { key: "MySQL" },
        { key: "Database Design" }
      ]
    },
    {
      group: "integration",
      skills: [
        { key: "REST APIs" },
        { key: "OAuth 2.0" },
        { key: "OpenID Connect" },
        { key: "JWT" },
        { key: "SSO" },
        { key: "LDAP / Active Directory" },
        { key: "Azure OpenAI" }
      ]
    },
    {
      group: "tools",
      skills: [
        { key: "Git" },
        { key: "IIS" },
        { key: "Windows Server" },
        { key: "Swagger" },
        { key: "Azure" },
        { key: "AWS" }
      ]
    },
    {
      group: "cms",
      skills: [
        { key: "Sitecore" },
        { key: "WordPress" }
      ]
    }
  ],

  // ==========================================
  // SOFT SKILLS - names only
  // ==========================================
  softSkills: [
    { key: "Time Management" },
    { key: "Teamwork" },
    { key: "Leadership" },
    { key: "Problem Solving" },
    { key: "Creativity" }
  ],

  // ==========================================
  // EDUCATION - Links only (text in lang.js)
  // ==========================================
  education: [
    { link: "https://damascusuniversity.edu.sy/ite/" },
    { link: null }
  ],

  // ==========================================
  // EXPERIENCE - Links only (text in lang.js)
  // ==========================================
  experience: [
    { link: null },
    { link: "https://elitewherego.com/" },
    { link: null },
    { link: "https://www.facebook.com/Masar2018" },
    { link: "https://cssd-ngos.org/" }
  ],

  // ==========================================
  // ACTIVITIES - Links only (text in lang.js)
  // ==========================================
  activities: [
    { link: null },
    { link: null },
    { link: "https://gopaderd.org/en/" },
    { link: "https://cssd-ngos.org/" }
  ],

  // ==========================================
  // CERTIFICATES - category + link (titles/dates in lang.js).
  // category lives here, not derived from the title, so it works in every language.
  // ==========================================
  certificates: [
    { category: "tech", link: "https://coursera.org/share/1988d1bc1755847439d006f8a4afc9cb" },
    { category: "language", link: "https://www.facebook.com/profile.php?id=100064771954240" },
    { category: "tech", link: "https://www.undp.org/" },
    { category: "humanitarian", link: "https://fdcd.org/" },
    { category: "humanitarian", link: "https://fdcd.org/" },
    { category: "humanitarian", link: "https://fdcd.org/" },
    { category: "skills", link: "https://www.undp.org/" },
    { category: "skills", link: "https://www.undp.org/" },
    { category: "humanitarian", link: "https://fdcd.org/" },
    { category: "humanitarian", link: "https://fdcd.org/" },
    { category: "language", link: "https://linguaphone.co.uk/" },
    { category: "humanitarian", link: "https://cssd-ngos.org/" },
    { category: "humanitarian", link: "https://cssd-ngos.org/" },
    { category: "humanitarian", link: "https://www.mecc.org/" },
    { category: "humanitarian", link: "https://www.sebcsyria.com/" },
    { category: "humanitarian", link: "https://cssd-ngos.org/" },
    { category: "skills", link: "http://www.ichc.info/" },
    { category: "skills", link: "http://www.ichc.info/" },
    { category: "skills", link: "https://www.sebcsyria.com/" },
    { category: "tech", link: "https://www.newhorizons.com/" }
  ],

  // ==========================================
  // PORTFOLIO - ids, category, link. No imagery (see assets/_unused/README.md)
  // ==========================================
  portfolio: [
    { id: "zerox", category: "enterprise", featured: true, link: null },
    { id: "impact7s", category: "enterprise", featured: true, link: null },
    { id: "impactspcx", category: "enterprise", featured: true, link: null },
    { id: "impactst", category: "enterprise", featured: true, link: null },
    { id: "impactls", category: "enterprise", featured: true, link: null },
    { id: "impactms", category: "enterprise", featured: true, link: null },
    { id: "ivari", category: "webapp", featured: true, link: "https://ivarihair.com" },
    { id: "marmusa", category: "webapp", featured: true, link: null },
    { id: "rihlaty-dashboard", category: "webapp", featured: false, link: null },
    { id: "ssdf", category: "webapp", featured: false, link: null },
    { id: "nujoud-express", category: "webapp", featured: false, link: null },
    { id: "blue-bus", category: "webapp", featured: false, link: "https://bluebus.sy/" },
    { id: "clay-design", category: "webapp", featured: false, link: "https://claydesign.ae/" },
    { id: "3nab-cafe", category: "webapp", featured: false, link: "https://3nab.cafe/" },
    { id: "elite-wherego", category: "webapp", featured: false, link: "https://elitewherego.com/" },
    { id: "rihlaty", category: "website", featured: false, link: "https://rihlaty.com/" },
    { id: "cssd", category: "website", featured: false, link: "https://cssd-ngos.org/" },
    { id: "yawna", category: "website", featured: false, link: "https://yawna.org/" },
    { id: "aplus-restaurant", category: "website", featured: false, link: null },
    { id: "jory-cafe", category: "website", featured: false, link: null },
    { id: "casa-cafe", category: "website", featured: false, link: null },
    { id: "safe-gate-group", category: "website", featured: false, link: "https://safegategroup.com/" },
    { id: "hml-steel", category: "website", featured: false, link: "https://hmlsteelcontracting.com/" },
    { id: "bin-lahej", category: "website", featured: false, link: "https://binlahejcontracting.com/" }
  ],

  // ==========================================
  // GITHUB PROJECTS - id + repo link
  // ==========================================
  githubProjects: [
    { id: "chat-app", github: "https://github.com/Fadi-Barhoum/Real-time-Chat-App" },
    { id: "images-generator", github: "https://github.com/Fadi-Barhoum/Images-Generator" }
  ],

  // ==========================================
  // REFERENCES - initials for the ruled boxes. No photos, no contact details.
  // ==========================================
  references: [
    { initials: "MR" },
    { initials: "NK" },
    { initials: "TA" },
    { initials: "FM" },
    { initials: "DA" },
    { initials: "RW" }
  ]

};
