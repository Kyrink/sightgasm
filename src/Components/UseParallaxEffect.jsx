import { useEffect } from 'react';
import { useMotionValue, useTransform, useSpring } from 'framer-motion';

export const UseParallaxEffect = (parallax) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { stiffness: 200, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 200, damping: 20 });
    const translateX = useTransform(springX, [-window.innerWidth / 2, window.innerWidth / 2], [parallax, -parallax]);
    const translateY = useTransform(springY, [-window.innerHeight / 2, window.innerHeight / 2], [parallax, -parallax]);

    useEffect(() => {
        const handleMouseMove = (event) => {
            mouseX.set(event.clientX - window.innerWidth / 2);
            mouseY.set(event.clientY - window.innerHeight / 2);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [mouseX, mouseY]);

    return { translateX, translateY };
};
