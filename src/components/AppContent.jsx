import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './navbar/Header';
import MainContent from './MainContent';
import Footer from './footer/Footer';
import MatrixRain from './MatrixRain';
import Terminal from './footer/Terminal';
import PropTypes from 'prop-types';

function AppContent() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'default'
  );
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(true);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(true);
  const location = useLocation();

  const cycleTheme = () => {
    const themes = ['default', 'light', 'green'];
    const nextTheme = themes[(themes.indexOf(theme) + 1) % themes.length];
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const isProjectsPage = location.pathname === '/projects';

  return (
    <div className="layout-container">
      <MatrixRain theme={theme} />
      <Header theme={theme} cycleTheme={cycleTheme} />
      <MainContent
        isProjectsPage={isProjectsPage}
        leftSidebarOpen={leftSidebarOpen}
        rightSidebarOpen={rightSidebarOpen}
        setLeftSidebarOpen={setLeftSidebarOpen}
        setRightSidebarOpen={setRightSidebarOpen}
      />
      <Footer terminalOpen={terminalOpen} setTerminalOpen={setTerminalOpen} />
      {terminalOpen && (
        <div className="terminal-overlay">
          <Terminal onClose={() => setTerminalOpen(false)} />
        </div>
      )}
    </div>
  );
}

AppContent.propTypes = {
  terminalOpen: PropTypes.bool,
  setTerminalOpen: PropTypes.func,
  leftSidebarOpen: PropTypes.bool,
  setLeftSidebarOpen: PropTypes.func,
  rightSidebarOpen: PropTypes.bool,
  setRightSidebarOpen: PropTypes.func,
};

export default AppContent;
