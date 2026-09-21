/**
 * CENTRAL PORTFOLIO CONFIGURATION
 * 
 * Manthan Patel's Portfolio Data Configuration
 * Edit this file to update your personal details, education, skills,
 * projects, or contact settings without touching the UI components.
 */

export const portfolioData = {
  // ==========================================
  // PERSONAL INFORMATION
  // ==========================================
  personal: {
    name: "Manthan Patel",
    title: "B.Tech Student",
    tagline: "Aspiring AI & Data Science Professional",
    bio: "I am a B.Tech student who is passionate about technology, programming, data analytics, and AI/ML. I am hardworking, dedicated to my work, and continuously improving my technical skills. I enjoy building practical projects and learning new technologies.",
    location: "Kosamba, Gujarat, India",
    email: "manthanptl011@gmail.com",
    phone: "8347894403",
    displayPhone: "+91 83478 94403",
    githubUsername: "etachi001-cloud",
    githubUrl: "https://github.com/etachi001-cloud",
    availability: "Open to Internships & Entry-Level Tech Roles",
    // Typewriter roles shown in Hero section
    typingRoles: [
      "Aspiring AI & Data Science Professional",
      "B.Tech Information Technology Student",
      "Python & SQL Enthusiast",
      "Data Analytics & Problem Solver",
      "Continuous Tech Learner"
    ]
  },

  // ==========================================
  // EDUCATION
  // ==========================================
  education: [
    {
      id: "btech-it",
      degree: "B.Tech",
      branch: "Information Technology",
      institution: "Vidya Deep University",
      status: "7th Semester",
      expectedGraduation: "2027",
      period: "2023 - 2027",
      highlights: [
        "Specializing in Information Technology, Data Systems & Programming",
        "Currently pursuing 7th Semester",
        "Focused on AI/ML algorithms, database systems, and modern software development"
      ],
      current: true
    },
    {
      id: "higher-secondary",
      degree: "12th Pass",
      branch: "Higher Secondary Education",
      institution: "Gujarat Board (GSEB)",
      status: "Completed",
      expectedGraduation: "Completed",
      period: "Completed",
      highlights: [
        "Strong foundation in Mathematics, Science, and Analytical Reasoning",
        "Transitioned into Engineering and Computer Sciences"
      ],
      current: false
    }
  ],

  // ==========================================
  // SKILLS (Verified - No fake percentages)
  // ==========================================
  skills: [
    {
      name: "Python",
      category: "Core Programming",
      icon: "Code",
      tag: "Core Language",
      description: "Writing clean, functional code for logic development, automation, and data handling.",
      focus: ["Core Syntax", "Data Structures", "Scripting & Automation", "Project Development"]
    },
    {
      name: "SQL",
      category: "Databases & Storage",
      icon: "Database",
      tag: "Data Systems",
      description: "Designing relational queries, filtering datasets, and managing structured databases.",
      focus: ["Relational Databases", "Complex Queries", "Data Retrieval", "Database Management"]
    },
    {
      name: "Data Analytics",
      category: "Analytics & Insights",
      icon: "BarChart3",
      tag: "Analytics",
      description: "Extracting meaningful insights, analyzing trends, and interpreting data patterns.",
      focus: ["Data Exploration", "Pattern Recognition", "Descriptive Analysis", "Insight Generation"]
    },
    {
      name: "Web Development",
      category: "Web & Interfaces",
      icon: "Globe",
      tag: "Application Dev",
      description: "Building responsive, modern, and accessible web-based user interfaces and applications.",
      focus: ["Frontend Architecture", "Responsive Layouts", "Modern UI/UX", "API Integration"]
    },
    {
      name: "AI / Machine Learning",
      category: "Intelligent Systems",
      icon: "BrainCircuit",
      tag: "Emerging Tech",
      description: "Exploring machine learning foundations, predictive concepts, and modern AI paradigms.",
      focus: ["ML Principles", "Data Preprocessing", "Model Fundamentals", "Applied Problem Solving"]
    }
  ],

  // ==========================================
  // PROJECTS
  // ==========================================
  projects: [
    {
      id: "student-management-system",
      title: "Student Management System",
      featured: true,
      category: "Python / Web Development",
      description: "A web-based Student Management System designed to manage and organize student-related information efficiently.",
      technologies: ["Python", "Web Development", "Database Architecture", "Responsive UI"],
      liveUrl: "https://github.com/etachi001-cloud/student-management-system",
      githubUrl: "https://github.com/etachi001-cloud/student-management-system",
      previewType: "app-mockup",
      stats: [
        { label: "Deployment", value: "Cloud Production" },
        { label: "Architecture", value: "Full Stack" },
        { label: "Role", value: "Developer" }
      ],
      features: [
        "Centralized student records and information management",
        "Streamlined navigation with clean, modern web interface",
        "Efficient data organization and real-time updates",
        "Cloud-deployed with high performance and instant responsiveness"
      ]
    }
    // You can easily add more projects here in the future:
    /*
    {
      id: "your-next-project",
      title: "Your Project Title",
      featured: false,
      category: "AI / Data Science",
      description: "Brief summary of your project.",
      technologies: ["Python", "SQL", "Machine Learning"],
      liveUrl: "https://...",
      githubUrl: "https://github.com/etachi001-cloud/...",
      stats: [],
      features: []
    }
    */
  ],

  // ==========================================
  // CONTACT & SERVICES CONFIGURATION
  // ==========================================
  contact: {
    // Leave serviceType as 'mailto' for default direct email behavior,
    // or set to 'formspree' and add your formspreeId: 'YOUR_FORMSPREE_ID'
    serviceType: "mailto", 
    formspreeId: "", 
    successMessage: "Thank you! Your message has been prepared. I will get back to you promptly.",
    directEmailSubject: "Portfolio Inquiry - Collaboration or Opportunity"
  },

  // ==========================================
  // RESUME CONFIGURATION
  // ==========================================
  resume: {
    downloadFileName: "Manthan_Patel_Resume.pdf",
    // When you have your PDF file ready, place it into the public/ folder as resume.pdf
    pdfPath: "/resume.pdf",
    summary: "B.Tech Information Technology student at Vidya Deep University passionate about AI, Data Analytics, Python, SQL, and modern Web Development.",
    availableOnline: true
  }
};
