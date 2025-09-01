
import React from 'react';

const SocialIcon: React.FC<{ path: string }> = ({ path }) => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d={path} clipRule="evenodd" />
    </svg>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-gradient-to-b from-brand-pink to-brand-pink-light text-brand-text">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
                    <div className="col-span-1 md:col-span-3 lg:col-span-1">
                        <h2 className="text-3xl font-serif font-bold tracking-wider mb-6">
                            Clareigns <span className="text-brand-gold">Collection</span>
                        </h2>
                        <p className="text-brand-text-light leading-relaxed mb-6">
                            Chic, modern, and feminine fashion for the contemporary woman. 
                            Each piece is crafted with attention to detail and timeless elegance.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110">
                                <SocialIcon path="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110">
                                <SocialIcon path="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.059 1.689.073 4.948.073s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110">
                                <SocialIcon path="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12C20,13.85 19.24,15.54 18,16.71L17.5,16.29C17.5,16.29 17.5,16.29 17.5,16.29C18.4,15.22 19,13.7 19,12C19,7 15,3 10,3C10,3 10,3 10,3C10,3 10,3 10,3C10,3 10,3 10,3H10C9.31,3 8.65,3.11 8,3.3L8.53,3.83C8.53,3.83 8.53,3.83 8.53,3.83C9.53,3.33 10.73,3 12,3A8,8 0 0,1 12,4Z" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-text mb-6">Shop</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-brand-text-light hover:text-brand-text transition-colors duration-300">Dresses</a></li>
                            <li><a href="#" className="text-brand-text-light hover:text-brand-text transition-colors duration-300">Tops</a></li>
                            <li><a href="#" className="text-brand-text-light hover:text-brand-text transition-colors duration-300">Bottoms</a></li>
                            <li><a href="#" className="text-brand-text-light hover:text-brand-text transition-colors duration-300">Accessories</a></li>
                        </ul>
                    </div>
                     <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-text mb-6">About</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-brand-text-light hover:text-brand-text transition-colors duration-300">Our Story</a></li>
                            <li><a href="#" className="text-brand-text-light hover:text-brand-text transition-colors duration-300">Careers</a></li>
                            <li><a href="#" className="text-brand-text-light hover:text-brand-text transition-colors duration-300">Contact Us</a></li>
                            <li><a href="#" className="text-brand-text-light hover:text-brand-text transition-colors duration-300">FAQs</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-text mb-6">Stay in touch</h3>
                        <p className="text-brand-text-light leading-relaxed mb-6">
                            Sign up for our newsletter to get the latest arrivals and exclusive offers.
                        </p>
                        <form className="flex">
                            <input 
                                type="email" 
                                placeholder="Your Email" 
                                className="flex-1 px-4 py-3 text-sm rounded-l-lg border-0 focus:ring-2 focus:ring-brand-pink-dark focus:ring-offset-0 bg-white/80 backdrop-blur-sm placeholder-brand-text-light" 
                            />
                            <button 
                                type="submit" 
                                className="ml-2 px-6 py-3 bg-brand-pink-dark text-white rounded-r-lg hover:bg-brand-pink-accent transition-colors duration-300 font-medium"
                            >
                                Sign Up
                            </button>
                        </form>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-white/20 text-center">
                    <p className="text-brand-text-light">&copy; {new Date().getFullYear()} Clareigns Collection. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
