import React, { useState } from 'react';
import { MapPin, ArrowRight, Download, Send, Sparkles, Terminal, Cpu, Database } from 'lucide-react';
import Hero3D from '../components/Hero3D';
import TypingEffect from '../components/TypingEffect';
import ResumeModal from '../components/ResumeModal';
import { portfolioData } from '../data/portfolioData';

export default function HeroSection() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const { personal, education } = portfolioData;

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-wrapper">
      {/* Interactive 3D Canvas in Hero */}
      <Hero3D />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="hero-content">
          {/* Status & Location Badges */}
          <div className="hero-badge-group">
            <div className="status-pill">
              <span className="status-dot" />
              <span>{personal.availability}</span>
            </div>

            <div className="tech-tag" style={{ background: 'rgba(56, 189, 248, 0.08)', borderColor: 'rgba(56, 189, 248, 0.25)', color: '#7dd3fc' }}>
              <MapPin size={13} />
              <span>{personal.location}</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="hero-heading">
            Hi, I'm <span className="text-gradient-purple">{personal.name}</span>
          </h1>

          {/* Typewriter Subtitle */}
          <div className="hero-typewriter-box">
            <TypingEffect strings={personal.typingRoles} />
          </div>

          {/* Professional Introduction Statement */}
          <p className="hero-intro-text">
            B.Tech Information Technology student at Vidya Deep University passionate about turning raw data and intelligent algorithms into practical, impactful solutions. Dedicated to continuous learning and building modern applications.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="hero-cta-group">
            <a
              href="#projects"
              onClick={(e) => handleSmoothScroll(e, 'projects')}
              className="btn btn-primary btn-lg"
            >
              <span>View My Projects</span>
              <ArrowRight size={18} />
            </a>

            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, 'contact')}
              className="btn btn-secondary btn-lg"
            >
              <span>Contact Me</span>
              <Send size={17} />
            </a>

            <button
              type="button"
              onClick={() => setIsResumeModalOpen(true)}
              className="btn btn-secondary btn-lg"
              aria-label="Open Resume Options"
            >
              <Download size={17} />
              <span>Download Resume</span>
            </button>
          </div>

          {/* Floating Academic & Tech Highlights */}
          <div className="hero-stats-row">
            <div className="hero-stat-card glass-card">
              <div className="hero-stat-label">Academic Program</div>
              <div className="hero-stat-value">B.Tech IT (7th Sem)</div>
            </div>

            <div className="hero-stat-card glass-card">
              <div className="hero-stat-label">University</div>
              <div className="hero-stat-value">Vidya Deep University</div>
            </div>

            <div className="hero-stat-card glass-card">
              <div className="hero-stat-label">Core Focus</div>
              <div className="hero-stat-value" style={{ color: 'var(--purple-300)' }}>
                AI, ML & Data Systems
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </section>
  );
}
