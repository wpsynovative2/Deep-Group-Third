
import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
}

export default function Button({ children, variant = 'primary', className = '', onClick }: ButtonProps) {
  const baseStyles = 'px-8 py-3 rounded-[4px] font-semibold tracking-wider uppercase text-xs transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer border-none';
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-primary/20',
    secondary: 'bg-secondary text-dark hover:bg-[#d8a34d] hover:shadow-[0_0_15px_rgba(201,148,60,0.4)]',
    outline: 'border border-white/30 text-white hover:bg-white hover:text-dark',
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
