import React from 'react';
import { Cpu, Code, Database, BarChart3, Globe, BrainCircuit, Sparkles, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function SkillsSection() {
  const { skills } = portfolioData;

  // Icon mapping
  const iconMap = {
    Code: Code,
    Database: Database,
    BarChart3: BarChart3,
    Globe: Globe,
    BrainCircuit: BrainCircuit
  };

  return (
    <section id="skills" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Cpu size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="text-gradient-purple">Expertise</span>
          </h2>
          <p className="section-subtitle">
            Core technologies and foundational disciplines I actively study, practice, and build projects with.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skills.map((skill) => {
            const IconComponent = iconMap[skill.icon] || Code;

            return (
              <div
                key={skill.name}
                className="skill-card glass-card glass-card-interactive"
              >
                {/* Top: Icon & Category Tag */}
                <div className="skill-card-top">
                  <div className="skill-icon-wrap">
                    <IconComponent size={26} />
                  </div>
                  <span className="skill-tag">{skill.tag}</span>
                </div>

                {/* Skill Name & Category */}
                <div>
                  <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--purple-400)', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                    {skill.category}
                  </div>
                  <h3 className="skill-name">{skill.name}</h3>
                </div>

                {/* Description */}
                <p className="skill-desc">
                  {skill.description}
                </p>

                {/* Key Focus Areas (Clean, factual, no fake percentage bars) */}
                <div className="skill-focus-wrap">
                  {skill.focus.map((item, idx) => (
                    <span key={idx} className="skill-focus-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Competency Note Box */}
        <div
          className="glass-card"
          style={{
            marginTop: '2.5rem',
            padding: '1.25rem 1.75rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            border: '1px solid rgba(168, 85, 247, 0.2)',
            borderRadius: 12
          }}
        >
          <Sparkles size={20} color="var(--purple-400)" style={{ flexShrink: 0 }} />
          <p style={{ fontSize: '0.88rem', color: '#cbd5e1', margin: 0, lineHeight: '1.5' }}>
            <strong>Commitment to Integrity:</strong> Skill areas reflect verified technical competencies practiced through course work, hands-on development, and academic projects at Vidya Deep University without arbitrary percentage metrics.
          </p>
        </div>
      </div>
    </section>
  );
}
