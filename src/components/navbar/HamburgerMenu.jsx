import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, X } from 'lucide-react';
import PropTypes from 'prop-types';

const HamburgerMenu = ({ theme, cycleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="lg:hidden">
      <button
        className="fixed top-4 right-4 z-50 retro-button text-2xl p-2"
        onClick={toggleMenu}
      >
        {isOpen ? '✕' : '☰'}
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-[color:var(--color-bg)] z-40 flex flex-col justify-center items-center">
          <nav className="flex flex-col items-center space-y-6">
            <Link
              to="/"
              className="retro-button text-xl w-48 text-center"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/projects"
              className="retro-button text-xl w-48 text-center"
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="retro-button text-xl w-48 text-center"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <button
              onClick={() => {
                cycleTheme();
                toggleMenu();
              }}
              className="retro-button text-xl w-48 text-center"
            >
              Theme: {theme}
            </button>
          </nav>
          <div className="absolute bottom-8 flex space-x-4">
            <a
              href="https://github.com/timataliatov"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github
                className="text-[color:var(--color-text-main)]"
                size={24}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/taliatov"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin
                className="text-[color:var(--color-text-main)]"
                size={24}
              />
            </a>
            <a
              href="https://x.com/timataliatov"
              target="_blank"
              rel="noopener noreferrer"
            >
              <X className="text-[color:var(--color-text-main)]" size={24} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

HamburgerMenu.propTypes = {
  theme: PropTypes.string.isRequired,
  cycleTheme: PropTypes.func.isRequired,
};

export default HamburgerMenu;
