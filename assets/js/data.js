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
  // TECHNICAL SKILLS - grouped; icon = devicon CDN url, local file, or null (text chip)
  // ==========================================
  skillGroups: [
    {
      group: "backend",
      skills: [
        { key: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@2.17.0/icons/csharp/csharp-original.svg" },
        { key: "ASP.NET Core", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@2.17.0/icons/dotnetcore/dotnetcore-original.svg" },
        { key: ".NET 8", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@2.17.0/icons/dot-net/dot-net-original.svg" },
        { key: "Web API", icon: null },
        { key: "Entity Framework Core", icon: null },
        { key: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@2.17.0/icons/php/php-original.svg" },
        { key: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@2.17.0/icons/laravel/laravel-original.svg" }
      ]
    },
    {
      group: "frontend",
      skills: [
        { key: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@2.17.0/icons/react/react-original.svg" },
        { key: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@2.17.0/icons/typescript/typescript-original.svg" },
        { key: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@2.17.0/icons/javascript/javascript-original.svg" },
        { key: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@2.17.0/icons/vitejs/vitejs-original.svg" },
        { key: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@2.17.0/icons/tailwindcss/tailwindcss-original.svg" },
        { key: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@2.17.0/icons/html5/html5-original.svg" },
        { key: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@2.17.0/icons/css3/css3-original.svg" },
        { key: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@2.17.0/icons/bootstrap/bootstrap-original.svg" },
        { key: "RTL / Bilingual UI", icon: null }
      ]
    },
    {
      group: "database",
      skills: [
        { key: "SQL Server", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@2.17.0/icons/microsoftsqlserver/microsoftsqlserver-original.svg" },
        { key: "T-SQL", icon: null },
        { key: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@2.17.0/icons/mysql/mysql-original.svg" },
        { key: "Database Design", icon: null }
      ]
    },
    {
      group: "integration",
      skills: [
        { key: "REST APIs", icon: "assets/img/skills/rest-api.png" },
        { key: "OAuth 2.0", icon: null },
        { key: "OpenID Connect", icon: null },
        { key: "JWT", icon: null },
        { key: "SSO", icon: null },
        { key: "LDAP / Active Directory", icon: null },
        { key: "Azure OpenAI", icon: null }
      ]
    },
    {
      group: "tools",
      skills: [
        { key: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@2.17.0/icons/git/git-original.svg" },
        { key: "IIS", icon: null },
        { key: "Windows Server", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@2.17.0/icons/windows8/windows8-original.svg" },
        { key: "Swagger", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@2.17.0/icons/swagger/swagger-original.svg" },
        { key: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@2.17.0/icons/azure/azure-original.svg" },
        { key: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@2.17.0/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" }
      ]
    },
    {
      group: "cms",
      skills: [
        { key: "Sitecore", icon: "assets/img/skills/sitecore.png" },
        { key: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@2.17.0/icons/wordpress/wordpress-original.svg" }
      ]
    }
  ],

  // ==========================================
  // SOFT SKILLS - Images only
  // ==========================================
  softSkills: [
    { key: "Time Management", image: "assets/img/skills/time-management.png" },
    { key: "Teamwork", image: "assets/img/skills/teamwork.png" },
    { key: "Leadership", image: "assets/img/skills/Leadership.png" },
    { key: "Problem Solving", image: "assets/img/skills/Problem-solving.png" },
    { key: "Creativity", image: "assets/img/skills/Creativity.png" }
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
  // PORTFOLIO - Images, gifs, links only
  // ==========================================
  portfolio: [
    { id: "zerox", category: "enterprise", featured: true, logo: "assets/img/portfolio/default.png", gif: null, link: null, gallery: null },
    { id: "impact7s", category: "enterprise", featured: true, logo: "assets/img/skills/7s.png", gif: null, link: null, gallery: null },
    { id: "impactspcx", category: "enterprise", featured: true, logo: "assets/img/skills/SPcx.png", gif: null, link: null, gallery: null },
    { id: "impactst", category: "enterprise", featured: true, logo: "assets/img/portfolio/default.png", gif: null, link: null, gallery: null },
    { id: "impactls", category: "enterprise", featured: true, logo: "assets/img/portfolio/default.png", gif: null, link: null, gallery: null },
    { id: "impactms", category: "enterprise", featured: true, logo: "assets/img/portfolio/default.png", gif: null, link: null, gallery: null },
    { id: "ivari", category: "webapp", featured: true, logo: "assets/img/portfolio/default.png", gif: null, link: "https://ivarihair.com", gallery: null },
    { id: "marmusa", category: "webapp", featured: true, logo: "assets/img/portfolio/Logos/marmusa.png", gif: null, link: null, gallery: null },
    { id: "rihlaty-dashboard", category: "webapp", featured: false, logo: "assets/img/portfolio/Logos/rihlaty.png", gif: null, link: null, gallery: null },
    // TODO: stack not confirmed - add builtWith for "ssdf" to lang.js (EN + AR)
    { id: "ssdf", category: "webapp", featured: false, logo: "assets/img/portfolio/Logos/ssdf.png", gif: "assets/img/portfolio/gifs/ssdf.gif", link: null, gallery: null },
    // TODO: stack not confirmed - add builtWith for "nujoud-express" to lang.js (EN + AR)
    {
      id: "nujoud-express",
      category: "webapp",
      featured: false,
      logo: "assets/img/portfolio/Logos/nojoud.png",
      gif: null,
      link: null,
      gallery: [
        "assets/img/portfolio/gifs/nujoud/admin.gif",
        "assets/img/portfolio/gifs/nujoud/customer.gif",
        "assets/img/portfolio/gifs/nujoud/finished.gif",
        "assets/img/portfolio/gifs/nujoud/old.gif",
        "assets/img/portfolio/gifs/nujoud/Reporters.PNG"
      ]
    },
    {
      id: "blue-bus",
      category: "webapp",
      featured: false,
      logo: "assets/img/portfolio/Logos/bluebus.png",
      gif: "assets/img/portfolio/gifs/bluebus.jpg",
      link: "https://bluebus.sy/",
      gallery: null
    },
    // TODO: stack not confirmed - add builtWith for "clay-design" to lang.js (EN + AR)
    // TODO: Clay Design logo missing - restore Logos/cd.png and swap this back off the placeholder
    { id: "clay-design", category: "webapp", featured: false, logo: "assets/img/portfolio/default.png", gif: null, link: "https://claydesign.ae/", gallery: null },
    {
      id: "3nab-cafe",
      category: "webapp",
      featured: false,
      logo: "assets/img/portfolio/Logos/3nab.png",
      gif: "assets/img/portfolio/gifs/3nab.jpg",
      link: "https://3nab.cafe/",
      gallery: null
    },
    {
      id: "elite-wherego",
      category: "webapp",
      featured: false,
      logo: "assets/img/portfolio/Logos/nelite.webp",
      gif: "assets/img/portfolio/gifs/elite.gif",
      link: "https://elitewherego.com/",
      gallery: null
    },
    { id: "rihlaty", category: "website", featured: false, logo: "assets/img/portfolio/Logos/rihlaty.png", gif: null, link: "https://rihlaty.com/", gallery: null },
    {
      id: "cssd",
      category: "website",
      featured: false,
      logo: "assets/img/portfolio/Logos/cssd.png",
      gif: "assets/img/portfolio/gifs/cssd.gif",
      link: "https://cssd-ngos.org/",
      gallery: null
    },
    {
      id: "yawna",
      category: "website",
      featured: false,
      logo: "assets/img/portfolio/Logos/yawna.png",
      gif: "assets/img/portfolio/gifs/yawna.gif",
      link: "https://yawna.org/",
      gallery: null
    },
    {
      id: "aplus-restaurant",
      category: "website",
      featured: false,
      logo: "assets/img/portfolio/Logos/aplus.png",
      gif: "assets/img/portfolio/gifs/aplus.gif",
      link: null,
      gallery: null
    },
    {
      id: "jory-cafe",
      category: "website",
      featured: false,
      logo: "assets/img/portfolio/Logos/jory.png",
      gif: "assets/img/portfolio/gifs/jory.gif",
      link: null,
      gallery: null
    },
    {
      id: "casa-cafe",
      category: "website",
      featured: false,
      logo: "assets/img/portfolio/Logos/casacafe.png",
      gif: "assets/img/portfolio/gifs/casacafe.gif",
      link: null,
      gallery: null
    },
    {
      id: "safe-gate-group",
      category: "website",
      featured: false,
      logo: "assets/img/portfolio/Logos/sgg.png",
      gif: null,
      link: "https://safegategroup.com/",
      gallery: null
    },
    {
      id: "hml-steel",
      category: "website",
      featured: false,
      logo: "assets/img/portfolio/Logos/hml.png",
      gif: null,
      link: "https://hmlsteelcontracting.com/",
      gallery: null
    },
    {
      id: "bin-lahej",
      category: "website",
      featured: false,
      logo: "assets/img/portfolio/Logos/bin.png",
      gif: null,
      link: "https://binlahejcontracting.com/",
      gallery: null
    }
  ],

  // ==========================================
  // GITHUB PROJECTS - Images, links only
  // ==========================================
  githubProjects: [
    {
      id: "chat-app",
      image: "assets/img/portfolio/Github/Chat-app/app-image.png",
      github: "https://github.com/Fadi-Barhoum/Real-time-Chat-App",
      gallery: [
        "assets/img/portfolio/Github/Chat-app/signin.PNG",
        "assets/img/portfolio/Github/Chat-app/login.PNG",
        "assets/img/portfolio/Github/Chat-app/chat.PNG",
        "assets/img/portfolio/Github/Chat-app/users.PNG",
        "assets/img/portfolio/Github/Chat-app/search.PNG"
      ]
    },
    { id: "images-generator", image: "assets/img/portfolio/Github/Image-Generator.PNG", github: "https://github.com/Fadi-Barhoum/Images-Generator", gallery: null }
  ],

  // ==========================================
  // REFERENCES - Photos only (contact details deliberately not published)
  // ==========================================
  references: [
    { image: "assets/img/ref/majd.jpg" },
    { image: "assets/img/ref/nour.jpg" },
    { image: "assets/img/ref/tarek.jpg" },
    { image: "assets/img/ref/fridy.jpg" },
    { image: "assets/img/ref/diab.jpg" },
    { image: "assets/img/ref/rimon.jpg" }
  ]

};
