import React from 'react';
import PropTypes from 'prop-types';

const ProjectsSidebar = ({ activeWeek, onWeekClick }) => (
  <div className="retro-container h-full overflow-auto text-sm">
    <h3 className="text-lg font-bold mb-4">Project Structure</h3>
    <pre className="text-sm">
      {Array.from({ length: 27 }, (_, i) => (
        <div
          key={i + 1}
          className={`cursor-pointer ${activeWeek === i + 1 ? 'font-bold' : ''}`}
          onClick={() => onWeekClick(i + 1)}
        >
          {`├─ Week ${i + 1} ${activeWeek === i + 1 ? '[Active]' : ''}`}
        </div>
      ))}
    </pre>
  </div>
);

ProjectsSidebar.propTypes = {
  activeWeek: PropTypes.number,
  onWeekClick: PropTypes.func.isRequired,
};

export default ProjectsSidebar;
