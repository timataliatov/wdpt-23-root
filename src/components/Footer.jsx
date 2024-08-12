import React from 'react';
import PropTypes from 'prop-types';

function Footer({ terminalOpen, setTerminalOpen }) {
  return (
    <footer className="retro-container w-full lg:w-4/6 mx-auto px-2">
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
    </footer>
  );
}

Footer.propTypes = {
  terminalOpen: PropTypes.bool.isRequired,
  setTerminalOpen: PropTypes.func.isRequired,
};

export default Footer;
