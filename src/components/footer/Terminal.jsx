import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const Terminal = ({ onClose }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([
    'Welcome to the simulated terminal. Type "help" for available commands.',
  ]);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand();
    }
  };

  const handleCommand = () => {
    const newOutput = [...output, `> ${input}`];

    switch (input.toLowerCase()) {
      case 'help':
        newOutput.push(
          'Available commands: help, clear, about, skills, contact'
        );
        break;
      case 'clear':
        setOutput([]);
        setInput('');
        return;
      case 'about':
        newOutput.push(
          'I am Timur Talyatov, a web developer passionate about creating innovative solutions.'
        );
        break;
      case 'skills':
        newOutput.push(
          'My skills include: HTML, CSS, JavaScript, React, Node.js'
        );
        break;
      case 'contact':
        newOutput.push(
          'Email: timur@example.com | GitHub: github.com/timurtalyatov'
        );
        break;
      default:
        newOutput.push(`Command not recognized: ${input}`);
    }

    setOutput(newOutput);
    setInput('');
  };

  const handleReset = () => {
    setOutput([
      'Welcome to the simulated terminal. Type "help" for available commands.',
    ]);
    setInput('');
  };

  return (
    <div className="terminal">
      <div className="terminal-header">
        <span>Terminal</span>
        <div>
          <button
            onClick={handleReset}
            className="retro-button text-xs hover-effect mr-2"
          >
            Reset
          </button>
          <button
            onClick={onClose}
            className="retro-button text-xs hover-effect"
          >
            Close
          </button>
        </div>
      </div>
      <div className="terminal-body">
        <div className="terminal-output">
          {output.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>
        <div className="terminal-input-line">
          <span className="prompt">{'> '}</span>
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            ref={inputRef}
            className="terminal-input w-full"
          />
        </div>
      </div>
      <div className="terminal-footer">
        <div className="terminal-info">
          Type 'help' for a list of available commands
        </div>
        <div className="terminal-shortcuts">
          <span className="shortcut">Ctrl+C: Clear</span>
          <span className="shortcut">Ctrl+L: Clear Screen</span>
          <span className="shortcut">Arrow Up/Down: Command History</span>
        </div>
      </div>
    </div>
  );
};

Terminal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Terminal;
