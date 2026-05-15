
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/constants';

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section id="testimonials" className="py-24 bg-dark overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3">
            <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Success Stories</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-white">What Our <br /> Clients Say</h2>
            <p className="text-white/50 mb-10 font-light">
              Discover why thousands of families trust Deep Group for their luxury home investments.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => setActive((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-secondary hover:text-dark transition-all"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                 onClick={() => setActive((prev) => (prev + 1) % TESTIMONIALS.length)}
                 className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-secondary hover:text-dark transition-all"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="lg:w-2/3 relative h-[400px] md:h-[350px] w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="glass-card p-12 relative h-full flex flex-col justify-between border border-white/5">
                  <Quote className="text-secondary/10 absolute top-8 right-12" size={80} />
                  
                  <div>
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={14} 
                          fill={i < TESTIMONIALS[active].rating ? '#c9943c' : 'none'} 
                          className={i < TESTIMONIALS[active].rating ? 'text-secondary' : 'text-white/10'}
                        />
                      ))}
                    </div>
                    <p className="text-xl md:text-2xl italic text-white/80 leading-relaxed font-light">
                      "{TESTIMONIALS[active].text}"
                    </p>
                  </div>

                  <div className="flex items-center gap-6 mt-10">
                    <img 
                      src={TESTIMONIALS[active].image} 
                      alt={TESTIMONIALS[active].name} 
                      className="w-14 h-14 rounded-full object-cover border border-secondary"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="text-lg font-bold text-white uppercase tracking-tight">{TESTIMONIALS[active].name}</h4>
                      <p className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">{TESTIMONIALS[active].role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
