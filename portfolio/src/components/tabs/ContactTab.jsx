// components/tabs/ContactTab.jsx
import React, { useState } from 'react';
import { personal } from '../../data/portfolio';
import './ContactTab.css';

export default function ContactTab() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSent(true);
      setTimeout(() => setSent(false), 4000);
      setForm({ name: '', email: '', message: '' });
    }
  };

  const contacts = [
    { icon: '✉️', label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
    { icon: '📱', label: 'Phone', value: personal.phone, href: `tel:${personal.phone}` },
    { icon: '📍', label: 'Location', value: personal.location, href: '#' },
    { icon: '🐙', label: 'GitHub', value: 'github.com/Jericosystm', href: personal.github },
    { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/JericoAmata', href: personal.linkedin },
  ];

  return (
    <div className="contact-tab">
      <div className="contact-orb-1" />
      <div className="contact-orb-2" />

      <div className="contact-content">
        <div className="section-header animate-fade-up delay-100">
          <span className="section-label">// contact.init</span>
          <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
        </div>

        <div className="contact-layout">
          {/* LEFT — Info */}
          <div className="contact-left animate-fade-up delay-200">
            <p className="contact-intro">
              Whether you have a project in mind, a job opportunity, or just want to connect —
              my inbox is always open. Let's build something great together.
            </p>

            <div className="contact-items">
              {contacts.map((c, i) => (
                <a
                  key={i}
                  href={c.href}
                  className="glass-card contact-item"
                  style={{ animationDelay: `${0.3 + i * 0.08}s` }}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                >
                  <span className="contact-item-icon">{c.icon}</span>
                  <div className="contact-item-info">
                    <span className="contact-item-label">{c.label}</span>
                    <span className="contact-item-value">{c.value}</span>
                  </div>
                  <span className="contact-item-arrow">→</span>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT — Form */}
          <div className="contact-right animate-fade-up delay-300">
            <div className="glass-card contact-form-card">
              {sent ? (
                <div className="contact-success">
                  <div className="contact-success-icon">✓</div>
                  <h3>Message Sent!</h3>
                  <p>I'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <>
                  <div className="contact-form-header">
                    <span className="contact-form-label">Send a Message</span>
                    <div className="contact-form-dots">
                      <span /><span /><span />
                    </div>
                  </div>

                  <div className="contact-form">
                    <div className={`contact-field ${focused === 'name' ? 'focused' : ''}`}>
                      <label className="contact-field-label">Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        value={form.name}
                        onChange={handleChange}
                        onFocus={() => setFocused('name')}
                        onBlur={() => setFocused('')}
                        className="contact-input"
                      />
                    </div>

                    <div className={`contact-field ${focused === 'email' ? 'focused' : ''}`}>
                      <label className="contact-field-label">Email</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={handleChange}
                        onFocus={() => setFocused('email')}
                        onBlur={() => setFocused('')}
                        className="contact-input"
                      />
                    </div>

                    <div className={`contact-field ${focused === 'message' ? 'focused' : ''}`}>
                      <label className="contact-field-label">Message</label>
                      <textarea
                        name="message"
                        placeholder="Tell me about your project or opportunity..."
                        value={form.message}
                        onChange={handleChange}
                        onFocus={() => setFocused('message')}
                        onBlur={() => setFocused('')}
                        className="contact-textarea"
                        rows={5}
                      />
                    </div>

                    <button className="btn-primary contact-submit" onClick={handleSubmit}>
                      <span>Send Message ↗</span>
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
