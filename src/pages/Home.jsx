import React, { useState, useEffect } from 'react';

function Home() {
  const [text, setText] = useState('');
  const fullText =
    "Initializing Timur Talyatov's Coding Terminal...\n\n> Loading skills\n[OK] JavaScript\n[OK] React\n[OK] Node.js\n[OK] CSS\n[OK] HTML\n\n> System ready\n> Welcome to my digital realm!\n> Explore my projects and skills below\n\n> Awaiting your input...";

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(typing);
    }, 50);

    return () => clearInterval(typing);
  }, []);

  const skills = [
    {
      title: 'Web Development',
      description:
        'Crafting responsive and intuitive user interfaces involves leveraging modern web technologies.',
    },
    {
      title: 'Backend Solutions',
      description:
        'Building robust server-side applications and APIs to power web applications.',
    },
    {
      title: 'Database Design',
      description:
        'Designing efficient and scalable database structures for optimal data management.',
    },
    {
      title: 'DevOps Practices',
      description:
        'Implementing CI/CD pipelines and managing cloud infrastructure for seamless deployments.',
    },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow overflow-auto m-14">
        <pre className="whitespace-pre-wrap font-mono text-sm">
          {text}
          <span className="blinking-cursor"></span>
        </pre>
      </div>
      <div className="grid w-auto m-auto xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2">
        {skills.map((skill, index) => (
          <div key={index} className="retro-card flex flex-col h-64">
            <div className="ascii-art mb-2 h-16 flex items-center justify-center">
              <div className="hidden lg:flex">
                {`
   _____  _____
  |     ||     |
  |  J  ||  S  |
  |_____||_____|
              `}
              </div>
            </div>
            <h3 className="text-lg font-bold mb-2 text-center">
              {skill.title}
            </h3>
            <p className="text-sm m-4 flex-grow text-center">
              {skill.description}
            </p>
            <button className="retro-button text-sm hover-effect w-full mt-auto">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
