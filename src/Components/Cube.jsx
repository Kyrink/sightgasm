// src/components/Cube.js
import React from 'react';

const Cube = ({ images }) => {
    const faces = [1, 2, 3, 4, 5, 6];

    const generateRandomPosition = () => ({
        top: `${Math.random() * 80}%`,
        left: `${Math.random() * 80}%`,
        transform: `rotate(${Math.random() * 20 - 10}deg)`
    });

    return (
        <div className="scene">
            <div className="cube">
                {faces.map((face) => (
                    <div key={face} className={`cube__face cube__face--${face}`}>
                        {images.slice((face - 1) * 6, face * 6).map((image, index) => (
                            <div
                                key={index}
                                className="image-wrapper"
                                style={generateRandomPosition()}
                            >
                                <img src={image} alt={`face-${face}-img-${index + 1}`} />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cube;
