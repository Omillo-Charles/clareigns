
import React, { useState } from 'react';

interface HeaderProps {
    onHomeClick: () => void;
}

const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
);

const CloseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const Header: React.FC<HeaderProps> = ({ onHomeClick }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navLinks = ['Shop', 'About', 'Contact'];

    return (
        <header className="sticky top-0 bg-white/95 backdrop-blur-md z-50 shadow-soft border-b border-brand-pink-light/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <a 
                            href="#/" 
                            onClick={(e) => { e.preventDefault(); onHomeClick(); }} 
                            className="text-3xl font-serif font-bold text-brand-text tracking-wider hover:text-brand-pink-dark transition-colors duration-300"
                        >
                           Clareigns <span className="text-brand-gold">Collection</span>
                        </a>
                    </div>
                    <nav className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <a 
                                href="#/" 
                                onClick={(e) => { e.preventDefault(); onHomeClick(); }} 
                                className="text-brand-text hover:text-brand-pink-dark px-3 py-2 text-sm font-medium tracking-wider transition-colors duration-300 relative group"
                            >
                                HOME
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-pink-dark transition-all duration-300 group-hover:w-full"></span>
                            </a>
                            {navLinks.map(link => (
                                <a 
                                    key={link} 
                                    href="#" 
                                    className="text-brand-text hover:text-brand-pink-dark px-3 py-2 text-sm font-medium tracking-wider transition-colors duration-300 relative group"
                                >
                                    {link.toUpperCase()}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-pink-dark transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            ))}
                        </div>
                    </nav>
                    <div className="-mr-2 flex md:hidden">
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)} 
                            type="button" 
                            className="bg-white inline-flex items-center justify-center p-2 rounded-full text-brand-text hover:text-brand-pink-dark hover:bg-brand-pink-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-pink-dark transition-all duration-300 shadow-soft hover:shadow-soft-hover"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? <CloseIcon className="block h-6 w-6" /> : <MenuIcon className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden animate-fade-in">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md border-t border-brand-pink-light/30">
                         <a 
                            href="#/" 
                            onClick={(e) => { e.preventDefault(); onHomeClick(); setIsMenuOpen(false);}} 
                            className="text-brand-text hover:bg-brand-pink-light hover:text-brand-pink-dark block px-3 py-2 rounded-lg text-base font-medium transition-all duration-300"
                        >
                            HOME
                        </a>
                        {navLinks.map(link => (
                            <a 
                                key={link} 
                                href="#" 
                                className="text-brand-text hover:bg-brand-pink-light hover:text-brand-pink-dark block px-3 py-2 rounded-lg text-base font-medium transition-all duration-300"
                            >
                                {link.toUpperCase()}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
