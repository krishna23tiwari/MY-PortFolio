import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  tcs,
  intelligence,
  sun,
  payment,
  intelligence2,
  rental,
  
  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Mern Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Competitive Programmer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Development Internship",
    company_name: "Bluestock Fintech",
    icon: "bfelogo.jpeg",
    iconBg: "#fcfafa",
    date: "Jun 2024- Aug 2024",
    points: [
      // "Developing and maintaining web applications using React.js, Next.js, Express.js and other related technologies.",
      // "Developed and maintained reliable web applications with user-friendly interfaces using ReactJS, Next.js, and Tailwind CSS, collaborating with cross-functional teams to meet project requirements",
      // "Managed databases (MySQL, MongoDB) and developed scalable JavaScript applications using Express.js, ensuring data integrity, security, and maintainability.",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // // "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Designed and developed a stock market website using Python, Django, and Figma, etc.",
      "Gained hands-on experience in stock market app development, contributing to real-world projects.",
      "Tech used - Python, Django, Figma",
    ],
},
  {
    title: "Software Developer Intern",
    company_name: "Hashedbit Innovation",
    icon: "hilogo.jpeg",
    iconBg: "#d4cfcf",
    date: "Jan 2024- May 2024",
    points: [
        "Developing and maintaining web applications using React.js, Next.js, Express.js and other related technologies.",
      "Developed and maintained reliable web applications with user-friendly interfaces using ReactJS, Next.js, and Tailwind CSS, collaborating with cross-functional teams to meet project requirements",
      "Managed databases (MySQL, MongoDB) and developed scalable JavaScript applications using Express.js, ensuring data integrity, security, and maintainability.",
      "Tech used - Reactjs, Nodejs, Expressjs, MySQL, CSS, Javascript."
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company_name: "Octanet Services Pvt Ltd",
    icon: "oct.jpeg",
    iconBg: "#fcfafa",
    date: "October 2023 - December 2023", 
    points: [
      "Collaborated with a team to create and maintain web applications, gaining hands-on experience in HTML5, CSS3, and JavaScript.",
      "Assisted in designing and developing user interfaces with React.JS, creating interactive and responsive web experiences.",
      "Contributed to web application development and maintenance, improving performance through active participation in codebase enhancements and troubleshooting.",
      "Gained exposure to frameworks like Bootstrap by helping create visually appealing and user-friendly web interfaces.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "After Jaser optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Web Development Certificate",
    designation: "CTO",
    company: "456 Enterprises",
    image: "SDE.png",
  },
  {
    testimonial:
      "After Jaser optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Web Development Certificate",
    designation: "CTO",
    company: "456 Enterprises",
    image: "React.png",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Jaser does.",
    name: "SDE Intern Certificate",
    designation: "COO",
    company: "DEF Corp",
    image: "SIH.jpg",
  },
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Jaser proved me wrong.",
    name: "Smart India Hackathon",
    designation: "CFO",
    company: "Acme Co",
    image: "BI.jpg",
  },
  {
    testimonial:
      "After Jaser optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Web Development Certificate",
    designation: "CTO",
    company: "456 Enterprises",
    image: "Oct.jpg",
  },
  {
    testimonial:
      "After Jaser optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Web Development Certificate",
    designation: "CTO",
    company: "456 Enterprises",
    image: "Python.png",
  },
];

const projects = [
  {
    name: "Real Time Chat App",
    description:
      // "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      "I developed a chat application with real-time, two-way communication, allowing message editing, deletion, and online status display. It also includes a search functionality for efficiently managing and locating contacts Tech Used- ReactJS, NodeJS, MongoDB, ExpressJS, Redux, React-Hooks,Tailwind CSS, APIs",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express.js",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "chatt.jpg",
    source_code_link: "https://github.com/ManuSaini9084/Real-Time-Chat-Frontend",
  },
  {
    name: "Rail Ticket Karo",
    description:
      "The online railway ticket reservation system is designed to efficiently manage train bookings and provide real-time information on availability, prices, and schedules. It has admin and user panels. It provides easy booking of train ticket. Schedules of train are handled properly. Tech Used- ReactJs, NodeJs, PostgreSQL, APIs",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "aws",
        color: "green-text-gradient",
      },
    ],
    image: "rail.jpg",
    source_code_link: "https://github.com/ManuSaini9084/Railway-irctc",
  },
  {
    name: "Empowering India",
    description:
      "An inclusive platform to provide information about government schemes, NGOs, and collaboration opportunities to support marginalized communities. It provides multilingual support, chatbots facilities, authentication as well. Tech Used- ReactJs, NodeJs,ExpressJs, APIs, MongoDB, Tailwind CSS",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootsrap5",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: "incl.avif",
    source_code_link: "https://github.com/yashpatel139/Inclusion",
  },
];

export { services, technologies, experiences, testimonials, projects };
