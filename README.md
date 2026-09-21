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
- **Custom Domain Ready**: Pre-configured for custom domains such as `www.manthanpatel.com` or `manthanpatel.in`.
- **404-Proof SPA Refresh**: Configured with SPA rewrite fallbacks across Vercel, GitHub Pages, and static hosting platforms so refreshing never produces a 404.

---

## 📁 Project Structure

```text
├── index.html                  # SEO tags, Open Graph meta, modern web fonts
├── package.json                # Dependencies and build/deploy scripts
├── vite.config.js              # Universal relative base & code-splitting
├── vercel.json                 # Vercel SPA rewrites & security headers
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages automated deployment workflow
├── public/
│   ├── favicon.svg             # Neon purple MP monogram icon
│   ├── resume.pdf              # Resume document (replace with your own PDF)
│   ├── 404.html                # GitHub Pages SPA refresh handler
│   └── _redirects              # Universal SPA routing redirect rule
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

## 🌐 Permanent Public Deployment Guide

Choose any of the following reliable, free, and permanent hosting platforms:

### Option 1: Vercel (Recommended - Fastest & Easiest)

Vercel provides permanent HTTPS links, global CDN caching, automatic SSL, and zero 404s on page reload.

#### Method A: Using the Vercel CLI (1 Minute)
1. In your project terminal, run:
   ```bash
   npx vercel
   ```
2. Follow the quick terminal prompts:
   - **Set up and deploy?**: `y`
   - **Which scope?**: Choose your account
   - **Link to existing project?**: `n`
   - **Project name?**: `manthan-patel-portfolio` (or press Enter)
   - **Directory located?**: `./` (press Enter)
   - **Want to modify settings?**: `n` (press Enter — `vercel.json` already contains all optimal settings)
3. To deploy directly to production with your permanent public URL:
   ```bash
   npx vercel --prod
   ```
4. You will immediately get a permanent live link like:
   `https://manthan-patel-portfolio.vercel.app`

#### Method B: Connecting GitHub to Vercel (Automatic Updates)
1. Push this folder to a GitHub repository on your account `etachi001-cloud`.
2. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
3. Click **"Add New..."** -> **"Project"**.
4. Click **"Import"** next to your portfolio repository.
5. Keep default settings (Framework: Vite, Build: `npm run build`, Output: `dist`) and click **"Deploy"**.
6. Every time you push changes to GitHub, Vercel will automatically rebuild and update your live website!

---

### Option 2: GitHub Pages (100% Free Forever via GitHub)

This project includes an automated GitHub Actions workflow (`.github/workflows/deploy.yml`) pre-configured for GitHub Pages.

1. Create a repository on GitHub (e.g. `portfolio` or `etachi001-cloud.github.io`).
2. Push this project to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/etachi001-cloud/portfolio.git
   git push -u origin main
   ```
3. In your GitHub repository:
   - Go to **Settings** -> **Pages**.
   - Under **Build and deployment** -> **Source**, select **"GitHub Actions"**.
4. The workflow in `.github/workflows/deploy.yml` will automatically build and deploy the site!
5. Your permanent public link will be:
   `https://etachi001-cloud.github.io/portfolio` (or `https://etachi001-cloud.github.io`)

---

### Option 3: Cloudflare Pages

1. Log into [Cloudflare Dashboard](https://dash.cloudflare.com/) and navigate to **Workers & Pages** -> **Create application** -> **Pages**.
2. Connect your GitHub repository or upload the `dist/` folder directly.
3. Build configuration:
   - **Framework preset**: Vite
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. Click **"Save and Deploy"** to receive your permanent `pages.dev` URL.

---

## 🔗 Connecting a Custom Domain (e.g., www.manthanpatel.com or manthanpatel.in)

The project is structured to easily connect your own custom domain once purchased from any registrar (GoDaddy, Namecheap, Google Domains / Squarespace, Hostinger):

### If using Vercel:
1. In your Vercel project dashboard, go to **Settings** -> **Domains**.
2. Type your domain: `manthanpatel.in` or `www.manthanpatel.com` and click **Add**.
3. Vercel will show the DNS records to add at your domain registrar:
   - **Type A**: `@` pointing to `76.76.21.21`
   - **Type CNAME**: `www` pointing to `cname.vercel-dns.com`
4. DNS propagation usually takes 5 to 30 minutes, after which your custom domain is permanently live with free automatic SSL.

### If using GitHub Pages:
1. In your repository on GitHub, go to **Settings** -> **Pages**.
2. Under **Custom domain**, enter `www.manthanpatel.com` or `manthanpatel.in` and click **Save**.
3. At your domain registrar, add the DNS records provided by GitHub (CNAME for `www` or GitHub Pages IPs for apex domain).
4. Check the box **"Enforce HTTPS"**.

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
