import React from 'react';

const Header = () => {
    return (
        <header className="w-full bg-white border-b border-orange-100 py-4 px-8 shadow-sm mb-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <span className="text-3xl" role="img" aria-label="logo">🍔</span>
                <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Eat-N-Split</h1>
            </div>
            <div className="text-sm font-medium text-slate-500">
                Split bills easily
            </div>
        </header>
    );
};

export default Header;
