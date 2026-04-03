// components/NavBar.jsx
import React from 'react';
import './NavBar.css';

const TABS = [
  { id: 'home', label: 'Home', icon: '◉' },
  { id: 'about', label: 'About', icon: '◈' },
  { id: 'projects', label: 'Projects', icon: '◧' },
  { id: 'skills', label: 'Skills', icon: '◆' },
  { id: 'experience', label: 'Experience', icon: '◎' },
  { id: 'contact', label: 'Contact', icon: '◌' },
];

export default function NavBar({ active, onTabChange }) {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-logo">
          <span className="navbar-logo-bracket">[</span>
          <span className="navbar-logo-name gradient-text">JRC</span>
          <span className="navbar-logo-bracket">]</span>
        </div>

        <div className="navbar-tabs">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              className={`navbar-tab ${active === tab.id ? 'active' : ''}`}
              onClick={() => onTabChange(tab.id)}
            >
              <span className="navbar-tab-icon">{tab.icon}</span>
              <span className="navbar-tab-label">{tab.label}</span>
              {active === tab.id && <span className="navbar-tab-indicator" />}
            </button>
          ))}
        </div>

        <div className="navbar-status">
          <span className="status-dot" />
          <span className="status-text">Online</span>
        </div>
      </div>
    </nav>
  );
}
