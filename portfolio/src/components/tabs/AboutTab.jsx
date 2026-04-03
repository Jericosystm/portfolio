// components/tabs/AboutTab.jsx
import React from 'react';
import { about } from '../../data/portfolio';
import './AboutTab.css';

export default function AboutTab() {
  return (
    <div className="about-tab">
      <div className="about-orb about-orb-1" />
      <div className="about-orb about-orb-2" />

      <div className="about-content">
        <div className="section-header animate-fade-up delay-100">
          <span className="section-label">// about.me</span>
          <h2 className="section-title">Personal <span className="gradient-text">Story</span></h2>
        </div>

        <div className="about-grid">
          {/* Bio */}
          <div className="glass-card about-card about-card-bio animate-fade-up delay-200">
            <div className="about-card-icon">👤</div>
            <h3 className="about-card-title">Who I Am</h3>
            <p className="about-card-text">{about.bio}</p>
            <div className="about-card-tag">Introduction</div>
          </div>

          {/* Education */}
          <div className="glass-card about-card animate-fade-up delay-300">
            <div className="about-card-icon">🎓</div>
            <h3 className="about-card-title">{about.education.degree}</h3>
            <p className="about-card-school">{about.education.school}</p>
            <p className="about-card-year neon-text-blue">{about.education.year}</p>
            <ul className="about-card-list">
              {about.education.highlights.map((h, i) => (
                <li key={i}>
                  <span className="about-list-dot">▸</span>
                  {h}
                </li>
              ))}
            </ul>
            <div className="about-card-tag">Education</div>
          </div>

          {/* Internship */}
          <div className="glass-card about-card animate-fade-up delay-400">
            <div className="about-card-icon">💼</div>
            <div className="about-card-company">
              <h3 className="about-card-title">{about.internship.role}</h3>
              <span className="about-card-badge neon-text-purple">{about.internship.company}</span>
            </div>
            <p className="about-card-year neon-text-cyan">{about.internship.period}</p>
            <p className="about-card-text">{about.internship.summary}</p>
            <div className="about-card-tag">Internship</div>
          </div>

          {/* Goals */}
          <div className="glass-card about-card animate-fade-up delay-500">
            <div className="about-card-icon">🎯</div>
            <h3 className="about-card-title">Career Goals</h3>
            <p className="about-card-text">{about.goals}</p>
            <div className="about-card-tag">Vision</div>
          </div>
        </div>
      </div>
    </div>
  );
}
