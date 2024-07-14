import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const TypingEffect = ({ text, position, delay }) => {
    const [isInView, setIsInView] = useState(false);
    const [displayText, setDisplayText] = useState('');
    const { ref, inView } = useInView({ triggerOnce: true });

    useEffect(() => {
        if (inView && !isInView) {
            setIsInView(true);
            let currentIndex = 0;
            const interval = setInterval(() => {
                setDisplayText((prev) => prev + text[currentIndex]);
                currentIndex += 1;
                if (currentIndex === text.length) {
                    clearInterval(interval);
                }
            }, 100); // Adjust typing speed here
        }
    }, [inView, isInView, text]);

    return (
        <motion.h1
            ref={ref}
            className="main-text"
            style={{ position: 'absolute', ...position }}
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ delay, duration: 0.5 }}
        >
            {displayText}
        </motion.h1>
    );
};

export default TypingEffect;
