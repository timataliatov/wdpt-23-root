import React from 'react';
import PropTypes from 'prop-types';

const ProjectsSidebar = ({ activeWeek }) => (
  <div className="retro-container h-full overflow-auto text-sm">
    <h3 className="text-lg font-bold mb-4">Project Structure</h3>
    <pre className="text-xs">
      {`
Portfolio/
${Array.from({ length: 10 }, (_, i) => `├─ Week${i + 1}/${activeWeek === i + 1 ? ' [Active]' : ''}`).join('\n')}
      `}
    </pre>
  </div>
);

ProjectsSidebar.propTypes = {
  activeWeek: PropTypes.number,
};

export default ProjectsSidebar;
