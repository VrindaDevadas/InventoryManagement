import React from 'react';

const Header = () => {
    return (
        <header className="bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-white">StockFlow</h1>
                <div>
                    <a href="#" className="text-white bg-white/20 px-4 py-2 rounded-md text-sm font-medium">Dashboard</a>
                </div>
            </nav>
        </header>
    );
};

export default Header;