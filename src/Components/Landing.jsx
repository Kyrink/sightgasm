import React from 'react';
import StudioBackdrop from './StudioBackdrop';
import '../App.css';
import StudioLight from './StudioLight';
import FlashTextSequence from './FlashTextSequence';

const Landing = () => {
    const imageUrl1 = '/DSC01739.jpg';
    const imageUrl2 = '/DSC01829.jpg';

    return (
        <div className="relative flex flex-row font-Anargya items-center justify-center min-h-screen p-4 w-full">
            <StudioBackdrop modelUrl="/studio_green_screen_backdrop.glb" />
            <StudioLight modelUrl="/simple_studio_light.glb" />
            <div className="relative z-10 flex justify-center w-1/3">
                {/* <CustomShapes className="absolute bottom-[6%] 2xl:bottom-10" imageUrl={imageUrl1} patternId="pattern1" rotateYAngle={40} /> */}
            </div>
            <div className="relative z-10 flex flex-col items-center w-1/3 gap-8 px-8 mt-[-250px]">
                <FlashTextSequence />
            </div>
            <div className="relative z-10 flex justify-center w-1/3 mb-52 2xl:mb-0">
                {/* <CustomShapes className="absolute top-5" imageUrl={imageUrl2} patternId="pattern2" rotateYAngle={-50} /> */}
            </div>
        </div>
    );
};

export default Landing;
