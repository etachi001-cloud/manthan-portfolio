import React from 'react';
import { Mail, Phone, MapPin, Heart, ArrowUpRight } from 'lucide-react';
import GithubIcon from './GithubIcon';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-wrap">
      <div className="container">
        <div className="footer-top">
          {/* Brand Col */}
          <div style={{ maxWidth: 380 }}>
            <div className="brand-logo" style={{ marginBottom: '0.75rem' }}>
              <div className="brand-badge">MP</div>
              <span>Manthan Patel</span>
            </div>
            <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: '1.6' }}>
              B.Tech Student & Aspiring AI & Data Science Professional focused on building efficient, practical technology solutions.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginTop: '0.85rem', color: '#cbd5e1', fontSize: '0.85rem' }}>
              <MapPin size={14} color="var(--purple-400)" />
              <span>{personal.location}</span>
            </div>
          </div>

          {/* Quick Nav Col */}
          <div>
            <div style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--purple-400)', textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.05em' }}>
              Navigation
            </div>
            <div className="footer-nav">
              {['#home', '#about', '#education', '#skills', '#projects', '#github', '#contact'].map((href) => (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  style={{ color: '#94a3b8', fontSize: '0.9rem', textTransform: 'capitalize', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.target.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.target.style.color = '#94a3b8')}
                >
                  {href.substring(1)}
                </a>
              ))}
            </div>
          </div>

          {/* Connect Col */}
          <div>
            <div style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--purple-400)', textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.05em' }}>
              Connect Directly
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <a
                href={personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#cbd5e1', fontSize: '0.88rem' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--purple-300)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#cbd5e1')}
              >
                <GithubIcon size={16} />
                <span>github.com/{personal.githubUsername}</span>
                <ArrowUpRight size={13} style={{ opacity: 0.7 }} />
              </a>

              <a
                href={`mailto:${personal.email}`}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#cbd5e1', fontSize: '0.88rem' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--purple-300)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#cbd5e1')}
              >
                <Mail size={16} />
                <span>{personal.email}</span>
              </a>

              <a
                href={`tel:${personal.phone}`}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#cbd5e1', fontSize: '0.88rem' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--purple-300)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#cbd5e1')}
              >
                <Phone size={16} />
                <span>{personal.displayPhone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Line */}
        <div className="footer-bottom">
          <div>
            © 2026 Manthan Patel. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>Built with React, Vite & Three.js</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
