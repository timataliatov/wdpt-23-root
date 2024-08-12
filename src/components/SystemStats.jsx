import React, { useState, useEffect } from 'react';

/**
 * Renders system statistics.
 * @param {Object} props - Component props.
 * @param {boolean} props.isOpen - Indicates if the component is open.
 * @returns {JSX.Element} - The rendered component.
 */
const SystemStats = ({ isOpen }) => {
  // Initialize state with mock data
  const [stats, setStats] = useState({
    cpu: 0.7,
    memory: { used: 134, total: 979 },
    swap: { used: 7.04, total: 1550 },
  });

  // Simulate system statistics update every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setStats({
        cpu: Math.random() * 5, // 0-5% CPU usage
        memory: {
          used: Math.floor(Math.random() * 500),
          total: 979,
        },
        swap: {
          used: Math.floor(Math.random() * 100) / 10,
          total: 1550,
        },
      });
    }, 2000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  /**
   * Renders a bar with the given value and total.
   * @param {number} value - The value to display.
   * @param {number} total - The total value.
   * @returns {string} - The rendered bar.
   */
  const renderBar = (value, total) => {
    const percentage = (value / total) * 100;
    const filledBars = Math.floor(percentage / 5);
    return '[' + '|'.repeat(filledBars).padEnd(20, ' ') + ']';
  };

  // Render mini stats if component is not open
  if (!isOpen) {
    return (
      <div className="system-stats-mini">
        <div className="mini-bar cpu"></div>
        <div className="mini-bar memory"></div>
        <div className="mini-bar swap"></div>
      </div>
    );
  }

  // Render full stats if component is open
  return (
    <div className="system-stats font-mono text-xs mt-4">
      <div className="separator"></div>
      <div className="mb-1">
        <span className="text-accent">CPU</span>
        <span className="text-border">{renderBar(stats.cpu, 100)}</span>{' '}
        <span className="text-highlight">{stats.cpu.toFixed(1)}%</span>
      </div>
      <div className="mb-1">
        <span className="text-accent-alt">Mem</span>
        <span className="text-border">
          {renderBar(stats.memory.used, stats.memory.total)}
        </span>{' '}
        <span className="text-highlight">
          {stats.memory.used}M/{stats.memory.total}M
        </span>
      </div>
      <div>
        <span className="text-accent">Swp</span>
        <span className="text-border">
          {renderBar(stats.swap.used, stats.swap.total)}
        </span>{' '}
        <span className="text-highlight">
          {stats.swap.used.toFixed(2)}M/{stats.swap.total.toFixed(2)}G
        </span>
      </div>
    </div>
  );
};

export default SystemStats;
