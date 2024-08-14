
"use client"
import AnimatedTextDemo from "@/components/ui/animated-text-demo";
import { LampDemo } from "@/components/ui/lamp";
import AnimatedText from "@/components/ui/animated-text";
import React from 'react';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Button } from "@/components/ui/moving-border";
import { motion } from "framer-motion";
import { LinkPreviewDemo } from "@/components/ui/link-preview-demo";
import Image from "next/image";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { Separator, SeparatorDemo } from "@/components/ui/separator";
import { BackgroundGradientDemo } from "@/components/ui/background-gradient-demo";
import { BackgroundBoxesDemo } from "@/components/ui/background-boxes-demo";



const words =" As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React.js and web development."

const wordss = [
  {
    text: "Turning",
  },
  {
    text: "Vision",
    className: "text-blue-700 dark:text-blue-500",
  },
  {
    text: "Into",
  },
  {
    text: "Reality",
  },
  {
      text: "With",
    },
    {
      text: "Code",
      className: "text-blue-600 dark:text-blue-500",
    },
    {
      text: "And",
    },
  {
    text: "Design.",
    className: "text-blue-500 dark:text-blue-500",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col space-x-5 w-full items-center justify-center p-24 space-y-3">
      
     <div className="min-h-screen h-full w-full">
     <BackgroundBoxesDemo />
      </div> 
     <div className="p-8 dark:bg-dark flex space-x-4 items-center justify-center h-[50rem] relative w-full mb-10">
        <div  className ="absolute left-5 top-50 pt-10 w-1/2 h-[35rem] shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]">
            <AnimatedText
              text="Hi' I am S Alam"
              className="!text-6xl !text-center"
            />
             <AnimatedText
              text="Love to think Outside of the Box"
              className="!text-6xl !text-center"
            />
            <div className="my-4 text-base font-medium text-center flex items-center justify-center bg-red">
              <TextGenerateEffect words={words} />
            </div>
        </div>
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mt-2 absolute right-5 bottom-5 shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]"
          >
        {/* <Image
          src="/ProfilePic.webp"
          width={600}
          height={500}
          alt="Picture of the author"
          className="rounded-md shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
        /> */}
        <BackgroundGradientDemo />
      </motion.div>
     </div>
     <div className ="flex h-[30rem] pt-10 items-center justify-center">
     <div className=" p-4">
         <LinkPreviewDemo />
     </div>
     <Separator className ="bg-slate-900" orientation="vertical"/>
     <SeparatorDemo />

     </div>
     <div className="p-8 h-[50rem] dark:bg-dark flex flex-col items-center justify-center">
        <TypewriterEffectSmooth words={wordss} />
        <div className="my-4 text-base font-medium text-center w-3/4 flex items-center justify-center ">
          <TextGenerateEffect words={words} />
        </div>
        <div className="flex items-center justify-center mt-8 ">
          <Link
            href="/dummy.pdf"
            target="_blank"
            className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
            download
          >
            Resume <ExternalLink className="h-6 w-6 ml-1" />
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
     <Separator className =" bg-red-500"/>

     <LampDemo />
     
     <Separator className =" bg-red-500"/>
     
    </main>
  );
}
