// components/tabs/SkillsTab.jsx
import React, { useState } from 'react';
import { skills } from '../../data/portfolio';
import './SkillsTab.css';

const CATEGORIES = ['All', 'Frontend', 'Backend', 'Tools', 'Design'];

const levelColor = {
  Advanced: 'var(--neon-blue)',
  Intermediate: 'var(--neon-purple)',
  Beginner: 'var(--neon-green)',
};

const levelWidth = {
  Advanced: '88%',
  Intermediate: '60%',
  Beginner: '35%',
};

export default function SkillsTab() {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All'
    ? skills
    : skills.filter(s => s.category === filter);

  return (
    <div className="skills-tab">
      <div className="skills-orb-1" />
      <div className="skills-orb-2" />

      <div className="skills-content">
        <div className="section-header animate-fade-up delay-100">
          <span className="section-label">// skills.matrix</span>
          <h2 className="section-title">Technical <span className="gradient-text">Arsenal</span></h2>
        </div>

        {/* Filter */}
        <div className="skills-filter animate-fade-up delay-200">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`skills-filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="skills-grid">
          {filtered.map((skill, i) => (
            <div
              key={skill.name}
              className="glass-card skills-card animate-fade-up"
              style={{
                animationDelay: `${0.1 + i * 0.05}s`,
                opacity: 0,
              }}
            >
              <div className="skills-card-top">
                <span className="skills-card-icon">{skill.icon}</span>
                <div className="skills-card-info">
                  <span className="skills-card-name">{skill.name}</span>
                  <span className="skills-card-cat">{skill.category}</span>
                </div>
                <span
                  className="skills-card-level"
                  style={{ color: levelColor[skill.level], borderColor: `${levelColor[skill.level]}40` }}
                >
                  {skill.level}
                </span>
              </div>

              <div className="skills-bar-track">
                <div
                  className="skills-bar-fill"
                  style={{
                    width: levelWidth[skill.level],
                    background: `linear-gradient(90deg, ${levelColor[skill.level]}, ${levelColor[skill.level]}88)`,
                    boxShadow: `0 0 8px ${levelColor[skill.level]}66`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="skills-legend animate-fade-up delay-600">
          {Object.entries(levelColor).map(([level, color]) => (
            <div key={level} className="skills-legend-item">
              <span className="skills-legend-dot" style={{ background: color, boxShadow: `0 0 8px ${color}` }} />
              <span className="skills-legend-label">{level}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
