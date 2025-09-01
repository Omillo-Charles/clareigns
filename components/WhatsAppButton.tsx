
import React from 'react';

const WhatsAppIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg fill="currentColor" viewBox="0 0 32 32" {...props}>
        <path d="M16.1,0A16,16,0,0,0,5.2,24.4l-4,3.7,3.9-3.9a16,16,0,1,0,11-24.2Zm7.7,19.3c-.3-.1-1.6-0.8-1.9-0.9s-0.5-0.1-0.7,0.1-0.7,0.9-0.8,1s-0.2,0.2-0.4,0.1a7.7,7.7,0,0,1-2.8-1.7,9.5,9.5,0,0,1-2-2.3c-0.1-0.2,0-0.4.1-0.5s0.2-0.3.4-0.4,0.2-0.3.3-0.5,0-0.3-.1-0.4-0.7-1.7-1-2.3c-0.3-0.6-0.5-0.5-0.7-0.5h-0.6a1.1,1.1,0,0,0-1,.5,2.4,2.4,0,0,0-.8,1.9,4.4,4.4,0,0,0,1,3,9.5,9.5,0,0,0,4,3.5,6.1,6.1,0,0,0,4.2.1,2.8,2.8,0,0,0,1.8-1.2,2.2,2.2,0,0,0,.1-1.2C24.1,19.5,23.9,19.4,23.8,19.3Z" />
    </svg>
);

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/1234567890" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 bg-gradient-to-r from-green-500 to-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-elegant hover:shadow-soft-hover transition-all duration-300 transform hover:scale-110 z-40 group"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" />
      <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </a>
  );
};

export default WhatsAppButton;
