import React from 'react';
import PropTypes from 'prop-types';

function RightSidebar({ isOpen }) {
  return (
    <aside
      className={`retro-container transition-all duration-300 overflow-hidden h-full relative ${
        isOpen ? 'w-64' : 'w-12'
      }`}
    >
      <div className="flex flex-col h-full mt-10">
        {isOpen ? (
          <>
            <div className="ascii-art mb-4">{`
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
            `}</div>
            <h3 className="text-lg font-bold mb-4">Latest Project</h3>
            <p className="mb-4 text-sm">
              A retro-styled portfolio showcasing my web development journey.
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
      </div>
    </aside>
  );
}

RightSidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default RightSidebar;
