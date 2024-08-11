import React, { useEffect, useRef } from 'react';

const MatrixRain = ({ theme }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+<>?:{}|';
    const fontSize = 13;
    const columns = canvas.width / fontSize;

    const drops = Array(Math.floor(columns)).fill(1);

    function getColor() {
      switch (theme) {
        case 'light':
          return 'rgba(44, 62, 80, 0.5)'; // Dark blue for light theme
        case 'green':
          return 'rgba(0, 255, 0, 0.5)'; // Green
        default:
          return 'rgba(184, 193, 236, 0.5)'; // Light blue for default theme
      }
    }

    function draw() {
      ctx.fillStyle =
        theme === 'light' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = getColor();
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    }

    const interval = setInterval(draw, 70);

    return () => clearInterval(interval);
  }, [theme]);

  return <canvas ref={canvasRef} className="matrix-rain" />;
};

export default MatrixRain;
