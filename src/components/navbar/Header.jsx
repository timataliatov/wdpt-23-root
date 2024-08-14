import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import HamburgerMenu from './HamburgerMenu';

function Header({ theme, cycleTheme }) {
  return (
    <header className="retro-container mb-4 px-4">
      <nav className="flex justify-between items-center h-20 px-20">
        <span className="text-xl font-bold whitespace-nowrap pr-6">
          # tima_taliatov // wdpt-23
        </span>
        <div className="hidden lg:flex items-center space-x-2">
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
        <HamburgerMenu theme={theme} cycleTheme={cycleTheme} />
      </nav>
    </header>
  );
}

Header.propTypes = {
  theme: PropTypes.string.isRequired,
  cycleTheme: PropTypes.func.isRequired,
};

export default Header;
