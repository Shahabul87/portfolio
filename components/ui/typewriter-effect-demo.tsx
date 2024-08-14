"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Turning",
    },
    {
      text: "Vision",
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
      },
      {
        text: "And",
      },
    {
      text: "Design.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <TypewriterEffectSmooth words={words} />
      
    </div>
  );
}
