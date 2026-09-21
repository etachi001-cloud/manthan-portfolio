import React from 'react';
import { User, MapPin, GraduationCap, Target, Code2, Sparkles, BookOpen, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function AboutSection() {
  const { personal, education } = portfolioData;

  const corePillars = [
    {
      title: "Practical Problem Solving",
      desc: "Committed to turning theoretical programming concepts into working, usable software projects.",
      icon: Code2
    },
    {
      title: "Data & AI Exploration",
      desc: "Deeply interested in data analytics patterns, predictive models, and modern machine learning.",
      icon: Sparkles
    },
    {
      title: "Continuous Learning",
      desc: "Consistently expanding technical depth across Python, SQL, web systems, and computational concepts.",
      icon: BookOpen
    },
    {
      title: "Disciplined Work Ethic",
      desc: "Hardworking and detail-oriented approach to code architecture, reliability, and project execution.",
      icon: Layers
    }
  ];

  return (
    <section id="about" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <User size={14} />
            <span>Profile Overview</span>
          </div>
          <h2 className="section-title">
            About <span className="text-gradient-purple">Me</span>
          </h2>
          <p className="section-subtitle">
            An introduction to my background, technical focus, and dedication to building practical technology solutions.
          </p>
        </div>

        {/* About Grid: Profile Card & Detailed Content */}
        <div className="about-grid">
          {/* Left: Futuristic Profile Card */}
          <div className="profile-avatar-card glass-card">
            {/* Stylized Hologram Monogram Avatar */}
            <div className="avatar-hologram animate-float">
              <div className="avatar-inner">
                <span>MP</span>
              </div>
            </div>

            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.25rem' }}>
              {personal.name}
            </h3>

            <p style={{ fontSize: '0.9rem', color: 'var(--purple-400)', fontWeight: 600, marginBottom: '1.25rem' }}>
              {personal.title}
            </p>

            {/* Quick Metadata Details */}
            <div className="profile-meta-grid">
              <div className="profile-meta-item">
                <div className="profile-meta-label">Location</div>
                <div className="profile-meta-val">{personal.location}</div>
              </div>

              <div className="profile-meta-item">
                <div className="profile-meta-label">Current Degree</div>
                <div className="profile-meta-val">B.Tech (7th Sem)</div>
              </div>

              <div className="profile-meta-item">
                <div className="profile-meta-label">University</div>
                <div className="profile-meta-val">Vidya Deep Univ.</div>
              </div>

              <div className="profile-meta-item">
                <div className="profile-meta-label">Career Interest</div>
                <div className="profile-meta-val" style={{ color: 'var(--purple-300)' }}>
                  AI & Data Science
                </div>
              </div>
            </div>
          </div>

          {/* Right: Bio & Pillars */}
          <div className="about-text-content">
            <div className="glass-card" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem', color: 'var(--purple-300)', fontWeight: 600, fontSize: '0.9rem' }}>
                <Target size={18} />
                <span>MISSION & MINDSET</span>
              </div>

              <blockquote className="about-bio-quote">
                "{personal.bio}"
              </blockquote>

              <p style={{ fontSize: '0.95rem', color: '#94a3b8', marginTop: '1.25rem', lineHeight: '1.7' }}>
                Currently in my 7th semester of B.Tech Information Technology, I concentrate on building solid foundations across database querying with SQL, algorithms and scripting with Python, data interpretation, and responsive web development.
              </p>
            </div>

            {/* Engineering Pillars */}
            <div className="pillars-grid">
              {corePillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div key={pillar.title} className="pillar-card glass-card">
                    <div className="pillar-title">
                      <IconComponent size={16} color="var(--purple-400)" />
                      <span>{pillar.title}</span>
                    </div>
                    <p className="pillar-desc">{pillar.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
