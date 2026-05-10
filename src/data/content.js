// ─────────────────────────────────────────────
//  CONTENT.JS  ·  Sourced from resume — edit freely
// ─────────────────────────────────────────────

export const personal = {
  name: 'Sayad Md Anisur Rahman',
  tagline: 'Building things that work.',
  roles: [
    'Java Full Stack Developer',
    'Spring Boot Engineer',
    'React.js Developer',
    'REST API Architect',
    'Problem Solver',
  ],
  bio: `Java Full Stack Developer skilled in Spring Boot, React.js, and PostgreSQL, with hands-on experience building and deploying end-to-end web applications. I design scalable REST APIs, apply MVC architecture, and integrate databases using Hibernate (JPA) and JDBC.`,
  bio2: `Currently interning at JSpiders, Bengaluru — passionate about writing efficient, maintainable code and contributing to robust backend systems that actually ship.`,
  email: 'alexanis120@gmail.com',
  phone: '+91-6002566386',
  github: 'https://github.com/AnisRah121',
  linkedin: 'https://www.linkedin.com/in/anis-rahman2003/',
  location: 'Bengaluru, Karnataka, India',
  resumeLink: '#',
}

export const stats = [
  { value: '4+', label: 'Projects Shipped' },
  { value: '3',  label: 'Internships' },
  { value: '5+', label: 'Certifications' },
  { value: '7.86', label: 'CGPA (B.Tech)' },
]

export const skills = {
  'Backend': [
    { name: 'Core Java (Java 8+)', level: 90 },
    { name: 'Spring Boot / MVC', level: 88 },
    { name: 'Hibernate (JPA) / JDBC', level: 85 },
    { name: 'REST API Design', level: 88 },
    { name: 'Spring Security', level: 78 },
  ],
  'Frontend': [
    { name: 'React.js (Hooks, State)', level: 82 },
    { name: 'JavaScript (ES6+)', level: 84 },
    { name: 'HTML5 / CSS3', level: 90 },
    { name: 'Redux / Context API', level: 72 },
  ],
  'Databases & DevOps': [
    { name: 'PostgreSQL', level: 85 },
    { name: 'MySQL / Oracle DB', level: 80 },
    { name: 'Docker', level: 74 },
    { name: 'Git & GitHub / Maven', level: 88 },
    { name: 'AWS (EC2, S3, RDS)', level: 65 },
  ],
}

export const techMarquee = [
  'Java', 'Spring Boot', 'React.js', 'PostgreSQL', 'Docker',
  'Hibernate', 'REST APIs', 'Git', 'Maven', 'Postman',
  'Render', 'Vercel', 'HTML5', 'CSS3', 'JavaScript',
  'JUnit', 'Spring Security', 'JPA', 'AWS', 'MVC',
]

export const projects = [
  {
    title: 'AlfaazCraft',
    year: '2025',
    type: 'Full Stack · Poetry & Shayari Platform',
    description:
      'Full-stack poetry platform with Spring Boot REST API backend and React.js frontend, supporting CRUD across 5+ post categories with sub-200ms API response times. Deployed with decoupled frontend (Vercel) and backend (Render) using Neon PostgreSQL — zero-downtime independent deployability.',
    tech: ['Spring Boot', 'React.js', 'JPA', 'PostgreSQL', 'Docker', 'Vercel', 'Render'],
    live: 'https://alfaazcraft.vercel.app',
    github: 'https://github.com/AnisRah121/AlfaazCraft-Backend',
    featured: true,
  },
  {
    title: 'Login & Registration App',
    year: '2025',
    type: 'Backend · Auth System',
    description:
      'Production-ready authentication system with registration, login, logout, and session management using Spring Boot MVC and Thymeleaf. PostgreSQL schema via Spring Data JPA, deployed on Render using Docker with environment-based config.',
    tech: ['Spring Boot', 'Thymeleaf', 'JPA', 'PostgreSQL', 'Docker', 'Render'],
    live: 'https://springbootregloginapp.onrender.com',
    github: 'https://github.com/AnisRah121/SpringBootRegLoginApp',
    featured: false,
  },
  {
    title: 'Student Management System',
    year: '2025',
    type: 'Full Stack · MVC CRUD App',
    description:
      'Full-stack CRUD application using MVC architecture, Java Servlets, JSP, and PostgreSQL with a layered Controller-Service pattern for clean separation of concerns.',
    tech: ['Java', 'Servlets', 'JSP', 'PostgreSQL', 'MVC'],
    live: null,
    github: 'https://github.com/AnisRah121',
    featured: false,
  },
  {
    title: 'PG Reservation System',
    year: '2025',
    type: 'Backend · Console App',
    description:
      'Console-based reservation system with Add, View, Update, Delete, and Search operations using Core Java and JDBC for direct PostgreSQL database interaction.',
    tech: ['Core Java', 'JDBC', 'PostgreSQL'],
    live: null,
    github: 'https://github.com/AnisRah121',
    featured: false,
  },
]

export const experience = [
  {
    role: 'Java Full Stack Developer Intern',
    company: 'JSpiders, Bengaluru',
    period: '2025 – Present',
    location: 'Bengaluru, India',
    points: [
      'Building full-stack applications using Spring Boot, React.js, and PostgreSQL.',
      'Implementing REST APIs, Hibernate (JPA), and responsive React frontends.',
      'Part of an intensive developer training program focused on production-grade code.',
    ],
  },
  {
    role: 'Data Analyst Intern',
    company: 'Miraniya Data Systems',
    period: 'Apr 2024 – Jun 2024',
    location: 'Remote',
    points: [
      'Worked on data analysis, visualization, and reporting.',
      'Derived actionable insights from structured datasets using analytical tools.',
    ],
  },
  {
    role: 'Winter Industrial Intern',
    company: 'Indian Oil Corporation Limited (IOCL)',
    period: 'Dec 2023 – Jan 2024',
    location: 'Assam, India',
    points: [
      'Observed industrial automation and instrumentation systems in large-scale operations.',
      'Gained exposure to real-world engineering infrastructure and process control systems.',
    ],
  },
]

export const education = [
  {
    degree: 'B.Tech — Electronics & Communication Engineering',
    school: 'Tezpur University',
    period: 'Oct 2021 – May 2025',
    location: 'Sonitpur, Assam',
    gpa: '7.86 / 10',
  },
  {
    degree: 'Higher Secondary — Science Stream',
    school: 'Matrix Junior College',
    period: 'Jun 2019 – Jul 2021',
    location: 'Nagaon, Assam',
    gpa: '88.2%',
  },
]

export const certifications = [
  { name: 'The Complete Web Development Bootcamp', issuer: 'Udemy — Dr. Angela Yu', year: '2024' },
  { name: 'Data, Data, Everywhere', issuer: 'Google / Coursera', year: '2023' },
  { name: 'Python for Everybody', issuer: 'NPTEL / IIT', year: '2022–2024' },
  { name: 'Cloud Computing', issuer: 'NPTEL / IIT', year: '2023' },
  { name: 'Internet of Things (IoT)', issuer: 'NPTEL / IIT', year: '2024' },
]
