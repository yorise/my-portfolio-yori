import { slugify } from "@/utils/slugify";

const imgPath = (title, filename) =>
  `/assets/images/${slugify(title)}/${filename}`;

export const projects = [
  {
    title: "Concleanse",
    img: imgPath("Concleanse", "concleanse-logo-big.svg"),
    description:
      "Concleanse is a company profile website created for a start-up providing professional cleaning services for tourist destinations.",
    tools: "HTML5, CSS3, Figma (Design)",
    type: "Company Profile Website",
    year: "2024",
    about: [
      "Concleanse is a start-up focused on delivering professional cleaning services for tourist destinations.",
      "In addition to maintaining cleanliness in tourist areas, the company also creates job opportunities by training qualified workers who are responsible and ready to preserve the beauty and cleanliness of these areas.",
    ],
    challenges: [
      "This was my very first project at college, so it was still in the learning stage and did not yet include responsive design.",
      "The website was built as a static site using only HTML and CSS, which meant content management had to be done manually.",
      "The project was done in a team of three people: two of us worked on implementing the website, while one person created the design in Figma. Coordinating the team as beginners was also a challenge on its own.",
    ],
    results: [
      "The final result was a static company profile website that successfully presented Concleanse’s identity and services with a simple design.",
      "This project served as a valuable first experience in understanding the process of creating a website from design to implementation.",
      "Through this project, I learned the basics of teamwork, structuring clean HTML, and styling with CSS.",
    ],
    photos: [
    {
      img: imgPath("Concleanse", "hero-section.PNG"),
      title: "Hero Section & Brand Positioning",
      description:
        "Primary landing section presenting the brand identity, service positioning, and value proposition. Designed to establish immediate clarity on the company’s core offering and target audience."
    },
    {
      img: imgPath("Concleanse", "visi-misi.PNG"),
      title: "Vision & Mission Communication",
      description:
        "Structured presentation of company vision and mission to reinforce long-term objectives and build credibility. Content hierarchy ensures clarity without overwhelming visitors."
    },
    {
      img: imgPath("Concleanse", "alamat.PNG"),
      title: "Location & Business Legitimacy Section",
      description:
        "Location and operational presence display aimed at increasing transparency and trust. Designed to support credibility for service-based operations."
    },
    {
      img: imgPath("Concleanse", "layanan.PNG"),
      title: "Service Offering Breakdown",
      description:
        "Modular service listing section detailing available cleaning solutions. Structured to clearly differentiate service categories while maintaining visual consistency."
    },
    {
      img: imgPath("Concleanse", "posisi.PNG"),
      title: "Operational Coverage & Positioning",
      description:
        "Geographical or operational positioning overview explaining service coverage areas. Intended to reduce user uncertainty regarding service availability."
    },
    {
      img: imgPath("Concleanse", "alur.PNG"),
      title: "Service Workflow Explanation",
      description:
        "Step-by-step service process visualization illustrating how customers engage with the company. Designed to simplify understanding of operational flow and reduce friction before inquiry."
    },
    {
      img: imgPath("Concleanse", "testimoni.PNG"),
      title: "Customer Testimonials & Social Proof",
      description:
        "Trust-building testimonial section highlighting past client experiences. Structured to reinforce reliability and service quality perception."
    },
    {
      img: imgPath("Concleanse", "kontak.PNG"),
      title: "Contact & Lead Conversion Endpoint",
      description:
        "Final interaction section optimized for lead generation. Features clear call-to-action and streamlined contact mechanism to encourage direct inquiries."
    }
  ]
  },
  {
    title: "FTracker Company Profile",
    img: imgPath("FTracker Company Profile", "home-pc.PNG"),
    description:
      "FTracker is a company profile website created for a fitness tracking application that helps users monitor and analyze their activities.",
    tools: "HTML, CSS (Responsive Design)",
    type: "Company Profile Website",
    year: "2025",
    about: [
      "FTracker is a company profile website for a fitness tracker application that showcases product information, features, and benefits for users.",
      "The website is designed to be fully responsive using pure HTML and CSS, ensuring accessibility across various devices, from desktop to smartphone.",
      "Its main purpose is to provide a professional overview of the FTracker application while building user trust in the product.",
    ],
    challenges: [
      "Creating a consistent design across different screen sizes without using modern frameworks such as Tailwind or Bootstrap.",
      "Optimizing the HTML and CSS structure to remain lightweight, fast to access, and easy to maintain.",
      "Balancing visually appealing design with optimal performance.",
    ],
    results: [
      "The FTracker company profile website successfully presents the app’s information with a clean and attractive layout.",
      "The responsive design works smoothly across various devices, both desktop and mobile.",
      "It provides a professional image and increases awareness of FTracker as a digital fitness solution.",
    ],
    photos: [
      {
        img: imgPath("FTracker Company Profile", "home-pc.PNG"),
        title: "Desktop Landing Structure & Hero Section",
        description:
          "Primary landing interface optimized for desktop viewing, featuring structured hero messaging, value proposition clarity, and strong visual hierarchy to guide user attention toward product positioning."
      },
      {
        img: imgPath("FTracker Company Profile", "feature-pc.PNG"),
        title: "Feature Presentation & Product Highlight",
        description:
          "Desktop feature section showcasing product capabilities using modular layout blocks. Designed with consistent spacing, readable typography, and clear benefit-driven messaging."
      },
      {
        img: imgPath("FTracker Company Profile", "testimoni-pc.PNG"),
        title: "Trust-Building Testimonial Section",
        description:
          "Social proof integration through testimonial layout emphasizing credibility and user satisfaction. Structured to reinforce brand trust and improve potential conversion confidence."
      },
      {
        img: imgPath("FTracker Company Profile", "home-mobile.PNG"),
        title: "Responsive Hero Adaptation (Mobile)",
        description:
          "Mobile-optimized hero section with adaptive typography scaling and layout stacking to maintain readability and user focus across smaller screen sizes."
      },
      {
        img: imgPath("FTracker Company Profile", "feature-mobile.PNG"),
        title: "Mobile Feature Reflow & Layout Adjustment",
        description:
          "Responsive restructuring of feature components ensuring vertical stacking and consistent spacing for optimal mobile browsing experience."
      },
      {
        img: imgPath("FTracker Company Profile", "testimoni-mobile.PNG"),
        title: "Mobile Testimonial Optimization",
        description:
          "Compact testimonial rendering designed for mobile interaction, maintaining readability while preserving design consistency with desktop version."
      },
      {
        img: imgPath("FTracker Company Profile", "kontak-mobile.PNG"),
        title: "Contact & Conversion Endpoint",
        description:
          "Mobile contact section designed as a conversion endpoint, enabling streamlined user interaction through simplified form layout and clear call-to-action elements."
      }
    ]
  },
  {
    title: "Search Engine API",
    img: imgPath("Search Engine API", "main-section.png"),
    description:
      "Electronic Product Search Engine API is a backend system that provides product search and management features for electronic items.",
    tools: "Node.js, Express, MySQL",
    type: "API Development",
    year: "2025",
    about: [
      "This project was developed to provide a comprehensive electronic product search system where users can search products by keywords and view results in a structured table format.",
      "The system supports product details such as name, brand, price, and stock availability, ensuring accurate and fast information delivery.",
      "In addition to search, the system also includes CRUD functionalities (add, edit, delete products) restricted only to authenticated admin users.",
      "All interactions between frontend and backend are handled via RESTful API endpoints using HTTP methods (GET, POST, PUT, DELETE).",
    ],
    challenges: [
      "Designing a reliable search feature that retrieves accurate product information quickly from the database.",
      "Implementing authentication and authorization so that only admins can perform data modifications.",
      "Ensuring smooth communication between the frontend and backend with secure and efficient API design.",
    ],
    results: [
      "The system successfully delivered fast and accurate search results for users without login requirements.",
      "Admin users could manage product data effectively through secure login-protected endpoints.",
      "The project demonstrated a robust fullstack architecture with clear separation between frontend UI and backend API services.",
    ],
    photos: [
      {
        img: imgPath("Search Engine API", "main-section.png"),
        title: "Search Engine Landing Interface",
        description:
          "Minimalist entry interface designed to simulate a production-like search environment. Built to interact directly with a custom search API endpoint, handling real-time query submissions and structured response rendering."
      },
      {
        img: imgPath("Search Engine API", "search-page.png"),
        title: "Dynamic Query Processing & Result Rendering",
        description:
          "Search results page powered by a backend API that processes keyword-based queries with structured filtering logic. Implements asynchronous request handling, response parsing, and dynamic UI updates without page reload."
      },
      {
        img: imgPath("Search Engine API", "admin-search-page.png"),
        title: "Admin-Level Search Monitoring",
        description:
          "Administrative search management interface allowing monitoring and validation of indexed data. Designed to separate public search access from backend control and dataset management."
      },
      {
        img: imgPath("Search Engine API", "login-page.PNG"),
        title: "Protected Administrative Access",
        description:
          "Authentication layer securing administrative routes to prevent unauthorized manipulation of search data. Ensures only verified users can manage indexing and dataset configuration."
      },
      {
        img: imgPath("Search Engine API", "pop-up.PNG"),
        title: "Interactive Search Feedback Mechanism",
        description:
          "User feedback system providing contextual pop-up responses based on search state (e.g., loading, no results, validation errors). Designed to improve search experience and reduce ambiguity in query outcomes."
      },
      {
        img: imgPath("Search Engine API", "alert.PNG"),
        title: "Validation & Error Handling System",
        description:
          "Structured alert handling for invalid queries, empty inputs, or API response errors. Built to enforce proper input validation before sending requests to the backend, preventing unnecessary server load."
      }
    ]
  },
  {
    title: "Admin Dashboard Kontenova",
    img: imgPath("Admin Dashboard Kontenova", "logo-fc.png"),
    description:
      "Admin Dashboard Kontenova is a web-based platform built to manage content, users, and reports efficiently through an intuitive interface.",
    tools: "Next.js, Prisma, MySQL, TailwindCSS",
    type: "Web Application",
    year: "2025",
    about: [
      "This dashboard was developed to simplify content management workflows within the Kontenova platform.",
      "It includes features for managing users, courses, modules, and reports in one centralized system.",
      "The design emphasized clarity and responsiveness, ensuring admins could work seamlessly across desktop and mobile devices.",
    ],
    challenges: [
      "Integrating multiple relational models such as users, courses, modules, and reports into a single cohesive UI.",
      "Maintaining fast query performance with Prisma while handling large datasets.",
      "Ensuring the dashboard remained intuitive for non-technical admins while still providing advanced functionality.",
    ],
    results: [
      "The dashboard streamlined internal workflows, reducing time spent on manual content and user management.",
      "Admins reported improved efficiency and accuracy when managing data across the platform.",
      "The responsive design allowed the dashboard to be used effectively across devices, enhancing overall usability.",
    ],
    photos: [
      {
        img: imgPath("Admin Dashboard Kontenova", "login-page.PNG"),
        title: "Secure Admin Authentication",
        description:
          "Role-protected admin authentication system ensuring only authorized users can manage course structures, modules, and learning content. Session handling prevents unauthorized access to internal management routes."
      },
      {
        img: imgPath("Admin Dashboard Kontenova", "dashboard-page.PNG"),
        title: "Learning Platform Analytics Overview",
        description:
          "Centralized dashboard displaying aggregated platform metrics including course distribution, content volume, and structural hierarchy visibility. Designed to give administrators quick operational insight."
      },
      {
        img: imgPath("Admin Dashboard Kontenova", "class-page.PNG"),
        title: "Class Management Structure",
        description:
          "Hierarchical class management module allowing structured organization of courses under specific categories or learning tracks, maintaining relational integrity between classes and course entities."
      },
      {
        img: imgPath("Admin Dashboard Kontenova", "course-list.PNG"),
        title: "Course Registry & Publishing Control",
        description:
          "Comprehensive course management system with structured listing, filtering, and publication control. Supports draft and publish states to ensure incomplete courses are not exposed to learners."
      },
      {
        img: imgPath("Admin Dashboard Kontenova", "category-list.PNG"),
        title: "Category & Taxonomy Management",
        description:
          "Dynamic category configuration allowing scalable course classification without affecting existing relational mappings. Built to support future expansion of learning domains."
      },
      {
        img: imgPath("Admin Dashboard Kontenova", "course-detail.PNG"),
        title: "Course Detail & Modular Structure",
        description:
          "Detailed course view displaying structured module hierarchy. Enables administrators to manage module order, visibility, and content grouping while preserving relational consistency."
      },
      {
        img: imgPath("Admin Dashboard Kontenova", "modul-detail.PNG"),
        title: "Module Configuration & Content Grouping",
        description:
          "Module-level configuration panel managing grouped learning materials within a course. Designed to support ordered content sequences and modular learning progression."
      },
      {
        img: imgPath("Admin Dashboard Kontenova", "content-detail.PNG"),
        title: "Multi-Type Content Management",
        description:
          "Content detail system supporting multiple content types such as video, text, documents, and quizzes. Ensures structured data handling per content type while maintaining unified module linkage."
      },
      {
        img: imgPath("Admin Dashboard Kontenova", "course-form.PNG"),
        title: "Course Creation & Metadata Control",
        description:
          "Form-driven course creation system with validation rules, image handling, and structured metadata input to maintain data integrity and prevent incomplete configurations."
      },
      {
        img: imgPath("Admin Dashboard Kontenova", "modul-form.PNG"),
        title: "Module Setup Workflow",
        description:
          "Two-phase module configuration flow allowing quick module creation followed by detailed setup. Designed to streamline content structuring without overwhelming administrators."
      },
      {
        img: imgPath("Admin Dashboard Kontenova", "content-form.PNG"),
        title: "Dynamic Content Builder",
        description:
          "Flexible content creation interface supporting dynamic addition and removal of content blocks. Built to mimic CMS-style workflows while preserving strict relational consistency with modules."
      },
      {
        img: imgPath("Admin Dashboard Kontenova", "ordering-setting.PNG"),
        title: "Drag-and-Drop Ordering System",
        description:
          "Interactive ordering configuration enabling administrators to reorder modules and content using drag-and-drop mechanics. Updates are synchronized with backend orderIndex logic to maintain persistent sequence integrity."
      }
    ],
  },
  {
    title: "Bank Sampah Matahari",
    img: imgPath("Bank Sampah Matahari", "bank-sampah-logo.jpg"),
    description:
      "Bank Sampah Matahari is a web application for managing waste collection, members, and transaction records.",
    tools: "Next.js, Prisma, MySQL, TailwindCSS",
    type: "Web Application",
    year: "2025",
    about: [
      "This is project was developed to digitalize waste bank operations, making it easier to record, monitor, and manage recyclable waste transactions.",
      "It provides features for registering members, tracking deposits and withdrawals of recyclable waste, and generating transaction reports.",
      "The system aims to improve efficiency for both administrators and members while supporting environmental sustainability efforts.",
    ],
    challenges: [
      "Designing a relational database structure to handle users, waste categories, and transaction histories efficiently.",
      "Implementing an admin hierarchy system where different levels of admins could access and record data with appropriate authority.",
      "Ensuring the application remained user-friendly for non-technical users in local communities.",
    ],
    results: [
      "The platform successfully digitized the waste bank’s operations, reducing manual record-keeping errors.",
      "Admins at different hierarchy levels could record and manage transactions more transparently and efficiently.",
      "The system increased community trust by providing accurate, real-time reports and ensuring accountability in waste collection.",
    ],
    photos: [
      {
        img: imgPath("Bank Sampah Matahari", "login-page.PNG"),
        title: "Role-Based Authentication",
        description:
          "Secure login system with role-based access control separating admin and operational users. Session handling ensures protected internal routes and prevents unauthorized data access across modules."
      },
      {
        img: imgPath("Bank Sampah Matahari", "bank-sampah-page.PNG"),
        title: "Waste Bank Management Module",
        description:
          "Centralized management of waste bank units including profile configuration, operational status, and relational mapping to registered customers (nasabah). Designed to maintain structured hierarchy between main bank and sub-branches."
      },
      {
        img: imgPath("Bank Sampah Matahari", "nasabah-page.PNG"),
        title: "Customer (Nasabah) Registry System",
        description:
          "Dynamic customer management module with structured data validation, ensuring consistent identity records and relational linkage to transaction history. Built to support scalable member growth without duplicating entries."
      },
      {
        img: imgPath("Bank Sampah Matahari", "nasabah-detail-page.PNG"),
        title: "Customer Detail & Transaction Ledger",
        description:
          "Detailed customer profile view displaying accumulated waste deposits, transaction ledger, and calculated balance summary. Business logic ensures balance accuracy based solely on validated waste transactions."
      },
      {
        img: imgPath("Bank Sampah Matahari", "jenis-sampah-page.PNG"),
        title: "Waste Type & Pricing Configuration",
        description:
          "Configurable waste classification system with dynamic pricing rules per waste category. Designed to allow price adjustments without affecting historical transaction integrity."
      },
      {
        img: imgPath("Bank Sampah Matahari", "reports-page.PNG"),
        title: "Operational & Financial Reporting",
        description:
          "Aggregated reporting module generating structured summaries of waste deposits, customer balances, and transaction trends. Data is computed from validated transactional records to ensure financial transparency and reporting accuracy."
      }
    ]
  },
  {
    title: "Dashboard Admin Devluxor",
    img: imgPath("Dashboard Admin Devluxor", "devluxor-logo.png"),
    description:
     "Dashboard Admin Devluxor is an internal marketplace administration system built to manage products, customers, orders, analytics, and activity tracking with structured business logic enforcement.",
    tools: "Laravel, Laravel Sanctum, MySQL, React, TailwindCSS, Axios",
    type: "Web Application",
    year: "2026",
    about: [
      "This project was developed as a structured admin dashboard for a marketplace system, focusing not only on CRUD operations but also on business logic enforcement and realistic data lifecycle management.",
      "The system includes secure authentication using Laravel Sanctum with session control and idle timeout handling to ensure protected access to all internal routes.",
      "Order management was designed as monitoring-only, where admins cannot manually change order status. Instead, a dedicated order_status_histories table was implemented to track lifecycle stages such as pending, paid, shipped, completed, and cancelled in a structured and realistic manner.",
      "The dashboard provides real-time analytics including total orders, revenue from completed transactions, new customers, active customers, and product distribution by category, supported by visual charts and monthly comparison indicators.",
      "A generic activity log system was built to track changes across entities such as products and customers, including detailed diff tracking (before and after values) to maintain a transparent audit trail.",
      "The system also includes an export feature with preview functionality, allowing administrators to verify filtered data before downloading Excel reports."
    ],
    challenges: [
      "Designing a clean separation between activity logs and order lifecycle tracking to avoid mixing audit data with business status progression.",
      "Implementing relational sorting (such as sorting products by category name) efficiently using database joins.",
      "Preventing unnecessary updates by detecting unchanged data before saving and ensuring the activity log only records meaningful changes.",
      "Handling dynamic UI state updates without requiring page refresh, especially for customer blocking, note updates, and log refreshes.",
      "Structuring analytics logic to differentiate between range-based filtering and fixed monthly KPI comparisons while keeping the dashboard behavior consistent."
    ],  
    results: [
      "Successfully built a business-driven admin dashboard that enforces realistic marketplace workflows instead of allowing unrestricted manual control.",
      "Created a reusable and structured activity log system with readable change history for better transparency and debugging.",
      "Improved data visibility through analytics and visual reporting, making it easier to monitor marketplace performance.",
      "Implemented a clean UI/UX flow using modals, confirmation dialogs, toast notifications, and drawer previews without page reloads.",
      "Delivered a complete internal administration system that demonstrates backend architecture design, relational database handling, and frontend state management."
    ],
    photos: [
      {
        img: imgPath("Dashboard Admin Devluxor", "login.PNG"),
        title: "Secure Authentication",
        description:
          "Session-based authentication using Laravel Sanctum with protected internal routes and idle timeout handling."
      },
      {
        img: imgPath("Dashboard Admin Devluxor", "dashboard.PNG"),
        title: "KPI Analytics Dashboard",
        description:
          "Displays total orders, completed revenue, new and active customers with monthly comparison indicators."
      },
      {
        img: imgPath("Dashboard Admin Devluxor", "order-list.PNG"),
        title: "Order Lifecycle Monitoring",
        description:
          "Structured order tracking without manual status override, powered by a dedicated order_status_histories table."
      },
      {
        img: imgPath("Dashboard Admin Devluxor", "activity-log.PNG"),
        title: "Field-Level Audit Logging",
        description:
          "Tracks before and after values across entities to maintain a transparent change history."
      },
      {
        img: imgPath("Dashboard Admin Devluxor", "export-preview.PNG"),
        title: "Export Preview Validation",
        description:
          "Allows administrators to validate filtered data before exporting Excel reports."
      }
    ]
  },
];
