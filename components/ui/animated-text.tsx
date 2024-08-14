"use client"

import React from 'react';
import { motion, Variants } from 'framer-motion';

const quoteVariants: Variants = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.01,
      staggerChildren: 0.003,
    },
  },
};

const wordVariants: Variants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.06,
    },
  },
};

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = "" }) => {
  // return (
  //   <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden dark:text-light">
  //     <motion.h1
  //       className={`inline-block w-full text-dark font-bold dark:text-light capitalize text-8xl ${className}`}
  //       variants={quoteVariants}
  //       initial="initial"
  //       animate="animate"
  //     >
  //       {text.split(" ").map((word, index) => (
  //         <motion.span
  //           key={word + '-' + index}
  //           className="inline-block"
  //           variants={wordVariants}
  //         >
  //           {word}&nbsp;
  //         </motion.span>
  //       ))}
  //     </motion.h1>
  //   </div>
  // );
  const wordsArray = text.split(' ');
  const colors = ['white', 'orange', 'white', 'cyan', 'white','yellow']; // Define your colors here

  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden dark:text-light">
      <motion.h1
        className={`inline-block w-full text-dark font-bold dark:text-light capitalize text-8xl ${className}`}
        variants={quoteVariants}
        initial="initial"
        animate="animate"
      >
        {wordsArray.map((word, index) => (
          <motion.span
            key={word + '-' + index}
            className="inline-block"
            style={{ color: colors[index % colors.length] }} // Apply color based on index
            variants={wordVariants}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;

