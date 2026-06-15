
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';
import { NAVIGATION_LINKS } from '../data/constants';
import Button from './ui/Button';
import logo from '../public/deep group Logo.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-dark/80 backdrop-blur-md shadow-xl py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2">
          {/* Logo */}
          <img src={logo} alt="Deep Group Logo" className="h-15 w-auto object-contain" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {NAVIGATION_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[0.75rem] font-medium tracking-widest uppercase transition-all duration-300 hover:text-secondary ${link.name === 'Home' ? 'text-secondary' : 'text-white/70'}`}
            >
              {link.name}
            </a>
          ))}
          <Button variant="secondary" className="scale-90">
            Book Site Visit
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`lg:hidden ${isScrolled ? 'text-primary' : 'text-white'}`}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-dark border-t border-white/10 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col gap-6 p-8">
              {NAVIGATION_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-serif font-medium text-white hover:text-secondary"
                >
                  {link.name}
                </a>
              ))}
              <Button onClick={() => setIsMenuOpen(false)} variant="secondary" className="w-full">
                Book Site Visit
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
