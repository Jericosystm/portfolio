// components/LoadingScreen.jsx
import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);

  const messages = [
    "Initializing Portfolio OS...",
    "Loading modules...",
    "Rendering interface...",
    "System ready.",
  ];

  useEffect(() => {
    const duration = 2400;
    const steps = 100;
    const interval = duration / steps;
    let count = 0;

    const timer = setInterval(() => {
      count++;
      setProgress(count);
      setPhase(Math.floor(count / 26));
      if (count >= steps) {
        clearInterval(timer);
        setTimeout(onComplete, 400);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="loading-screen">
      <div className="loading-bg-grid" />
      <div className="loading-orb loading-orb-1" />
      <div className="loading-orb loading-orb-2" />

      <div className="loading-content">
        <div className="loading-logo">
          <span className="loading-logo-bracket">[</span>
          <span className="loading-logo-text gradient-text">POS</span>
          <span className="loading-logo-bracket">]</span>
        </div>
        <div className="loading-title">Portfolio OS</div>
        <div className="loading-subtitle">v2.0.24 — Personal Edition</div>

        <div className="loading-bar-wrap">
          <div className="loading-bar-track">
            <div
              className="loading-bar-fill"
              style={{ width: `${progress}%` }}
            />
            <div
              className="loading-bar-glow"
              style={{ left: `${progress}%` }}
            />
          </div>
          <div className="loading-bar-labels">
            <span className="loading-message">{messages[Math.min(phase, messages.length - 1)]}</span>
            <span className="loading-percent">{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
