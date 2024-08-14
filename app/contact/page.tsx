"use client";

import { SignupFormDemo } from "@/components/ui/signupform-demo";
import { motion, useInView } from "framer-motion";
import { useRef } from 'react';

const ContactPage = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const animationVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.7 } },
    }; 
    return (
        <>
            <motion.div 
                className="mt-[150px] bg-white lg:h-[80rem] border border-gray-300 rounded p-2 mx-5 md:mx-[8rem]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="bg-white h-[5rem] relative">
                    <motion.button 
                        className="absolute px-8 py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500 right-4 top-5"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Invert it
                    </motion.button>
                </div>

                <div className="bg-sky-100 h-auto lg:h-[30rem] mx-5 my-5 flex flex-col lg:flex-row relative items-center justify-center md:space-x-6">
                    <motion.div 
                        className="w-full lg:w-[25rem] h-auto lg:h-[20rem] p-10 lg:absolute top-20 lg:mr-[20rem]"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <motion.button 
                            className="px-8 py-2 rounded-xl relative bg-green-700 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
                            <span className="relative z-20">
                                Lets Discuss
                            </span>
                        </motion.button>
                        <h1 className="text-black text-2xl lg:text-4xl font-semibold py-7">
                            Lets talk about your projects. 
                        </h1>
                        <p className="text-justify text-neutral-700">
                            Fill the form and send your queries about the projects and works. I will respond as soon as possible. Besides, you can send me an email with details.
                        </p>
                    </motion.div>
                    <motion.div 
                        className="w-full lg:w-[27rem] h-auto lg:h-[40rem] lg:absolute lg:right-20 lg:top-20"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <SignupFormDemo />
                    </motion.div>
                </div>
                <div className="h-[16rem]"></div>
                <div className="flex items-center justify-center">
                    <motion.h1 
                        className="text-black text-2xl lg:text-4xl font-bold py-7"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        Contact with me !! 
                    </motion.h1>
                </div>
                <div className="h-[6rem]"></div>
                <motion.div 
                    className="p-8 flex items-center justify-center flex-col lg:flex-row lg:space-x-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                >
                    <motion.div 
                        ref={ref}
                        className="flex flex-col lg:flex-row items-center justify-center space-y-5 lg:space-y-0 lg:space-x-5"
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={animationVariants}
                        >
                            <motion.div 
                                className="flex items-center justify-center text-neutral-700 w-[17rem] lg:w-[20rem] h-[6rem] rounded-md shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                +1 7753382146
                            </motion.div>
                            <motion.div 
                                className="flex items-center justify-center text-neutral-700 w-[17rem] lg:w-[20rem] h-[6rem] rounded-md shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                sham251087@gmail.com 
                            </motion.div>
                            <motion.div 
                                className="flex items-center justify-center text-neutral-700 w-[17rem] lg:w-[20rem] h-[6rem] rounded-md shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                sham251087@gmail.com 
                            </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
            <div className="h-[10rem]"></div>
        </>
    )
}

export default ContactPage;
