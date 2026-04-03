// components/tabs/ExperienceTab.jsx
import React, { useState } from 'react';
import { experience } from '../../data/portfolio';
import './ExperienceTab.css';

export default function ExperienceTab() {
  const [active, setActive] = useState(0);
  const current = experience[active];

  return (
    <div className="exp-tab">
      <div className="exp-orb-1" />
      <div className="exp-orb-2" />

      <div className="exp-content">
        <div className="section-header animate-fade-up delay-100">
          <span className="section-label">// experience.timeline</span>
          <h2 className="section-title">My <span className="gradient-text">Journey</span></h2>
        </div>

        {/* Timeline bar */}
        <div className="exp-timeline animate-fade-up delay-200">
          <div className="exp-timeline-line" />
          {experience.map((item, i) => (
            <button
              key={i}
              className={`exp-timeline-node ${i === active ? 'active' : ''} ${i < active ? 'passed' : ''}`}
              onClick={() => setActive(i)}
            >
              <div className="exp-node-dot">
                {i < active && <span className="exp-node-check">✓</span>}
                {i === active && <span className="exp-node-pulse" />}
              </div>
              <div className="exp-node-label">
                <span className="exp-node-month">{item.short}</span>
                <span className="exp-node-year">{item.year}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Detail panel */}
        <div className="exp-panel glass-card animate-scale-in" key={active}>
          <div className="exp-panel-header">
            <div className="exp-panel-left">
              <div className="exp-panel-num neon-text-blue">
                {String(active + 1).padStart(2, '0')} / {String(experience.length).padStart(2, '0')}
              </div>
              <h3 className="exp-panel-title">{current.title}</h3>
              <div className="exp-panel-meta">
                <span className="exp-panel-company neon-text-purple">{current.company}</span>
                <span className="exp-panel-sep">·</span>
                <span className="exp-panel-period">{current.month} {current.year}</span>
              </div>
            </div>

            <div className="exp-panel-skills">
              {current.skills.map(s => (
                <span key={s} className="exp-skill-tag">{s}</span>
              ))}
            </div>
          </div>

          <div className="exp-panel-divider" />

          <div className="exp-panel-tasks">
            <div className="exp-tasks-label">Tasks & Accomplishments</div>
            <ul className="exp-tasks-list">
              {current.tasks.map((task, i) => (
                <li key={i} className="exp-task-item" style={{ animationDelay: `${i * 0.1}s` }}>
                  <span className="exp-task-arrow">▸</span>
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="exp-nav animate-fade-up delay-500">
          <button
            className="btn-secondary exp-nav-btn"
            onClick={() => setActive(Math.max(0, active - 1))}
            disabled={active === 0}
          >
            ← Prev
          </button>
          <div className="exp-nav-dots">
            {experience.map((_, i) => (
              <button
                key={i}
                className={`exp-nav-dot ${i === active ? 'active' : ''}`}
                onClick={() => setActive(i)}
              />
            ))}
          </div>
          <button
            className="btn-secondary exp-nav-btn"
            onClick={() => setActive(Math.min(experience.length - 1, active + 1))}
            disabled={active === experience.length - 1}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
