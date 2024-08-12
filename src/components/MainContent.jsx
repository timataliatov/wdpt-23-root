import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Projects from '../pages/projects/Projects';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import PropTypes from 'prop-types';

function MainContent({
  leftSidebarOpen,
  rightSidebarOpen,
  setLeftSidebarOpen,
  setRightSidebarOpen,
}) {
  const location = useLocation();
  const isProjectsPage = location.pathname === '/projects';

  return (
    <main
      className={
        isProjectsPage
          ? 'h-[calc(100vh-12rem)]'
          : 'grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-4'
      }
    >
      {isProjectsPage ? (
        <Projects />
      ) : (
        <>
          <div className="hidden lg:block relative">
            <LeftSidebar isOpen={leftSidebarOpen} />
            <button
              className="absolute top-2 right-2 retro-button text-sm hover-effect"
              onClick={() => setLeftSidebarOpen(!leftSidebarOpen)}
            >
              {leftSidebarOpen ? '◄' : '►'}
            </button>
          </div>
          <div className="retro-container overflow-auto relative">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <div className="hidden lg:block relative">
            <RightSidebar isOpen={rightSidebarOpen} />
            <button
              className="absolute top-2 left-2 retro-button text-sm hover-effect"
              onClick={() => setRightSidebarOpen(!rightSidebarOpen)}
            >
              {rightSidebarOpen ? '►' : '◄'}
            </button>
          </div>
        </>
      )}
    </main>
  );
}

MainContent.propTypes = {
  leftSidebarOpen: PropTypes.bool.isRequired,
  rightSidebarOpen: PropTypes.bool.isRequired,
  setLeftSidebarOpen: PropTypes.func.isRequired,
  setRightSidebarOpen: PropTypes.func.isRequired,
};

export default MainContent;
