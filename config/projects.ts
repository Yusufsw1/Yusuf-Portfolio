import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "laporin-aja",
    companyName: "LaporinAja",
    type: "Personal",
    category: ["Web Dev", "Full Stack", "Geo-Spatial"],
    shortDescription:
      "A sophisticated public reporting platform featuring automated EXIF metadata extraction, geo-spatial clustering, and real-time location verification for accurate community reporting.",
    githubLink: "https://github.com/Yusufsw1/Laporin-Aja-", // Ganti dengan link kamu
    websiteLink: "https://laporin-aja.vercel.app",
    techStack: [
      "Next.js",
      "Typescript",
      "Supabase",
      "Express",
      "Tailwind CSS",
      "Cloudinary",
    ],
    companyLogoImg: "/projects/laporin/logo.png",
    pagesInfoArr: [
      {
        title: "Smart Image Upload",
        description:
          "Automated extraction of GPS coordinates from photo EXIF metadata to ensure report accuracy.",
        imgArr: ["/projects/laporin/exif_feature.png"],
      },
      {
        title: "Real-time Geo-locking",
        description:
          "In-app camera capture with mandatory GPS verification to prevent fraudulent location reporting.",
        imgArr: ["/projects/laporin/camera_gps.png"],
      },
      {
        title: "Interactive Map & Clustering",
        description:
          "Dynamic map visualization that groups nearby reports into automated clusters for efficient handling.",
        imgArr: ["/projects/laporin/map_clustering.png"],
      },
      {
        title: "Admin Resolution Panel",
        description:
          "Unified dashboard for administrators to manage clusters and provide synchronized resolution feedback.",
        imgArr: ["/projects/laporin/admin_panel.png"],
      },
      {
        title: "Supabase & RLS",
        description:
          "Secure data management with PostgreSQL and Row Level Security for user data protection.",
        imgArr: ["/projects/laporin/database.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "LaporinAja is a specialized public reporting web application built to bridge the gap between community complaints and administrative action. Developed with Next.js and Supabase, it focuses on high-precision data through spatial technology.",
        "The core innovation lies in its spatial data handling. Unlike traditional forms, this app validates locations through two methods: extracting EXIF metadata from uploaded images and real-time GPS fetching during live camera capture. This ensures that every report is tied to a verified physical location.",
        "To assist administrators, I implemented an automated clustering system. This feature groups multiple individual reports about the same issue (e.g., several people reporting the same pothole) into a single actionable cluster, preventing administrative bloat and redundant workflows.",
        "The feedback loop is synchronized across the cluster. When an admin uploads a resolution photo and message to one report, the system automatically updates the status and displays the feedback for all users involved in that specific cluster, ensuring transparent community communication.",
      ],
      bullets: [
        "Implemented EXIF metadata extraction for automated location tagging from image files.",
        "Developed a robust report clustering algorithm based on geo-spatial radius.",
        "Integrated Supabase for real-time data synchronization and secure user authentication.",
        "Optimized image management using Cloudinary for fast delivery and transformation.",
        "Built a synchronized feedback system that updates multiple records within a cluster simultaneously.",
        "Designed a responsive and accessible UI using Tailwind CSS and SweetAlert2 for enhanced UX.",
        "Utilized TypeScript for end-to-end type safety and maintainable code architecture.",
      ],
    },
  },
  {
    id: "56-Thrif-Shop",
    companyName: "56 Thrif Shop",
    type: "Personal",
    category: ["Web Dev", "Full Stack", "Fintech Integration"],
    shortDescription:
      "A comprehensive e-commerce ecosystem featuring real-time Midtrans payment integration, RajaOngkir automated shipping calculation, and a robust seller-admin dashboard.",
    githubLink: "https://github.com/Yusufsw1/56ThrifShop",
    websiteLink: "https://56thrifshop.vercel.app",
    techStack: [
      "Next.js",
      "Typescript",
      "Supabase",
      "Node.js",
      "Express",
      "Midtrans API",
      "RajaOngkir API",
    ],
    companyLogoImg: "/projects/ecommerce/logo.png",
    pagesInfoArr: [
      {
        title: "Real-time Payment Sync",
        description:
          "Seamless Midtrans integration using Snap API and automated status updates via webhooks for instant order verification.",
        imgArr: ["/projects/ecommerce/midtrans_flow.png"],
      },
      {
        title: "Dynamic Shipping Engine",
        description:
          "Automated weight-based shipping cost calculation using RajaOngkir API, supporting multiple couriers and destination cities.",
        imgArr: [
          "/projects/ecommerce/shipping_calc12.png",
          "/projects/ecommerce/shipping_calc.png",
        ],
      },
      {
        title: "Smart Cart Management",
        description:
          "Advanced shopping cart with selective item checkout, quantity adjustment, and automated post-payment synchronization.",
        imgArr: [
          "/projects/ecommerce/cart_system1.png",
          "/projects/ecommerce/cart_system.png",
        ],
      },
      {
        title: "Comprehensive Admin Panel",
        description:
          "Dedicated dashboard for managing inventory, bulk image uploads with previews, and real-time shipping tracking (Resi) updates.",
        imgArr: ["/projects/ecommerce/admin_management.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Modern Commerce is a high-performance full-stack e-commerce solution designed to handle the complete transaction lifecycle—from product discovery to final delivery. Built with Next.js and a dedicated Node.js backend, it prioritizes reliability and user trust.",
        "The platform's core strength lies in its automated financial and logistic integration. By utilizing Midtrans as the payment gateway, the system handles complex payment statuses automatically through secure webhook verification, ensuring no manual intervention is needed to confirm customer payments.",
        "For logistics, I implemented a precise weight-based calculation system. Every product is tracked by its weight in grams, and the system communicates with RajaOngkir API to provide real-time shipping rates, preventing shipping cost discrepancies for the seller.",
        "The project also features a robust seller center. Administrators can manage their catalog with multi-image upload capabilities, monitor orders with 'Paid' status in real-time, and update shipping information to keep customers informed through a synchronized notification system.",
      ],
      bullets: [
        "Integrated Midtrans Snap API for a secure and diverse range of payment methods.",
        "Developed a webhook handler to synchronize payment statuses between the gateway and Supabase in real-time.",
        "Implemented RajaOngkir API for automated shipping cost calculations based on city-to-city weight metrics.",
        "Built a custom multi-image upload system with client-side previews and file validation.",
        "Managed relational database structures in Supabase (PostgreSQL) with advanced RLS policies.",
        "Created a selective checkout feature allowing users to pay for specific items within a large cart.",
        "Designed a responsive UI using Tailwind CSS for a seamless shopping experience across mobile and desktop.",
      ],
    },
  },
  {
    id: "receipt-manager-ai",
    companyName: "MyReceipts",
    type: "Personal",
    category: [
      "Web Dev",
      "Full Stack",
      "Fintech",
      "Artificial Intelligence",
      "SaaS",
    ],
    shortDescription:
      "A sophisticated personal finance management tool featuring AI-powered OCR for automatic receipt scanning, real-time spending analytics, and automated expense categorization.",
    githubLink: "https://github.com/Yusufsw1/Receipt-Manager-Tracker",
    websiteLink: "https://receipt-manager-tracker.vercel.app",
    techStack: [
      "Next.js",
      "Typescript",
      "Supabase",
      "Zustand",
      "Tailwind CSS",
      "Tesseract.js / OCR API",
    ],
    companyLogoImg: "/projects/receipt/logo.png",
    pagesInfoArr: [
      {
        title: "AI-Powered Smart Scan",
        description:
          "Implemented Optical Character Recognition (OCR) to automatically extract merchant names, dates, and total amounts from physical receipts, reducing manual data entry efforts.",
        imgArr: [
          "/projects/receipt/ocr_scan1.png",
          "/projects/receipt/ocr_scan.png",
        ],
      },
      {
        title: "Dynamic Expense Analytics",
        description:
          "Real-time data visualization using Recharts to track spending habits across 8 automated categories such as Food, Transport, and Shopping.",
        imgArr: ["/projects/receipt/analytics_dashboard.png"],
      },
      {
        title: "Smart Budgeting System",
        description:
          "Category-based budget tracking with visual progress indicators and automated alerts to help users maintain financial discipline.",
        imgArr: ["/projects/receipt/budgeting_tool.png"],
      },
      {
        title: "Secure PDF Export",
        description:
          "Advanced reporting feature allowing users to generate and download comprehensive financial summaries in PDF format for personal record-keeping.",
        imgArr: ["/projects/receipt/export_pdf.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "MyReceipts is a full-stack SaaS personal finance application developed to bridge the gap between tedious manual logging and digital automation. Built with Next.js and Supabase, the app focuses on financial data accuracy through AI technology.",
        "The core innovation lies in its AI-driven data extraction. Users simply upload a photo of their receipt, and the system utilizes OCR to identify text, process totals, and automatically classify the transaction into one of eight predefined expense categories.",
        "To provide meaningful insights, I implemented an interactive analytics dashboard. Raw transaction data is processed in real-time into visual charts, helping users understand their spending patterns and monitor their monthly budget health via an integrated tracking system.",
        "Regarding data architecture, security is a top priority. Utilizing PostgreSQL on Supabase with strict Row Level Security (RLS), the application ensures that sensitive user transaction data is securely isolated and accessible only by the account owner.",
      ],
      bullets: [
        "Integrated AI/OCR for automated data extraction from receipt images.",
        "Developed an intelligent auto-categorization algorithm to map transactions to appropriate categories.",
        "Implemented interactive visualizations using Recharts for monthly spending insights.",
        "Developed a robust feature to export financial reports into clean PDF formats.",
        "Utilized Zustand for efficient state management, particularly for the transaction input flow.",
        "Applied Supabase Auth and RLS for advanced user financial data protection.",
        "Optimized performance using Next.js Server Components for faster data rendering.",
      ],
    },
  },
  {
    id: "circle-social-media",
    companyName: "Circle App",
    type: "Personal",
    category: [
      "Web Dev",
      "Full Stack",
      "Real-time Systems",
      "Social Networking",
    ],
    shortDescription:
      "A high-performance social media platform featuring real-time interactions, complex user relationship mapping, and dynamic content feeds.",
    githubLink: "https://github.com/Yusufsw1/CircleApp", // Replace with your link
    techStack: [
      "React.js (Vite)",
      "Typescript",
      "Express",
      "PostgreSQL",
      "Socket.io",
      "Tailwind CSS",
    ],
    companyLogoImg: "/projects/circle/logo.png",
    pagesInfoArr: [
      {
        title: "Real-time Interactions",
        description:
          "Integrated Socket.io to enable instantaneous updates for thread interactions, notifications, and new posts without page refreshes.",
        imgArr: ["/projects/circle/realtime_feed.png"],
      },
      {
        title: "User Relationship Mapping",
        description:
          "Implemented a robust follow/unfollow system and profile discovery using advanced PostgreSQL relational queries.",
        imgArr: ["/projects/circle/profile_follow.png","/projects/circle/profile_follow1.png",],
      },
      {
        title: "Thread & Engagement System",
        description:
          "Feature-rich posting engine supporting threaded comments, likes, and multimedia content management.",
        imgArr: ["/projects/circle/thread_engagement.png"],
      },
      {
        title: "Dynamic User Profiles",
        description:
          "Personalized user dashboards showcasing user activity, follow counts, and a curated feed of authored threads.",
        imgArr: ["/projects/circle/user_profile.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Circle App is a social networking platform designed to mimic the core functionalities of modern microblogging sites like X (Twitter). The project focuses on handling high-concurrency interactions and maintaining a seamless user experience through real-time technology.",
        "The backbone of the application is a custom Express.js server integrated with Socket.io. This setup allows for bi-directional communication, ensuring that when a user posts a thread or likes a comment, the action is reflected across all active clients instantly, creating a truly 'live' environment.",
        "Data integrity and relationship management are handled by PostgreSQL. I designed a schema capable of efficiently managing many-to-many relationships, such as the followers system and interaction tracking, ensuring fast query performance even as the content grows.",
        "The frontend, built with React and Vite, emphasizes performance and clean UI. By leveraging TypeScript throughout the stack, I ensured type safety and maintainability, particularly for the complex data structures involved in nested comment threads and user profiles.",
      ],
      bullets: [
        "Engineered a real-time feed update system using Socket.io for instant user engagement.",
        "Designed a normalized PostgreSQL database schema to handle complex social relationships (Followers, Likes, Threads).",
        "Built a nested commenting system allowing for deep conversation threads and interactions.",
        "Implemented JWT-based authentication for secure session management and protected API routes.",
        "Developed a responsive and intuitive UI/UX with Tailwind CSS, optimized for both desktop and mobile viewing.",
        "Created dynamic profile pages that aggregate user-specific data and social metrics in real-time.",
        "Leveraged Vite for a highly optimized development environment and fast production builds.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
