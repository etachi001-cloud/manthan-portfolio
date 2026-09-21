import React from 'react';
import { Layers, ExternalLink, Sparkles, CheckCircle2, Terminal, ArrowUpRight } from 'lucide-react';
import GithubIcon from '../components/GithubIcon';
import { portfolioData } from '../data/portfolioData';

export default function ProjectsSection() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Layers size={14} />
            <span>Portfolio Showcase</span>
          </div>
          <h2 className="section-title">
            Featured <span className="text-gradient-purple">Projects</span>
          </h2>
          <p className="section-subtitle">
            Practical applications built to solve real-world problems through programming and modern web technologies.
          </p>
        </div>

        {/* Projects List / Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {projects.map((project) => (
            <div
              key={project.id}
              className="featured-project-card glass-card cyber-scanline"
            >
              <div className="project-showcase-layout">
                {/* Left: Futuristic Browser Window / Mockup Area */}
                <div className="browser-mockup">
                  <div className="browser-header">
                    <div className="browser-dots">
                      <span className="browser-dot" style={{ background: '#f43f5e' }} />
                      <span className="browser-dot" style={{ background: '#fbbf24' }} />
                      <span className="browser-dot" style={{ background: '#10b981' }} />
                    </div>
                    <div className="browser-url-bar">
                      student-management.demo.app
                    </div>
                  </div>

                  <div className="browser-body">
                    <div className="browser-preview-icon animate-float">
                      <Terminal size={32} />
                    </div>

                    <h4 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '0.5rem', fontWeight: 700 }}>
                      Student Management System
                    </h4>

                    <p style={{ fontSize: '0.85rem', color: '#94a3b8', maxWidth: '340px', lineHeight: '1.5', marginBottom: '1.25rem' }}>
                      Web-based management dashboard for student records, enrollment, and academic administrative workflow.
                    </p>

                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm"
                      >
                        <span>Launch Live App</span>
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right: Project Details & Action Buttons */}
                <div className="project-details">
                  <div className="project-badge-row">
                    <span className="status-pill" style={{ background: 'rgba(168, 85, 247, 0.15)', borderColor: 'rgba(168, 85, 247, 0.3)', color: '#d8b4fe' }}>
                      <Sparkles size={12} />
                      <span>Featured Project</span>
                    </span>

                    <span className="tech-tag">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="project-title">{project.title}</h3>

                  <p className="project-desc">{project.description}</p>

                  {/* Technology Pills */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {project.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="tech-tag" style={{ fontSize: '0.82rem' }}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Key Highlights */}
                  {project.features && (
                    <div className="project-feature-list">
                      {project.features.map((feat, fIdx) => (
                        <div key={fIdx} className="project-feature-item">
                          <CheckCircle2 size={16} color="var(--purple-400)" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Project Metadata Stats */}
                  {project.stats && (
                    <div className="project-stats-grid">
                      {project.stats.map((st, sIdx) => (
                        <div key={sIdx} className="project-stat-box">
                          <div className="project-stat-label">{st.label}</div>
                          <div className="project-stat-val">{st.value}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '0.5rem' }}>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      <span>View Live Demo</span>
                      <ExternalLink size={16} />
                    </a>

                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                      >
                        <GithubIcon size={16} />
                        <span>Source Code</span>
                        <ArrowUpRight size={14} style={{ opacity: 0.7 }} />
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
