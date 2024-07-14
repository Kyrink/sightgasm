import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import cameraImage from '../Assets/sonyCam.png';
import '@fontsource/oswald';

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="App">
      <div className="text-container">
        <div className="text-hidden">
          <p>
            [KYRIN KALONJI] (b. [1999], [CONGO DR]) is a passionate photographer and visual storyteller. With a keen eye for capturing the essence of fleeting moments, [Your Name]'s work is a testament to their dedication and artistic vision. For [X years], they have honed their craft, seeking out the beauty in the everyday and transforming it into evocative visual narratives. Whether through the lens of nature, memory, or family, [Your Name] explores these themes with a unique sensitivity, creating images that resonate with symbolic depth and emotional power.
          </p>
        </div>
      </div>
      <motion.div
        className="camera-container"
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        <img src={cameraImage} alt="Camera" className="camera" />
      </motion.div>
      <div
        className="spotlight"
        style={{
          left: mousePosition.x - 225, // Center the spotlight horizontally
          top: mousePosition.y + 425,  // Center the spotlight vertically
        }}
      ></div>
    </div>
  );
};

export default About;
