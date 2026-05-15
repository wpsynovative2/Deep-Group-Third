
import { ReactNode, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function MainLayout({ children }: { children: ReactNode }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />

      {/* Floating Buttons */}
      <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4">
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-14 h-14 bg-dark shadow-2xl rounded-full flex items-center justify-center text-secondary border border-white/10 hover:bg-secondary hover:text-dark transition-all"
            >
              <ArrowUp size={24} />
            </motion.button>
          )}
        </AnimatePresence>

        <motion.a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-[#25D366] text-white shadow-2xl rounded-full flex items-center justify-center"
        >
          <MessageCircle size={28} />
        </motion.a>
      </div>

      <div className="fixed top-0 left-0 w-full h-1 bg-secondary origin-left z-[60] opacity-30" style={{ transform: 'scaleX(var(--scroll-progress, 0))' }} />
    </div>
  );
}
