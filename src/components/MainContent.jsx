import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Projects from '../pages/Projects';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';

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

export default MainContent;
