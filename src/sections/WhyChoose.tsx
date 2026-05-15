
import { motion } from 'motion/react';
import { WHY_CHOOSE_US } from '../data/constants';

export default function WhyChoose() {
  return (
    <section className="py-24 bg-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Our Promise</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Why Choose Deep Group</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-10 group hover:bg-secondary transition-all duration-500"
            >
              <h4 className="text-2xl font-bold mb-4 text-white group-hover:text-dark transition-colors">{item.title}</h4>
              <p className="text-white/50 leading-relaxed group-hover:text-dark transition-colors">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
