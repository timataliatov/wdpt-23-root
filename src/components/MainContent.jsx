import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Projects from '../pages/projects/Projects';
import Home from '../pages/Home';
import Contact from '../pages/contact/Contact';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import PropTypes from 'prop-types';

function MainContent({ isProjectsPage, leftSidebarOpen, rightSidebarOpen }) {
  return (
    <main
      className={
        isProjectsPage
          ? 'h-[calc(100vh-12rem)]'
          : 'grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-4'
      }
    >
      {isProjectsPage ? (
        <Projects />
      ) : (
        <>
          <LeftSidebar isOpen={leftSidebarOpen} />
          <div className="retro-container overflow-auto relative">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <RightSidebar isOpen={rightSidebarOpen} />
        </>
      )}
    </main>
  );
}

MainContent.propTypes = {
  isProjectsPage: PropTypes.bool.isRequired,
  leftSidebarOpen: PropTypes.bool.isRequired,
  rightSidebarOpen: PropTypes.bool.isRequired,
};

export default MainContent;
