"use client";
import React from "react";
import { Boxes } from "../ui/background-boxes";

import AnimatedTextNone from "./animated-text-none";



//const words =" As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React.js and web development."

export function BackgroundBoxesDemo() {
  return (
    <div className="h-full mt-[4rem] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <div  className ="m-10 mt-[10rem] pt-10 w-full h-[35rem] ">
            <AnimatedTextNone
              text="Hi' I am S Alam"
              className="!text-6xl !text-center text-white"
            />
             <AnimatedTextNone
              text="Love to think Outside of the Box"
              className="!text-6xl !text-center"
            />
            <div className="my-5 mx-auto text-base max-w-5xl font-medium text-center flex items-center justify-center bg-red">
             <h1 className="text-neutral-300 font-bold text-2xl">
                As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React.js and web development.
             </h1>
            </div>
            <div className="mt-10 mx-auto flex flex-col items-center justify-center md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
                <button className="w-40 h-10 rounded-xl bg-cyan-300 border dark:border-white border-transparent text-black text-xl font-semibold">
                Join now
                </button>
                <button className="w-40 h-10 rounded-2xl font-semibold text-cyan-500 bg-white border border-black  text-xl">
                   Visit Profile
                </button>
            </div>
        </div>
    </div>
  );
}
