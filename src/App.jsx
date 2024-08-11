import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import MatrixRain from './components/MatrixRain';
import Terminal from './components/Terminal';
import SystemStats from './components/SystemStats';

function AppContent() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'default';
  });
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
      <header className="retro-container mb-4 px-4">
        <nav className="flex justify-between items-center h-10 px-10">
          <span className="text-xl font-bold whitespace-nowrap">
            # tima_taliatov // wdpt-23
          </span>
          <div className="flex items-center space-x-2">
            <Link
              to="/"
              className="retro-button text-sm hover-effect w-36 text-center"
            >
              Home
            </Link>
            <Link
              to="/projects"
              className="retro-button text-sm hover-effect w-36 text-center"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="retro-button text-sm hover-effect w-36 text-center"
            >
              Contact
            </Link>
            <button
              onClick={cycleTheme}
              className="retro-button text-sm hover-effect w-36 text-center"
            >
              Theme: {theme}
            </button>
          </div>
        </nav>
      </header>

      <main
        className={`${isProjectsPage ? 'h-[calc(100vh-12rem)]' : 'grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-4'}`}
      >
        {isProjectsPage ? (
          <Projects />
        ) : (
          <>
            <aside
              className={`retro-container transition-all duration-300 overflow-hidden ${leftSidebarOpen ? 'w-64' : 'w-12'}`}
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  {leftSidebarOpen ? (
                    <>
                      <div className="ascii-art mb-4">
                        {`
  > console.log("Hello")
  Hello
  undefined
  >_
                        `}
                      </div>
                      <h3 className="text-lg font-bold">My Skills</h3>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        <li>HTML5 & CSS3</li>
                        <li>JavaScript (ES6+)</li>
                        <li>React & Node.js</li>
                        <li>Responsive Design</li>
                      </ul>
                    </>
                  ) : (
                    <div className="rotate-90 whitespace-nowrap mt-20">
                      My Skills
                    </div>
                  )}
                </div>
                <SystemStats isOpen={leftSidebarOpen} />
              </div>
            </aside>
            <div className="retro-container overflow-auto relative">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
            <aside
              className={`retro-container transition-all duration-300 overflow-hidden ${rightSidebarOpen ? 'w-64' : 'w-12'}`}
            >
              {rightSidebarOpen ? (
                <>
                  <h3 className="text-lg font-bold mb-4">Latest Project</h3>
                  <div className="ascii-art mb-4">
                    {`
  +-------------------+
  |  /* code.js */    |
  |                   |
  | function hello() {|
  |   console.log(    |
  |    "Hello, World!"|
  |   );              |
  | }                 |
  |                   |
  | hello();          |
  +-------------------+
                    `}
                  </div>
                  <p className="mb-4 text-sm">
                    A retro-styled portfolio showcasing my web development
                    journey.
                  </p>
                  <button className="retro-button text-sm hover-effect">
                    View Project
                  </button>
                </>
              ) : (
                <div className="rotate-90 whitespace-nowrap mt-20">
                  Latest Project
                </div>
              )}
            </aside>
          </>
        )}
      </main>

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

      {terminalOpen && (
        <div className="terminal-overlay">
          <Terminal onClose={() => setTerminalOpen(false)} />
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
