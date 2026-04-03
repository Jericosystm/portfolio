// components/Background.jsx
import React from 'react';
import './Background.css';

export default function Background() {
  return (
    <div className="bg-ambient" aria-hidden="true">
      <div className="bg-grid" />
      <div className="bg-radial-1" />
      <div className="bg-radial-2" />
      <div className="bg-radial-3" />
      <div className="bg-scanline" />
    </div>
  );
}
