
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '', 
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent';
  
  const sizeStyles = {
    sm: 'px-6 py-2.5 text-sm rounded-full',
    md: 'px-8 py-3 text-sm rounded-full',
    lg: 'px-10 py-4 text-base rounded-full',
  };

  const variantStyles = {
    primary: 'bg-brand-pink-dark text-white hover:bg-brand-pink-accent focus:ring-brand-pink-dark shadow-soft hover:shadow-elegant',
    secondary: 'bg-brand-gold text-white hover:bg-brand-gold-light hover:text-brand-text focus:ring-brand-gold shadow-soft hover:shadow-soft-hover',
    outline: 'bg-transparent text-brand-pink-dark border-2 border-brand-pink-dark hover:bg-brand-pink-dark hover:text-white focus:ring-brand-pink-dark shadow-soft hover:shadow-elegant',
  };

  return (
    <button 
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
