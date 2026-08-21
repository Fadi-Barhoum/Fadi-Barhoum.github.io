// ============================================
// MULTI-LANGUAGE SUPPORT - Full Content Translation
// ============================================

const translations = {

  // ==========================================
  // ENGLISH
  // ==========================================
  en: {
    // Meta & General
    lang: "en",
    dir: "ltr",
    pageTitle: "Fadi Barhoum Portfolio",

    // Profile
    profile: {
      name: "Fadi Barhoum",
      jobTitle: "IT Consultant & Senior Full Stack Developer"
    },

    // Navigation
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      training: "Training & Certificates",
      portfolio: "Portfolio",
      github: "GitHub Projects",
      references: "References",
      contact: "Contact"
    },

    // Social Links
    socialLinks: {
      linkedin: "LinkedIn",
      github: "GitHub",
      email: "Email",
      phone: "Phone",
      whatsapp: "WhatsApp"
    },

    // Hero Section
    hero: {
      description: "I build enterprise platforms for UAE government and private sector organisations — bilingual systems for service assessment, process management, strategic performance and national identity integration.",
      typedItems: ["IT Consultant", "Senior Full Stack Developer", "Digital Transformation Specialist", ".NET & React Engineer"]
    },

    // About Section
    about: {
      title: "About Me",
      jobTitle: "IT Consultant & Senior Full Stack Developer",
      labels: {
        birthday: "Birthday",
        nationality: "Nationality",
        location: "Location",
        phone: "Phone",
        email: "Email"
      },
      details: {
        birthday: "7 Jun 1993",
        nationality: "Syrian",
        location: "Dubai, UAE",
        phone: "+971 507 704 776",
        email: "en.fadi.barhoum@gmail.com"
      },
      bio: "I am an IT consultant and senior full stack developer based in Dubai, with 8 years building enterprise applications end to end. My work centres on ASP.NET Core, C#, SQL Server and React with TypeScript, alongside Laravel and PHP. I have delivered platforms for UAE government entities including national identity single sign-on integration, enterprise directory authentication, and AI-enabled features — always with full Arabic and English support. I take projects from requirements through architecture, development, deployment and handover."
    },

    // Skills Section (technical skills are not translated)
    skills: {
      title: "Skills",
      softTitle: "Soft Skills",
      groups: {
        backend: "Backend",
        frontend: "Frontend",
        database: "Database",
        integration: "Integration",
        tools: "Tools",
        cms: "CMS"
      }
    },

    // Resume Section
    resume: {
      title: "Resume",
      education: "Education",
      experience: "Professional Experience",
      activities: "Activities",
      present: "Present",
      educationItems: [
        {
          title: "Information Technology - Software Engineering",
          period: "2012 - 2018",
          institution: "Damascus University, Damascus, Syria",
          link: "https://damascusuniversity.edu.sy/ite/"
        },
        {
          title: "Master's degree — Web Science",
          period: "2018 - 2020",
          institution: "Syrian Virtual University",
          note: "Coursework completed; thesis pending",
          link: null
        }
      ],
      experienceItems: [
        {
          title: "IT Consultant",
          period: "10/2025 - Present",
          company: "IMPACT iN, Dubai, UAE",
          link: null,
          responsibilities: [
            "Lead digital transformation initiatives and technology consulting for government and private sector clients. Design and implement scalable web and mobile solutions with focus on modern architecture and seamless user experiences.",
            "Conduct comprehensive technology audits covering cloud infrastructure, system integration, database optimization, and cybersecurity compliance. Advise on authentication frameworks, access control, and secure deployment strategies.",
            "Ensure alignment with global digital service excellence standards, including UAE's regulatory requirements. Perform structured evaluations of system performance and deliver data-driven recommendations for optimization.",
            "Collaborate cross-functionally across the full project lifecycle, bridging technical and business stakeholders to deliver end-to-end solutions."
          ]
        },
        {
          title: "Full Stack Developer",
          period: "04/2024 - 09/2025",
          company: "Elite WhereGO",
          link: "https://elitewherego.com/",
          responsibilities: [
            "Develop and maintain a comprehensive website showcasing company services and integrating it with a mobile application to enhance user experience.",
            "Integrated the website with the mobile application, enabling seamless order placement and account management across platforms."
          ]
        },
        {
          title: "Web Developer | Full Stack Developer",
          period: "02/2018 - 08/2025",
          company: "Freelancer",
          link: null,
          responsibilities: [
            "Collaborates with clients to define functional requirements and project scope.",
            "Design and develop user-friendly web interfaces that meet client expectations.",
            "Build and maintain scalable and efficient databases to support website functionality.",
            "Create comprehensive software documentation for future reference and maintenance.",
            "Successfully develop and deploy high-quality websites for clients across industries."
          ]
        },
        {
          title: "Web Developer | Full Stack Developer",
          period: "01/2021 - 03/2022",
          company: "Masar Syria, Damascus, Syria",
          link: "https://www.facebook.com/Masar2018",
          responsibilities: [
            "Collaborated effectively with clients to understand their functional requirements and project scope.",
            "Successfully designed and developed user-friendly web interfaces that met client expectations.",
            "Constructed and maintained efficient and scalable databases to support website functionality.",
            "Created comprehensive software documentation for future reference and maintenance.",
            "Introduced caching, asset optimisation and database query tuning to reduce page load times across client websites."
          ]
        },
        {
          title: "Software Developer",
          period: "09/2019 - 04/2023",
          company: "Charitable Society for Sustainable Development, Damascus, Syria",
          link: "https://cssd-ngos.org/",
          responsibilities: [
            "Built and deployed internal software solutions that replaced the organisation's manual, paper-based workflows for beneficiary and programme records.",
            "Identified recurring operational bottlenecks and delivered technical solutions that consolidated case tracking and reporting into a single system.",
            "Created comprehensive software documentation to ensure clear understanding and maintainability of code.",
            "Employed robust security measures to protect the organization's digital assets and data."
          ]
        }
      ],
      activitiesItems: [
        {
          title: "Web Developer",
          period: "05/2025 - Present",
          organization: "Ataa Hamdan Volunteer Team",
          link: null,
          responsibilities: [
            "Design and develop the official website for Ataa Hamdan volunteer team, creating an engaging platform to showcase the team's humanitarian initiatives and volunteer activities.",
            "Build a cross-platform mobile application to streamline volunteer coordination, event management, and community engagement.",
            "Implement responsive and user-friendly interfaces to ensure seamless access across all devices.",
            "Integrate backend systems for volunteer registration, donation tracking, and activity management."
          ]
        },
        {
          title: "Social Worker",
          period: "2021 - 2024",
          organization: "The Sacred Hearts Society (Organization Center), Damascus, Syria",
          link: null,
          roles: [
            {
              role: "Caseworkers' Team Leader",
              period: "Aug 2023 - Jan 2024",
              tasks: [
                "Provided leadership and guidance to a team of caseworkers, ensuring effective case management and beneficiaries support.",
                "Oversaw the development and implementation of new projects.",
                "Monitored and evaluated the performance of caseworkers and programs.",
                "Prepared comprehensive monthly reports on casework activities and program outcomes.",
                "Represented the team and the organization in professional settings and community forums.",
                "Introduced technical tools for case tracking and monthly reporting that replaced the team's manual, paper-based record-keeping."
              ]
            },
            {
              role: "Caseworker",
              period: "May 2021 - Aug 2023",
              tasks: [
                "Conducted needs assessments and developed personalized case plans for clients.",
                "Provided counseling and support to individuals and families facing various social challenges.",
                "Advocated for clients' rights and connected them with necessary services.",
                "Documented case progress and ensured timely follow-up.",
                "Maintained open communication with clients, families, and other professionals involved in their cases."
              ]
            }
          ]
        },
        {
          title: "Volunteer",
          period: "2019 - 2022",
          organization: "GOPA-DERD, Damascus, Syria",
          link: "https://gopaderd.org/en/",
          responsibilities: [
            "Active member of the Outreach and Relief Volunteers (ORV) Team, dedicated to visiting beneficiaries of the organization's social programs.",
            "Conducted regular visits to beneficiaries, engaging in meaningful conversations and providing support.",
            "Identified and documented the needs of beneficiaries, ensuring their timely and effective assistance.",
            "Collaborated with team members to plan and implement outreach initiatives, ensuring the organization's services reach underserved communities.",
            "Played a crucial role in fostering positive relationships with beneficiaries, demonstrating empathy, understanding, and compassion."
          ]
        },
        {
          title: "Volunteer",
          period: "2016 - 2019",
          organization: "Charitable Society for Sustainable Development, Damascus, Syria",
          link: "https://cssd-ngos.org/",
          responsibilities: [
            "Dedicated volunteer actively involved in the strategic planning and implementation of new social initiatives.",
            "Conducted comprehensive needs surveys to identify the most pressing needs of the organization's target beneficiaries.",
            "Collected and analyzed data from surveys to inform the development of effective and targeted projects.",
            "Proactively followed up on the progress of implemented projects, evaluating their effectiveness and identifying areas for improvement.",
            "Utilized insights gained from follow-up evaluations to refine future project plans and ensure the organization's resources are allocated efficiently."
          ]
        }
      ]
    },

    // Training Section
    training: {
      title: "Training & Certificates",
      items: [
        { title: "Mastering Laravel Framework and PHP", date: "Jun 2024", institution: "Board Infinity", link: "https://coursera.org/share/1988d1bc1755847439d006f8a4afc9cb" },
        { title: "ENGLISH", date: "Mar 2021 - Mar 2022", institution: "Advanced Language and Training Center", link: "https://www.facebook.com/profile.php?id=100064771954240" },
        { title: "BENEFICIARIES DATABASE MANAGEMENT", date: "May 2021", institution: "UNDP", link: "https://www.undp.org/" },
        { title: "FOOD SECURITY AND LIVELIHOOD", date: "Jan 2021", institution: "Forum for Development, Culture, and Dialogue", link: "https://fdcd.org/" },
        { title: "THE SPHERE PROJECT", date: "Dec 2020", institution: "Forum for Development, Culture, and Dialogue", link: "https://fdcd.org/" },
        { title: "PSYCHOSOCIAL SUPPORT", date: "Mar 2020", institution: "Forum for Development, Culture, and Dialogue", link: "https://fdcd.org/" },
        { title: "SOFT SKILLS", date: "Oct 2019", institution: "UNDP", link: "https://www.undp.org/" },
        { title: "PROPOSAL WRITING", date: "Sep 2019", institution: "UNDP", link: "https://www.undp.org/" },
        { title: "PROTECTION, PSYCHOSOCIAL SUPPORT AND REFERRALS", date: "Mar 2019", institution: "Forum for Development, Culture, and Dialogue", link: "https://fdcd.org/" },
        { title: "PSYCHOSOCIAL SUPPORT TO CHILDREN IN EMERGENCY", date: "Apr 2018", institution: "Forum for Development, Culture, and Dialogue", link: "https://fdcd.org/" },
        { title: "ENGLISH", date: "Sep 2017 - Feb 2018", institution: "Linguaphone", link: "https://linguaphone.co.uk/" },
        { title: "MINIMUM STANDARDS FOR HUMANITARIAN ACTION THE SPHERE PROJECT", date: "Dec 2017", institution: "The Charitable Society for Sustainable Development", link: "https://cssd-ngos.org/" },
        { title: "CHILD PROTECTION AND ACTIVITY PLANNING", date: "Nov 2017", institution: "The Charitable Society for Sustainable Development", link: "https://cssd-ngos.org/" },
        { title: "CHILD SAFEGUARDING POLICY", date: "Nov 2017", institution: "The Middle East Council of Churches", link: "https://www.mecc.org/" },
        { title: "LOGICAL FRAMEWORK APPROACH-PROJECT CYCLE MANAGEMENT", date: "Sep 2017", institution: "Syrian-European Business Consultancy", link: "https://www.sebcsyria.com/" },
        { title: "BASIC CHILD PROTECTION", date: "Aug 2017", institution: "The Charitable Society for Sustainable Development", link: "https://cssd-ngos.org/" },
        { title: "DIPLOMA ASSOCIATE OF NEURO LINGUISTIC PROGRAMMING", date: "Feb 2015 - Mar 2015", institution: "International Center for Human Construction", link: "http://www.ichc.info/" },
        { title: "TIME MANAGEMENT", date: "Mar 2015", institution: "International Center for Human Construction", link: "http://www.ichc.info/" },
        { title: "ENTREPRENEURIAL SKILLS & BUSINESS MANAGEMENT", date: "Aug 2014", institution: "Syrian-European Business Consultancy", link: "https://www.sebcsyria.com/" },
        { title: "MOBILE MAINTENANCE", date: "May 2014 - Jul 2014", institution: "New Horizons", link: "https://www.newhorizons.com/" }
      ]
    },

    // Portfolio Section
    portfolio: {
      title: "Portfolio",
      viewGif: "View Demo",
      viewSite: "Visit Website",
      notAvailable: "Not available",
      items: [
        {
          id: "zerox",
          name: "ZeroX",
          subtitle: "Government Bureaucracy Reduction Platform",
          headline: "A bilingual (Arabic/English) platform built for the UAE Ministry of Industry and Advanced Technology, digitising how government services and internal processes are assessed, simplified, and measured before and after reduction.",
          builtWith: ["ASP.NET Core 8", "React 19", "TypeScript", "SQL Server", "Entity Framework Core"],
          features: {
            intro: "Key capabilities:",
            items: [
              {
                bold: "UAE Pass Integration:",
                text: "National single sign-on via a custom OAuth 2.0 authorization code flow built to match the ministry's identity gateway"
              },
              { bold: "Multi-Axis Assessment:", text: "Services scored across five weighted evaluation axes with a matrix-based classification engine" },
              {
                bold: "Process Zeroing:",
                text: "Full organizational hierarchy from sector down to individual procedure steps, with automatic before/after reduction comparison"
              },
              { bold: "Bulk Import:", text: "Transactional Excel import that maps flat spreadsheets into a five-level hierarchy with rollback on conflict" },
              { bold: "Fully Bilingual:", text: "Arabic/English with complete RTL support across every screen" }
            ]
          }
        },
        {
          id: "impact7s",
          name: "Impact7S",
          subtitle: "Seven-Star Service Excellence Assessment Platform",
          headline: "An enterprise platform for organizational excellence assessment, deployed at UAE government and private sector entities to run the full evaluation cycle from questions and evidence through scoring, improvement planning and follow-up.",
          builtWith: ["ASP.NET Core 8", "React 19", "TypeScript", "SQL Server", "Entity Framework Core", "Azure OpenAI"],
          features: {
            intro: "Key capabilities:",
            items: [
              { bold: "Maturity Scoring Engine:", text: "Multi-level weighted scoring across service channels and entity-level evidence, producing a 0–7 star rating" },
              { bold: "Hybrid Authentication:", text: "Enterprise LDAP/Active Directory unified with local accounts behind a single sign-in flow" },
              { bold: "Granular Permissions:", text: "Six roles scoped by service channel and center" },
              { bold: "Action Planning:", text: "Improvement tracking with priorities, follow-ups and Kanban task management" },
              { bold: "AI Assistant:", text: "Integrated Azure OpenAI assistant answering questions from the system's own data" },
              { bold: "Centers Management:", text: "Geolocation and interactive mapping for multi-site evaluation" },
              { bold: "Reporting:", text: "Arabic-capable PDF report generation" }
            ]
          }
        },
        {
          id: "impactspcx",
          name: "ImpactSPcx",
          subtitle: "Process, Service & Customer Experience Management",
          headline: "A digital repository replacing scattered Word and Visio documents with a single governed system for process documentation, service cards, customer journey mapping and measurable before/after improvement — deployed at UAE government and private sector entities.",
          builtWith: ["ASP.NET Core 8", "React 19", "TypeScript", "SQL Server", "Entity Framework Core", "Azure OpenAI"],
          features: {
            intro: "Key capabilities:",
            items: [
              { bold: "Interactive Diagram Editor:", text: "RTL-aware process diagramming with undo/redo and image/PDF export" },
              { bold: "Visio Import:", text: "Dependency-free in-browser .vsdx importer built without external libraries" },
              { bold: "Approval Workflow:", text: "Coordinator changes tracked against an audit ledger with automatic rollback on rejection across five action types" },
              { bold: "Customer Journey Mapping:", text: "Current and future state experience mapping with sentiment tracking" },
              { bold: "Service Cards:", text: "Complete service documentation covering channels, requirements, fees and timing" },
              { bold: "AI Assistant:", text: "Azure OpenAI assistant querying the system's own data" },
              { bold: "Export:", text: "PDF and Excel output across all modules" }
            ]
          }
        },
        {
          id: "impactst",
          name: "ImpactST (S-Track)",
          subtitle: "Strategic Performance Management Platform",
          headline: "A strategy-to-execution platform for government entities, connecting vision and objectives to KPIs, operational plans and verified performance reporting in one governed path.",
          builtWith: ["ASP.NET Core 8", "React 19", "TypeScript", "Tailwind CSS", "SQL Server", "Entity Framework Core", "Azure OpenAI"],
          features: {
            intro: "Key capabilities:",
            items: [
              {
                bold: "Objectives Hierarchy:",
                text: "Parent-scoped strategic objectives with cycle detection and weight-cap enforcement to prevent double-counting across the reporting layer"
              },
              {
                bold: "KPI Formula Engine:",
                text: "Server-side expression evaluator supporting manual, formula-driven and external API data sources, with full audit capture of inputs"
              },
              { bold: "Operational Planning:", text: "Projects, initiatives and activities with milestones and task tracking" },
              { bold: "Verification Workflow:", text: "Department submissions reviewed and approved before entering reports" },
              { bold: "Executive Dashboards:", text: "Strategy maps, department comparison and KPI analytics" },
              { bold: "Full Audit Log:", text: "Every change tracked with optimistic concurrency control" }
            ]
          }
        },
        {
          id: "impactls",
          name: "ImpactLS",
          subtitle: "Software Licensing & Entitlement Platform",
          headline: "An in-house platform that issues and governs license keys for the company's product suite, letting each client activate the systems they purchased with defined subscription terms and user limits.",
          builtWith: ["ASP.NET Core 10", "React 19", "TypeScript", "SQL Server", "Entity Framework Core"],
          features: {
            intro: "Key capabilities:",
            items: [
              { bold: "Digitally Signed Licenses:", text: "Each license cryptographically signed and verifiable, so altered terms are rejected automatically" },
              {
                bold: "Offline Verification:",
                text: "Licensed systems validate entirely on their own, with no network call to a license server — essential for closed government networks"
              },
              { bold: "Entitlement Control:", text: "Per-client expiry dates and user limits enforced at the product level" },
              { bold: "Multi-Product:", text: "Governs four separate company products from one console" },
              { bold: "Integration Documentation:", text: "Full specification authored for consuming product teams" }
            ]
          }
        },
        {
          id: "impactms",
          name: "ImpactMS",
          subtitle: "Mystery Shopping Operations Platform",
          headline: "The operations platform powering the company's mystery-shopping service line for UAE government clients — covering questionnaire design, field assignment to shoppers, auditing of submitted reports, and final client reporting.",
          builtWith: ["Laravel 11", "PHP 8.2", "React 18", "MySQL", "Vite"],
          features: {
            intro: "Key capabilities:",
            items: [
              { bold: "Questionnaire Builder:", text: "Drag-and-drop builder supporting twelve question types across paged forms" },
              { bold: "Four-Role Workflow:", text: "Administrator, project manager, shopper and auditor, each scoped to their own data" },
              { bold: "Task State Machine:", text: "Nine explicit states with enforced transitions preventing stage skipping" },
              { bold: "Field Assignment:", text: "Location-based visit assignment with interactive mapping" },
              { bold: "Auditing & Scoring:", text: "Per-question review with points, comments and validity flags" },
              { bold: "Client Reporting:", text: "Branded PDF reports generated to a corporate design specification" },
              { bold: "Bilingual:", text: "Arabic/English with RTL support" }
            ]
          }
        },
        {
          id: "ivari",
          name: "Ivari Hair Center",
          subtitle: "Bilingual E-Commerce & Appointment Booking Platform",
          headline: "A production e-commerce and appointment-booking platform for a Dubai hair centre, selling products with colour and length variants while handling service bookings and installation appointments in one system.",
          builtWith: ["Laravel 12", "PHP 8.2", "React 19", "TypeScript", "Inertia.js", "Filament 5", "Tailwind CSS 4", "Vite 7", "MySQL"],
          features: {
            intro: "Key capabilities:",
            items: [
              {
                bold: "Dual Payment Gateways:",
                text: "Card payments and buy-now-pay-later instalments, both through a secure server-side redirect flow so no card data touches the server"
              },
              { bold: "Three Purchase Flows:", text: "Package with appointment, standard product order, standalone booking" },
              { bold: "Appointment Engine:", text: "Work schedules, time slots and availability management" },
              { bold: "Product Variants:", text: "Colour and length variants with custom manual ordering" },
              { bold: "Admin Console:", text: "Filament-based panel covering products, orders, appointments, payments, content" },
              { bold: "Fully Bilingual:", text: "Arabic/English with complete RTL across storefront and checkout" }
            ]
          }
        },
        {
          id: "marmusa",
          name: "Mar Musa",
          subtitle: "Multi-Currency Financial Management System",
          headline: "A custom accounting platform for a non-profit managing a central fund, projects and individual member accounts across five currencies — roughly 20,000 lines of custom PHP behind 65 admin screens and 11 purpose-built database tables.",
          builtWith: ["PHP", "MariaDB", "JavaScript", "PhpSpreadsheet", "WordPress as application framework"],
          features: {
            intro: "Key capabilities:",
            items: [
              { bold: "Six Transaction Types:", text: "Deposits, payments, withdrawals, income, expenses, currency exchange and debts, unified in one ledger" },
              { bold: "Global Receipt Numbering:", text: "A system-wide unique receipt-number constraint enforced across six separate transaction tables" },
              {
                bold: "Export & Import:",
                text: "29 endpoints producing Excel, PDF and ZIP reports, plus Excel import templates with data-validated dropdowns bound to live data"
              },
              { bold: "Role Separation:", text: "Managers see everything, members see only their own records" },
              { bold: "Receipt Imaging:", text: "Photo attachments per transaction with resilient path handling across environments" },
              { bold: "Four Languages:", text: "Arabic, English, French and Italian with full RTL support" }
            ]
          }
        },
        {
          id: "rihlaty-dashboard",
          name: "Rihlaty Dashboard",
          subtitle: "Travel Agency Operations Dashboard",
          headline: "A bilingual front-end admin dashboard for a travel agency that builds tour packages, transport bookings and reusable templates through multi-step wizards, then exports client-ready documents. Built for the same client as the Rihlaty public site, as their separate internal tool.",
          builtWith: ["React 18", "Vite", "React Router", "Custom i18n", "Client-side PDF generation"],
          features: {
            intro: "Key capabilities:",
            items: [
              { bold: "Three Multi-Step Wizards:", text: "Package builder, template builder, transport builder" },
              { bold: "Document Export:", text: "Proposals, invoices and hotel vouchers exported to PDF in the browser, preserving Arabic text shaping and RTL layout" },
              {
                bold: "Date Integrity Engine:",
                text: "Editing hotel nights redistributes the difference across the remaining stay so total nights and departure date stay fixed"
              },
              { bold: "Hierarchical Selection:", text: "Country to city to hotel to room, with pick order carried through the itinerary and exported documents" },
              { bold: "Reference Data:", text: "Countries, cities, airports, airlines, hotels, rooms and tours" },
              { bold: "Full Translation Parity:", text: "Complete English/Arabic coverage across every screen" },
              {
                bold: "Front-End Only:",
                text: "A client-side application with no backend — data persists in browser storage, and the user switcher is a placeholder rather than real authentication"
              }
            ]
          }
        },
        {
          id: "ssdf",
          name: "SSDF",
          headline: "A grant submission and evaluation workflow system for the SSDF charity, serving three distinct user types — beneficiaries, administrators and board members — with automated proposal evaluation and project follow-up tracking.",
          features: {
            beneficiaries: [
              { bold: "Streamlined project submission:", text: "Empowers beneficiaries to seamlessly submit project proposals." },
              { bold: "Project management capabilities:", text: "Enables effective project management through a dedicated section." }
            ],
            admin: [
              { bold: "Centralized management dashboard:", text: "Comprehensive control panel for managing all aspects of project funding." },
              { bold: "Simplified project evaluation:", text: "Automated evaluation system for prompt assessment." },
              { bold: "Effortless project tracking:", text: "Follow-up forms for continuous project monitoring." }
            ],
            chairman: [
              { bold: "Comprehensive project overview:", text: "Access to comprehensive reports on all project aspects." },
              { bold: "Strategic decision-making support:", text: "Actionable insights for informed strategic decisions." }
            ]
          }
        },
        {
          id: "nujoud-express",
          name: "Nujoud Express",
          headline: "A laundry operations management system with an admin panel for services and pricing, a customer service dashboard for order intake and tracking, and a reporting module.",
          features: {
            intro: "Key features include:",
            items: [
              { bold: "Admin panel:", text: "Effortlessly create, edit, and manage services, garment types, and pricing options." },
              { bold: "Customer service dashboard:", text: "Streamline order intake, track progress, and maintain customer records efficiently." },
              { bold: "Reporting module:", text: "Generate detailed reports on orders, revenue, inventory, and customer behavior." }
            ]
          }
        },
        {
          id: "blue-bus",
          name: "Blue Bus",
          headline: "A seat booking and trip management system with a scheduling control panel and real-time trip information.",
          description: [
            { bold: "Seamless booking experience:", text: "User-friendly web application for booking seats on short trips." },
            { bold: "Streamlined trip management:", text: "Comprehensive control panel for trip planning and scheduling." },
            { bold: "Enhanced transparency:", text: "Real-time trip information display." }
          ],
          builtWith: ["WordPress (custom-coded)", "PHP", "MySQL", "JavaScript"]
        },
        {
          id: "clay-design",
          name: "Clay Design",
          description: [
            "An e-commerce application with cart, secure checkout, and product and order administration.",
            "Customers browse collections, view detailed product information and complete purchases on a responsive storefront."
          ]
        },
        {
          id: "3nab-cafe",
          name: "3nab Cafe",
          headline: "Designed a dynamic menu website for 3nab Café & Restaurant, transforming both owner and customer experiences.",
          features: {
            owners: [
              "Seamless menu management through an intuitive interface.",
              "Enhanced customer engagement with clear product descriptions and pricing.",
              "Direct customer feedback via an online complaint system."
            ],
            customers: [
              "Exploring the menu conveniently before stepping into the café.",
              "Making informed choices with detailed descriptions and prices.",
              "Providing valuable feedback directly to the management."
            ]
          },
          builtWith: ["WordPress", "PHP", "MySQL"]
        },
        {
          id: "elite-wherego",
          name: "Elite Wherego",
          description: [
            "A company web platform integrated with the mobile application backend, giving users access to all twelve mobile services directly from the web.",
            "Enables users to place orders and manage their accounts seamlessly across web and mobile."
          ],
          builtWith: ["WordPress (custom-coded)", "PHP", "MySQL", "JavaScript"]
        },
        {
          id: "rihlaty",
          name: "Rihlaty",
          description: [
            "Developed a fully functional e-commerce website for trip and travel package bookings.",
            "The platform allows users to browse, book, and manage trips effortlessly.",
            "The site reflects Rihlaty's premium offerings and integrates secure booking functionality tailored for Arab tourists"
          ],
          builtWith: ["WordPress", "PHP", "MySQL"]
        },
        {
          id: "cssd",
          name: "CSSD",
          description: [
            { bold: "Enhanced organizational visibility:", text: "Comprehensive website showcasing the organization's mission and impact." },
            { bold: "Streamlined content management:", text: "User-friendly control panel for effortless content updates." },
            { bold: "Engagement platform:", text: "Dedicated blog for sharing inspiring stories." },
            { bold: "User-friendly interface:", text: "Modern design that effectively conveys the charity's mission." }
          ],
          builtWith: ["WordPress", "PHP", "MySQL"]
        },
        {
          id: "yawna",
          name: "Yawna",
          description: [
            "Website showcasing the work of researcher Raymond Wihbe on Aramaic language and Maaloula antiquities.",
            "Comprehensive CMS for easy content management.",
            "Visually appealing interface with multimedia elements."
          ],
          builtWith: ["WordPress", "PHP", "MySQL"]
        },
        {
          id: "aplus-restaurant",
          name: "Aplus Restaurant",
          description: [
            { bold: "Enhanced online presence:", text: "User-friendly website with interactive menu and event management." },
            { bold: "Streamlined operations:", text: "Back-end management system for menu and order optimization." }
          ],
          builtWith: ["WordPress", "PHP", "MySQL"]
        },
        {
          id: "jory-cafe",
          name: "Jory Café",
          description: [
            { bold: "Enhanced online presence:", text: "User-friendly website with interactive menu and event management." },
            { bold: "Streamlined operations:", text: "Back-end management system for efficient operations." }
          ],
          builtWith: ["WordPress", "PHP", "MySQL"]
        },
        {
          id: "casa-cafe",
          name: "Casa Café",
          description: [
            { bold: "Enhanced online presence:", text: "User-friendly website for CASA Cafe & Restaurant in UAE." },
            { bold: "Streamlined operations:", text: "Back-end management system for data-driven decision-making." }
          ],
          builtWith: ["WordPress", "PHP", "MySQL"]
        },
        {
          id: "safe-gate-group",
          name: "Safe Gate Group",
          description: ["A corporate site presenting Safe Gate Group's medical solutions, mission and global reach."],
          builtWith: ["WordPress", "PHP"]
        },
        {
          id: "hml-steel",
          name: "HML Steel",
          description: ["A corporate site presenting HML Steel's steel construction capabilities and industry track record."],
          builtWith: ["WordPress", "PHP"]
        },
        {
          id: "bin-lahej",
          name: "Bin Lahej",
          description: ["A corporate site presenting Bin Lahej's construction services, values and completed projects."],
          builtWith: ["WordPress", "PHP"]
        }
      ]
    },

    // GitHub Section
    github: {
      title: "Github Projects",
      intro: "Made my next projects open-source on GitHub, sharing my coding expertise and contributing to the developer community.",
      viewCode: "View Code",
      items: [
        {
          id: "chat-app",
          name: "Chat App",
          description: [
            "Real-time chat application using PHP, HTML, CSS, JavaScript, and MySQL.",
            "Real-time message delivery to all connected users.",
            "User-friendly interface for effortless messaging."
          ],
          builtWith: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"]
        },
        {
          id: "images-generator",
          name: "Images Generator",
          description: [
            "Image generation website using HTML, CSS, and JavaScript.",
            "Integrated OpenAI API for text-to-image generation.",
            "Users can input descriptions and specify image quantity."
          ],
          builtWith: ["JavaScript", "HTML", "CSS", "OpenAI API"]
        }
      ]
    },

    // References Section
    references: {
      title: "References",
      items: [
        { name: "MAGD RADWANIAN", position: "CEO", company: "CSSD" },
        { name: "NOUR KALAJI", position: "Marketing Manager", company: "Masar Syria" },
        { name: "TAREK ADAWES", position: "CEO", company: "Elite WhereGo" },
        { name: "Fridy Mctrade", position: "Owner", company: "3nab Cafe" },
        { name: "DIAB AL ASSAF", position: "Coordinator", company: "The Sacred Hearts Society" },
        { name: "RIMON WEHBI", position: "CEO", company: "Yawna" }
      ]
    },

    // Contact Section
    contact: {
      title: "Let's Work Together",
      subtitle: "Get In Touch",
      description: "Ready to bring your ideas to life? Let's connect and discuss how I can help with your next project.",
      emailLabel: "Email Me",
      phoneLabel: "Call Me",
      whatsappLabel: "WhatsApp",
      locationLabel: "Location",
      locationValue: "Dubai, United Arab Emirates",
      availableRemote: "Available Remote",
      connectTitle: "Connect With Me",
      connectSubtitle: "Follow me on social media for updates and insights",
      ctaTitle: "Ready to Start a Project?",
      ctaSubtitle: "Let's collaborate and build something amazing together",
      ctaButton: "Start a Conversation",
      downloadCV: "Download my CV"
    },

    // Footer
    footer: {
      title: "IT Consultant & Senior Full Stack Developer",
      tagline: "Building digital experiences that make a difference. Passionate about creating innovative web solutions.",
      quickLinks: "Quick Links",
      getInTouch: "Get In Touch",
      location: "Dubai, UAE",
      copyright: "All rights reserved.",
      madeWith: "Made with"
    },

    // Common
    common: {
      ownersEnjoy: "Owners enjoy:",
      customersBenefit: "Customers benefit from:",
      beneficiaries: "Beneficiaries:",
      admin: "Admin:",
      chairmanMembers: "Chairman Members:",
      viewCertificate: "View Certificate",
      showAll: "Show All Certificates",
      showLess: "Show Less",
      totalCertificates: "Total Certificates",
      organizations: "Organizations",
      yearsOfLearning: "Years of Learning",
      email: "Email",
      call: "Call",
      references: "References",
      companies: "Companies",
      industries: "Industries",
      interestedInReferences: "Interested in speaking with my references?",
      referencesOnRequest: "References available on request",
      builtWith: "Built with",
      getInTouch: "Get In Touch"
    }
  },

  // ==========================================
  // ARABIC
  // ==========================================
  ar: {
    // Meta & General
    lang: "ar",
    dir: "rtl",
    pageTitle: "فادي برهوم - معرض الأعمال",

    // Profile
    profile: {
      name: "فادي برهوم",
      jobTitle: "مستشار تقنية معلومات ومطور Full Stack أول"
    },

    // Navigation
    nav: {
      home: "الرئيسية",
      about: "نبذة عني",
      experience: "الخبرات",
      training: "التدريب والشهادات",
      portfolio: "أعمالي",
      github: "مشاريع GitHub",
      references: "المراجع",
      contact: "تواصل معي"
    },

    // Social Links
    socialLinks: {
      linkedin: "لينكد إن",
      github: "جيت هب",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      whatsapp: "واتساب"
    },

    // Hero Section
    hero: {
      description: "أبني منصات مؤسسية لجهات حكومية وجهات من القطاع الخاص في دولة الإمارات — أنظمة ثنائية اللغة لتقييم الخدمات وإدارة العمليات والأداء الاستراتيجي والتكامل مع الهوية الرقمية الوطنية.",
      typedItems: ["مستشار تقنية معلومات", "مطور Full Stack أول", "أخصائي تحول رقمي", "مهندس .NET و React"]
    },

    // About Section
    about: {
      title: "نبذة عني",
      jobTitle: "مستشار تقنية معلومات ومطور Full Stack أول",
      labels: {
        birthday: "تاريخ الميلاد",
        nationality: "الجنسية",
        location: "الموقع",
        phone: "الهاتف",
        email: "البريد الإلكتروني"
      },
      details: {
        birthday: "7 يونيو 1993",
        nationality: "سوري",
        location: "دبي، الإمارات",
        phone: "+971 507 704 776",
        email: "en.fadi.barhoum@gmail.com"
      },
      bio: "أنا مستشار تقنية معلومات ومطور Full Stack أول مقيم في دبي، بخبرة 8 سنوات في بناء التطبيقات المؤسسية من أولها إلى آخرها. يتركز عملي على ASP.NET Core وC# وSQL Server وReact مع TypeScript، إلى جانب Laravel وPHP. قدّمت منصات لجهات حكومية في دولة الإمارات شملت التكامل مع تسجيل الدخول الموحّد للهوية الوطنية، والمصادقة عبر دليل المؤسسة، وميزات مدعومة بالذكاء الاصطناعي — مع دعم كامل للغتين العربية والإنجليزية دائماً. أتولى المشاريع من تحليل المتطلبات مروراً بالبنية والتطوير والنشر وحتى التسليم."
    },

    // Skills Section (technical skills are not translated)
    skills: {
      title: "المهارات",
      softTitle: "المهارات الشخصية",
      groups: {
        backend: "الواجهة الخلفية",
        frontend: "الواجهة الأمامية",
        database: "قواعد البيانات",
        integration: "التكامل",
        tools: "الأدوات",
        cms: "أنظمة إدارة المحتوى"
      }
    },

    // Resume Section
    resume: {
      title: "السيرة الذاتية",
      education: "التعليم",
      experience: "الخبرة المهنية",
      activities: "الأنشطة",
      present: "حتى الآن",
      educationItems: [
        {
          title: "تكنولوجيا المعلومات - هندسة البرمجيات",
          period: "2012 - 2018",
          institution: "جامعة دمشق، دمشق، سوريا",
          link: "https://damascusuniversity.edu.sy/ite/"
        },
        {
          title: "ماجستير — علوم الويب",
          period: "2018 - 2020",
          institution: "الجامعة الافتراضية السورية",
          note: "أُنجزت المقررات الدراسية، ورسالة الماجستير قيد الإنجاز",
          link: null
        }
      ],
      experienceItems: [
        {
          title: "مستشار تقنية المعلومات",
          period: "10/2025 - حتى الآن",
          company: "IMPACT iN، دبي، الإمارات",
          link: null,
          responsibilities: [
            "قيادة مبادرات التحول الرقمي والاستشارات التقنية للعملاء في القطاعين الحكومي والخاص. تصميم وتنفيذ حلول ويب وتطبيقات هاتف قابلة للتوسع مع التركيز على البنية الحديثة وتجارب المستخدم السلسة.",
            "إجراء عمليات تدقيق تقنية شاملة تشمل البنية التحتية السحابية وتكامل الأنظمة وتحسين قواعد البيانات والامتثال للأمن السيبراني. تقديم الاستشارات حول أطر المصادقة والتحكم في الوصول واستراتيجيات النشر الآمن.",
            "ضمان التوافق مع معايير التميز في الخدمات الرقمية العالمية، بما في ذلك المتطلبات التنظيمية في الإمارات. إجراء تقييمات منظمة لأداء الأنظمة وتقديم توصيات مبنية على البيانات للتحسين.",
            "التعاون عبر الوظائف طوال دورة حياة المشروع، والربط بين أصحاب المصلحة التقنيين والتجاريين لتقديم حلول شاملة."
          ]
        },
        {
          title: "مطور Full Stack",
          period: "04/2024 - 09/2025",
          company: "Elite WhereGO",
          link: "https://elitewherego.com/",
          responsibilities: [
            "تطوير وصيانة موقع شامل يعرض خدمات الشركة ودمجه مع تطبيق الهاتف المحمول لتحسين تجربة المستخدم.",
            "دمج الموقع مع تطبيق الهاتف المحمول، مما يتيح تقديم الطلبات وإدارة الحسابات بسلاسة عبر المنصات."
          ]
        },
        {
          title: "مطور ويب | مطور Full Stack",
          period: "02/2018 - 08/2025",
          company: "عمل حر",
          link: null,
          responsibilities: [
            "التعاون مع العملاء لتحديد المتطلبات الوظيفية ونطاق المشروع.",
            "تصميم وتطوير واجهات ويب سهلة الاستخدام تلبي توقعات العملاء.",
            "بناء وصيانة قواعد بيانات قابلة للتوسع وفعالة لدعم وظائف الموقع.",
            "إنشاء وثائق برمجية شاملة للرجوع إليها والصيانة المستقبلية.",
            "تطوير ونشر مواقع ويب عالية الجودة للعملاء في مختلف الصناعات."
          ]
        },
        {
          title: "مطور ويب | مطور Full Stack",
          period: "01/2021 - 03/2022",
          company: "مسار سوريا، دمشق، سوريا",
          link: "https://www.facebook.com/Masar2018",
          responsibilities: [
            "التعاون الفعال مع العملاء لفهم متطلباتهم الوظيفية ونطاق المشروع.",
            "تصميم وتطوير واجهات ويب سهلة الاستخدام بنجاح.",
            "بناء وصيانة قواعد بيانات فعالة وقابلة للتوسع.",
            "إنشاء وثائق برمجية شاملة للرجوع إليها والصيانة.",
            "إدخال التخزين المؤقت وتحسين ملفات الموقع وضبط استعلامات قاعدة البيانات لتقليل زمن تحميل الصفحات في مواقع العملاء."
          ]
        },
        {
          title: "مطور برمجيات",
          period: "09/2019 - 04/2023",
          company: "الجمعية الخيرية للتنمية المستدامة، دمشق، سوريا",
          link: "https://cssd-ngos.org/",
          responsibilities: [
            "بناء ونشر حلول برمجية داخلية حلّت محل سير العمل اليدوي والورقي لسجلات المستفيدين والبرامج في الجمعية.",
            "تحديد الاختناقات التشغيلية المتكررة وتقديم حلول تقنية وحّدت تتبع الحالات وإعداد التقارير في نظام واحد.",
            "إنشاء وثائق برمجية شاملة لضمان فهم واضح وسهولة صيانة الكود.",
            "استخدام تدابير أمنية قوية لحماية الأصول الرقمية والبيانات."
          ]
        }
      ],
      activitiesItems: [
        {
          title: "مطور ويب",
          period: "05/2025 - حتى الآن",
          organization: "فريق عطاء حمدان التطوعي",
          link: null,
          responsibilities: [
            "تصميم وتطوير الموقع الرسمي لفريق عطاء حمدان التطوعي، وإنشاء منصة جذابة لعرض المبادرات الإنسانية والأنشطة التطوعية للفريق.",
            "بناء تطبيق هاتف متعدد المنصات لتسهيل تنسيق المتطوعين وإدارة الفعاليات والتفاعل المجتمعي.",
            "تنفيذ واجهات متجاوبة وسهلة الاستخدام لضمان الوصول السلس عبر جميع الأجهزة.",
            "دمج أنظمة الخلفية لتسجيل المتطوعين وتتبع التبرعات وإدارة الأنشطة."
          ]
        },
        {
          title: "أخصائي اجتماعي",
          period: "2021 - 2024",
          organization: "جمعية القلوب المقدسة (مركز التنظيم)، دمشق، سوريا",
          link: null,
          roles: [
            {
              role: "قائد فريق الأخصائيين الاجتماعيين",
              period: "أغسطس 2023 - يناير 2024",
              tasks: [
                "توفير القيادة والتوجيه لفريق من الأخصائيين الاجتماعيين.",
                "الإشراف على تطوير وتنفيذ المشاريع الجديدة.",
                "مراقبة وتقييم أداء الأخصائيين والبرامج.",
                "إعداد تقارير شهرية شاملة عن أنشطة العمل الاجتماعي.",
                "تمثيل الفريق والمنظمة في المحافل المهنية والمجتمعية.",
                "إدخال أدوات تقنية لتتبع الحالات وإعداد التقارير الشهرية حلّت محل السجلات الورقية اليدوية للفريق."
              ]
            },
            {
              role: "أخصائي اجتماعي",
              period: "مايو 2021 - أغسطس 2023",
              tasks: [
                "إجراء تقييمات الاحتياجات وتطوير خطط حالات مخصصة.",
                "تقديم الاستشارات والدعم للأفراد والعائلات.",
                "الدفاع عن حقوق العملاء وربطهم بالخدمات الضرورية.",
                "توثيق تقدم الحالات وضمان المتابعة في الوقت المناسب.",
                "الحفاظ على التواصل المفتوح مع العملاء والعائلات والمهنيين."
              ]
            }
          ]
        },
        {
          title: "متطوع",
          period: "2019 - 2022",
          organization: "GOPA-DERD، دمشق، سوريا",
          link: "https://gopaderd.org/en/",
          responsibilities: [
            "عضو نشط في فريق متطوعي التواصل والإغاثة (ORV).",
            "إجراء زيارات منتظمة للمستفيدين وتقديم الدعم.",
            "تحديد وتوثيق احتياجات المستفيدين.",
            "التعاون مع أعضاء الفريق لتخطيط وتنفيذ مبادرات التواصل.",
            "لعب دور حاسم في تعزيز العلاقات الإيجابية مع المستفيدين."
          ]
        },
        {
          title: "متطوع",
          period: "2016 - 2019",
          organization: "الجمعية الخيرية للتنمية المستدامة، دمشق، سوريا",
          link: "https://cssd-ngos.org/",
          responsibilities: [
            "متطوع مكرس في التخطيط الاستراتيجي وتنفيذ المبادرات الاجتماعية.",
            "إجراء مسوحات شاملة لتحديد احتياجات المستفيدين.",
            "جمع وتحليل البيانات لتطوير مشاريع فعالة.",
            "متابعة تقدم المشاريع وتقييم فعاليتها.",
            "استخدام الرؤى المكتسبة لتحسين خطط المشاريع المستقبلية."
          ]
        }
      ]
    },

    // Training Section
    training: {
      title: "التدريب والشهادات",
      items: [
        { title: "إتقان إطار عمل Laravel و PHP", date: "يونيو 2024", institution: "Board Infinity", link: "https://coursera.org/share/1988d1bc1755847439d006f8a4afc9cb" },
        { title: "اللغة الإنجليزية", date: "مارس 2021 - مارس 2022", institution: "مركز اللغات والتدريب المتقدم", link: "https://www.facebook.com/profile.php?id=100064771954240" },
        { title: "إدارة قواعد بيانات المستفيدين", date: "مايو 2021", institution: "برنامج الأمم المتحدة الإنمائي", link: "https://www.undp.org/" },
        { title: "الأمن الغذائي وسبل العيش", date: "يناير 2021", institution: "منتدى التنمية والثقافة والحوار", link: "https://fdcd.org/" },
        { title: "مشروع سفير", date: "ديسمبر 2020", institution: "منتدى التنمية والثقافة والحوار", link: "https://fdcd.org/" },
        { title: "الدعم النفسي الاجتماعي", date: "مارس 2020", institution: "منتدى التنمية والثقافة والحوار", link: "https://fdcd.org/" },
        { title: "المهارات الشخصية", date: "أكتوبر 2019", institution: "برنامج الأمم المتحدة الإنمائي", link: "https://www.undp.org/" },
        { title: "كتابة المقترحات", date: "سبتمبر 2019", institution: "برنامج الأمم المتحدة الإنمائي", link: "https://www.undp.org/" },
        { title: "الحماية والدعم النفسي الاجتماعي والإحالات", date: "مارس 2019", institution: "منتدى التنمية والثقافة والحوار", link: "https://fdcd.org/" },
        { title: "الدعم النفسي الاجتماعي للأطفال في حالات الطوارئ", date: "أبريل 2018", institution: "منتدى التنمية والثقافة والحوار", link: "https://fdcd.org/" },
        { title: "اللغة الإنجليزية", date: "سبتمبر 2017 - فبراير 2018", institution: "لينغوافون", link: "https://linguaphone.co.uk/" },
        { title: "المعايير الدنيا للعمل الإنساني - مشروع سفير", date: "ديسمبر 2017", institution: "الجمعية الخيرية للتنمية المستدامة", link: "https://cssd-ngos.org/" },
        { title: "حماية الطفل وتخطيط الأنشطة", date: "نوفمبر 2017", institution: "الجمعية الخيرية للتنمية المستدامة", link: "https://cssd-ngos.org/" },
        { title: "سياسة حماية الطفل", date: "نوفمبر 2017", institution: "مجلس كنائس الشرق الأوسط", link: "https://www.mecc.org/" },
        { title: "نهج الإطار المنطقي - إدارة دورة المشروع", date: "سبتمبر 2017", institution: "الاستشارات السورية الأوروبية للأعمال", link: "https://www.sebcsyria.com/" },
        { title: "أساسيات حماية الطفل", date: "أغسطس 2017", institution: "الجمعية الخيرية للتنمية المستدامة", link: "https://cssd-ngos.org/" },
        { title: "دبلوم مساعد في البرمجة اللغوية العصبية", date: "فبراير 2015 - مارس 2015", institution: "المركز الدولي للبناء الإنساني", link: "http://www.ichc.info/" },
        { title: "إدارة الوقت", date: "مارس 2015", institution: "المركز الدولي للبناء الإنساني", link: "http://www.ichc.info/" },
        { title: "مهارات ريادة الأعمال وإدارة الأعمال", date: "أغسطس 2014", institution: "الاستشارات السورية الأوروبية للأعمال", link: "https://www.sebcsyria.com/" },
        { title: "صيانة الهواتف المحمولة", date: "مايو 2014 - يوليو 2014", institution: "نيو هورايزونز", link: "https://www.newhorizons.com/" }
      ]
    },

    // Portfolio Section
    portfolio: {
      title: "أعمالي",
      viewGif: "عرض العرض التوضيحي",
      viewSite: "زيارة الموقع",
      notAvailable: "غير متاح",
      items: [
        {
          id: "zerox",
          name: "ZeroX",
          subtitle: "منصة تقليل البيروقراطية الحكومية",
          headline: "منصة ثنائية اللغة (عربي/إنجليزي) بُنيت لوزارة الصناعة والتكنولوجيا المتقدمة في دولة الإمارات، ترقمن آلية تقييم الخدمات الحكومية والعمليات الداخلية وتبسيطها وقياسها قبل التقليل وبعده.",
          builtWith: ["ASP.NET Core 8", "React 19", "TypeScript", "SQL Server", "Entity Framework Core"],
          features: {
            intro: "أبرز القدرات:",
            items: [
              {
                bold: "التكامل مع الهوية الرقمية UAE Pass:",
                text: "تسجيل دخول موحّد على المستوى الوطني عبر تدفق OAuth 2.0 مخصص من نوع Authorization Code، بُني ليطابق بوابة الهوية لدى الوزارة"
              },
              { bold: "التقييم متعدد المحاور:", text: "تقييم الخدمات عبر خمسة محاور موزونة مع محرك تصنيف قائم على المصفوفات" },
              { bold: "تصفير العمليات:", text: "هيكل تنظيمي كامل من القطاع وصولاً إلى خطوات الإجراء الفردية، مع مقارنة تلقائية لنتائج التقليل قبل وبعد" },
              { bold: "الاستيراد الجماعي:", text: "استيراد ملفات Excel ضمن معاملة واحدة يحوّل الجداول المسطّحة إلى هيكل من خمسة مستويات مع تراجع كامل عند التعارض" },
              { bold: "ثنائي اللغة بالكامل:", text: "عربي/إنجليزي مع دعم كامل لاتجاه RTL في جميع الشاشات" }
            ]
          }
        },
        {
          id: "impact7s",
          name: "Impact7S",
          subtitle: "منصة تقييم التميز في الخدمات — سبع نجوم",
          headline: "منصة مؤسسية لتقييم التميز المؤسسي، مطبَّقة لدى جهات حكومية وجهات من القطاع الخاص في دولة الإمارات لتنفيذ دورة التقييم الكاملة من الأسئلة والشواهد وحتى احتساب النتائج وخطط التحسين والمتابعة.",
          builtWith: ["ASP.NET Core 8", "React 19", "TypeScript", "SQL Server", "Entity Framework Core", "Azure OpenAI"],
          features: {
            intro: "أبرز القدرات:",
            items: [
              { bold: "محرك تقييم النضج:", text: "احتساب موزون متعدد المستويات عبر قنوات الخدمة والشواهد على مستوى الجهة، ينتج تصنيفاً من 0 إلى 7 نجوم" },
              { bold: "مصادقة هجينة:", text: "توحيد LDAP/Active Directory المؤسسي مع الحسابات المحلية خلف تدفق تسجيل دخول واحد" },
              { bold: "صلاحيات دقيقة:", text: "ستة أدوار محدّدة النطاق حسب قناة الخدمة والمركز" },
              { bold: "تخطيط الإجراءات:", text: "تتبع التحسينات مع الأولويات والمتابعات وإدارة المهام بأسلوب Kanban" },
              { bold: "المساعد الذكي:", text: "مساعد مدمج يعتمد Azure OpenAI يجيب عن الأسئلة انطلاقاً من بيانات النظام نفسه" },
              { bold: "إدارة المراكز:", text: "تحديد المواقع الجغرافية وخرائط تفاعلية للتقييم متعدد المواقع" },
              { bold: "التقارير:", text: "توليد تقارير PDF بدعم كامل للغة العربية" }
            ]
          }
        },
        {
          id: "impactspcx",
          name: "ImpactSPcx",
          subtitle: "إدارة العمليات والخدمات وتجربة المتعامل",
          headline: "مستودع رقمي يحل محل ملفات Word وVisio المتفرقة بنظام واحد محوكم لتوثيق العمليات وبطاقات الخدمة ورسم رحلة المتعامل وقياس التحسين قبل وبعد بشكل ملموس — مطبَّق لدى جهات حكومية وجهات من القطاع الخاص في دولة الإمارات.",
          builtWith: ["ASP.NET Core 8", "React 19", "TypeScript", "SQL Server", "Entity Framework Core", "Azure OpenAI"],
          features: {
            intro: "أبرز القدرات:",
            items: [
              { bold: "محرر المخططات التفاعلي:", text: "رسم مخططات العمليات بدعم اتجاه RTL مع تراجع وإعادة وتصدير كصورة أو ملف PDF" },
              { bold: "استيراد Visio:", text: "مستورد لملفات ‎.vsdx يعمل داخل المتصفح بالكامل ودون أي مكتبات خارجية" },
              { bold: "دورة الاعتماد:", text: "تتبع تغييرات المنسّق مقابل سجل تدقيق مع تراجع تلقائي عند الرفض عبر خمسة أنواع من الإجراءات" },
              { bold: "رسم رحلة المتعامل:", text: "رسم التجربة في الوضعين الحالي والمستقبلي مع تتبع مشاعر المتعامل" },
              { bold: "بطاقات الخدمة:", text: "توثيق كامل للخدمة يشمل القنوات والمتطلبات والرسوم والأوقات" },
              { bold: "المساعد الذكي:", text: "مساعد يعتمد Azure OpenAI يستعلم من بيانات النظام نفسه" },
              { bold: "التصدير:", text: "إخراج بصيغتي PDF وExcel في جميع الوحدات" }
            ]
          }
        },
        {
          id: "impactst",
          name: "ImpactST (S-Track)",
          subtitle: "منصة إدارة الأداء الاستراتيجي",
          headline: "منصة تربط الاستراتيجية بالتنفيذ للجهات الحكومية، تصل الرؤية والأهداف بمؤشرات الأداء والخطط التشغيلية وتقارير الأداء المُدقَّقة ضمن مسار واحد محوكم.",
          builtWith: ["ASP.NET Core 8", "React 19", "TypeScript", "Tailwind CSS", "SQL Server", "Entity Framework Core", "Azure OpenAI"],
          features: {
            intro: "أبرز القدرات:",
            items: [
              { bold: "هرمية الأهداف:", text: "أهداف استراتيجية مرتبطة بأهداف أعلى مع كشف الحلقات الدائرية وفرض سقف للأوزان يمنع الاحتساب المزدوج في طبقة التقارير" },
              { bold: "محرك معادلات المؤشرات:", text: "مُقيّم تعابير على الخادم يدعم المصادر اليدوية والمعادلات وواجهات API الخارجية، مع تسجيل تدقيقي كامل للمدخلات" },
              { bold: "التخطيط التشغيلي:", text: "مشاريع ومبادرات وأنشطة مع محطات إنجاز وتتبع للمهام" },
              { bold: "دورة التحقق:", text: "مراجعة ما تقدمه الإدارات واعتماده قبل دخوله في التقارير" },
              { bold: "لوحات تنفيذية:", text: "خرائط استراتيجية ومقارنة بين الإدارات وتحليلات لمؤشرات الأداء" },
              { bold: "سجل تدقيق كامل:", text: "تتبع كل تغيير مع التحكم في التزامن المتفائل" }
            ]
          }
        },
        {
          id: "impactls",
          name: "ImpactLS",
          subtitle: "منصة ترخيص البرمجيات وإدارة الاستحقاقات",
          headline: "منصة داخلية تُصدر مفاتيح التراخيص وتحوكمها لمجموعة منتجات الشركة، وتتيح لكل عميل تفعيل الأنظمة التي اشتراها ضمن مدة اشتراك وحدود مستخدمين محددة.",
          builtWith: ["ASP.NET Core 10", "React 19", "TypeScript", "SQL Server", "Entity Framework Core"],
          features: {
            intro: "أبرز القدرات:",
            items: [
              { bold: "تراخيص موقّعة رقمياً:", text: "كل ترخيص موقّع تشفيرياً وقابل للتحقق، فتُرفض أي شروط معدَّلة تلقائياً" },
              { bold: "تحقق دون اتصال:", text: "تتحقق الأنظمة المرخّصة ذاتياً بالكامل دون أي اتصال بخادم تراخيص — وهو أمر أساسي في الشبكات الحكومية المغلقة" },
              { bold: "التحكم بالاستحقاقات:", text: "تواريخ انتهاء وحدود مستخدمين لكل عميل تُطبَّق على مستوى المنتج" },
              { bold: "تعدد المنتجات:", text: "حوكمة أربعة منتجات منفصلة للشركة من وحدة تحكم واحدة" },
              { bold: "توثيق التكامل:", text: "مواصفة كاملة كُتبت لفرق المنتجات المستهلكة للنظام" }
            ]
          }
        },
        {
          id: "impactms",
          name: "ImpactMS",
          subtitle: "منصة عمليات التسوق السري",
          headline: "المنصة التشغيلية التي تدير خط خدمة التسوق السري لدى الشركة لعملاء حكوميين في دولة الإمارات — وتغطي تصميم الاستبيانات وتوزيع الزيارات الميدانية على المتسوقين وتدقيق التقارير المقدَّمة وإعداد التقرير النهائي للعميل.",
          builtWith: ["Laravel 11", "PHP 8.2", "React 18", "MySQL", "Vite"],
          features: {
            intro: "أبرز القدرات:",
            items: [
              { bold: "منشئ الاستبيانات:", text: "منشئ بالسحب والإفلات يدعم اثني عشر نوعاً من الأسئلة عبر نماذج متعددة الصفحات" },
              { bold: "سير عمل بأربعة أدوار:", text: "مسؤول النظام ومدير المشروع والمتسوق والمدقق، ولكلٍّ منهم نطاق بياناته الخاص" },
              { bold: "آلة حالات المهام:", text: "تسع حالات صريحة مع انتقالات مُلزمة تمنع تخطي المراحل" },
              { bold: "التوزيع الميداني:", text: "توزيع الزيارات حسب الموقع الجغرافي مع خرائط تفاعلية" },
              { bold: "التدقيق والتقييم:", text: "مراجعة لكل سؤال مع النقاط والملاحظات وإشارات الصلاحية" },
              { bold: "تقارير العملاء:", text: "تقارير PDF بهوية بصرية مولّدة وفق مواصفة تصميم مؤسسية" },
              { bold: "ثنائي اللغة:", text: "عربي/إنجليزي مع دعم اتجاه RTL" }
            ]
          }
        },
        {
          id: "ivari",
          name: "Ivari Hair Center",
          subtitle: "منصة تجارة إلكترونية وحجز مواعيد ثنائية اللغة",
          headline: "منصة إنتاجية للتجارة الإلكترونية وحجز المواعيد لمركز شعر في دبي، تبيع المنتجات بخيارات اللون والطول وتدير حجوزات الخدمات ومواعيد التركيب ضمن نظام واحد.",
          builtWith: ["Laravel 12", "PHP 8.2", "React 19", "TypeScript", "Inertia.js", "Filament 5", "Tailwind CSS 4", "Vite 7", "MySQL"],
          features: {
            intro: "أبرز القدرات:",
            items: [
              {
                bold: "بوابتا دفع:",
                text: "الدفع بالبطاقة والتقسيط بنظام «اشترِ الآن وادفع لاحقاً»، وكلاهما عبر تدفق إعادة توجيه آمن من جهة الخادم بحيث لا تمرّ بيانات البطاقة على الخادم"
              },
              { bold: "ثلاثة مسارات شراء:", text: "باقة مع موعد، أو طلب منتج عادي، أو حجز موعد منفرد" },
              { bold: "محرك المواعيد:", text: "جداول العمل والفترات الزمنية وإدارة التوافر" },
              { bold: "خيارات المنتج:", text: "خيارات اللون والطول مع ترتيب يدوي مخصص" },
              { bold: "لوحة الإدارة:", text: "لوحة مبنية على Filament تغطي المنتجات والطلبات والمواعيد والمدفوعات والمحتوى" },
              { bold: "ثنائي اللغة بالكامل:", text: "عربي/إنجليزي مع دعم كامل لاتجاه RTL في المتجر وصفحة الدفع" }
            ]
          }
        },
        {
          id: "marmusa",
          name: "Mar Musa",
          subtitle: "نظام إدارة مالية متعدد العملات",
          headline: "منصة محاسبة مخصصة لجمعية غير ربحية تدير صندوقاً مركزياً ومشاريع وحسابات أعضاء فردية عبر خمس عملات — نحو 20,000 سطر من كود PHP المخصص خلف 65 شاشة إدارية و11 جدول قاعدة بيانات مبنية لهذا الغرض.",
          builtWith: ["PHP", "MariaDB", "JavaScript", "PhpSpreadsheet", "WordPress كإطار تطبيقي"],
          features: {
            intro: "أبرز القدرات:",
            items: [
              { bold: "ستة أنواع من الحركات:", text: "إيداعات ومدفوعات وسحوبات وإيرادات ومصروفات وصرف عملات وديون، موحّدة في سجل واحد" },
              { bold: "ترقيم إيصالات موحّد:", text: "قيد تفرّد لرقم الإيصال على مستوى النظام بأكمله، مطبَّق عبر ستة جداول حركات منفصلة" },
              {
                bold: "التصدير والاستيراد:",
                text: "29 نقطة نهاية تنتج تقارير Excel وPDF وZIP، إضافة إلى قوالب استيراد Excel بقوائم منسدلة مقيّدة بالبيانات ومرتبطة بالبيانات الحية"
              },
              { bold: "فصل الصلاحيات:", text: "المديرون يرون كل شيء، والأعضاء يرون سجلاتهم فقط" },
              { bold: "صور الإيصالات:", text: "إرفاق صورة لكل حركة مع معالجة مرنة للمسارات عبر البيئات المختلفة" },
              { bold: "أربع لغات:", text: "العربية والإنجليزية والفرنسية والإيطالية مع دعم كامل لاتجاه RTL" }
            ]
          }
        },
        {
          id: "rihlaty-dashboard",
          name: "لوحة تحكم رحلتي",
          subtitle: "لوحة تشغيل لوكالة سفر",
          headline: "لوحة تحكم إدارية ثنائية اللغة تعمل في الواجهة الأمامية لوكالة سفر، تبني باقات سياحية وحجوزات نقل وقوالب قابلة لإعادة الاستخدام عبر معالجات متعددة الخطوات، ثم تصدّر مستندات جاهزة للعميل. بُنيت لنفس عميل موقع رحلتي العام، كأداة داخلية منفصلة لهم.",
          builtWith: ["React 18", "Vite", "React Router", "نظام ترجمة مخصص", "توليد PDF في المتصفح"],
          features: {
            intro: "أبرز القدرات:",
            items: [
              { bold: "ثلاثة معالجات متعددة الخطوات:", text: "منشئ الباقات ومنشئ القوالب ومنشئ النقل" },
              { bold: "تصدير المستندات:", text: "عروض أسعار وفواتير وقسائم فنادق تُصدَّر إلى PDF داخل المتصفح مع الحفاظ على تشكيل النص العربي واتجاه RTL" },
              { bold: "محرك تماسك التواريخ:", text: "تعديل ليالي الفندق يعيد توزيع الفارق على بقية الإقامة بحيث يبقى إجمالي الليالي وتاريخ المغادرة ثابتين" },
              { bold: "اختيار هرمي:", text: "من الدولة إلى المدينة إلى الفندق إلى الغرفة، مع نقل ترتيب الاختيار إلى برنامج الرحلة والمستندات المصدَّرة" },
              { bold: "بيانات مرجعية:", text: "الدول والمدن والمطارات وشركات الطيران والفنادق والغرف والجولات" },
              { bold: "تطابق كامل للترجمة:", text: "تغطية إنجليزية/عربية كاملة في جميع الشاشات" },
              { bold: "واجهة أمامية فقط:", text: "تطبيق يعمل في المتصفح دون خادم خلفي — تُحفظ البيانات في تخزين المتصفح، ومبدّل المستخدم عنصر مؤقت وليس مصادقة حقيقية" }
            ]
          }
        },
        {
          id: "ssdf",
          name: "SSDF",
          headline: "نظام سير عمل لتقديم المنح وتقييمها لجمعية SSDF، يخدم ثلاثة أنواع من المستخدمين — المستفيدون والإداريون وأعضاء مجلس الإدارة — مع تقييم آلي للمقترحات وتتبع لمتابعة المشاريع.",
          features: {
            beneficiaries: [
              { bold: "تقديم مشاريع مبسط:", text: "يمكّن المستفيدين من تقديم مقترحات المشاريع بسلاسة." },
              { bold: "قدرات إدارة المشاريع:", text: "يتيح إدارة المشاريع بفعالية من خلال قسم مخصص." }
            ],
            admin: [
              { bold: "لوحة إدارة مركزية:", text: "لوحة تحكم شاملة لإدارة جميع جوانب تمويل المشاريع." },
              { bold: "تقييم مبسط للمشاريع:", text: "نظام تقييم آلي للتقييم السريع." },
              { bold: "تتبع سهل للمشاريع:", text: "نماذج متابعة لمراقبة المشاريع المستمرة." }
            ],
            chairman: [
              { bold: "نظرة شاملة على المشاريع:", text: "الوصول إلى تقارير شاملة عن جميع جوانب المشاريع." },
              { bold: "دعم اتخاذ القرارات الاستراتيجية:", text: "رؤى قابلة للتنفيذ لقرارات استراتيجية مستنيرة." }
            ]
          }
        },
        {
          id: "nujoud-express",
          name: "نجود إكسبريس",
          headline: "نظام لإدارة عمليات المغاسل يضم لوحة إدارة للخدمات والتسعير، ولوحة خدمة عملاء لاستقبال الطلبات وتتبعها، ووحدة للتقارير.",
          features: {
            intro: "الميزات الرئيسية تشمل:",
            items: [
              { bold: "لوحة الإدارة:", text: "إنشاء وتعديل وإدارة الخدمات وأنواع الملابس وخيارات التسعير بسهولة." },
              { bold: "لوحة خدمة العملاء:", text: "تبسيط استلام الطلبات وتتبع التقدم والحفاظ على سجلات العملاء بكفاءة." },
              { bold: "وحدة التقارير:", text: "إنشاء تقارير مفصلة عن الطلبات والإيرادات والمخزون وسلوك العملاء." }
            ]
          }
        },
        {
          id: "blue-bus",
          name: "الباص الأزرق",
          headline: "نظام لحجز المقاعد وإدارة الرحلات مع لوحة تحكم للجدولة ومعلومات فورية عن الرحلات.",
          description: [
            { bold: "تجربة حجز سلسة:", text: "تطبيق ويب سهل الاستخدام لحجز المقاعد في الرحلات القصيرة." },
            { bold: "إدارة رحلات مبسطة:", text: "لوحة تحكم شاملة لتخطيط وجدولة الرحلات." },
            { bold: "شفافية معززة:", text: "عرض معلومات الرحلة في الوقت الفعلي." }
          ],
          builtWith: ["WordPress (custom-coded)", "PHP", "MySQL", "JavaScript"]
        },
        {
          id: "clay-design",
          name: "Clay Design",
          description: [
            "تطبيق تجارة إلكترونية يضم سلة شراء ودفعاً آمناً وإدارة للمنتجات والطلبات.",
            "يتصفح العملاء المجموعات ويطّلعون على تفاصيل المنتجات ويتمّون الشراء عبر متجر متجاوب مع جميع الشاشات."
          ]
        },
        {
          id: "3nab-cafe",
          name: "مقهى عنب",
          headline: "تصميم موقع قائمة ديناميكي لمقهى ومطعم عنب، يحول تجربة المالك والعميل.",
          features: {
            owners: [
              "إدارة قائمة سلسة من خلال واجهة بديهية.",
              "تعزيز مشاركة العملاء مع أوصاف وأسعار واضحة للمنتجات.",
              "ملاحظات العملاء المباشرة عبر نظام الشكاوى عبر الإنترنت."
            ],
            customers: ["استكشاف القائمة بسهولة قبل الدخول إلى المقهى.", "اتخاذ خيارات مستنيرة مع أوصاف وأسعار مفصلة.", "تقديم ملاحظات قيمة مباشرة للإدارة."]
          },
          builtWith: ["WordPress", "PHP", "MySQL"]
        },
        {
          id: "elite-wherego",
          name: "Elite Wherego",
          description: [
            "منصة ويب للشركة متكاملة مع الواجهة الخلفية لتطبيق الهاتف، تتيح للمستخدمين الوصول إلى خدمات التطبيق الاثنتي عشرة جميعها مباشرة من الويب.",
            "تتيح للمستخدمين تقديم الطلبات وإدارة حساباتهم بسلاسة عبر الويب والهاتف."
          ],
          builtWith: ["WordPress (custom-coded)", "PHP", "MySQL", "JavaScript"]
        },
        {
          id: "rihlaty",
          name: "رحلتي",
          description: [
            "تطوير موقع تجارة إلكترونية متكامل لحجز الرحلات وباقات السفر.",
            "تتيح المنصة للمستخدمين تصفح وحجز وإدارة الرحلات بسهولة.",
            "يعكس الموقع عروض رحلتي المميزة ويدمج وظائف حجز آمنة مخصصة للسياح العرب"
          ],
          builtWith: ["WordPress", "PHP", "MySQL"]
        },
        {
          id: "cssd",
          name: "CSSD",
          description: [
            { bold: "تعزيز الظهور المؤسسي:", text: "موقع شامل يعرض مهمة وتأثير المنظمة." },
            { bold: "إدارة محتوى مبسطة:", text: "لوحة تحكم سهلة الاستخدام لتحديثات المحتوى بسهولة." },
            { bold: "منصة تفاعل:", text: "مدونة مخصصة لمشاركة القصص الملهمة." },
            { bold: "واجهة سهلة الاستخدام:", text: "تصميم حديث ينقل مهمة الجمعية بفعالية." }
          ],
          builtWith: ["WordPress", "PHP", "MySQL"]
        },
        {
          id: "yawna",
          name: "يونا",
          description: [
            "موقع يعرض عمل الباحث ريمون ويهبي عن اللغة الآرامية وآثار معلولا.",
            "نظام إدارة محتوى شامل لسهولة الإدارة.",
            "واجهة جذابة بصرياً مع عناصر وسائط متعددة."
          ],
          builtWith: ["WordPress", "PHP", "MySQL"]
        },
        {
          id: "aplus-restaurant",
          name: "مطعم A+",
          description: [
            { bold: "حضور محسن عبر الإنترنت:", text: "موقع سهل الاستخدام مع قائمة تفاعلية وإدارة الفعاليات." },
            { bold: "عمليات مبسطة:", text: "نظام إدارة خلفي لتحسين القائمة والطلبات." }
          ],
          builtWith: ["WordPress", "PHP", "MySQL"]
        },
        {
          id: "jory-cafe",
          name: "مقهى جوري",
          description: [
            { bold: "حضور محسن عبر الإنترنت:", text: "موقع سهل الاستخدام مع قائمة تفاعلية وإدارة الفعاليات." },
            { bold: "عمليات مبسطة:", text: "نظام إدارة خلفي للعمليات الفعالة." }
          ],
          builtWith: ["WordPress", "PHP", "MySQL"]
        },
        {
          id: "casa-cafe",
          name: "مقهى كازا",
          description: [
            { bold: "حضور محسن عبر الإنترنت:", text: "موقع سهل الاستخدام لمقهى ومطعم كازا في الإمارات." },
            { bold: "عمليات مبسطة:", text: "نظام إدارة خلفي لاتخاذ القرارات المبنية على البيانات." }
          ],
          builtWith: ["WordPress", "PHP", "MySQL"]
        },
        {
          id: "safe-gate-group",
          name: "Safe Gate Group",
          description: ["موقع تعريفي يعرض حلول Safe Gate Group الطبية ورسالتها وانتشارها العالمي."],
          builtWith: ["WordPress", "PHP"]
        },
        {
          id: "hml-steel",
          name: "HML Steel",
          description: ["موقع تعريفي يعرض قدرات HML Steel في إنشاءات الحديد وسجلها في القطاع."],
          builtWith: ["WordPress", "PHP"]
        },
        {
          id: "bin-lahej",
          name: "بن لاحج",
          description: ["موقع تعريفي يعرض خدمات Bin Lahej الإنشائية وقيمها ومشاريعها المنجزة."],
          builtWith: ["WordPress", "PHP"]
        }
      ]
    },

    // GitHub Section
    github: {
      title: "مشاريع Github",
      intro: "جعلت مشاريعي مفتوحة المصدر على GitHub، لمشاركة خبرتي في البرمجة والمساهمة في مجتمع المطورين.",
      viewCode: "عرض الكود",
      items: [
        {
          id: "chat-app",
          name: "تطبيق المحادثة",
          description: [
            "تطبيق محادثة في الوقت الفعلي باستخدام PHP و HTML و CSS و JavaScript و MySQL.",
            "توصيل الرسائل في الوقت الفعلي لجميع المستخدمين المتصلين.",
            "واجهة سهلة الاستخدام للمراسلة السلسة."
          ],
          builtWith: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"]
        },
        {
          id: "images-generator",
          name: "مولد الصور",
          description: [
            "موقع توليد صور باستخدام HTML و CSS و JavaScript.",
            "دمج OpenAI API لتوليد الصور من النص.",
            "يمكن للمستخدمين إدخال الأوصاف وتحديد كمية الصور."
          ],
          builtWith: ["JavaScript", "HTML", "CSS", "OpenAI API"]
        }
      ]
    },

    // References Section
    references: {
      title: "المراجع",
      items: [
        { name: "مجد رضوانيان", position: "المدير التنفيذي", company: "CSSD" },
        { name: "نور قلعجي", position: "مدير التسويق", company: "Masar Syria"},
        { name: "طارق عداوس", position: "المدير التنفيذي", company: "Elite WhereGo" },
        { name: "فريدي مكتراد", position: "المالك", company: "3nab Cafe" },
        { name: "دياب العساف", position: "المنسق", company: "The Sacred Hearts Society"  },
        { name: "ريمون وهبي", position: "المدير التنفيذي", company: "Yawna"  }
      ]
    },

    // Contact Section
    contact: {
      title: "لنعمل معاً",
      subtitle: "تواصل معي",
      description: "هل أنت مستعد لتحويل أفكارك إلى واقع؟ دعنا نتواصل ونناقش كيف يمكنني المساعدة في مشروعك القادم.",
      emailLabel: "راسلني",
      phoneLabel: "اتصل بي",
      whatsappLabel: "واتساب",
      locationLabel: "الموقع",
      locationValue: "دبي، الإمارات العربية المتحدة",
      availableRemote: "متاح للعمل عن بُعد",
      connectTitle: "تواصل معي",
      connectSubtitle: "تابعني على وسائل التواصل الاجتماعي للحصول على التحديثات والأفكار",
      ctaTitle: "مستعد لبدء مشروع؟",
      ctaSubtitle: "دعنا نتعاون ونبني شيئاً مذهلاً معاً",
      ctaButton: "ابدأ محادثة",
      downloadCV: "تحميل السيرة الذاتية"
    },

    // Footer
    footer: {
      title: "مستشار تقنية معلومات ومطور Full Stack أول",
      tagline: "بناء تجارب رقمية تُحدث فرقاً. شغوف بإنشاء حلول ويب مبتكرة.",
      quickLinks: "روابط سريعة",
      getInTouch: "تواصل معي",
      location: "دبي، الإمارات",
      copyright: "جميع الحقوق محفوظة.",
      madeWith: "صُنع بـ"
    },

    // Common
    common: {
      ownersEnjoy: "يستمتع الملاك بـ:",
      customersBenefit: "يستفيد العملاء من:",
      beneficiaries: "المستفيدون:",
      admin: "الإدارة:",
      chairmanMembers: "أعضاء مجلس الإدارة:",
      viewCertificate: "عرض الشهادة",
      showAll: "عرض جميع الشهادات",
      showLess: "عرض أقل",
      totalCertificates: "إجمالي الشهادات",
      organizations: "المنظمات",
      yearsOfLearning: "سنوات التعلم",
      email: "البريد الإلكتروني",
      call: "اتصال",
      references: "المراجع",
      companies: "الشركات",
      industries: "الصناعات",
      interestedInReferences: "هل تريد التحدث مع مراجعي؟",
      referencesOnRequest: "بيانات التواصل مع المراجع متاحة عند الطلب",
      builtWith: "بُني باستخدام",
      getInTouch: "تواصل معي"
    }
  }

};

// ==========================================
// LANGUAGE MANAGER
// ==========================================
const LanguageManager = {
  currentLang: 'en',

  // Initialize language from localStorage or browser
  init() {
    const savedLang = localStorage.getItem('portfolio-lang');
    const browserLang = navigator.language.substring(0, 2);

    if (savedLang && translations[savedLang]) {
      this.currentLang = savedLang;
    } else if (translations[browserLang]) {
      this.currentLang = browserLang;
    }

    this.applyLanguage();
    return this.currentLang;
  },

  // Get current translation object
  get t() {
    return translations[this.currentLang];
  },

  // Switch language
  setLanguage(lang) {
    if (translations[lang]) {
      this.currentLang = lang;
      localStorage.setItem('portfolio-lang', lang);
      this.applyLanguage();

      // Re-render the page
      if (typeof renderAll === 'function') {
        renderAll();
      }
    }
  },

  // Apply language direction and html lang attribute
  applyLanguage() {
    const t = this.t;
    document.documentElement.lang = t.lang;
    document.documentElement.dir = t.dir;
    document.title = t.pageTitle;

    // Add/remove RTL class for styling
    if (t.dir === 'rtl') {
      document.body.classList.add('rtl');
    } else {
      document.body.classList.remove('rtl');
    }
  },

  // Toggle between languages
  toggle() {
    const langs = Object.keys(translations);
    const currentIndex = langs.indexOf(this.currentLang);
    const nextIndex = (currentIndex + 1) % langs.length;
    this.setLanguage(langs[nextIndex]);
  },

  // Get available languages
  getAvailableLanguages() {
    return Object.keys(translations).map(key => ({
      code: key,
      name: key === 'en' ? 'English' : key === 'ar' ? 'العربية' : key
    }));
  }
};
