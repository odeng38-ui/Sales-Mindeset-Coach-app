import React from 'react';

interface HeaderProps {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  onMenuClick: () => void;
}

const Bars3Icon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);


const Header: React.FC<HeaderProps> = ({ title, icon: Icon, onMenuClick }) => {
  return (
    <header className="sticky top-0 bg-slate-50/80 backdrop-blur-sm z-10 p-4 sm:p-6 lg:p-10 lg:p-0 lg:static lg:bg-transparent lg:backdrop-blur-none">
       <div className="flex items-center gap-4">
            <button
                onClick={onMenuClick}
                className="md:hidden p-2 -ml-2 text-slate-600 hover:bg-slate-200 rounded-md"
                aria-label="Open menu"
            >
                <Bars3Icon className="w-6 h-6" />
            </button>
            <div className="bg-sky-500 text-white p-3 rounded-lg shadow-md">
                <Icon className="w-8 h-8" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">{title}</h1>
        </div>
    </header>
  );
};

export default Header;