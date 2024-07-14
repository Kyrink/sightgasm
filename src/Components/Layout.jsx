import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children, navItems }) => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <header className="p-4">
                <Navbar navItems={navItems} />
            </header>
            <main className="flex-grow w-full ">
                {children}
            </main>
            <footer className="shadow-md p-4 text-center">
                © 2024 Kyrin Kalonji
            </footer>
        </div>
    );
};

export default Layout;
