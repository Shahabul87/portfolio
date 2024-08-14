

import React from 'react';
import Link from 'next/link';
import AnimatedText from './animated-text';
import { ExternalLink } from 'lucide-react';
import { TextGenerateEffect } from './text-generate-effect';
import { Button } from './moving-border';

const words =" As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React.js and web development."

const AnimatedTextDemo: React.FC = () => {
  return (
    <div className="w-full lg:w-1/2 flex flex-col items-center self-center border rounded-lg shadow-[5px_5px_0px_0px_rgba(109,40,217)] bg-red-400">
      <div className="p-8 bg-slate-100 dark:bg-dark">
        <AnimatedText
          text="Turning Vision Into Reality With Code And Design."
          className="!text-6xl !text-center"
        />
        <div className="my-4 text-base font-medium text-center">
          <TextGenerateEffect words={words} />
        </div>
        <div className="flex items-center self-start mt-2">
          <Link
            href="/dummy.pdf"
            target="_blank"
            className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
            download
          >
            Resume <ExternalLink className="h- 4 w-6 ml-1" />
          </Link>
          <Link
            href="mailto:sham251087@gmail.com"
            target="_blank"
            className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light"
          >
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Lets work together
            </Button>
          </Link>
        </div>
      </div>
      
    </div>
    
  );
};

export default AnimatedTextDemo;
