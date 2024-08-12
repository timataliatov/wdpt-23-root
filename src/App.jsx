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

/**
 * Main component of the application.
 * Handles the state of the theme, terminal, and sidebars.
 */
function AppContent() {
  // State to manage the current theme
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'default';
  });

  // State to manage the state of the terminal
  const [terminalOpen, setTerminalOpen] = useState(false);

  // State to manage the state of the left sidebar
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(true);

  // State to manage the state of the right sidebar
  const [rightSidebarOpen, setRightSidebarOpen] = useState(true);

  // Get the current location from the router
  const location = useLocation();

  /**
   * Cycles through the available themes
   */
  const cycleTheme = () => {
    const themes = ['default', 'light', 'green'];
    const nextTheme = themes[(themes.indexOf(theme) + 1) % themes.length];
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
  };

  /**
   * Updates the body class name based on the current theme
   */
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  // Check if the current page is the Projects page
  const isProjectsPage = location.pathname === '/projects';

  /**
   * Main content of the application.
   * Handles the state of the theme, terminal, and sidebars.
   * @returns {JSX.Element} The main content of the application
   */
  return (
    <div className="layout-container">
      <MatrixRain theme={theme} />
      {/* Header */}
      <header className="retro-container mb-4 px-4">
        {/* Navigation bar */}
        <nav className="flex justify-between items-center h-10 px-10">
          {/* Title */}
          <span className="text-xl font-bold whitespace-nowrap">
            # tima_taliatov // wdpt-23
          </span>
          <div className="flex items-center space-x-2">
            {/* Links to the Home, Projects, and Contact pages */}
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
            {/* Button to cycle through the themes */}
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
        className={`${
          isProjectsPage
            ? 'h-[calc(100vh-12rem)]'
            : 'grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-4'
        }`}
      >
        {/* Render the Projects component if on the Projects page, otherwise render the main content */}
        {isProjectsPage ? (
          <Projects />
        ) : (
          <>
            {/* Left sidebar */}
            <aside
              className={`retro-container transition-all duration-300 overflow-hidden ${
                leftSidebarOpen ? 'w-64' : 'w-12'
              }`}
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  {/* Display the terminal if the terminal is open, otherwise display a message */}
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
                {/* Display the system stats if the sidebar is open, otherwise hide it */}
                <SystemStats isOpen={leftSidebarOpen} />
              </div>
            </aside>
            {/* Main content */}
            <div className="retro-container overflow-auto relative">
              <Routes>
                {/* Route to the Home page */}
                <Route path="/" element={<Home />} />
                {/* Route to the Contact page */}
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
            {/* Right sidebar */}
            <aside
              className={`retro-container transition-all duration-300 overflow-hidden ${
                rightSidebarOpen ? 'w-64' : 'w-12'
              }`}
            >
              {/* Display the latest project if the sidebar is open, otherwise display a message */}
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

      {/* Footer section */}
      <footer className="retro-container w-4/6 mx-auto px-2">
        {/* Footer content */}
        <div className="flex justify-between items-center h-10 px-10">
          {/* Copyright information */}
          <span className="text-sm">
            © 2024 Timur Talyatov. All rights reserved.
          </span>
          {/* Button to toggle the terminal */}
          <button
            className="retro-button text-sm hover-effect index-10"
            onClick={() => setTerminalOpen(!terminalOpen)}
          >
            {/* Display different text based on the terminal state */}
            {terminalOpen ? 'Close Terminal' : 'Open Terminal'}
          </button>
        </div>
        {/* Container for sidebar toggles */}
        <div className="sidebar-toggles">
          {/* Button to toggle the left sidebar */}
          <button
            className="sidebar-toggle left-toggle"
            onClick={() => setLeftSidebarOpen(!leftSidebarOpen)}
          >
            {/* Display different text based on the left sidebar state */}
            {leftSidebarOpen ? '◄' : '►'}
          </button>
          {/* Button to toggle the right sidebar */}
          <button
            className="sidebar-toggle right-toggle"
            onClick={() => setRightSidebarOpen(!rightSidebarOpen)}
          >
            {/* Display different text based on the right sidebar state */}
            {rightSidebarOpen ? '►' : '◄'}
          </button>
        </div>
      </footer>

      {/* Display the terminal overlay if the terminal is open */}
      {terminalOpen && (
        <div className="terminal-overlay">
          {/* Render the Terminal component with the onClose prop */}
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
