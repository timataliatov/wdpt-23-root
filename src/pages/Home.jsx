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

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow overflow-auto mb-4">
        <pre className="whitespace-pre-wrap font-mono text-sm">
          {text}
          <span className="blinking-cursor"></span>
        </pre>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="retro-card">
          <pre className="ascii-art mb-2">
            {`
   _____  _____
  |     ||     |
  |  J  ||  S  |
  |_____||_____|
    `}
          </pre>
          <h3 className="text-lg font-bold mb-2">Web Development</h3>
          <p className="text-sm mb-4">
            Crafting responsive and intuitive user interfaces using modern web
            technologies.
          </p>
          <button className="retro-button text-sm hover-effect">
            Learn More
          </button>
        </div>
        <div className="retro-card">
          <pre className="ascii-art mb-2">
            {`
   _____  _____
  |     ||     |
  |  J  ||  S  |
  |_____||_____|
    `}
          </pre>
          <h3 className="text-lg font-bold mb-2">Backend Solutions</h3>
          <p className="text-sm mb-4">
            Building robust server-side applications and APIs to power web
            applications.
          </p>
          <button className="retro-button text-sm hover-effect">Explore</button>
        </div>
        <div className="retro-card">
          <pre className="ascii-art mb-2">
            {`
   _____  _____
  |     ||     |
  |  J  ||  S  |
  |_____||_____|
    `}
          </pre>
          <h3 className="text-lg font-bold mb-2">Database Design</h3>
          <p className="text-sm mb-4">
            Designing efficient and scalable database structures for optimal
            data management.
          </p>
          <button className="retro-button text-sm hover-effect">
            Discover
          </button>
        </div>
        <div className="retro-card">
          <pre className="ascii-art mb-2">
            {`
   _____  _____
  |     ||     |
  |  J  ||  S  |
  |_____||_____|
    `}
          </pre>
          <h3 className="text-lg font-bold mb-2">DevOps Practices</h3>
          <p className="text-sm mb-4">
            Implementing CI/CD pipelines and managing cloud infrastructure for
            seamless deployments.
          </p>
          <button className="retro-button text-sm hover-effect">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
