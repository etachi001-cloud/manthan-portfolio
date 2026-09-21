import React from 'react';
import { X, Download, FileText, CheckCircle2, Mail, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const { personal, education, skills, resume } = portfolioData;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="resume-title">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                background: 'rgba(168, 85, 247, 0.15)',
                border: '1px solid rgba(168, 85, 247, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--purple-300)'
              }}
            >
              <FileText size={20} />
            </div>
            <div>
              <h3 id="resume-title" style={{ fontSize: '1.25rem', color: '#ffffff' }}>
                Curriculum Vitae / Resume
              </h3>
              <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                {personal.name} • {personal.title}
              </p>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close resume modal">
            <X size={18} />
          </button>
        </div>

        {/* Modal Body / Highlights */}
        <div
          style={{
            background: 'rgba(8, 6, 18, 0.8)',
            border: '1px solid rgba(168, 85, 247, 0.2)',
            borderRadius: 12,
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          <div>
            <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--purple-400)', textTransform: 'uppercase' }}>
              Summary
            </span>
            <p style={{ fontSize: '0.9rem', color: '#cbd5e1', marginTop: '0.25rem', lineHeight: '1.6' }}>
              {personal.bio}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
            <div style={{ padding: '0.75rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: 8 }}>
              <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>Education</div>
              <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#ffffff' }}>
                B.Tech in Information Technology
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--purple-300)' }}>Vidya Deep University (2027)</div>
            </div>

            <div style={{ padding: '0.75rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: 8 }}>
              <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>Core Skills</div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#ffffff' }}>
                Python, SQL, Data Analytics, Web Dev, AI/ML
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: '#6ee7b7' }}>
            <CheckCircle2 size={16} />
            <span>Open to AI/Data Science internships, traineeships, and tech opportunities</span>
          </div>
        </div>

        {/* Action Controls */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'flex-end', paddingTop: '0.5rem' }}>
          <a
            href={resume.pdfPath}
            download={resume.downloadFileName}
            className="btn btn-primary"
            style={{ gap: '0.5rem' }}
          >
            <Download size={16} />
            <span>Download PDF</span>
          </a>

          <a
            href={`mailto:${personal.email}?subject=Resume%20Inquiry%20-%20${encodeURIComponent(personal.name)}`}
            className="btn btn-secondary"
            style={{ gap: '0.5rem' }}
          >
            <Mail size={16} />
            <span>Request by Email</span>
          </a>
        </div>
      </div>
    </div>
  );
}
