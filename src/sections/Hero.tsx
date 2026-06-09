
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Home, Banknote, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_SLIDES } from '../data/constants';
import Button from '../components/ui/Button';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen min-h-[700px] w-full overflow-hidden bg-dark">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div className="hero-mask z-10" />
          <img
            src={HERO_SLIDES[currentSlide].image}
            alt="Hero Background"
            className="h-full w-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 h-full flex items-center max-w-7xl mx-auto px-10">
        <div className="grid lg:grid-cols-5 w-full gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="lg:col-span-3"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-secondary"></div>
              <span className="text-secondary uppercase tracking-[0.3em] font-semibold text-xs">Redefining Luxury</span>
            </div>
            <h1 className="text-xl md:text-6xl text-white font-light leading-tight mb-8" style={{ fontFamily: "var(--font-extraboldItalic)", fontWeight: 900, textTransform: "uppercase" }}>
              {HERO_SLIDES[currentSlide].title.split(' Crafted ')[0]} <br />
              <span className="font-bold text-secondary">Crafted For</span> <br />
              Modern Families
            </h1>
            <p className="text-xl text-white/50 font-light mb-10 max-w-lg leading-relaxed">
              {HERO_SLIDES[currentSlide].subtitle}
            </p>

            <div className="flex items-center gap-12 mb-12">
              {[
                { label: 'Happy Families', value: '500+' },
                { label: 'Prime Projects', value: '25+' },
                { label: 'Years Exp.', value: '15+' },
              ].map((stat, i) => (
                <div key={i} className="border-l border-secondary pl-6">
                  <span className="block text-3xl font-bold text-secondary">{stat.value}</span>
                  <span className="text-[0.6rem] uppercase tracking-widest text-white/50">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="secondary" className="px-10 py-4">Explore Projects</Button>
              <Button variant="outline" className="px-10 py-4">
                Schedule Visit
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:block lg:col-span-2"
          >
            <div className="glass-card p-6 flex flex-col gap-6">
              <div className="relative w-full h-56 rounded-lg overflow-hidden">
                <div className="absolute top-3 left-3 bg-secondary text-dark px-2 py-0.5 text-[10px] font-bold uppercase rounded-sm z-10">Featured</div>
                <img
                  src={HERO_SLIDES[0].image}
                  className="w-full h-full object-cover opacity-80"
                  alt="Featured Property"
                />
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-white">The Azure Heights</h3>
                  <span className="text-secondary font-bold text-lg">₹12.5 Cr</span>
                </div>
                <div className="grid grid-cols-3 gap-2 border-y border-white/10 py-4">
                  <div className="text-center">
                    <span className="block text-white text-sm font-semibold">4 BHK</span>
                    <span className="text-[10px] text-white/30 uppercase tracking-widest">Type</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-white text-sm font-semibold">3,200</span>
                    <span className="text-[10px] text-white/30 uppercase tracking-widest">Sq.Ft</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-white text-sm font-semibold">Ready</span>
                    <span className="text-[10px] text-white/30 uppercase tracking-widest">Status</span>
                  </div>
                </div>
                <button className="w-full py-3 border border-secondary text-secondary text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-secondary hover:text-dark transition-all">
                  View Details
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-10 left-10 z-20 flex gap-4">
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
          className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-secondary hover:border-secondary transition-all"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
          className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-secondary hover:border-secondary transition-all"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}
