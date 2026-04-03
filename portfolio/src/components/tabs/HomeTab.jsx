// components/tabs/HomeTab.jsx
import React from 'react';
import { personal } from '../../data/portfolio';
import './HomeTab.css';

export default function HomeTab({ onNavigate }) {
  return (
    <div className="home-tab">
      {/* Background orbs */}
      <div className="home-orb home-orb-1" />
      <div className="home-orb home-orb-2" />
      <div className="home-orb home-orb-3" />
      <div className="home-bg-grid" />

      {/* Floating shapes */}
      <div className="home-shape home-shape-ring" />
      <div className="home-shape home-shape-dot-1" />
      <div className="home-shape home-shape-dot-2" />
      <div className="home-shape home-shape-dot-3" />

      <div className="home-content">
        {/* LEFT */}
        <div className="home-left">
          <div className="home-tag animate-fade-up delay-100">
            <span className="home-tag-dot" />
            <span>Available for opportunities</span>
          </div>

          <h1 className="home-name animate-fade-up delay-200">
            {personal.name}
          </h1>

          <div className="home-role animate-fade-up delay-300">
            <span className="home-role-slash">/</span>
            <span className="gradient-text">{personal.role}</span>
          </div>

          <p className="home-tagline animate-fade-up delay-400">
            {personal.tagline}
          </p>

          <div className="home-actions animate-fade-up delay-500">
            <button className="btn-primary" onClick={() => onNavigate('projects')}>
              <span>View Projects</span>
            </button>
            <button className="btn-secondary" onClick={() => onNavigate('contact')}>
              Contact Me
            </button>
          </div>

          <div className="home-stats animate-fade-up delay-600">
            <div className="home-stat">
              <span className="home-stat-num neon-text-blue">4+</span>
              <span className="home-stat-label">Projects</span>
            </div>
            <div className="home-stat-divider" />
            <div className="home-stat">
              <span className="home-stat-num neon-text-purple">3+</span>
              <span className="home-stat-label">Technologies</span>
            </div>
            <div className="home-stat-divider" />
            <div className="home-stat">
              <span className="home-stat-num neon-text-cyan">4mo</span>
              <span className="home-stat-label">OJT</span>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="home-right animate-fade-up delay-300">
          <div className="home-visual-wrap">
            {/* Rotating rings */}
            <div className="home-visual-ring home-visual-ring-1" />
            <div className="home-visual-ring home-visual-ring-2" />
            <div className="home-visual-ring home-visual-ring-3" />

            {/* Center avatar */}
            <div className="home-avatar">
              <span className="home-avatar-icon">👨‍💻</span>
            </div>

            {/* Orbit dots */}
            <div className="home-orbit-wrap">
              {['⚛️', '🐘', '🎨', '🗄️'].map((icon, i) => (
                <div
                  key={i}
                  className="home-orbit-item"
                  style={{ animationDelay: `${i * -1.5}s` }}
                >
                  {icon}
                </div>
              ))}
            </div>

            {/* Floating card */}
            <div className="home-floating-card glass-card">
              <div className="home-fc-dot" />
              <span className="home-fc-text">Open to Work</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
