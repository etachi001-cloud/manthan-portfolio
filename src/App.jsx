import React from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import EducationSection from './sections/EducationSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import GithubSection from './sections/GithubSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <div className="portfolio-app">
      {/* Visual Preloader */}
      <Preloader />

      {/* Sticky Glass Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <GithubSection />
        <ContactSection />
      </main>

      {/* Modern Footer */}
      <Footer />

      {/* Scroll to Top with Circular Progress */}
      <ScrollToTop />
    </div>
  );
}
