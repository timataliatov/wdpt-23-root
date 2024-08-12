import React from 'react';
import PropTypes from 'prop-types';

const ProjectCard = ({ week, description, onClick, isActive }) => (
  <div
    className={`retro-container h-72 flex flex-col justify-between items-center cursor-pointer p-4 ${
      isActive ? 'border-accent' : ''
    }`}
    onClick={onClick}
  >
    <h3 className="text-lg font-bold mb-2">Week {week}</h3>
    <div className="ascii-art mb-2 h-20 flex items-center justify-center text-center text-xs">
      {`
   _____
  |     |
  | < > |
  |_____|
  |_____|
      `}
    </div>
    <p className="mb-2 h-16 overflow-hidden text-center w-full text-sm">
      {description}
    </p>
    <button className="retro-button w-48 text-xs py-1 hover-effect">
      Open Project
    </button>
  </div>
);

ProjectCard.propTypes = {
  week: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default ProjectCard;
