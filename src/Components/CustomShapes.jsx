import React from 'react';
import { motion } from 'framer-motion';

const morphVariants = {
    start: { d: "M367 182C351.911 249.898 335 384.486 198 365C123.25 354.368 -16 305 2.0001 166C32.0001 77 135 -9 245 0.99999C323.482 8.1347 387 92 367 182Z" },
    end: { d: "M367 182C351.911 249.898 335 384.486 198 365C123.25 354.368 -16 305 2.0001 166C32.0001 77 135 -9 245 0.99999C323.482 8.1347 387 92 367 182Z" }
};

const CustomShapes = ({ className, imageUrl, patternId, rotateYAngle }) => {
    return (
        <motion.svg
            width="375"
            height="369"
            viewBox="0 0 375 369"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            initial="start"
            animate="end"
            variants={morphVariants}
            transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse"
            }}
            style={{
                transform: `perspective(1000px) rotateY(${rotateYAngle}deg)`,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
        >
            <defs>
                <pattern id={patternId} patternUnits="objectBoundingBox" width="1" height="1">
                    <image href={imageUrl} x="0" y="0" width="375" height="369" preserveAspectRatio="xMidYMid slice" />
                </pattern>
            </defs>
            <motion.path
                fill={`url(#${patternId})`}
                variants={morphVariants}
            />
        </motion.svg>
    );
};

export default CustomShapes;
