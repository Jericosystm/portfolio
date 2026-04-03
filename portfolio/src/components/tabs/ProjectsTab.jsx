// components/tabs/ProjectsTab.jsx
import React, { useState } from 'react';
import { projects } from '../../data/portfolio';
import './ProjectsTab.css';

const colorMap = {
  blue: { accent: 'var(--neon-blue)', glow: 'rgba(99,179,237,0.3)' },
  purple: { accent: 'var(--neon-purple)', glow: 'rgba(183,148,244,0.3)' },
  cyan: { accent: 'var(--neon-cyan)', glow: 'rgba(118,228,247,0.3)' },
  pink: { accent: 'var(--neon-pink)', glow: 'rgba(246,135,179,0.3)' },
};

export default function ProjectsTab() {
  const [active, setActive] = useState(0);
  const project = projects[active];
  const colors = colorMap[project.color];

  return (
    <div className="projects-tab">
      <div className="projects-orb" style={{ background: `radial-gradient(circle, ${colors.glow}, transparent 70%)` }} />

      <div className="projects-content">
        <div className="section-header animate-fade-up delay-100">
          <span className="section-label">// projects.showcase</span>
          <h2 className="section-title">My <span className="gradient-text">Work</span></h2>
        </div>

        <div className="projects-layout">
          {/* Sidebar selector */}
          <div className="projects-sidebar animate-fade-up delay-200">
            {projects.map((p, i) => (
              <button
                key={p.id}
                className={`projects-nav-item ${i === active ? 'active' : ''}`}
                onClick={() => setActive(i)}
                style={i === active ? { borderColor: colorMap[p.color].accent, color: colorMap[p.color].accent } : {}}
              >
                <span className="projects-nav-icon">{p.icon}</span>
                <div className="projects-nav-info">
                  <span className="projects-nav-title">{p.title}</span>
                  <span className="projects-nav-tech">{p.tech[0]} + {p.tech.length - 1} more</span>
                </div>
                <span className="projects-nav-num">{String(i + 1).padStart(2, '0')}</span>
              </button>
            ))}
          </div>

          {/* Main display */}
          <div className="projects-main">
            <div className="projects-card glass-card animate-scale-in" key={project.id}>
              {/* Header */}
              <div className="projects-card-header">
                <div className="projects-card-icon" style={{ background: `${colors.glow}`, borderColor: `${colors.accent}33` }}>
                  {project.icon}
                </div>
                <div className="projects-card-meta">
                  <h3 className="projects-card-title" style={{ color: colors.accent }}>{project.title}</h3>
                  <div className="projects-card-num" style={{ color: colors.accent }}>
                    {String(active + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                  </div>
                </div>
              </div>

              {/* Preview area */}
              <div className="projects-preview" style={{ borderColor: `${colors.accent}22`, background: `${colors.glow}` }}>
                <div className="projects-preview-dots">
                  <span style={{ background: '#ff5f56' }} />
                  <span style={{ background: '#ffbd2e' }} />
                  <span style={{ background: '#27c93f' }} />
                </div>
                <div className="projects-preview-screen">
                  <div className="projects-preview-icon">{project.icon}</div>
                  <div className="projects-preview-label">{project.title}</div>
                </div>
              </div>

              {/* Description */}
              <p className="projects-card-desc">{project.description}</p>

              {/* Tech stack */}
              <div className="projects-tech">
                {project.tech.map(t => (
                  <span key={t} className="projects-tech-tag" style={{ borderColor: `${colors.accent}40`, color: colors.accent }}>
                    {t}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="projects-actions">
                <a href={project.demo} className="btn-primary" style={{ borderColor: colors.accent, color: colors.accent }}>
                  <span>Live Demo</span>
                </a>
                <a href={project.github} className="btn-secondary">
                  GitHub →
                </a>
              </div>
            </div>

            {/* Dots navigation */}
            <div className="projects-dots">
              {projects.map((_, i) => (
                <button
                  key={i}
                  className={`projects-dot ${i === active ? 'active' : ''}`}
                  onClick={() => setActive(i)}
                  style={i === active ? { background: colors.accent, boxShadow: `0 0 8px ${colors.accent}` } : {}}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
