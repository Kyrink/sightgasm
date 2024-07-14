import React from 'react';
import { motion } from 'framer-motion';
import { UseParallaxEffect } from './UseParallaxEffect';

const h1Tags = [
    { text: 'WHEN LIFE GETS BLURRY', position: { top: '10%', left: '5%' } },
    { text: 'ADJUST YOUR FOCUS', position: { top: '60%', left: '60%' } }
];

const images = [
    { src: '/landingPics/DSC03489.jpg', size: 'small', position: { top: '10%', left: '10%' }, layer: 'foreground', parallax: 390 },
    { src: '/landingPics/DSC03666.jpg', size: 'medium', position: { top: '60%', left: '40%' }, layer: 'middle', parallax: 260 },
    { src: '/landingPics/DSC03668.jpg', size: 'large', position: { top: '10%', right: '20%' }, layer: 'foreground', parallax: 110 },
    { src: '/landingPics/DSC03668.jpg', size: 'large', position: { top: '20%', right: '50%' }, layer: 'background', parallax: 210 },

    { src: '/landingPics/DSC03678.jpg', size: 'medium', position: { bottom: '10%', left: '10%' }, layer: 'background', parallax: 377 },
    { src: '/landingPics/DSC03680.jpg', size: 'small', position: { bottom: '55%', right: '2%' }, layer: 'foreground', parallax: 282 },
    { src: '/landingPics/DSC03690.jpg', size: 'large', position: { top: '60%', right: '15%' }, layer: 'foreground', parallax: 455 },
];

const MessyGrid = () => {
    return (
        <div className="grid-container">
            {h1Tags.map((h1, index) => (
                <motion.h1
                    key={index}
                    className="main-text"
                    style={{ position: 'absolute', ...h1.position }}
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.5, duration: 0.5 }}
                >
                    {h1.text}
                </motion.h1>
            ))}
            {images.map((image, index) => {
                const { translateX, translateY } = UseParallaxEffect(image.parallax);

                return (
                    <motion.div
                        className={`image-wrapper ${image.size} ${image.layer}`}
                        key={index}
                        style={{
                            ...image.position,
                            x: translateX,
                            y: translateY,
                        }}
                        whileHover={{ scale: 2.5 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                        <img src={image.src} alt={`img-${index}`} />
                    </motion.div>
                );
            })}
        </div>
    );
};

export default MessyGrid;