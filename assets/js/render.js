// ============================================
// RENDER FUNCTIONS - Build HTML from Data & Translations
// data.js = static assets (images, URLs, icons)
// lang.js = all translatable text
// ============================================

const Renderer = {

  // ==========================================
  // NAVIGATION
  // ==========================================
  renderNavigation() {
    const nav = document.querySelector('#navbar ul');
    if (!nav) return;

    const t = LanguageManager.t;
    const navKeys = ['home', 'about', 'resume', 'training', 'portfolio', 'github', 'references', 'contact'];

    nav.innerHTML = portfolioData.navigation.map((item, index) => `
      <li>
        <a href="#${item.id}" class="nav-link scrollto${index === 0 ? ' active' : ''}">
          <i class="${item.icon}"></i> <span>${t.nav[navKeys[index]]}</span>
        </a>
      </li>
    `).join('');
  },

  // ==========================================
  // HEADER PROFILE
  // ==========================================
  renderHeaderProfile() {
    const profileContainer = document.querySelector('#header .profile');
    if (!profileContainer) return;

    const data = portfolioData.profile;
    const socialLinks = portfolioData.socialLinks;
    const t = LanguageManager.t;

    profileContainer.innerHTML = `
      <img src="${data.image}" alt="" class="img-fluid rounded-circle">
      <h1 class="text-light"><a href="index.html">${t.profile.name}</a></h1>
      <div class="social-links mt-3 text-center">
        ${socialLinks.slice(0, 4).map(link => `
          <a href="${link.url}" class="${link.class}" title="${t.socialLinks[link.key] || link.key}" target="_blank">
            <i class="${link.icon}"></i>
          </a>
        `).join('')}
        <a href="${data.cvFile}" class="download" title="${t.contact.downloadCV}" download="">
          <i class="bx bx-download"></i>
        </a>
      </div>
    `;
  },

  // ==========================================
  // HERO SECTION
  // ==========================================
  renderHero() {
    const heroContainer = document.querySelector('#hero .hero-container');
    if (!heroContainer) return;

    const t = LanguageManager.t;
    const typedItems = t.hero.typedItems.join(', ');

    // Keep the clock, just update the text
    const clockHTML = heroContainer.querySelector('.clock')?.outerHTML || '';

    heroContainer.innerHTML = `
      <h1>${t.profile.name}</h1>
      <p><span class="typed" data-typed-items="${typedItems}"></span></p>
      ${clockHTML}
    `;

    // Re-initialize typed.js
    this.initTyped();

    // Re-initialize clock
    this.initClock();
  },

  // ==========================================
  // ABOUT SECTION
  // ==========================================
  renderAbout() {
    const aboutSection = document.querySelector('#about');
    if (!aboutSection) return;

    const profile = portfolioData.profile;
    const t = LanguageManager.t;

    aboutSection.innerHTML = `
      <div class="container">
        <div class="section-title">
          <h2>${t.about.title}</h2>
        </div>
        <div class="row align-items-center">
          <div class="col-lg-4 text-center" data-aos="fade-right">
            <img src="${profile.image}" class="img-fluid rounded-circle shadow" alt="Profile Image" />
          </div>
          <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3 class="job-title">${t.about.jobTitle}</h3>
            <p class="fst-italic intro">${t.about.intro}</p>
            <div class="row about-details">
              <div class="col-md-6">
                <ul>
                  <li><strong>${t.about.labels.birthday}:</strong> <span>${t.about.details.birthday}</span></li>
                  <li><strong>${t.about.labels.nationality}:</strong> <span>${t.about.details.nationality}</span></li>
                  <li><strong>${t.about.labels.location}:</strong> <span>${t.about.details.location}</span></li>
                </ul>
              </div>
              <div class="col-md-6">
                <ul>
                  <li><strong>${t.about.labels.phone}:</strong> <span>${t.about.details.phone}</span></li>
                  <li><strong>${t.about.labels.email}:</strong> <span>${t.about.details.email}</span></li>
                </ul>
              </div>
            </div>
            <p class="bio">${t.about.bio}</p>
          </div>
        </div>
      </div>
    `;
  },

  // ==========================================
  // SKILLS SECTION
  // ==========================================
  renderSkills() {
    const skillsSection = document.querySelector('#skills');
    if (!skillsSection) return;

    const skills = portfolioData.skills;
    const t = LanguageManager.t;

    skillsSection.innerHTML = `
      <div class="container">
        <div class="section-title">
          <h2>${t.skills.title}</h2>
        </div>
        <div class="skills-grid">
          ${skills.map(skill => `
            <div class="skill-card">
              <img src="${skill.image}" alt="${skill.key}">
              <h6>${skill.key}</h6>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  // ==========================================
  // SOFT SKILLS SECTION
  // ==========================================
  renderSoftSkills() {
    const softSkillsSection = document.querySelector('#soft-skills');
    if (!softSkillsSection) return;

    const softSkills = portfolioData.softSkills;
    const t = LanguageManager.t;

    softSkillsSection.innerHTML = `
      <div class="container">
        <div class="section-title">
          <h2>${t.skills.softTitle}</h2>
        </div>
        <div class="skills-grid">
          ${softSkills.map(skill => `
            <div class="skill-card">
              <img src="${skill.image}" alt="${skill.key}">
              <h6>${skill.key}</h6>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  // ==========================================
  // RESUME SECTION
  // ==========================================
  renderResume() {
    const resumeSection = document.querySelector('#resume');
    if (!resumeSection) return;

    const t = LanguageManager.t;
    const dataLinks = {
      education: portfolioData.education,
      experience: portfolioData.experience,
      activities: portfolioData.activities
    };

    resumeSection.innerHTML = `
      <div class="container">
        <div class="section-title">
          <h2>${t.resume.title}</h2>
        </div>
        <div class="row">
          <div class="col-lg-6" data-aos="fade-up">
            <h3 class="resume-title">${t.resume.education}</h3>
            ${t.resume.educationItems.map((edu, index) => `
              <div class="resume-item">
                <h4>${edu.title}</h4>
                <h5>${edu.period}</h5>
                <p><em>${edu.institution}</em>
                  ${dataLinks.education[index]?.link ? `<a href="${dataLinks.education[index].link}" class="external" target="_blank"><i class="bx bx-link-external"></i></a>` : ''}
                </p>
              </div>
            `).join('')}

            <h3 class="resume-title">${t.resume.experience}</h3>
            ${t.resume.experienceItems.map((exp, index) => `
              <div class="resume-item">
                <h4>${exp.title}</h4>
                <h5>${exp.period}</h5>
                <p><em>${exp.company}</em>
                  ${dataLinks.experience[index]?.link ? `<a href="${dataLinks.experience[index].link}" class="external" target="_blank"><i class="bx bx-link-external"></i></a>` : ''}
                </p>
                <ul>
                  ${exp.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                </ul>
              </div>
            `).join('')}
          </div>

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 class="resume-title">${t.resume.activities}</h3>
            ${t.resume.activitiesItems.map((act, index) => `
              <div class="resume-item">
                <h4>${act.title}</h4>
                <h5>${act.period}</h5>
                <p><em>${act.organization}</em>
                  ${dataLinks.activities[index]?.link ? `<a href="${dataLinks.activities[index].link}" class="external" target="_blank"><i class="bx bx-link-external"></i></a>` : ''}
                </p>
                ${act.roles ? `
                  <ul>
                    ${act.roles.map(role => `
                      <li>${role.role} (${role.period})</li>
                      <ul>
                        ${role.tasks.map(task => `<li>${task}</li>`).join('')}
                      </ul>
                    `).join('')}
                  </ul>
                ` : `
                  <ul>
                    ${act.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                  </ul>
                `}
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  },

  // ==========================================
  // TRAINING & CERTIFICATES SECTION
  // ==========================================
  renderCertificates() {
    const certSection = document.querySelector('#training_certificates');
    if (!certSection) return;

    const t = LanguageManager.t;
    const certificates = t.training.items;
    const dataLinks = portfolioData.certificates;
    const half = Math.ceil(certificates.length / 2);

    certSection.innerHTML = `
      <div class="container">
        <div class="section-title">
          <h2>${t.training.title}</h2>
        </div>
        <div class="row">
          <div class="col-lg-6" data-aos="fade-up">
            ${certificates.slice(0, half).map((cert, index) => `
              <div class="resume-item">
                <h4>${cert.title}</h4>
                <h5>${cert.date}</h5>
                <p>
                  <em>${cert.institution}</em>
                  <a href="${dataLinks[index]?.link || '#'}" class="external" target="_blank"><i class="bx bx-link-external"></i></a>
                </p>
              </div>
            `).join('')}
          </div>
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            ${certificates.slice(half).map((cert, index) => `
              <div class="resume-item">
                <h4>${cert.title}</h4>
                <h5>${cert.date}</h5>
                <p>
                  <em>${cert.institution}</em>
                  <a href="${dataLinks[half + index]?.link || '#'}" class="external" target="_blank"><i class="bx bx-link-external"></i></a>
                </p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  },

  // ==========================================
  // PORTFOLIO SECTION
  // ==========================================
  renderPortfolio() {
    const portfolioSection = document.querySelector('#portfolio');
    if (!portfolioSection) return;

    const projects = portfolioData.portfolio;
    const t = LanguageManager.t;

    portfolioSection.innerHTML = `
      <div class="container">
        <div class="section-title">
          <h2>${t.portfolio.title}</h2>
        </div>
        <div class="myportfolio-container">
          ${projects.map((project, index) => this.renderPortfolioItem(project, t.portfolio.items[index], t)).join('')}
        </div>
      </div>
    `;

    // Re-initialize lightbox
    this.initLightbox();
  },

  renderPortfolioItem(project, translatedProject, t) {
    let contentHTML = '';

    // Use translated content
    const content = translatedProject || {};

    // Handle different description formats
    if (content.headline) {
      contentHTML += `<h6>${content.headline}</h6>`;
    }

    if (content.features) {
      if (content.features.intro) {
        contentHTML += `${content.features.intro}<ul>`;
        content.features.items.forEach(item => {
          contentHTML += `<li><b>${item.bold}</b> ${item.text}</li>`;
        });
        contentHTML += `</ul>`;
      }
      if (content.features.owners) {
        contentHTML += `${t.common.ownersEnjoy}<ul>${content.features.owners.map(o => `<li>${o}</li>`).join('')}</ul>`;
        contentHTML += `${t.common.customersBenefit}<ul>${content.features.customers.map(c => `<li>${c}</li>`).join('')}</ul>`;
      }
      if (content.features.beneficiaries) {
        contentHTML += `${t.common.beneficiaries}<ul>${content.features.beneficiaries.map(b => `<li><b>${b.bold}</b> ${b.text}</li>`).join('')}</ul>`;
        contentHTML += `${t.common.admin}<ul>${content.features.admin.map(a => `<li><b>${a.bold}</b> ${a.text}</li>`).join('')}</ul>`;
        contentHTML += `${t.common.chairmanMembers}<ul>${content.features.chairman.map(c => `<li><b>${c.bold}</b> ${c.text}</li>`).join('')}</ul>`;
      }
    } else if (content.description) {
      contentHTML += `<ul>`;
      content.description.forEach(desc => {
        if (typeof desc === 'string') {
          contentHTML += `<li>${desc}</li>`;
        } else {
          contentHTML += `<li><b>${desc.bold}</b> ${desc.text}</li>`;
        }
      });
      contentHTML += `</ul>`;
    }

    // Gallery links (from data.js)
    let galleryHTML = '';
    if (project.gallery && project.gallery.length > 0) {
      galleryHTML = project.gallery.map((img, i) => `
        <a href="${img}" data-gallery="portfolioGallery" class="portfolio-lightbox"${i > 0 ? ' hidden' : ''}>
          <i class="bx bxs-file-gif"></i>
        </a>
      `).join('');
    } else if (project.gif) {
      galleryHTML = `<a href="${project.gif}" data-gallery="portfolioGallery" class="portfolio-lightbox"><i class="bx bxs-file-gif"></i></a>`;
    }

    // External link
    let linkHTML = '';
    if (project.link) {
      linkHTML = `<a href="${project.link}" target="_blank" title="${t.portfolio.viewSite}"><i class="bx bx-link-external"></i></a>`;
    } else {
      linkHTML = `<a target="_blank" title="${t.portfolio.notAvailable}"><i class="bx bx-unlink no-link"></i></a>`;
    }

    return `
      <div class="box">
        <img src="${project.logo}" class="no-bg" alt="${content.name || ''}">
        <div class="title">
          <span>${content.name || ''}</span>
        </div>
        <div class="contant">
          ${contentHTML}
          <div class="links">
            ${galleryHTML}
            ${linkHTML}
          </div>
        </div>
      </div>
    `;
  },

  // ==========================================
  // GITHUB PROJECTS SECTION
  // ==========================================
  renderGithubProjects() {
    const githubSection = document.querySelector('#github');
    if (!githubSection) return;

    const projects = portfolioData.githubProjects;
    const t = LanguageManager.t;

    githubSection.innerHTML = `
      <div class="container">
        <div class="section-title">
          <h2>${t.github.title}</h2>
        </div>
        <p>${t.github.intro}</p>
        <div class="myportfolio-container">
          ${projects.map((project, index) => {
            const translatedProject = t.github.items[index] || {};

            let galleryHTML = '';
            if (project.gallery && project.gallery.length > 0) {
              galleryHTML = project.gallery.map((img, i) => `
                <a href="${img}" data-gallery="portfolioGallery" class="portfolio-lightbox"${i > 0 ? ' hidden' : ''}>
                  <i class="bx bxs-file-gif"></i>
                </a>
              `).join('');
            } else {
              galleryHTML = `<a href="${project.image}" data-gallery="portfolioGallery" class="portfolio-lightbox"><i class="bx bxs-file-gif"></i></a>`;
            }

            return `
              <div class="box">
                <img src="${project.image}" alt="${translatedProject.name || ''}">
                <div class="title">
                  <span>${translatedProject.name || ''}</span>
                </div>
                <div class="contant">
                  <ul>
                    ${(translatedProject.description || []).map(desc => `<li>${desc}</li>`).join('')}
                  </ul>
                  <div class="links">
                    ${galleryHTML}
                    <a href="${project.github}" target="_blank" title="${t.github.viewCode}"><i class="bx bxl-github"></i></a>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;

    // Re-initialize lightbox
    this.initLightbox();
  },

  // ==========================================
  // REFERENCES SECTION
  // ==========================================
  renderReferences() {
    const refSection = document.querySelector('#testimonials');
    if (!refSection) return;

    const references = portfolioData.references;
    const t = LanguageManager.t;

    refSection.innerHTML = `
      <div class="container">
        <div class="section-title">
          <h2>${t.references.title}</h2>
        </div>
        <div class="testimonials-slider swiper">
          <div class="swiper-wrapper">
            ${references.map((ref, index) => {
              const translatedRef = t.references.items[index] || {};
              return `
                <div class="swiper-slide">
                  <div class="testimonial-item">
                    <img src="${ref.image}" alt="${translatedRef.name || ''}" class="testimonial-img">
                    <h3>${translatedRef.name || ''}</h3>
                    <h4>${translatedRef.position || ''}</h4>
                    <p><strong>${translatedRef.company || ''}</strong><br>${ref.phone}<br>${ref.email}</p>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    `;

    // Re-initialize swiper
    this.initSwiper();
  },

  // ==========================================
  // CONTACT SECTION
  // ==========================================
  renderContact() {
    const contactSection = document.querySelector('#contact');
    if (!contactSection) return;

    const socialLinks = portfolioData.socialLinks;
    const profile = portfolioData.profile;
    const t = LanguageManager.t;

    contactSection.innerHTML = `
      <div class="container">
        <div class="social">
          ${socialLinks.map(link => `
            <a href="${link.url}" class="${link.class}" title="${t.socialLinks[link.key] || link.key}" target="_blank">
              <i class="${link.icon}"></i>
            </a>
          `).join('')}
          <a href="${profile.cvFile}" class="download" title="${t.contact.downloadCV}" download="">
            <i class="bx bx-download"></i>
          </a>
        </div>
      </div>
    `;
  },

  // ==========================================
  // FOOTER
  // ==========================================
  renderFooter() {
    const footer = document.querySelector('#footer .container');
    if (!footer) return;

    const t = LanguageManager.t;
    const nameParts = t.profile.name.split(' ');

    footer.innerHTML = `
      <div class="copyright"><span>${nameParts[0]}</span> ${nameParts[1] || ''}</div>
      <div class="credits">${t.footer.title}</div>
    `;
  },

  // ==========================================
  // INITIALIZE THIRD-PARTY LIBRARIES
  // ==========================================
  initTyped() {
    const typed = document.querySelector('.typed');
    if (typed && typeof Typed !== 'undefined') {
      const typedItems = typed.getAttribute('data-typed-items').split(',').map(s => s.trim());
      new Typed('.typed', {
        strings: typedItems,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
      });
    }
  },

  initSwiper() {
    if (typeof Swiper !== 'undefined') {
      new Swiper('.testimonials-slider', {
        speed: 600,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        slidesPerView: 'auto',
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        }
      });
    }
  },

  initLightbox() {
    if (typeof GLightbox !== 'undefined') {
      GLightbox({
        selector: '.portfolio-lightbox'
      });
    }
  },

  initAOS() {
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }
  },

  initClock() {
    const hr = document.querySelector('#hr');
    const mn = document.querySelector('#mn');
    const sc = document.querySelector('#sc');

    if (hr && mn && sc) {
      // Clear any existing clock interval
      if (this.clockInterval) {
        clearInterval(this.clockInterval);
      }

      // Start new clock interval
      this.clockInterval = setInterval(() => {
        const day = new Date();
        const hh = day.getHours() * 30;
        const mm = day.getMinutes() * 6;
        const ss = day.getSeconds() * 6;

        hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
        mn.style.transform = `rotateZ(${mm}deg)`;
        sc.style.transform = `rotateZ(${ss}deg)`;
      }, 1000);

      // Run once immediately
      const day = new Date();
      const hh = day.getHours() * 30;
      const mm = day.getMinutes() * 6;
      const ss = day.getSeconds() * 6;

      hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
      mn.style.transform = `rotateZ(${mm}deg)`;
      sc.style.transform = `rotateZ(${ss}deg)`;
    }
  }
};

// ==========================================
// RENDER ALL SECTIONS
// ==========================================
function renderAll() {
  Renderer.renderNavigation();
  Renderer.renderHeaderProfile();
  Renderer.renderHero();
  Renderer.renderAbout();
  Renderer.renderSkills();
  Renderer.renderSoftSkills();
  Renderer.renderResume();
  Renderer.renderCertificates();
  Renderer.renderPortfolio();
  Renderer.renderGithubProjects();
  Renderer.renderReferences();
  Renderer.renderContact();
  Renderer.renderFooter();

  // Re-initialize AOS after rendering
  Renderer.initAOS();
}

// ==========================================
// INITIALIZE ON DOM LOAD
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
  // Initialize language manager
  LanguageManager.init();

  // Render all sections
  renderAll();
});
