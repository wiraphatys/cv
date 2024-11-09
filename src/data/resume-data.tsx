import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
  BewellLogo,
  ApppiLogo,
  SGCULogo,
  ESCLogo,
  SpacelyLogo,
  LoolooLogo
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Wiraphat Yodsri",
  initials: "WY",
  location: "Bangkok, Thailand",
  locationLink: "https://www.google.com/maps/place/Bangkok",
  about:
    "Detail-oriented Software Engineer dedicated to building high-quality software.",
  summary:
    "As a dedicated Software Engineer, I excel in developing robust backend systems and leading development teams through the implementation of efficient, scalable solutions. My experience spans working with Golang, gRPC, and microservices architecture, particularly in high-performance environments. I have contributed to various projects, including authorization systems, customer service platforms, and university-level web development. With a strong foundation in clean architecture, DDD, and design patterns, I aim to create reliable and maintainable software systems.",
  avatarUrl: "https://i.ibb.co/5BYygkp/banky-google-scl2024.jpg",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "y.wiraphat@gmail.com",
    tel: "+66614615868",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/wiraphatys",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ywiraphat",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Chulalongkorn University",
      degree: "Bachelor's Degree in Computer Engineering",
      start: "2023",
      end: "Present",
    },
  ],
  work: [
    {
      company: "Looloo Technology",
      link: "https://loolootech.com",
      badges: ["Internship"],
      title: "Software Engineer Intern",
      logo: LoolooLogo,
      start: "Nov 2024",
      end: "Present",
      description: [],
      technologies: ["Python", "Django", "LLM"],
    },
    {
      company: "Spacely AI",
      link: "https://www.spacely.ai",
      badges: ["Part-time"],
      title: "Software Engineer Intern",
      logo: SpacelyLogo,
      start: "Oct 2024",
      end: "Present",
      description: [
        "Led the full-stack development of AI-powered tools, overseeing the entire software development lifecycle from initial concept to final deployment, ensuring timely delivery and system scalability.",
        "Developed a specialized API service that enabled AI-driven style transfer, converting static interior design images into AI-enhanced visuals with new design elements, improving user experience and creativity.",
        "Designed and optimized user interfaces for seamless interaction with AI tools, allowing users to visualize real-time interior design changes such as changing image to video, customizing room perspective and room styling, driving engagement and enhancing usability.",
      ],
      technologies: [
        "Next.js",
        "Nest.js",
        "Go",
        "Echo",
        "Docker",
        "LLM",
        "Firebase",
      ],
    },
    {
      company: "Apppi",
      link: "https://apppi.co",
      badges: ["Internship"],
      title: "Software Engineer Intern",
      logo: ApppiLogo,
      start: "August 2024",
      end: "Present",
      description: [
        "Designed and developed middleware for user authorization, integrating Microsoft Azure AD token verification and implementing Role - Based Access Control(RBAC) to manage permissions within the Content Management System(CMS).",
        "Led the frontend development of the CMS platform, utilizing global state management to enhance performance, reducing unnecessary re-renders and improving user experience.",
        "Integrated Axios with Tanstack Query to efficiently manage API calls, implementing error handling, data caching, and reducing redundant requests, resulting in faster load times and improved data reliability.",
      ],
      technologies: [
        "React.js",
        "AntD",
        "Go",
        "Gin",
        "PostgreSQL",
        "Docker",
        "Microsoft Azure",
        "Auth0",
      ],
    },
    {
      company: "Bewell",
      link: "https://www.bewellstyle.com/",
      badges: ["Internship"],
      title: "Software Engineer Intern",
      logo: BewellLogo,
      start: "May 2024",
      end: "July 2024",
      description: [
        "Developed the customer service system for handling post-sales product repairs for Bewell, utilizing Golang as the backend server.",
        "Designed the database for the customer service system using MS SQL, implemented indexing to enhance query performance, and defined relationships according to database design principles.",
        "Designed the customer service system with a strong focus on architecture, using design patterns like Singleton and Factory, implementing clean architecture, and adhering to SOLID principles and DDD.",
        "Developed the delivery sales system for Bewell, utilizing Golang as the backend to ensure efficient and reliable operations.",
      ],
      technologies: ["Go", "Fiber", "MS SQL", "Docker", "Gitlab CI", "NginX"],
    },
  ],
  extraCurricular: [
    {
      company: "Student Gorvernment of Chulalongkorn University",
      link: "https://www.chula.ac.th/academics/academic-units/sgcu",
      badges: [],
      title: "Software Engineer → Tech Lead and Project Manager",
      logo: SGCULogo,
      start: "June 2024",
      end: "Present",
      description: [
        "Led the backend team for the official website project of the Student Union at Chulalongkorn University (SUCU). My primary responsibilities included task allocation to engineers, leading the Scrum process, and providing supports to team members.",
        "Managed the overall website development timeline to ensure it stays within the specified scope. Additionally, oversees the work of engineers within the team using a Kanban board, while gathering client feedback to implement improvements through feedback loops, aiming to meet requirements as closely as possible.",
        "Architected the system using Golang as the backend server. The architecture was implemented following the principles of clean architecture, with careful consideration of domain-driven design (DDD)",
        "Developed a microservice for the Rub Puen Kao Mai 2024 using Golang and gRPC as the backend server, supporting over 5,000 users.",
        "Integrated caching with the backend system of Rub Puen Kao Mai 2024 to reduce database load during high traffic.",
      ],
      technologies: [
        "Go",
        "Fiber",
        "Gin",
        "PostgreSQL",
        "Kubernetes",
        "Microservices",
        "gRPC",
        "GCP",
        "AWS",
      ],
    },
    {
      company: "Engineering Student Committee, Chulalongkorn University",
      link: "https://esc.eng.chula.ac.th",
      badges: [],
      title: "Software Engineer",
      logo: ESCLogo,
      start: "June 2024",
      end: "Present",
      description: [
        "Implemented the backend system using Golang as the server and employed gRPC as the API architecture to facilitate communication between servers, effectively reducing the latency of API calls to support over 1,000 users.",
        "Authored proto files according to the API requirements to integrate and establish the gRPC server, allowing clients to access and interact with the services efficiently.",
        "Designed the code architecture by implementing hexagonal architecture principles, structured the codebase in a domain-based manner, and utilized Golang as the backend server to ensure a modular and maintainable system.",
      ],
      technologies: [
        "Go",
        "Fiber",
        "Gin",
        "PostgreSQL",
        "Docker",
        "gRPC",
        "Hexagonal",
        "OIDC",
      ],
    },
  ],
  skills: [
    "Go",
    "JavaScript",
    "TypeScript",
    "Java",
    "C/C++",
    "PostgreSQL",
    "MS SQL",
    "MySQL",
    "MongoDB",
    "AWS",
    "GCP",
    "Docker",
    "Kubernetes",
    "Fiber",
    "Gin",
    "Node.js",
    "Express.js",
    "Nest.js",
    "React/Next.js",
    "Tailwind",
    "AntD",
    "Chakra UI",
    "gRPC",
    "REST",
  ],
  projects: [
    {
      title: "Spacely AI",
      techStack: [
        "Full Stack Software Engineer",
        "React.js",
        "Next.js",
        "Chakra UI",
        "Go",
        "Gin",
        "Nest.js",
        "LLM",
        "GenAI",
        "Firebase",
      ],
      description:
        "An AI-driven platform that streamlines interior design by generating photorealistic renders and optimizing workflows.",
      logo: ParabolLogo,
      link: {
        label: "www.spacely.ai",
        href: "https://www.spacely.ai/",
      },
    },
    {
      title: "Sightify CJ",
      techStack: [
        "Full Stack Software Engineer",
        "React.js",
        "AntD",
        "Go",
        "Gin",
        "Docker",
        "Microsoft Azure",
        "Auth0",
      ],
      description:
        "The CMS product integrates with Tableau to analyze company data, enabling dashboard creation, with phase 2 focusing on managing access rights for employees and customers.",
      logo: ParabolLogo,
    },
    {
      title: "After Sale Service",
      techStack: [
        "Backend Software Engineer",
        "Go",
        "Fiber",
        "MS SQL",
        "Docker",
        "Gitlab CI",
      ],
      description:
        "The customer service system focuses on post-sales product support, including receiving problem reports, fixing issues, and returning the products.",
      logo: EvercastLogo,
    },
    {
      title: "RPKM 2024",
      techStack: [
        "Backend Software Engineer",
        "Go",
        "Redis",
        "Digital Ocean",
        "Microservices",
        "gRPC",
      ],
      description:
        "The Rub Puen Kao Mai 2024 web application is used for activities over 2 days during the freshman orientation for first-year students.",
      logo: ConsultlyLogo,
      link: {
        label: "github.com/wiraphatys/rpkm67-backend",
        href: "https://github.com/wiraphatys/rpkm67-backend",
      },
    },
  ],
} as const;
