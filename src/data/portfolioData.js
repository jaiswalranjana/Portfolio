export const personalInfo = {
  name: "Ranjana Jaiswal",
  initials: "RJ.",
  title: "2nd Year CSE Student",
  role: "Aspiring Software Developer",
  college: "B.Tech Computer Science & Engineering",
  location: "India",
  email: "speaktoranjana1@gmail.com",
  github: "https://github.com/jaiswalranjana",
  linkedin: "https://www.linkedin.com/in/ranjana-j-51a66037a/",
  resume: "/RANJANA_JAISWAL_RESUME.pdf",
  bioShort: "Passionate about web development, problem solving, and building clean digital experiences. Currently strengthening my foundation in Data Structures & Algorithms while building modern web apps with React.",
  aboutParagraphs: [
    "Hi! I'm Ranjana Jaiswal, a 2nd-year Computer Science & Engineering student with a deep enthusiasm for software development, modern web technology, and algorithmic problem solving.",
    "My journey in computer science revolves around writing efficient code, solving complex logic problems in C++ and Python, and designing intuitive user interfaces using React and modern CSS.",
  ],
  currentFocus: [
    {
      title: "Full Stack Development",
      description: "Mastering React, modern state management, API integrations, and backend fundamentals."
    },
    {
      title: "Algorithmic Problem Solving",
      description: "Consistent DSA practice in C++ on LeetCode and CodeChef, focusing on graphs, dynamic programming, and trees."
    },
    {
      title: "Building Real Projects",
      description: "Turning practical ideas into functional, responsive web applications with clean user interfaces."
    }
  ]
};

export const skillsData = [
  {
    category: "Languages",
    description: "Core programming languages for algorithmic problem solving and development",
    skills: [
      { name: "C++", detail: "Data Structures & Algorithms" },
      { name: "Python", detail: "Problem Solving & Logic" },
      { name: "JavaScript", detail: "ES6+, Async JS & DOM" }
    ]
  },
  {
    category: "Web Development",
    description: "Technologies used for creating interactive, responsive user interfaces",
    skills: [
      { name: "React", detail: "Component Architecture & Hooks" },
      { name: "HTML5", detail: "Semantic Web Structure & Accessibility" },
      { name: "CSS3", detail: "Responsive Design & Flexbox/Grid" },
      { name: "Tailwind CSS", detail: "Utility-first Modern Styling" }
    ]
  },
  {
    category: "Tools & Version Control",
    description: "Development tools and workflows for code management and collaboration",
    skills: [
      { name: "Git", detail: "Branching, Version Tracking & Commits" },
      { name: "GitHub", detail: "Repository Hosting & Project Portfolio" },
      { name: "VS Code", detail: "Primary Code Editor & Debugging" }
    ]
  }
];

export const projectsData = [
  {
    id: "01",
    title: "Expense Tracker",
    tagline: "Personal Finance & Budget Management Web Application",
    description: "A functional finance tracking application designed to monitor daily income and expenses. Features category-wise sorting, budget breakdown visualization, and persistent browser local storage to maintain transaction records across sessions.",
    tech: ["React", "JavaScript", "CSS3", "Local Storage"],
    github: "https://github.com/jaiswalranjana/MyProjects/tree/main/expense-tracker",
    live: "https://expense-tracker-sigma-nine-91.vercel.app/",
    type: "Web Application",
    highlights: [
      "Categorized expense tracking with real-time budget summaries",
      "Persistent state management using browser Local Storage",
      "Clean, user-friendly interface optimized for mobile and desktop"
    ],
    previewTheme: "indigo"
  },
  {
    id: "02",
    title: "Password Generator",
    tagline: "Customizable Security Tool with Dynamic Constraints",
    description: "A fast, interactive password generation web utility built with React Hooks (`useState`, `useCallback`, `useRef`). Allows users to adjust password length dynamically and toggle uppercase letters, numbers, and special characters with copy-to-clipboard functionality.",
    tech: ["React", "JavaScript", "Tailwind CSS", "React Hooks"],
    github: "https://github.com/jaiswalranjana/REACT/tree/main/05passwordGenerator",
    live: "https://react-mauve-chi.vercel.app/",
    type: "React Utility",
    highlights: [
      "Custom string generation algorithm with variable complexity constraints",
      "Instant copy-to-clipboard feature with visual confirmation Toast",
      "Efficient hook re-renders using useCallback optimization"
    ],
    previewTheme: "emerald"
  },
  {
    id: "03",
    title: "Calculator Web App",
    tagline: "Interactive Mathematical Calculation Interface",
    description: "A clean mathematical calculator web app built using pure HTML, CSS, and JavaScript. Features arithmetic calculation logic, keyboard key support, error handling for invalid operations, and a clear responsive display layout.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/jaiswalranjana/MyProjects/tree/main/CALCULATOR",
    live: "https://my-projects-ten.vercel.app/",
    type: "JS App",
    highlights: [
      "Precise evaluation logic handling decimal operations and key inputs",
      "Sleek visual button grid with active click feedback animations",
      "Clean modular code structure using DOM manipulation"
    ],
    previewTheme: "blue"
  },
  {
    id: "04",
    title: "Amazon Front-End Clone",
    tagline: "E-Commerce Homepage & Product Showcase Clone",
    description: "A front-end recreation of the Amazon homepage experience focusing on layout fidelity, navigation structure, hero image carousels, grid-based product showcases, and responsive header search bar styling.",
    tech: ["HTML5", "CSS3", "Flexbox & Grid"],
    github: "https://github.com/jaiswalranjana/jaiswalranjana.github.io",
    live: "https://jaiswalranjana.github.io/",
    type: "UI Recreation",
    highlights: [
      "Pixel-inspired layout structure matching major e-commerce UI patterns",
      "Multi-column product card layout with responsive CSS Grid",
      "Custom navigation bar with dropdown menus and category links"
    ],
    previewTheme: "cyan"
  }
];

export const codingProfiles = [
  {
    platform: "CodeChef",
    handle: "cse_25_0698",
    stats: "500+ Problems Solved",
    detail: "Consistently practicing competitive programming & algorithmic challenges",
    url: "https://www.codechef.com/users/cse_25_0698",
    badge: "500+ Solved",
    accentColor: "from-amber-500/20 to-orange-500/10"
  },
  {
    platform: "LeetCode",
    handle: "25_cse_0698_jaiswal_ranjana",
    stats: "50+ Problems Solved",
    detail: "Focused on Data Structures, Algorithms, Arrays & String Manipulation",
    url: "https://leetcode.com/u/25_cse_0698_jaiswal_ranjana/",
    badge: "50+ Solved",
    accentColor: "from-yellow-500/20 to-amber-500/10"
  },
  {
    platform: "GitHub",
    handle: "jaiswalranjana",
    stats: "Projects & Contributions",
    detail: "Hosting source code for web projects, utilities & course submissions",
    url: "https://github.com/jaiswalranjana",
    badge: "Active Repos",
    accentColor: "from-blue-500/20 to-indigo-500/10"
  },
  {
    platform: "HackerRank",
    handle: "speaktoranjana1",
    stats: "Problem Solving Practice",
    detail: "Practicing core computer science principles and programming basics",
    url: "https://www.hackerrank.com/profile/speaktoranjana1",
    badge: "Verified Profile",
    accentColor: "from-emerald-500/20 to-teal-500/10"
  }
];

export const achievementsData = [
  {
    title: "500+ Problems Solved on CodeChef",
    category: "Competitive Programming",
    organization: "CodeChef",
    description: "Achieved the milestone of solving over 500 algorithmic programming problems, developing strong logic building and optimization skills in C++."
  },
  {
    title: "50+ Problems Solved on LeetCode",
    category: "Data Structures & Algorithms",
    organization: "LeetCode",
    description: "Actively solving fundamental data structure problems including Arrays, Strings, Two Pointers, and Recursion."
  },
  {
    title: "Web Development Projects",
    category: "Practical Application",
    organization: "Independent & Academic",
    description: "Built multiple functional frontend web applications utilizing React, JavaScript, HTML5, and CSS3."
  }
];
