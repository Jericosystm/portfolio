// App.jsx — Root component
import React, { useState, useCallback } from 'react';
import { useCursor } from './hooks/useCursor';
import LoadingScreen from './components/LoadingScreen';
import NavBar from './components/NavBar';
import Background from './components/Background';
import HomeTab from './components/tabs/HomeTab';
import AboutTab from './components/tabs/AboutTab';
import ProjectsTab from './components/tabs/ProjectsTab';
import SkillsTab from './components/tabs/SkillsTab';
import ExperienceTab from './components/tabs/ExperienceTab';
import ContactTab from './components/tabs/ContactTab';
import './App.css';

const TABS = {
  home: HomeTab,
  about: AboutTab,
  projects: ProjectsTab,
  skills: SkillsTab,
  experience: ExperienceTab,
  contact: ContactTab,
};

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [prevTab, setPrevTab] = useState(null);
  const { dotRef, ringRef } = useCursor();

  const handleTabChange = useCallback((tab) => {
    if (tab === activeTab) return;
    setPrevTab(activeTab);
    setActiveTab(tab);
  }, [activeTab]);

  const handleLoaded = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      {/* Custom cursor */}
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />

      {/* Loading screen */}
      {!loaded && <LoadingScreen onComplete={handleLoaded} />}

      {/* Main app */}
      {loaded && (
        <div className="app">
          <Background />
          <div className="app-shell">
            <NavBar active={activeTab} onTabChange={handleTabChange} />
            <main className="app-main">
              {Object.entries(TABS).map(([id, TabComponent]) => (
                <div
                  key={id}
                  className={`tab-content ${activeTab === id ? 'active' : ''}`}
                >
                  <TabComponent onNavigate={handleTabChange} />
                </div>
              ))}
            </main>
          </div>
        </div>
      )}
    </>
  );
}
