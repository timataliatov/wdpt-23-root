import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectsSidebar from './ProjectsSidebar';

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

function Projects() {
  const [activeWeek, setActiveWeek] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 h-full">
      <div className="hidden md:block">
        <ProjectsSidebar activeWeek={activeWeek} />
      </div>
      <div className="retro-container overflow-auto">
        <h2 className="text-xl font-bold mb-4 text-center">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
