import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Copy, Check, AlertCircle, ArrowUpRight, MessageSquare } from 'lucide-react';
import GithubIcon from '../components/GithubIcon';
import { portfolioData } from '../data/portfolioData';

export default function ContactSection() {
  const { personal, contact } = portfolioData;

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Copy to clipboard status
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const validateForm = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email format.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide a message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters.';
    }
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitting(true);

    // If Formspree is configured in portfolioData.js, post to Formspree
    if (contact.serviceType === 'formspree' && contact.formspreeId) {
      try {
        const response = await fetch(`https://formspree.io/f/${contact.formspreeId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          setSubmitted(true);
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          setErrors({ form: 'Service error. Please click "Direct Email" button instead.' });
        }
      } catch (err) {
        setErrors({ form: 'Network error. Please use direct email link.' });
      } finally {
        setSubmitting(false);
      }
    } else {
      // Default honest client-side handler:
      // Form validates, shows honest confirmation, and opens mailto link with pre-filled fields
      setTimeout(() => {
        setSubmitting(false);
        setSubmitted(true);

        // Pre-fill email client
        const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(
          formData.subject || `Portfolio Contact from ${formData.name}`
        )}&body=${encodeURIComponent(
          `Hi Manthan,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;

        // Open user's default email client
        window.location.href = mailtoUrl;
      }, 500);
    }
  };

  return (
    <section id="contact" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Mail size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">
            Let's <span className="text-gradient-purple">Connect</span>
          </h2>
          <p className="section-subtitle">
            Have an internship opportunity, project collaboration, or question? Feel free to reach out directly.
          </p>
        </div>

        {/* Contact Grid: Info & Form */}
        <div className="contact-grid">
          {/* Left Column: Direct Contact Cards */}
          <div className="contact-info-panel">
            {/* Email Card */}
            <div className="contact-method-card glass-card">
              <div className="contact-method-left">
                <div className="contact-icon-bubble">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="contact-method-label">Email Address</div>
                  <div className="contact-method-val">{personal.email}</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  type="button"
                  onClick={() => handleCopy(personal.email, 'email')}
                  className="btn btn-ghost btn-sm"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedField === 'email' ? <Check size={16} color="#34d399" /> : <Copy size={16} />}
                </button>
                <a
                  href={`mailto:${personal.email}`}
                  className="btn btn-primary btn-sm"
                  aria-label="Send email"
                >
                  <span>Mail</span>
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="contact-method-card glass-card">
              <div className="contact-method-left">
                <div className="contact-icon-bubble">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="contact-method-label">Phone Number</div>
                  <div className="contact-method-val">{personal.displayPhone}</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  type="button"
                  onClick={() => handleCopy(personal.phone, 'phone')}
                  className="btn btn-ghost btn-sm"
                  title="Copy phone number"
                  aria-label="Copy phone"
                >
                  {copiedField === 'phone' ? <Check size={16} color="#34d399" /> : <Copy size={16} />}
                </button>
                <a
                  href={`tel:${personal.phone}`}
                  className="btn btn-primary btn-sm"
                  aria-label="Call phone"
                >
                  <span>Call</span>
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="contact-method-card glass-card">
              <div className="contact-method-left">
                <div className="contact-icon-bubble">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="contact-method-label">Location</div>
                  <div className="contact-method-val">{personal.location}</div>
                </div>
              </div>

              <span className="status-pill" style={{ fontSize: '0.72rem' }}>
                Gujarat, India
              </span>
            </div>

            {/* GitHub Quick Card */}
            <div className="contact-method-card glass-card">
              <div className="contact-method-left">
                <div className="contact-icon-bubble">
                  <GithubIcon size={20} />
                </div>
                <div>
                  <div className="contact-method-label">GitHub Profile</div>
                  <div className="contact-method-val">@{personal.githubUsername}</div>
                </div>
              </div>

              <a
                href={personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <span>View</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form glass-card">
            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#ffffff' }}>
              Send a Direct Message
            </h3>

            {submitted && (
              <div className="form-feedback-notice form-feedback-success animate-fade-in">
                <CheckCircle size={18} />
                <div>
                  <strong>Form validated!</strong> Your email application has been launched to send this message directly to <em>{personal.email}</em>.
                </div>
              </div>
            )}

            {errors.form && (
              <div className="form-feedback-notice" style={{ background: 'rgba(239, 68, 68, 0.15)', color: '#fca5a5' }}>
                <AlertCircle size={18} />
                <div>{errors.form}</div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    className="form-input"
                    placeholder="e.g. Alex Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                  {errors.name && <span className="form-error">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">
                    Your Email *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    className="form-input"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                  {errors.email && <span className="form-error">{errors.email}</span>}
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label htmlFor="contact-subject" className="form-label">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  className="form-input"
                  placeholder="Internship opportunity, inquiry, etc."
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="contact-message" className="form-label">
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  className="form-textarea"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  required
                />
                {errors.message && <span className="form-error">{errors.message}</span>}
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%' }}
                disabled={submitting}
              >
                <Send size={16} />
                <span>{submitting ? 'Preparing...' : 'Send Message'}</span>
              </button>
            </form>

            <div style={{ marginTop: '0.5rem', fontSize: '0.78rem', color: '#64748b', textAlign: 'center', lineHeight: '1.4' }}>
              ℹ️ Submitting prepares your message and launches your email client to send directly to <em>{personal.email}</em>.
              To configure automated background delivery with Formspree or EmailJS, simply add your ID in <code>src/data/portfolioData.js</code>.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
