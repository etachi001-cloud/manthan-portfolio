import React from 'react';
import { GraduationCap, Calendar, Building, BookMarked, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function EducationSection() {
  const { education } = portfolioData;

  return (
    <section id="education" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={14} />
            <span>Academic Journey</span>
          </div>
          <h2 className="section-title">
            Education & <span className="text-gradient-purple">Qualifications</span>
          </h2>
          <p className="section-subtitle">
            My formal engineering training and academic background in Information Technology.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="timeline-container">
          <div className="timeline-spine" />

          {education.map((item, idx) => (
            <div key={item.id} className="timeline-item">
              {/* Pulsing Node Connector */}
              <div
                className="timeline-node"
                style={{
                  borderColor: item.current ? 'var(--purple-400)' : '#64748b',
                  boxShadow: item.current ? '0 0 15px var(--purple-500)' : 'none'
                }}
              />

              {/* Timeline Glass Card */}
              <div className="timeline-card glass-card glass-card-interactive">
                <div className="timeline-header">
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
                      <h3 className="timeline-degree">{item.degree}</h3>
                      <span className="timeline-badge">
                        {item.current ? 'Currently Pursuing' : 'Completed'}
                      </span>
                    </div>
                    <div style={{ fontSize: '0.92rem', color: '#94a3b8', marginTop: '0.2rem' }}>
                      {item.branch}
                    </div>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontSize: '0.85rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--purple-300)',
                      background: 'rgba(168, 85, 247, 0.08)',
                      padding: '0.35rem 0.75rem',
                      borderRadius: 8,
                      border: '1px solid rgba(168, 85, 247, 0.2)'
                    }}
                  >
                    <Calendar size={14} />
                    <span>{item.period}</span>
                  </div>
                </div>

                <div className="timeline-institution">
                  <Building size={16} />
                  <span>{item.institution}</span>
                  {item.status && item.status !== 'Completed' && (
                    <span style={{ color: '#94a3b8', fontSize: '0.85rem', fontWeight: 400 }}>
                      • {item.status} (Expected {item.expectedGraduation})
                    </span>
                  )}
                </div>

                {/* Highlights List */}
                <div className="timeline-list">
                  {item.highlights.map((point, pIdx) => (
                    <div key={pIdx} className="timeline-bullet">
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
