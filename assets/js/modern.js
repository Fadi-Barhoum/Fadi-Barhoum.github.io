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
  console.log('Initializing modules...');
  Loader.init();
  Cursor.init();
  Navigation.init();
  Theme.init();
  About.init();
  TypeWriter.init();
  Tabs.init();
  Experience.init();
  Portfolio.init();
  Skills.init();
  Testimonials.init();
  Certificates.init();
  Modals.init();
  ScrollEffects.init();
  Form.init();
  console.log('All modules initialized');

  // Initialize AOS with mobile optimization
  if (typeof AOS !== 'undefined') {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    AOS.init({
      duration: isMobile ? 400 : 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: isMobile ? 50 : 100,
      disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches
    });
    console.log('AOS initialized');
  }
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
   LOADER
   ============================================ */
const Loader = {
  init() {
    const loader = document.querySelector('.loader');
    if (!loader) return;

    // Hide loader after page loads
    setTimeout(() => {
      loader.classList.add('hidden');
      document.body.style.overflow = 'visible';
    }, 800);
  }
};

/* ============================================
   CUSTOM CURSOR
   ============================================ */
const Cursor = {
  init() {
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');

    if (!cursor || !follower) return;

    // Check if device supports hover (not touch)
    if (window.matchMedia('(hover: none)').matches) {
      cursor.style.display = 'none';
      follower.style.display = 'none';
      return;
    }

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let followerX = 0, followerY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    const animate = () => {
      // Cursor follows immediately
      cursorX += (mouseX - cursorX) * 0.2;
      cursorY += (mouseY - cursorY) * 0.2;
      cursor.style.left = cursorX + 'px';
      cursor.style.top = cursorY + 'px';

      // Follower has delay
      followerX += (mouseX - followerX) * 0.1;
      followerY += (mouseY - followerY) * 0.1;
      follower.style.left = followerX + 'px';
      follower.style.top = followerY + 'px';

      requestAnimationFrame(animate);
    };
    animate();

    // Hover effects
    const addHoverEffect = () => {
      const hoverElements = document.querySelectorAll('a, button, .portfolio-card, .skill-item');
      hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
          cursor.classList.add('hover');
          follower.classList.add('hover');
        });
        el.addEventListener('mouseleave', () => {
          cursor.classList.remove('hover');
          follower.classList.remove('hover');
        });
      });
    };
    addHoverEffect();

    // Re-add hover effects when DOM changes (debounced)
    let debounceTimer;
    const observer = new MutationObserver(() => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(addHoverEffect, 100);
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }
};

/* ============================================
   NAVIGATION
   ============================================ */
const Navigation = {
  init() {
    this.navbar = document.getElementById('navbar');
    this.navToggle = document.getElementById('nav-toggle');
    this.navMenu = document.getElementById('nav-menu');
    this.navOverlay = document.getElementById('nav-overlay');
    this.navLinks = document.querySelectorAll('.nav-link');

    if (!this.navbar) return;

    // Scroll effect
    window.addEventListener('scroll', () => this.handleScroll());
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

    // Active link on scroll
    window.addEventListener('scroll', () => this.updateActiveLink());
  },

  handleScroll() {
    if (window.scrollY > 100) {
      this.navbar.classList.add('scrolled');
    } else {
      this.navbar.classList.remove('scrolled');
    }

    // Back to top
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
      if (window.scrollY > 500) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }
  },

  toggleMobile() {
    this.navToggle.classList.toggle('active');
    this.navMenu.classList.toggle('active');
    this.navOverlay?.classList.toggle('active');
    document.body.style.overflow = this.navMenu.classList.contains('active') ? 'hidden' : '';
  },

  closeMobile() {
    this.navToggle?.classList.remove('active');
    this.navMenu?.classList.remove('active');
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
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
};

/* ============================================
   THEME TOGGLE
   ============================================ */
const Theme = {
  init() {
    this.toggle = document.getElementById('theme-toggle');
    this.icon = this.toggle?.querySelector('i');

    // Check saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    this.setTheme(savedTheme);

    if (this.toggle) {
      this.toggle.addEventListener('click', () => this.toggleTheme());
    }
  },

  setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    if (this.icon) {
      this.icon.className = theme === 'dark' ? 'bx bx-sun' : 'bx bx-moon';
    }
  },

  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
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

    // Update About section specific content
    const sectionTitle = document.querySelector('#about .section-title');
    if (sectionTitle) sectionTitle.textContent = lang.about?.title || 'About Me';

    // Update job title
    const aboutJobTitle = document.querySelector('#about .about-text h3');
    if (aboutJobTitle) aboutJobTitle.textContent = lang.about?.jobTitle || 'IT Consultant & Senior Full Stack Developer';

    // Update bio (single paragraph - the hero carries its own, shorter line)
    const aboutDesc = document.querySelectorAll('#about .about-description');
    if (aboutDesc.length > 0 && lang.about?.bio) {
      aboutDesc[0].textContent = lang.about.bio;
    }

    // Update info items
    if (lang.about?.labels && lang.about?.details) {
      const infoItems = document.querySelectorAll('#about .info-item');

      infoItems.forEach((item, index) => {
        const labelEl = item.querySelector('.info-label');
        const valueEl = item.querySelector('.info-value');

        if (labelEl && index === 0) {
          labelEl.textContent = LanguageManager.currentLang === 'ar' ? 'الاسم' : 'Name';
          if (valueEl) valueEl.textContent = lang.profile?.name || 'Fadi Barhoum';
        }
        if (labelEl && index === 1) {
          labelEl.textContent = lang.about?.labels?.location || 'Location';
          if (valueEl) valueEl.textContent = lang.about?.details?.location || 'Dubai, UAE';
        }
        if (labelEl && index === 2) {
          labelEl.textContent = lang.about?.labels?.email || 'Email';
          if (valueEl) valueEl.textContent = lang.about?.details?.email || 'en.fadi.barhoum@gmail.com';
        }
        if (labelEl && index === 3) {
          labelEl.textContent = lang.about?.labels?.phone || 'Phone';
          if (valueEl) valueEl.textContent = lang.about?.details?.phone || '+971 507 704 776';
        }
      });
    }

    // Update navigation
    this.updateNavigation(lang);

    // Update hero section
    this.updateHero(lang);

    // Update contact section
    this.updateContact(lang);
  },

  updateSectionTitles(lang) {
    // Skills section
    const skillsTitle = document.querySelector('#skills .section-title');
    if (skillsTitle) skillsTitle.textContent = lang.skills?.title || 'Skills & Expertise';

    // Experience section
    const expTitle = document.querySelector('#experience .section-title');
    if (expTitle) expTitle.textContent = lang.resume?.title || 'Experience & Education';

    // Update tab buttons
    const workTab = document.querySelector('[data-tab="work"] span');
    if (workTab) workTab.textContent = lang.resume?.experience || 'Work Experience';

    const eduTab = document.querySelector('[data-tab="education"] span');
    if (eduTab) eduTab.textContent = lang.resume?.education || 'Education';

    const actTab = document.querySelector('[data-tab="activities"] span');
    if (actTab) actTab.textContent = lang.resume?.activities || 'Activities';

    // Portfolio section
    const portfolioTitle = document.querySelector('#portfolio .section-title');
    if (portfolioTitle) portfolioTitle.textContent = lang.portfolio?.title || 'Featured Projects';

    // Certificates section
    const certsTitle = document.querySelector('#certificates .section-title');
    if (certsTitle) certsTitle.textContent = lang.training?.title || 'Certificates & Training';

    const certsSubtitle = document.querySelector('#certificates .section-subtitle');
    if (certsSubtitle) certsSubtitle.textContent = LanguageManager.currentLang === 'ar' ? 'الشهادات' : 'Credentials';

    const certsDesc = document.querySelector('#certificates .section-description');
    if (certsDesc) certsDesc.textContent = LanguageManager.currentLang === 'ar'
      ? 'التطوير المهني والشهادات التي تعزز خبرتي'
      : 'Professional development and certifications that enhance my expertise';

    // Certificates stats labels
    const statLabels = document.querySelectorAll('#certificates .stat-label');
    if (statLabels.length >= 3) {
      statLabels[0].textContent = lang.common?.totalCertificates || 'Total Certificates';
      statLabels[1].textContent = lang.common?.organizations || 'Organizations';
      statLabels[2].textContent = lang.common?.yearsOfLearning || 'Years of Learning';
    }

    // Certificates filter buttons
    const certFilterBtns = document.querySelectorAll('.cert-filter-btn');
    const filterLabels = {
      all: LanguageManager.currentLang === 'ar' ? 'الكل' : 'All',
      tech: LanguageManager.currentLang === 'ar' ? 'تقني' : 'Technical',
      humanitarian: LanguageManager.currentLang === 'ar' ? 'إنساني' : 'Humanitarian',
      language: LanguageManager.currentLang === 'ar' ? 'لغات' : 'Language',
      skills: LanguageManager.currentLang === 'ar' ? 'مهارات شخصية' : 'Soft Skills'
    };
    certFilterBtns.forEach(btn => {
      const filter = btn.getAttribute('data-filter');
      if (filterLabels[filter]) {
        btn.textContent = filterLabels[filter];
      }
    });

    // Load more button
    const loadMoreBtn = document.getElementById('load-more-certs');
    if (loadMoreBtn) {
      const showAllText = Certificates.showAll
        ? (lang.common?.showLess || 'Show Less')
        : (lang.common?.showAll || 'Show All Certificates');
      const iconClass = Certificates.showAll ? 'bx-minus' : 'bx-plus';
      loadMoreBtn.innerHTML = `<i class="bx ${iconClass}"></i><span>${showAllText}</span>`;
    }

    // References section
    const refsTitle = document.querySelector('#testimonials .section-title');
    if (refsTitle) refsTitle.textContent = LanguageManager.currentLang === 'ar' ? 'المراجع المهنية' : 'Professional References';

    const refsSubtitle = document.querySelector('#testimonials .section-subtitle');
    if (refsSubtitle) refsSubtitle.textContent = LanguageManager.currentLang === 'ar' ? 'المراجع' : 'References';

    const refsDesc = document.querySelector('#testimonials .section-description');
    if (refsDesc) refsDesc.textContent = LanguageManager.currentLang === 'ar'
      ? 'أشخاص سعدت بالعمل معهم'
      : 'People I\'ve had the pleasure of working with';

    // References stats labels
    const refStatLabels = document.querySelectorAll('#testimonials .stat-label');
    if (refStatLabels.length >= 3) {
      refStatLabels[0].textContent = lang.common?.references || 'References';
      refStatLabels[1].textContent = lang.common?.companies || 'Companies';
      refStatLabels[2].textContent = lang.common?.industries || 'Industries';
    }

    // References CTA
    const refsCta = document.querySelector('.references-cta p');
    if (refsCta) refsCta.textContent = lang.common?.interestedInReferences || 'Interested in speaking with my references?';

    const refsCtaBtn = document.querySelector('.references-cta .btn span');
    if (refsCtaBtn) refsCtaBtn.textContent = lang.common?.getInTouch || 'Get In Touch';

    // Contact section
    const contactTitle = document.querySelector('#contact .section-title');
    if (contactTitle) contactTitle.textContent = lang.contact?.title || 'Contact';
  },

  updateNavigation(lang) {
    const navLinks = document.querySelectorAll('.nav-link');
    const navMap = {
      '#home': lang.nav?.home || 'Home',
      '#about': lang.nav?.about || 'About',
      '#skills': lang.skills?.title || 'Skills',
      '#experience': lang.nav?.experience || 'Experience',
      '#portfolio': lang.nav?.portfolio || 'Portfolio',
      '#certificates': lang.nav?.training || 'Certificates',
      '#testimonials': lang.nav?.references || 'References',
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

    const heroName = document.querySelector('.hero-name');
    if (heroName) heroName.textContent = lang.profile?.name || 'Fadi Barhoum';

    const heroDesc = document.querySelector('.hero-description');
    if (heroDesc && lang.hero?.description) {
      heroDesc.textContent = lang.hero.description;
    }

    // Update hero buttons
    const viewWorkBtn = document.querySelector('.hero-cta .btn-primary span');
    if (viewWorkBtn) viewWorkBtn.textContent = LanguageManager.currentLang === 'ar' ? 'شاهد أعمالي' : 'View My Work';

    const getInTouchBtn = document.querySelector('.hero-cta .btn-outline span');
    if (getInTouchBtn) getInTouchBtn.textContent = LanguageManager.currentLang === 'ar' ? 'تواصل معي' : 'Get In Touch';

    // Update scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator span');
    if (scrollIndicator) scrollIndicator.textContent = LanguageManager.currentLang === 'ar' ? 'انتقل للأسفل' : 'Scroll Down';

    // Reinitialize TypeWriter with new language texts
    if (typeof TypeWriter !== 'undefined' && TypeWriter.reinit) {
      TypeWriter.reinit();
    }
  },

  updateContact(lang) {
    // Update contact info title
    const contactInfoTitle = document.querySelector('.contact-info h3');
    if (contactInfoTitle) {
      contactInfoTitle.textContent = LanguageManager.currentLang === 'ar' ? 'معلومات الاتصال' : 'Contact Information';
    }

    // Update contact labels
    const contactLabels = document.querySelectorAll('.contact-label');
    const labelTexts = LanguageManager.currentLang === 'ar'
      ? ['البريد الإلكتروني', 'الهاتف', 'واتساب', 'الموقع']
      : ['Email', 'Phone', 'WhatsApp', 'Location'];

    contactLabels.forEach((label, index) => {
      if (labelTexts[index]) label.textContent = labelTexts[index];
    });

    // Update follow me
    const followTitle = document.querySelector('.contact-social h4');
    if (followTitle) followTitle.textContent = LanguageManager.currentLang === 'ar' ? 'تابعني' : 'Follow Me';

    // Update form labels and button
    const formLabels = document.querySelectorAll('.contact-form label');
    const formLabelTexts = LanguageManager.currentLang === 'ar'
      ? ['اسمك', 'بريدك الإلكتروني', 'الموضوع', 'رسالتك']
      : ['Your Name', 'Your Email', 'Subject', 'Your Message'];

    formLabels.forEach((label, index) => {
      if (formLabelTexts[index]) label.textContent = formLabelTexts[index];
    });

    const submitBtn = document.querySelector('.btn-submit span');
    if (submitBtn) submitBtn.textContent = LanguageManager.currentLang === 'ar' ? 'إرسال الرسالة' : 'Send Message';

    // Update download CV button
    const downloadBtn = document.querySelector('.nav-cta span');
    if (downloadBtn) downloadBtn.textContent = lang.contact?.downloadCV || 'Download CV';

    // Update footer
    this.updateFooter(lang);
  },

  updateFooter(lang) {
    const footer = lang.footer || {};
    const isArabic = LanguageManager.currentLang === 'ar';

    // Footer title (Web Developer)
    const footerTitle = document.querySelector('.footer-name .title');
    if (footerTitle) footerTitle.textContent = footer.title || 'IT Consultant & Senior Full Stack Developer';

    // Footer tagline
    const footerTagline = document.querySelector('.footer-tagline');
    if (footerTagline) footerTagline.textContent = footer.tagline || 'Building digital experiences that make a difference.';

    // Quick Links title
    const quickLinksTitle = document.querySelector('.footer-links-group h4');
    if (quickLinksTitle) quickLinksTitle.textContent = footer.quickLinks || 'Quick Links';

    // Get In Touch title
    const getInTouchTitle = document.querySelector('.footer-contact h4');
    if (getInTouchTitle) getInTouchTitle.textContent = footer.getInTouch || 'Get In Touch';

    // Location text
    const locationText = document.querySelector('.footer-contact .location span');
    if (locationText) locationText.textContent = footer.location || 'Dubai, UAE';

    // Footer links
    const footerLinks = document.querySelectorAll('.footer-links a');
    const linkTexts = isArabic
      ? ['الرئيسية', 'عني', 'المهارات', 'الخبرات', 'الأعمال', 'الشهادات', 'التواصل']
      : ['Home', 'About', 'Skills', 'Experience', 'Portfolio', 'Certificates', 'Contact'];

    footerLinks.forEach((link, index) => {
      if (linkTexts[index]) {
        // Keep the icon, update only text
        const icon = link.querySelector('i');
        if (icon) {
          link.innerHTML = '';
          link.appendChild(icon);
          link.appendChild(document.createTextNode(linkTexts[index]));
        } else {
          link.textContent = linkTexts[index];
        }
      }
    });

    // Copyright text
    const copyright = document.querySelector('.footer-bottom .copyright');
    if (copyright) {
      const year = new Date().getFullYear();
      copyright.innerHTML = `&copy; <span id="current-year">${year}</span> Fadi Barhoum. ${footer.copyright || 'All rights reserved.'}`;
    }
  }
};

/* ============================================
   TYPEWRITER EFFECT
   ============================================ */
const TypeWriter = {
  timeoutId: null,

  init() {
    this.element = document.getElementById('typed-output');
    if (!this.element) return;

    // Get texts from translations or use defaults
    this.texts = this.getTexts();
    this.textIndex = 0;
    this.charIndex = 0;
    this.isDeleting = false;
    this.typeSpeed = 150;

    this.type();
  },

  getTexts() {
    // Try to get from LanguageManager translations
    if (typeof LanguageManager !== 'undefined' && LanguageManager.t && LanguageManager.t.hero) {
      return LanguageManager.t.hero.typedItems || ['IT Consultant', 'Senior Full Stack Developer', 'Digital Transformation Specialist'];
    }
    return ['IT Consultant', 'Senior Full Stack Developer', 'Digital Transformation Specialist'];
  },

  // Reinitialize with new language texts
  reinit() {
    // Clear existing timeout
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }

    this.element = document.getElementById('typed-output');
    if (!this.element) return;

    // Reset and get new texts
    this.texts = this.getTexts();
    this.textIndex = 0;
    this.charIndex = 0;
    this.isDeleting = false;
    this.element.textContent = '';

    this.type();
  },

  type() {
    if (!this.element) return;

    const currentText = this.texts[this.textIndex];

    if (this.isDeleting) {
      this.element.textContent = currentText.substring(0, this.charIndex - 1);
      this.charIndex--;
    } else {
      this.element.textContent = currentText.substring(0, this.charIndex + 1);
      this.charIndex++;
    }

    let speed = this.isDeleting ? 80 : this.typeSpeed;

    if (!this.isDeleting && this.charIndex === currentText.length) {
      speed = 2500; // Pause at end
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.textIndex = (this.textIndex + 1) % this.texts.length;
      speed = 800; // Pause before next word
    }

    this.timeoutId = setTimeout(() => this.type(), speed);
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

        // Update buttons
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Update content
        tabContents.forEach(content => {
          content.classList.remove('active');
          if (content.id === tabId) {
            content.classList.add('active');
          }
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
      item.setAttribute('data-aos', 'fade-up');
      item.setAttribute('data-aos-delay', (index * 100).toString());

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
      item.setAttribute('data-aos', 'fade-up');
      item.setAttribute('data-aos-delay', (index * 100).toString());

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
      item.setAttribute('data-aos', 'fade-up');
      item.setAttribute('data-aos-delay', (index * 100).toString());

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
   PORTFOLIO FILTER
   ============================================ */
const Portfolio = {
  init() {
    console.log('Portfolio.init() called');
    const grid = document.getElementById('portfolio-grid');
    if (!usePrerendered(grid)) {
      this.renderPortfolioItems();
      this.renderGithubProjects();
    }
    this.initFilters();
  },

  initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
      if (btn.dataset.bound) return;
      btn.dataset.bound = '1';
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;

        // Update buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Re-query items after dynamic rendering
        const allItems = document.querySelectorAll('.portfolio-item');
        allItems.forEach(item => {
          if (filter === 'all' || item.classList.contains(filter)) {
            item.classList.remove('hidden');
            item.style.animation = 'fadeIn 0.5s ease forwards';
          } else {
            item.classList.add('hidden');
          }
        });
      });
    });
  },

  renderPortfolioItems() {
    const grid = document.getElementById('portfolio-grid');
    if (!grid || typeof portfolioData === 'undefined') return;

    grid.innerHTML = ''; // Clear existing

    const lang = typeof LanguageManager !== 'undefined' && LanguageManager.t
      ? LanguageManager.t.portfolio?.items
      : [];
    const commonLang = typeof LanguageManager !== 'undefined' && LanguageManager.t
      ? LanguageManager.t.common
      : {};

    console.log('Rendering', portfolioData.portfolio.length, 'portfolio items');

    portfolioData.portfolio.forEach((item, index) => {
      // Match translations by stable id, falling back to position
      const itemData = (lang && (lang.find(l => l.id === item.id) || lang[index])) || {};
      const category = item.category || 'web';
      const isFeatured = !!item.featured;

      const card = document.createElement('div');
      card.className = `portfolio-item ${category}${isFeatured ? ' featured' : ''}`;
      card.setAttribute('data-aos', 'fade-up');
      card.setAttribute('data-aos-delay', ((index % 3) * 100).toString());

      // Build description HTML - handle ALL data structures from lang.js
      let descriptionHtml = '';

      // Add headline if exists
      if (itemData.headline) {
        descriptionHtml += `<p class="project-headline">${itemData.headline}</p>`;
      }

      // Add tech stack chips if exists
      if (itemData.builtWith && itemData.builtWith.length > 0) {
        descriptionHtml += `
          <div class="project-stack">
            <span class="stack-label">${commonLang.builtWith || 'Built with'}</span>
            <div class="stack-chips">${itemData.builtWith.map(t => `<span class="stack-chip">${t}</span>`).join('')}</div>
          </div>`;
      }

      // Add description array (strings or objects with bold/text)
      if (itemData.description) {
        if (Array.isArray(itemData.description)) {
          if (typeof itemData.description[0] === 'string') {
            // Array of strings
            descriptionHtml += `<ul class="project-description-list">${itemData.description.map(d => `<li>${d}</li>`).join('')}</ul>`;
          } else if (itemData.description[0]?.bold !== undefined) {
            // Objects with bold and text properties
            descriptionHtml += `<ul class="project-features-list">${itemData.description.map(d => `<li><strong>${d.bold}</strong> ${d.text}</li>`).join('')}</ul>`;
          }
        } else if (typeof itemData.description === 'string') {
          descriptionHtml += `<p>${itemData.description}</p>`;
        }
      }

      // Add features if exists
      if (itemData.features) {
        // Add intro
        if (itemData.features.intro) {
          descriptionHtml += `<p class="features-intro">${itemData.features.intro}</p>`;
        }

        // Add items (array of {bold, text})
        if (itemData.features.items && itemData.features.items.length > 0) {
          descriptionHtml += `<ul class="project-features-list">${itemData.features.items.map(f => `<li><strong>${f.bold}</strong> ${f.text}</li>`).join('')}</ul>`;
        }

        // Add owners section (array of strings) - like 3nab Cafe
        if (itemData.features.owners && itemData.features.owners.length > 0) {
          descriptionHtml += `<p class="features-section-title"><strong>${commonLang.ownersEnjoy || 'Owners enjoy:'}</strong></p>`;
          descriptionHtml += `<ul class="project-features-list">${itemData.features.owners.map(o => `<li>${o}</li>`).join('')}</ul>`;
        }

        // Add customers section (array of strings) - like 3nab Cafe
        if (itemData.features.customers && itemData.features.customers.length > 0) {
          descriptionHtml += `<p class="features-section-title"><strong>${commonLang.customersBenefit || 'Customers benefit from:'}</strong></p>`;
          descriptionHtml += `<ul class="project-features-list">${itemData.features.customers.map(c => `<li>${c}</li>`).join('')}</ul>`;
        }

        // Add beneficiaries section (array of {bold, text}) - like SSDF
        if (itemData.features.beneficiaries && itemData.features.beneficiaries.length > 0) {
          descriptionHtml += `<p class="features-section-title"><strong>${commonLang.beneficiaries || 'Beneficiaries:'}</strong></p>`;
          descriptionHtml += `<ul class="project-features-list">${itemData.features.beneficiaries.map(b => `<li><strong>${b.bold}</strong> ${b.text}</li>`).join('')}</ul>`;
        }

        // Add admin section (array of {bold, text}) - like SSDF
        if (itemData.features.admin && itemData.features.admin.length > 0) {
          descriptionHtml += `<p class="features-section-title"><strong>${commonLang.admin || 'Admin:'}</strong></p>`;
          descriptionHtml += `<ul class="project-features-list">${itemData.features.admin.map(a => `<li><strong>${a.bold}</strong> ${a.text}</li>`).join('')}</ul>`;
        }

        // Add chairman section (array of {bold, text}) - like SSDF
        if (itemData.features.chairman && itemData.features.chairman.length > 0) {
          descriptionHtml += `<p class="features-section-title"><strong>${commonLang.chairmanMembers || 'Chairman Members:'}</strong></p>`;
          descriptionHtml += `<ul class="project-features-list">${itemData.features.chairman.map(c => `<li><strong>${c.bold}</strong> ${c.text}</li>`).join('')}</ul>`;
        }
      }

      // Check if project has any actions
      const hasLink = item.link;
      const hasGif = item.gif;
      const hasGallery = item.gallery && item.gallery.length > 0;
      const hasActions = hasLink || hasGif || hasGallery;

      card.innerHTML = `
        <div class="portfolio-card">
          <div class="portfolio-image">
            <img src="${item.logo}" alt="${itemData.name || 'Project'}" onerror="this.src='assets/img/portfolio/default.png'">
            ${hasActions ? `
            <div class="portfolio-overlay">
              <div class="overlay-content">
                <div class="overlay-actions">
                  ${hasLink ? `<a href="${item.link}" target="_blank" class="btn-icon" title="${commonLang.visitSite || 'Visit Site'}"><i class="bx bx-link-external"></i></a>` : ''}
                  ${hasGif ? `<a href="${item.gif}" target="_blank" class="btn-icon" title="${commonLang.viewDemo || 'View Demo'}"><i class="bx bx-play-circle"></i></a>` : ''}
                  ${hasGallery ? `<a href="${item.gallery[0]}" target="_blank" class="btn-icon" title="${commonLang.viewGallery || 'View Gallery'}"><i class="bx bx-images"></i></a>` : ''}
                </div>
              </div>
            </div>
            ` : ''}
          </div>
          <div class="portfolio-info">
            <h4>${itemData.name || 'Project'}</h4>
            ${itemData.subtitle ? `<p class="project-subtitle">${itemData.subtitle}</p>` : ''}
            <div class="portfolio-description">
              ${descriptionHtml || ''}
            </div>
          </div>
        </div>
      `;

      grid.appendChild(card);
    });

    // Re-init filters after rendering
    setTimeout(() => this.initFilters(), 100);
  },

  renderGithubProjects() {
    const grid = document.getElementById('portfolio-grid');
    if (!grid || typeof portfolioData === 'undefined') return;

    const lang = typeof LanguageManager !== 'undefined' && LanguageManager.t
      ? LanguageManager.t.github?.items
      : [];
    const commonLang = typeof LanguageManager !== 'undefined' && LanguageManager.t
      ? LanguageManager.t.common || {}
      : {};

    console.log('Rendering', portfolioData.githubProjects.length, 'github projects');

    portfolioData.githubProjects.forEach((item, index) => {
      // Match translations by stable id, falling back to position
      const itemData = (lang && (lang.find(l => l.id === item.id) || lang[index])) || {};

      const card = document.createElement('div');
      card.className = 'portfolio-item github';
      card.setAttribute('data-aos', 'fade-up');
      card.setAttribute('data-aos-delay', ((index % 3) * 100).toString());

      // Build description HTML for GitHub projects
      let descriptionHtml = '';
      if (itemData.description) {
        if (Array.isArray(itemData.description)) {
          descriptionHtml = `<ul class="project-description-list">${itemData.description.map(d => `<li>${d}</li>`).join('')}</ul>`;
        } else if (typeof itemData.description === 'string') {
          descriptionHtml = `<p>${itemData.description}</p>`;
        }
      }

      // Check if project has gallery
      const hasGallery = item.gallery && item.gallery.length > 0;

      card.innerHTML = `
        <div class="portfolio-card">
          <div class="portfolio-image">
            <img src="${item.image}" alt="${itemData.name || 'GitHub Project'}" onerror="this.src='assets/img/portfolio/default.png'">
            <div class="portfolio-overlay">
              <div class="overlay-content">
                <div class="overlay-actions">
                  <a href="${item.github}" target="_blank" class="btn-icon" title="${commonLang.viewCode || 'View Code'}"><i class="bx bxl-github"></i></a>
                  ${hasGallery ? `<a href="${item.gallery[0]}" target="_blank" class="btn-icon" title="${commonLang.viewGallery || 'View Gallery'}"><i class="bx bx-images"></i></a>` : ''}
                </div>
              </div>
            </div>
          </div>
          <div class="portfolio-info">
            <h4>${itemData.name || 'GitHub Project'}</h4>
            <div class="portfolio-description">
              ${descriptionHtml}
            </div>
          </div>
        </div>
      `;

      grid.appendChild(card);
    });
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
    if (usePrerendered(container)) return;
    console.log('Technical skills container:', container);
    console.log('portfolioData defined:', typeof portfolioData !== 'undefined');

    if (!container) {
      console.log('Technical skills container not found');
      return;
    }
    if (typeof portfolioData === 'undefined') {
      console.log('portfolioData not defined');
      return;
    }
    if (!portfolioData.skillGroups || !portfolioData.skillGroups.length) {
      console.log('No skills data found');
      return;
    }

    container.innerHTML = ''; // Clear existing

    const labels = (typeof LanguageManager !== 'undefined' && LanguageManager.t)
      ? (LanguageManager.t.skills?.groups || {})
      : {};

    console.log('Rendering', portfolioData.skillGroups.length, 'skill groups');

    portfolioData.skillGroups.forEach((group, gi) => {
      const block = document.createElement('div');
      block.className = 'skill-group';
      block.setAttribute('data-aos', 'fade-up');
      block.setAttribute('data-aos-delay', (gi * 50).toString());

      const chips = group.skills.map(skill => {
        if (!skill.icon) {
          // no icon available - render as a text chip
          return `<div class="skill-item no-icon"><span>${skill.key}</span></div>`;
        }
        // if the icon fails to load, fall back to the same text chip
        return `<div class="skill-item">
            <img src="${skill.icon}" alt="${skill.key}" loading="lazy"
                 onerror="this.remove(); this.parentElement.classList.add('no-icon');">
            <span>${skill.key}</span>
          </div>`;
      }).join('');

      block.innerHTML = `
        <h4 class="skill-group-title">${labels[group.group] || group.group}</h4>
        <div class="skills-grid">${chips}</div>
      `;

      container.appendChild(block);
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

    portfolioData.softSkills.forEach((skill, index) => {
      const item = document.createElement('div');
      item.className = 'skill-item';
      item.setAttribute('data-aos', 'fade-up');
      item.setAttribute('data-aos-delay', ((index % 5) * 50).toString());
      item.innerHTML = `
        <img src="${skill.image}" alt="${skill.key}" onerror="this.style.display='none'">
        <span>${skill.key}</span>
      `;
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

  getCategoryIcon(category) {
    const icons = {
      tech: 'bx bx-code-alt',
      humanitarian: 'bx bx-heart',
      language: 'bx bx-globe',
      skills: 'bx bx-bulb'
    };
    return icons[category] || 'bx bx-award';
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
      card.className = `certificate-card ${category}`;
      card.setAttribute('data-category', category);
      card.setAttribute('data-aos', 'fade-up');
      card.setAttribute('data-aos-delay', ((index % 3) * 100).toString());

      // Humanitarian training is collapsed by default so the section reads as a
      // technical profile; it stays reachable via the filter and "Show All".
      if (this.collapsedCategories.includes(category) && !this.showAll) {
        card.classList.add('hidden');
      }

      card.innerHTML = `
        <div class="cert-header">
          <div class="cert-icon ${category}">
            <i class="${this.getCategoryIcon(category)}"></i>
          </div>
          <div class="cert-title-wrap">
            <h4>${cert.title || 'Certificate'}</h4>
            <span class="cert-category ${category}">${this.getCategoryLabel(category)}</span>
          </div>
        </div>
        <div class="cert-body">
          <div class="cert-institution">
            <i class="bx bx-buildings"></i>
            <span>${cert.institution || ''}</span>
          </div>
          <div class="cert-date">
            <i class="bx bx-calendar"></i>
            <span>${cert.date || ''}</span>
          </div>
        </div>
        ${cert.link ? `
        <div class="cert-footer">
          <a href="${cert.link}" target="_blank" class="cert-link">
            <span>${commonLang.viewCertificate || 'View Certificate'}</span>
            <i class="bx bx-right-arrow-alt"></i>
          </a>
        </div>
        ` : ''}
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

    filterBtns.forEach(btn => {
      if (btn.dataset.bound) return;
      btn.dataset.bound = '1';
      btn.addEventListener('click', () => {
        const cards = document.querySelectorAll('.certificate-card');
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
    const hasCollapsed = Array.from(document.querySelectorAll('.certificate-card'))
      .some(c => this.collapsedCategories.includes(c.getAttribute('data-category')));
    if (!hasCollapsed) {
      loadMoreBtn.classList.add('hidden');
      return;
    }

    loadMoreBtn.addEventListener('click', () => {
      this.showAll = !this.showAll;

      const activeFilter = document.querySelector('.cert-filter-btn.active');
      const filter = activeFilter ? activeFilter.getAttribute('data-filter') : 'all';
      const cards = document.querySelectorAll('.certificate-card');

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

      if (this.showAll) {
        loadMoreBtn.innerHTML = `
          <i class="bx bx-minus"></i>
          <span>${commonLang.showLess || 'Show Less'}</span>
        `;
      } else {
        loadMoreBtn.innerHTML = `
          <i class="bx bx-plus"></i>
          <span>${commonLang.showAll || 'Show All Certificates'}</span>
        `;
      }

      // Refresh AOS animations
      if (typeof AOS !== 'undefined') {
        AOS.refresh();
      }
    });
  },

  updateLoadMoreBtn(filter) {
    const loadMoreBtn = document.getElementById('load-more-certs');
    if (!loadMoreBtn) return;

    // The button only means anything under "All", where collapsing applies
    const collapsedCount = Array.from(document.querySelectorAll('.certificate-card'))
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
      card.className = 'reference-card';
      card.setAttribute('data-aos', 'fade-up');
      card.setAttribute('data-aos-delay', ((index % 3) * 100).toString());

      // Position text with "at" connector
      const atText = isArabic ? 'في' : 'at';
      const positionText = refData.company
        ? `${refData.position || ''} <span class="company">${atText} ${refData.company}</span>`
        : refData.position || '';

      card.innerHTML = `
        <div class="ref-header">
          <i class="bx bxs-quote-alt-left ref-quote-icon"></i>
          <div class="ref-image-wrapper">
            <img src="${ref.image}" alt="${refData.name || 'Reference'}" class="ref-image" onerror="this.src='assets/img/profile-img.jpg'">
            <span class="ref-badge"><i class="bx bx-check"></i></span>
          </div>
          <h4 class="ref-name">${refData.name || 'Reference'}</h4>
          <p class="ref-position">${positionText}</p>
        </div>
        <div class="ref-body">
          <p class="ref-availability">${commonLang.referencesOnRequest || 'References available on request'}</p>
          <div class="ref-contact-actions">
            <a href="#contact" class="ref-contact-btn request">
              <i class="bx bx-envelope"></i>
              <span>${commonLang.getInTouch || 'Get In Touch'}</span>
            </a>
          </div>
        </div>
      `;

      container.appendChild(card);
    });
  }
};

/* ============================================
   MODALS
   ============================================ */
const Modals = {
  init() {
    const modalBtns = document.querySelectorAll('[data-modal]');
    const modals = document.querySelectorAll('.modal');
    const closeBtns = document.querySelectorAll('.modal-close');

    modalBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const modalId = btn.dataset.modal + '-modal';
        const modal = document.getElementById(modalId);
        if (modal) {
          modal.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      });
    });

    closeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const modal = btn.closest('.modal');
        if (modal) {
          modal.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    });

    modals.forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    });

    // Close on ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        modals.forEach(modal => {
          modal.classList.remove('active');
        });
        document.body.style.overflow = '';
      }
    });
  }
};

/* ============================================
   SCROLL EFFECTS
   ============================================ */
const ScrollEffects = {
  init() {
    // Refresh AOS on dynamic content
    setTimeout(() => {
      if (typeof AOS !== 'undefined') {
        AOS.refresh();
      }
    }, 500);
  }
};

/* ============================================
   CONTACT FORM
   ============================================ */
const Form = {
  init() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Get form data
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);

      // Create mailto link
      const subject = encodeURIComponent(data.subject || 'Contact from Portfolio');
      const body = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`);
      window.location.href = `mailto:en.fadi.barhoum@gmail.com?subject=${subject}&body=${body}`;

      // Show success message
      alert('Opening your email client...');
      form.reset();
    });
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

    // Re-init modal handlers for newly rendered items
    Modals.init();

    // Refresh AOS
    setTimeout(() => {
      if (typeof AOS !== 'undefined') {
        AOS.refresh();
      }
    }, 100);
  }
});

/* ============================================
   BACK TO TOP
   ============================================ */
document.getElementById('back-to-top')?.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
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
