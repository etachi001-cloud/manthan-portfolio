# Manthan Patel - Modern Futuristic Personal Portfolio

A sleek, modern, futuristic personal portfolio website for **Manthan Patel**, B.Tech Information Technology student at Vidya Deep University and aspiring AI & Data Science professional.

Built with **React**, **Vite**, **Three.js**, **Lucide Icons**, and a custom dark glassmorphism design system with neon purple accents (`#a855f7`, `#8b5cf6`, `#c084fc`).

---

## 🌟 Key Features

- **Futuristic AI / Developer Theme**: Deep obsidian canvas, glassmorphism cards, neon purple glowing borders, and subtle cyber grid background.
- **Interactive 3D Hero Element**: Three.js WebGL digital neural constellation with dynamic particle nodes, interconnecting lines, orbital spin, and mouse parallax.
- **Typewriter Effect**: Dynamic cycling tagline highlighting your focus in AI, Data Science, and IT.
- **Academic Timeline**: Modern education milestone cards for B.Tech in IT at Vidya Deep University (7th Semester, 2027) and 12th Pass.
- **Verified Skills Showcase**: Interactive skill cards for **Python**, **SQL**, **Data Analytics**, **Web Development**, and **AI / Machine Learning** without fabricated percentages.
- **Featured Project Showcase**: Showcase for **Student Management System** linking directly to the real GitHub repository (`https://github.com/etachi001-cloud/student-management-system`).
- **Live GitHub Activity**: Dynamic API integration querying profile data and repositories for `@etachi001-cloud`.
- **Validated Contact Form**: Client-side validation with prefilled mailto launcher and ready-to-plug Formspree/EmailJS support.
- **Resume Modal & Download**: Accessible preview and download interface for your resume (`resume.pdf`).
- **Active Navigation & Scroll-to-Top**: Sticky glass navbar with real-time section highlight tracking and circular SVG scroll progress button.
- **100% Responsive & Cross-Device**: Fully optimized for mobile phones, laptops, desktops, and tablets.
- **Custom Domain Ready**: Clean relative architecture ready for any custom domain such as `www.manthanpatel.com` or `manthanpatel.in`.
- **Deployment Independent**: Standard Vite + React build output that can be hosted on any static hosting provider.

---

## 📁 Project Structure

```text
├── index.html                  # SEO tags, Open Graph meta, modern web fonts
├── package.json                # Dependencies and build scripts
├── vite.config.js              # Universal relative base & code-splitting
├── public/
│   ├── favicon.svg             # Neon purple MP monogram icon
│   └── resume.pdf              # Resume document (replace with your own PDF)
└── src/
    ├── main.jsx                # Application root mounting
    ├── App.jsx                 # Page assembler
    ├── data/
    │   └── portfolioData.js    # ⭐ CENTRAL DATA CONFIGURATION (Edit all info here!)
    ├── styles/
    │   ├── index.css           # Resets, design tokens, colors, typography
    │   ├── components.css      # Glassmorphism, buttons, badges, timelines
    │   └── animations.css      # Keyframes, glow pulses, float effects
    ├── components/
    │   ├── Navbar.jsx          # Fixed glass nav with active observer & mobile drawer
    │   ├── Hero3D.jsx          # Interactive Three.js neural constellation
    │   ├── TypingEffect.jsx    # Typewriter animation
    │   ├── GithubIcon.jsx      # Reusable SVG GitHub icon
    │   ├── ResumeModal.jsx     # Resume preview & download modal
    │   ├── ScrollToTop.jsx     # Dynamic circular scroll indicator
    │   ├── Preloader.jsx       # Smooth initial system reveal
    │   └── Footer.jsx          # Copyright, navigation, and contact links
    └── sections/
        ├── HeroSection.jsx     # Hero headline, badges, CTAs, 3D background
        ├── AboutSection.jsx    # Bio, location, degree summary, engineering pillars
        ├── EducationSection.jsx# Timeline (Vidya Deep University & 12th Pass)
        ├── SkillsSection.jsx   # Animated skill cards
        ├── ProjectsSection.jsx # Student Management System showcase
        ├── GithubSection.jsx   # GitHub profile & repository cards
        └── ContactSection.jsx  # Validated contact form & quick copy buttons
```

---

## 🚀 Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or higher)
- npm (comes with Node.js)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔨 Building for Production

To create a production-ready bundle optimized with minified JavaScript and CSS:

```bash
npm run build
```

This compiles all files into the `dist/` directory. You can preview the production build locally with:
```bash
npm run preview
```

---

## ✏️ How to Customize Your Content

All portfolio content is centralized in one file:
`src/data/portfolioData.js`

### 1. Update Personal Info or Bio
Open `src/data/portfolioData.js` and edit the `personal` object:
```javascript
personal: {
  name: "Manthan Patel",
  title: "B.Tech Student",
  tagline: "Aspiring AI & Data Science Professional",
  bio: "...",
  location: "Kosamba, Gujarat, India",
  email: "manthanptl011@gmail.com",
  phone: "8347894403",
  ...
}
```

### 2. Replace Your Resume PDF
Place your resume document into the `public/` folder as `resume.pdf`. The download button will automatically serve your latest PDF.

### 3. Add More Projects in the Future
Open `src/data/portfolioData.js` and add a project object to the `projects` array:
```javascript
{
  id: "my-new-project",
  title: "AI Predictive Analytics Dashboard",
  featured: false,
  category: "Python / Data Science",
  description: "A machine learning dashboard predicting trends.",
  technologies: ["Python", "Pandas", "Scikit-Learn", "Streamlit"],
  liveUrl: "https://your-project-link.com",
  githubUrl: "https://github.com/etachi001-cloud/...",
  stats: [
    { label: "Role", value: "Developer" }
  ],
  features: [
    "Predictive data modeling",
    "Interactive charts"
  ]
}
```

### 4. Connect the Contact Form to Formspree
If you want messages delivered directly to your email without opening the user's mail client:
1. Create a free account at [Formspree.io](https://formspree.io/).
2. Create a form and copy your Form ID (e.g. `xpzgabwy`).
3. In `src/data/portfolioData.js`, update:
```javascript
contact: {
  serviceType: "formspree",
  formspreeId: "YOUR_FORMSPREE_FORM_ID",
  ...
}
```

---

## 📄 License
© 2026 Manthan Patel. All rights reserved.
