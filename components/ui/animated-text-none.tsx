"use client";

import React from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedTextNone: React.FC<AnimatedTextProps> = ({ text, className = "" }) => {
  const wordsArray = text.split(' ');
  const colors = ['white', 'orange', 'white', 'cyan', 'white', 'yellow']; // Define your colors here

  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden dark:text-light">
      <h1 className={`inline-block w-full text-dark font-bold dark:text-light capitalize text-6xl ${className}`}>
        {wordsArray.map((word, index) => (
          <span
            key={word + '-' + index}
            className="inline-block"
            style={{ color: colors[index % colors.length] }} // Apply color based on index
          >
            {word}&nbsp;
          </span>
        ))}
      </h1>
    </div>
  );
};

export default AnimatedTextNone;
