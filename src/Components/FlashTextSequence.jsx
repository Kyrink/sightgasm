import React from 'react';
import { motion } from 'framer-motion';

const FlashTextSequence = () => {
    const flashVariants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    };

    const textVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    return (
        <div className="flex flex-col items-center w-full">
            <motion.div
                className="fixed top-0 left-0 w-full h-[200px] z-50"
                variants={flashVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.1, repeat: 1, repeatDelay: 0.3 }}
            />
            <motion.h1
                className="text-8xl 2xl:text-9xl text-center "
                variants={textVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.5, duration: 0.5 }}
            >
                *SIGHTGASM
            </motion.h1>
            <motion.div
                className="fixed top-0 left-0 w-1/2 h-[200px] z-50"
                variants={flashVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.1, repeat: 1, repeatDelay: 0.3, delay: 1 }}
            />
            <motion.h2
                className="text-7xl 2xl:text-8xl text-center mt-4 fabric-text"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1.5, duration: 0.5 }}
            >
                the art inspired by your story
            </motion.h2>
            <motion.div
                className="fixed top-0 left-0 w-full h-[200px]  z-50"
                variants={flashVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.1, repeat: 1, repeatDelay: 0.3, delay: 2 }}
            />
            <motion.p
                className="text-2xl 2xl:text-3xl text-center mt-8 fabric-text"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 2.5, duration: 0.5 }}
            >
                The best place to find beautiful images
            </motion.p>
        </div>
    );
};

export default FlashTextSequence;
