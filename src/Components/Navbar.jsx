import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '@fontsource/poppins';

const Navbar = ({ navItems = [] }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: isVisible ? 0 : -100 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-50"
        >
            <div className="flex justify-between items-center font-poppins font-bold w-full px-8 py-4">
                <div className="flex items-center">
                    <a
                        href={navItems[0]?.link}
                        className="text-black font-Anargya font-bold text-lg focus-effect"
                    >
                        <span className="rec"><span className="rec-dot"></span>REC</span>
                        {navItems[0]?.name}
                    </a>
                </div>
                <div className="flex items-center space-x-7">
                    {navItems.slice(1, 3).map((item, index) => (
                        <a
                            key={index + 1}
                            href={item.link}
                            className="text-white dark:text-black font-roboto focus-effect"
                        >
                            <span className="rec"><span className="rec-dot"></span>REC</span>
                            {item.name}
                        </a>
                    ))}
                </div>
                <div className="flex items-center">
                    <a
                        href={navItems[3]?.link}
                        className="text-white dark:text-black hover:text-orange focus-effect"
                    >
                        <span className="rec"><span className="rec-dot"></span>REC</span>
                        {navItems[3]?.name}
                    </a>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
