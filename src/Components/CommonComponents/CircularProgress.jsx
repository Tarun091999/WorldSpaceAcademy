import React from 'react';

const CircularProgress = ({ bgcolor, percentage }) => {
  const radius = 21; // Reduced radius for a smaller circle
  const strokeWidth = 6; // Reduced stroke width for proportionality
  const normalizedRadius = radius - strokeWidth * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const circleStyle = {
    fill: 'transparent',
    stroke: bgcolor, // Use the bgcolor prop correctly here
    strokeWidth: `${strokeWidth}px`,
    strokeLinecap: 'round',
    strokeDasharray: `${circumference} ${circumference}`,
    strokeDashoffset
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60px', position: 'relative' }}>
      <svg
        height={radius * 2}
        width={radius * 2}
        style={{ transform: 'rotate(-90deg)' }}
      >
        <circle
          style={circleStyle}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      <div style={{
        position: 'absolute',
        fontSize: '12px',
        fontWeight: 'bold',
        userSelect: 'none',
      }}>
        {percentage}%
      </div>
    </div>
  );
};

export default CircularProgress;
