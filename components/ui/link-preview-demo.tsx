"use client";
import React from "react";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { LinkPreview } from "@/components/ui/link-preview";

// export function LinkPreviewDemo() {
//   return (
//     <div className="flex justify-center items-center h-[40rem] flex-col px-4">
//       <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
//         <LinkPreview url="https://tailwindcss.com" className="font-bold">
//           Tailwind CSS
//         </LinkPreview>{" "}
//         and{" "}
//         <LinkPreview url="https://framer.com/motion" className="font-bold">
//           Framer Motion
//         </LinkPreview>{" "}
//         are a great way to build modern websites.
//       </p>
//       <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto">
//         Visit{" "}
//         <LinkPreview
//           url="https://ui.aceternity.com"
//           className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
//         >
//           Aceternity UI
//         </LinkPreview>{" "}
//         for amazing Tailwind and Framer Motion components.
//       </p>
//     </div>
//   );
// }

export function LinkPreviewDemo() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });

  return (
    <div className="flex justify-center items-center h-[40rem] flex-col px-4">
      <motion.p
        ref={ref1}
        className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView1 ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <LinkPreview url="https://tailwindcss.com" className="font-bold">
          Tailwind CSS
        </LinkPreview>{" "}
        and{" "}
        <LinkPreview url="https://framer.com/motion" className="font-bold">
          Framer Motion
        </LinkPreview>{" "}
        are a great way to build modern websites.
      </motion.p>
      <motion.p
        ref={ref2}
        className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto"
        initial={{ opacity: 0, x: -70 }}
        animate={isInView2 ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        Visit{" "}
        <LinkPreview
          url="https://ui.aceternity.com"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          Aceternity UI
        </LinkPreview>{" "}
        for amazing Tailwind and Framer Motion components.
      </motion.p>
    </div>
  );
}
