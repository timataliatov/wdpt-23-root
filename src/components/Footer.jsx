import React from 'react';
import PropTypes from 'prop-types';

function Footer({
  terminalOpen,
  setTerminalOpen,
  leftSidebarOpen,
  setLeftSidebarOpen,
  rightSidebarOpen,
  setRightSidebarOpen,
}) {
  return (
    <footer className="retro-container w-4/6 mx-auto px-2">
      <div className="flex justify-between items-center h-10 px-10">
        <span className="text-sm">
          © 2024 Timur Talyatov. All rights reserved.
        </span>
        <button
          className="retro-button text-sm hover-effect index-10"
          onClick={() => setTerminalOpen(!terminalOpen)}
        >
          {terminalOpen ? 'Close Terminal' : 'Open Terminal'}
        </button>
      </div>
      <div className="sidebar-toggles">
        <button
          className="sidebar-toggle left-toggle"
          onClick={() => setLeftSidebarOpen(!leftSidebarOpen)}
        >
          {leftSidebarOpen ? '◄' : '►'}
        </button>
        <button
          className="sidebar-toggle right-toggle"
          onClick={() => setRightSidebarOpen(!rightSidebarOpen)}
        >
          {rightSidebarOpen ? '►' : '◄'}
        </button>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  terminalOpen: PropTypes.bool.isRequired,
  setTerminalOpen: PropTypes.func.isRequired,
  leftSidebarOpen: PropTypes.bool.isRequired,
  setLeftSidebarOpen: PropTypes.func.isRequired,
  rightSidebarOpen: PropTypes.bool.isRequired,
  setRightSidebarOpen: PropTypes.func.isRequired,
};

export default Footer;
