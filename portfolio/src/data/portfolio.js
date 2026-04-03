

export const personal = {
  name: "Jerico Amata",
  role: "Full Stack Developer",
  tagline: "I craft interfaces that think, systems that breathe.",
  email: "jerico.amata09@email.com",
  phone: "+63 994 745 6475",
  location: "Calamba Laguna, Philippines",
  github: "https://github.com/alexrivera",
  linkedin: "https://linkedin.com/in/alexriver",
};

export const about = {
  bio: "I'm a passionate developer who loves turning complex problems into elegant, intuitive experiences. My journey in tech started with curiosity and grew into a craft I obsess over daily.",
  education: {
    degree: "BS Information Technology",
    school: "Philippine Women's University CDCEC Calamba",
    year: "2021 – 2026",
    highlights: ["Open House Application Presentor"],
  },
  internship: {
    company: "Straive",
    role: "IT Support Intern",
    period: "Dec 2025 – Mar 2026",
    summary: "Supported IT infrastructure, assisted in deployment, managed inventory systems and provided technical support across departments.Create a full functional Website for Straive Laguna EUC",
  },
  goals: "I aim to join a forward-thinking tech company where I can build scalable systems, mentor others, and continuously evolve as a developer — bridging the gap between elegant design and powerful engineering.",
};

export const projects = [
  {
    id: 1,
    title: "OJTBox Straive",
    description: "A full fuctional website that can track all the assets movementment such as WFH, Onsite, Return, Release. All the modules are synchronized in the inventory module. It also has email functionality that can send email to the agents email, their superior email and other departments that is involved with. It can also track all the users activities in the system and can generate reports based on the data that is stored in the database.",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    color: "blue",
    icon: "📦",
    demo: "#",
    github: "https://github.com/Jericosystm/OJT-STRAIVE-FILES",
  },
  {
    id: 2,
    title: "MetalHub",
    description: "A web-app cloud-based inventory management system for a Demvels Company. Features: realtime monitoring of production, materials, user activity. It has 3 levels of user, admin, viewer, and clients. All of them have access for realtime chatting feature. It also has dashboard and data analytics that can help the admin predicts the possible demands for upcoming months ",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    color: "purple",
    icon: "⚙️",
    demo: "#",
    github: "https://github.com/Jericosystm/MetalHub",
  },
  {
    id: 3,
    title: "PWU Static Portal",
    description: "It is an application that showcasing all the details of the university such as list of courses offered and their units. It also shows the facilities of the university and the events that is happening in the university. It also has a contact us page that can send email to the university.",
    tech: ["Java", "AndroidStudio", "JavaScript"],
    color: "cyan",
    icon: "",
    demo: "",
    github: "https://github.com/Jericosystm/PWU-Calamba-Static-Portal",
  },
  {
    id: 4,
    title: "Portfolio OS",
    description: "This very portfolio — a desktop-style interactive experience built with React. Demonstrates UI/UX design and frontend engineering skills.",
    tech: ["React", "CSS3", "Vite", "JavaScript"],
    color: "pink",
    icon: "🚀",
    demo: "#",
    github: "#",
  },

  {
    id: 5,
    title: "Tracer",
    description: "It is an application that uses the camera as bar code and QR code scanner. It records all the scanned data that the user can edit or delete",
    tech: ["Android Studio", "Java", "Javascript"],
    color: "pink",
    icon: "📱",
    demo: "#",
    github: "#",
  },


  {
    id: 6,
    title: "We Click We Buy",
    description: "It is a laravel-based e-commerce website that has a user-friendly interface and a secure payment gateway. It also has a dashboard for the admin to manage the products, orders, and customers. It also has a feature that can track the delivery status of the orders.",
    tech: ["Laravel", "HTML", "Javascript", "CSS", "MySQL", "PHP"],
    color: "pink",
    icon: "🛒",
    demo: "#",
    github: "#",
  },
];

export const skills = [
  { name: "React", icon: "⚛️", level: "Intermediate", category: "Frontend" },
  { name: "JavaScript", icon: "🟨", level: "Intermediate", category: "Frontend" },
  { name: "PHP", icon: "🐘", level: "Advanced", category: "Backend" },
  { name: "MySQL", icon: "🗄️", level: "Advanced", category: "Backend" },
  { name: "Node.js", icon: "🟢", level: "Intermediate", category: "Backend" },
  { name: "HTML / CSS", icon: "🎨", level: "Advananced", category: "Tools" },
  { name: "Figma", icon: "✏️", level: "Intermediate", category: "Frontend" },
    { name: "Android Studio", icon: "", level: "Intermediate", category: "Tools" },
  { name: "Git & GitHub", icon: "🐙", level: "Intermediate", category: "Design" },
  { name: "Python", icon: "🐍", level: "Intermediate", category: "Backend" },
  { name: "REST APIs", icon: "🔌", level: "Intermediate", category: "Backend" },
  { name: "Tailwind CSS", icon: "💨", level: "Intermediate", category: "Frontend" },
];

export const experience = [
  {
    month: "December",
    short: "Dec",
    year: 2023,
    title: "Onboarding & Orientation",
    company: "Straive",
    tasks: [
      "Completed company onboarding and IT infrastructure orientation",
      "Familiarized with internal tools and ticketing systems",
      "Shadowed senior IT staff on daily operations",
    ],
    skills: ["IT Infrastructure", "Help Desk", "Documentation"],
  },
  {
    month: "January",
    short: "Jan",
    year: 2024,
    title: "Technical Support & Hardware",
    company: "Straive",
    tasks: [
      "Performed OS installation and system imaging for 15+ workstations",
      "Resolved hardware issues and replaced faulty components",
      "Assisted in network cable management and patch panel organization",
    ],
    skills: ["OS Installation", "Hardware Repair", "Networking"],
  },
  {
    month: "February",
    short: "Feb",
    year: 2024,
    title: "Software & Inventory Systems",
    company: "Straive",
    tasks: [
      "Developed and maintained the IT asset inventory spreadsheet system",
      "Installed and configured software across department machines",
      "Documented all IT assets with serial numbers and assignment records",
    ],
    skills: ["Asset Management", "Software Config", "Database"],
  },
  {
    month: "March",
    short: "Mar",
    year: 2024,
    title: "Deployment & Project Completion",
    company: "Straive",
    tasks: [
      "Led deployment of updated workstations across two departments",
      "Prepared final documentation and handover reports",
      "Presented internship summary to IT department head",
    ],
    skills: ["Deployment", "Technical Writing", "Presentation"],
  },
];
