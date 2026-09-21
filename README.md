# Manthan Patel - Modern Futuristic Personal Portfolio

> 🚀 **Live Production Website**: [https://etachi001-cloud.github.io/manthan-portfolio/](https://etachi001-cloud.github.io/manthan-portfolio/)

A sleek, modern, futuristic personal portfolio website for **Manthan Patel**, B.Tech Information Technology student at Vidya Deep University and aspiring AI & Data Science professional.

Built with **React**, **Vite**, **Three.js**, **Lucide Icons**, and a custom dark glassmorphism design system with neon purple glows (`#a855f7`, `#8b5cf6`, `#c084fc`).

---

## 🌟 Key Features

- **Futuristic AI / Developer Theme**: Deep obsidian canvas, glassmorphism cards, neon purple glowing borders, and subtle cyber grid effects.
- **Interactive 3D Hero Element**: Three.js WebGL digital neural constellation with dynamic particle nodes, interconnecting lines, orbital spin, and mouse parallax.
- **Typewriter Effect**: Dynamic cycling tagline highlighting your focus in AI, Data Science, and IT.
- **Academic Timeline**: Modern education milestone cards for B.Tech in IT at Vidya Deep University (7th Semester, 2027) and 12th Pass.
- **Verified Skills Showcase**: Interactive skill cards for **Python**, **SQL**, **Data Analytics**, **Web Development**, and **AI / Machine Learning** without fabricated percentages.
- **Featured Project**: Showcase for **Student Management System** linking directly to the real GitHub repository (`https://github.com/etachi001-cloud/student-management-system`).
- **Live GitHub Activity**: Dynamic API integration querying profile data and repositories for `@etachi001-cloud`.
- **Validated Contact Form**: Client-side validation with prefilled mailto launcher and ready-to-plug Formspree/EmailJS support.
- **Resume Modal & Download**: Accessible preview and download interface for your resume.
- **Active Navigation & Scroll-to-Top**: Sticky glass navbar with real-time section highlight tracking and circular SVG scroll progress button.
- **100% Responsive & Accessible**: Tested on desktop, tablet, and mobile viewports.

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
Open [http://localhost:3000](http://localhost:3000) in your browser to view your live site.

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

## 🌐 Deployment Guide (Platform Independent)

The project is completely portable and can be deployed to any static host (Vercel, GitHub Pages, Render, Cloudflare Pages, etc.):

### Option 1: Deploy to Vercel (Recommended)
1. Push your repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and import your GitHub repository.
3. Framework Preset: **Vite** (Build command: `npm run build`, Output directory: `dist`).
4. Click **Deploy**.

### Option 2: Deploy to GitHub Pages
1. Push your repository to GitHub.
2. In your repository settings, navigate to **Settings** -> **Pages**.
3. Under **Build and deployment**, select **GitHub Actions** (or deploy the `dist/` branch via gh-pages).
4. Vite's relative base (`base: './'`) automatically ensures all assets resolve correctly without path issues.

### Option 3: Deploy to Render / Any Static Host
1. Create a new **Static Site** on [Render](https://render.com/).
2. Build command: `npm run build`.
3. Publish directory: `dist`.

---

## ✏️ How to Customize Your Content

All portfolio content is stored in **one single file**:
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
Place your real resume file into the `public/` directory named `resume.pdf`. The download button will automatically serve your latest PDF.

### 3. Add More Projects in the Future
Open `src/data/portfolioData.js` and add a new project to the `projects` array:
```javascript
{
  id: "my-new-project",
  title: "AI Predictive Analytics Dashboard",
  featured: false,
  category: "Python / Data Science",
  description: "A machine learning dashboard predicting trends.",
  technologies: ["Python", "Pandas", "Scikit-Learn", "Streamlit"],
  liveUrl: "https://...",
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
If you want messages sent directly to your inbox without opening the user's email client:
1. Create a free account at [Formspree.io](https://formspree.io/).
2. Create a new form and copy your Form ID (e.g. `xpzgabwy`).
3. In `src/data/portfolioData.js`, update the `contact` configuration:
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
