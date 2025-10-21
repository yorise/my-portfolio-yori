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
      { img: imgPath("Concleanse", "hero-section.PNG") },
      { img: imgPath("Concleanse", "visi-misi.PNG") },
      { img: imgPath("Concleanse", "alamat.PNG") },
      { img: imgPath("Concleanse", "layanan.PNG") },
      { img: imgPath("Concleanse", "posisi.PNG") },
      { img: imgPath("Concleanse", "alur.PNG") },
      { img: imgPath("Concleanse", "testimoni.PNG") },
      { img: imgPath("Concleanse", "kontak.PNG") },
    ],
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
      { img: imgPath("FTracker Company Profile", "home-pc.PNG") },
      { img: imgPath("FTracker Company Profile", "feature-pc.PNG") },
      { img: imgPath("FTracker Company Profile", "testimoni-pc.PNG") },
      { img: imgPath("FTracker Company Profile", "home-mobile.PNG") },
      { img: imgPath("FTracker Company Profile", "feature-mobile.PNG") },
      { img: imgPath("FTracker Company Profile", "testimoni-mobile.PNG") },
      { img: imgPath("FTracker Company Profile", "kontak-mobile.PNG") },
    ],
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
      { img: imgPath("Search Engine API", "main-section.png") },
      { img: imgPath("Search Engine API", "search-page.png") },
      { img: imgPath("Search Engine API", "admin-search-page.png") },
      { img: imgPath("Search Engine API", "login-page.PNG") },
      { img: imgPath("Search Engine API", "pop-up.PNG") },
      { img: imgPath("Search Engine API", "alert.PNG") },
    ],
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
      { img: imgPath("Admin Dashboard Kontenova", "login-page.PNG") },
      { img: imgPath("Admin Dashboard Kontenova", "dashboard-page.PNG") },
      { img: imgPath("Admin Dashboard Kontenova", "class-page.PNG") },
      { img: imgPath("Admin Dashboard Kontenova", "course-list.PNG") },
      { img: imgPath("Admin Dashboard Kontenova", "category-list.PNG") },
      { img: imgPath("Admin Dashboard Kontenova", "course-detail.PNG") },
      { img: imgPath("Admin Dashboard Kontenova", "modul-detail.PNG") },
      { img: imgPath("Admin Dashboard Kontenova", "content-detail.PNG") },
      { img: imgPath("Admin Dashboard Kontenova", "course-form.PNG") },
      { img: imgPath("Admin Dashboard Kontenova", "modul-form.PNG") },
      { img: imgPath("Admin Dashboard Kontenova", "content-form.PNG") },
      { img: imgPath("Admin Dashboard Kontenova", "ordering-setting.PNG") },
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
      "This project was developed to digitalize waste bank operations, making it easier to record, monitor, and manage recyclable waste transactions.",
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
      { img: imgPath("Bank Sampah Matahari", "login-page.PNG") },
      { img: imgPath("Bank Sampah Matahari", "bank-sampah-page.PNG") },
      { img: imgPath("Bank Sampah Matahari", "nasabah-page.PNG") },
      { img: imgPath("Bank Sampah Matahari", "nasabah-detail-page.PNG") },
      { img: imgPath("Bank Sampah Matahari", "jenis-sampah-page.PNG") },
      { img: imgPath("Bank Sampah Matahari", "reports-page.PNG") },
    ],
  },
  {
    title: "Project 6",
    img: "/assets/images/logo.PNG",
    description:
      "Project 6 focused on cloud integration (S3, Firebase, and Supabase).",
    tools: "AWS S3, Firebase, Supabase",
    type: "Cloud Integration",
    year: "2025",
    about: [
      "The goal of this project was to simplify file and data management by leveraging popular cloud services.",
      "The integration aimed to reduce server load while ensuring high availability and scalability.",
    ],
    challenges: [
      "The challenge was integrating multiple cloud services into a single system without dependency conflicts.",
      "Handling authentication, syncing, and permissions across providers also required extensive configuration.",
    ],
    results: [
      "The application successfully implemented distributed storage with high reliability and cost efficiency.",
      "It also provided a flexible architecture that could easily support future cloud providers.",
    ],
    photos: [{ img: "/assets/images/logo.PNG" }],
  },
];
