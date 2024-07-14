import React from 'react';
import { motion } from 'framer-motion';

const h1Tags = [
    { text: 'ABOUT ME', position: { top: '8%', left: '70%' } },
    { text: '', position: { top: '60%', left: '60%' } }
];

const images = [
    { src: '/cubePics/face3/DSC03357.jpg', size: 'small-img', position: { top: '10%', left: '15%' }, layer: 'foreground', parallax: 390 },
    { src: '/cubePics/face3/DSC03368.jpg', size: 'medium-img', position: { top: '60%', left: '75%' }, layer: 'foreground', parallax: 260 },
    { src: '/cubePics/face3/DSC03516.jpg', size: 'large-img', position: { top: '20%', right: '33%' }, layer: 'foreground', parallax: 110 },
    { src: '/cubePics/face3/DSC03525.jpg', size: 'medium-img', position: { bottom: '8%', left: '5%' }, layer: 'foreground', parallax: 377 },
    { src: '/cubePics/face3/DSC03531.jpg', size: 'small-img', position: { bottom: '10%', right: '63%' }, layer: 'foreground', parallax: 282 },
];

const GridFace = () => {
    return (
        <div className="grid-face ">
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
            {images.map((image, index) => (
                <motion.div
                    className={`grid-image-wrapper ${image.size} ${image.layer}`}
                    key={index}
                    style={{ ...image.position }}
                >
                    <img src={image.src} alt={`img-${index}`} />
                </motion.div>
            ))}
        </div>
    );
};

export default GridFace;
