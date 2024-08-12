import React from 'react';
import SystemStats from './SystemStats';

function LeftSidebar({ isOpen }) {
  return (
    <aside
      className={`retro-container transition-all duration-300 overflow-hidden ${isOpen ? 'w-64' : 'w-12'}`}
    >
      <div className="flex flex-col justify-between h-full">
        <div>
          {isOpen ? (
            <>
              <div className="ascii-art mb-4">{`
> console.log("Hello")
Hello
undefined
>_
              `}</div>
              <h3 className="text-lg font-bold">My Skills</h3>
              <ul className="list-disc list-inside mt-2 text-sm">
                <li>HTML5 & CSS3</li>
                <li>JavaScript (ES6+)</li>
                <li>React & Node.js</li>
                <li>Responsive Design</li>
              </ul>
            </>
          ) : (
            <div className="rotate-90 whitespace-nowrap mt-20">My Skills</div>
          )}
        </div>
        <SystemStats isOpen={isOpen} />
      </div>
    </aside>
  );
}

export default LeftSidebar;
