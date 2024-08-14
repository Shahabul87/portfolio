"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"
import { motion, useInView } from 'framer-motion';

import { useRef } from 'react';

import { cn } from "@/utils/cn"

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  )
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }

// export function SeparatorDemo() {
//     return (
//       <div  className ="p-8">
//         <div className="space-y-1">
//           <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
//           <p className="text-sm text-muted-foreground">
//             An open-source UI component library.
//           </p>
//         </div>
//         <Separator className="my-4 bg-blue-900"  />
//         <div className="flex h-5 items-center space-x-4 text-sm">
//           <div>Blog</div>
//           <Separator orientation="vertical" className="bg-blue-900" />
//           <div>Docs</div>
//           <Separator orientation="vertical" className="bg-blue-900 "/>
//           <div>Source</div>
//         </div>
//       </div>
//     )
//   }






export function SeparatorDemo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="p-8">
      <div className="space-y-1">
        <motion.h4 
          className="text-xl font-medium leading-none"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Radix Primitives
        </motion.h4>
        <motion.p 
          className="text-2xl text-muted-foreground"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          An open-source UI component library.
        </motion.p>
      </div>
      <motion.div
        className="my-4 bg-blue-900"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        <Separator />
      </motion.div>
      <div className="flex h-5 items-center space-x-4 text-xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Blog
        </motion.div>
        <motion.div
          className="bg-blue-900"
          initial={{ height: 0 }}
          animate={isInView ? { height: '100%' } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Separator orientation="vertical" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Docs
        </motion.div>
        <motion.div
          className="bg-blue-900"
          initial={{ height: 0 }}
          animate={isInView ? { height: '100%' } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Separator orientation="vertical" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Source
        </motion.div>
      </div>
    </div>
  );
}
