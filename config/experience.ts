import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "bootcamp-intensive",
    position: "Full Stack Web Developer (Intensive Training)",
    company: "DumbWays Indonesia", // Ganti sesuai nama bootcamp di dokumen KurBa B63 kamu
    location: "Hybrid",
    startDate: new Date("2025-09-01"),
    endDate: "Present",
    description: [
      "Developing production-ready web applications based on industry-standard Product Requirement Documents (PRD).",
      "Implementing modern tech stacks including Next.js 14, Express.js, and PostgreSQL for complex business logic.",
      "Integrating AI-powered features and third-party services like Midtrans and RajaOngkir.",
    ],
    achievements: [
      "Engineered an **AI-Powered Receipt Manager** featuring automated data extraction using OCR technology to streamline financial tracking.",
      "Architected a **Full-Stack E-Commerce** platform with real-time inventory management and secure payment gateway integration.",
      "Developed a real-time social networking application (**Circle App**) using Socket.io and PostgreSQL for seamless user interactions.",
      "Ensured data security and isolation by implementing **Supabase Row Level Security (RLS)** and secure JWT authentication.",
    ],
    skills: [
      "Next.js",
      "Typescript",
      "Node.js",
      "PostgreSQL",
      "Supabase",
      "Socket.io",
      "Tailwind CSS",
      "PostgreSQL",
      "React",
      "Cloudinary",
      "Redis",
      "Redux",
    ],
  },
  {
    id: "solonet-it-support",
    position: "IT Support & Network Technician",
    company: "SOLO NET",
    location: "Surakarta, Indonesia",
    startDate: new Date("2018-06-01"), // Sesuaikan tanggalnya
    endDate: new Date("2018-09-01"),
    description: [
      "Managed network infrastructure and server administration for local and wide area networks.",
      "Designed and implemented web databases for content servers, ensuring efficient data accessibility.",
      "Performed hardware and software installations, including OS setup and network troubleshooting.",
    ],
    achievements: [
      "Successfully designed a web database for content servers, serving as a foundation for transitioning into full-stack development.",
      "Maintained high network reliability by reconfiguring and repairing WAN/LAN connections for clients.",
      "Ensured server stability through proactive administration and network monitoring.",
    ],
    skills: [
      "Network Administration",
      "Database Design",
      "Server Management",
      "WAN/LAN",
      "Troubleshooting",
    ],
  },
  {
    id: "lawu-adventure-creative",
    position: "Documentation Team & Content Creator",
    company: "The Lawu Adventure Jeep Sakura Hills",
    location: "Karanganyar, Indonesia",
    startDate: new Date("2023-01-01"), // Sesuaikan
    endDate: new Date("2024-12-01"), // Sesuaikan
    description: [
      "Conceptualized and produced engaging digital content for social media platforms to drive brand awareness.",
      "Captured high-quality documentation of outdoor activities and events.",
    ],
    achievements: [
      "Developed and managed social media growth on Instagram and TikTok through consistent content scheduling.",
      "Performed professional video editing for promotional materials, enhancing the visual identity of the company.",
      "Collaborated with the marketing team to align visual content with business promotion goals.",
    ],
    skills: [
      "Content Creation",
      "Video Editing",
      "Social Media Strategy",
      "Photography",
    ],
  },
  {
    id: "personal-assistant-role",
    position: "Personal Assistant",
    company: "Private/Professional Service", // Bisa diganti nama perusahaannya jika ada
    location: "Karanganyar, Indonesia",
    startDate: new Date("2025-01-01"), // Sesuaikan
    endDate: new Date("2025-09-01"), // Sesuaikan
    description: [
      "Provided high-level administrative support and managed professional correspondence with key clients.",
      "Handled daily reporting and digital document organization to ensure operational efficiency.",
    ],
    achievements: [
      "Maintained 100% reliability in professional scheduling and client communication, preventing overlaps or missed opportunities.",
      "Streamlined daily reporting processes using Microsoft Excel and Google Docs, improving data accuracy for management.",
      "Enhanced interpersonal communication and organizational workflows within a professional business environment.",
      "Managed secure digital documentation, ensuring easy retrieval and data integrity.",
    ],
    skills: [
      "Professional Communication",
      "Executive Support",
      "Microsoft Excel",
      "Time Management",
      "Administration",
    ],
  },
];
