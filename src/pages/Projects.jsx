import React, { useState } from 'react';

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
    <button className="retro-button w-full text-xs py-1 hover:bg-[color:var(--color-text)] hover:text-[color:var(--color-bg)]">
      Open Project
    </button>
  </div>
);

const Sidebar = ({ activeWeek }) => (
  <div className="retro-container h-full overflow-auto text-sm">
    <h3 className="text-lg font-bold mb-4">Project Structure</h3>
    <pre className="text-xs">
      {`
Portfolio/
├─ Week1/${activeWeek === 1 ? ' [Active]' : ''}
├─ Week2/${activeWeek === 2 ? ' [Active]' : ''}
├─ Week3/${activeWeek === 3 ? ' [Active]' : ''}
├─ Week4/${activeWeek === 4 ? ' [Active]' : ''}
├─ Week5/${activeWeek === 5 ? ' [Active]' : ''}
├─ Week6/${activeWeek === 6 ? ' [Active]' : ''}
├─ Week7/${activeWeek === 7 ? ' [Active]' : ''}
├─ Week8/${activeWeek === 8 ? ' [Active]' : ''}
├─ Week9/${activeWeek === 9 ? ' [Active]' : ''}
└─ Week10/${activeWeek === 10 ? ' [Active]' : ''}
      `}
    </pre>
  </div>
);

function Projects() {
  const [activeWeek, setActiveWeek] = useState(null);

  const projects = [
    { week: 1, description: 'Introduction to HTML and CSS' },
    { week: 2, description: 'JavaScript Basics' },
    { week: 3, description: 'DOM Manipulation' },
    { week: 4, description: 'Advanced JavaScript' },
    { week: 5, description: 'Introduction to React' },
    { week: 6, description: 'React Hooks and State Management' },
    { week: 7, description: 'Backend Basics with Node.js' },
    { week: 8, description: 'Database Integration' },
    { week: 9, description: 'Full Stack Application' },
    { week: 10, description: 'Final Project and Deployment' },
  ];

  return (
    <div className="grid grid-cols-[180px_1fr] gap-4 h-full">
      <Sidebar activeWeek={activeWeek} />
      <div className="retro-container overflow-auto">
        <h2 className="text-xl font-bold mb-4 text-center">Projects</h2>
        <div className="grid grid-cols-3 gap-4">
          {projects.map((project) => (
            <ProjectCard
              key={project.week}
              week={project.week}
              description={project.description}
              onClick={() => setActiveWeek(project.week)}
              isActive={activeWeek === project.week}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
