
import { motion } from 'motion/react';
import { GALLERY_IMAGES } from '../data/constants';

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">

          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-secondary"></div>
            <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs block">Visual Journey</span>
            <div className="w-12 h-0.5 bg-secondary"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white">Exclusive Gallery</h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="relative rounded-luxury overflow-hidden group cursor-pointer shadow-lg"
            >
              <img
                src={img}
                alt={`Gallery ${i}`}
                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-all duration-500 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-0 group-hover:scale-100">
                  <span className="text-2xl font-light">+</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
