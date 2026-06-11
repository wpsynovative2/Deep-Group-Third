
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { AMENITIES } from '../data/constants';

export default function Amenities() {
  return (
    <section id="amenities" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-12 h-0.5 bg-secondary"></div>
          <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm  block">Lifestyle & Comfort</span>
          <div className="w-12 h-0.5 bg-secondary"></div>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-16 uppercase">Premium Amenities</h2>


        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
          {AMENITIES.map((item, i) => {
            const Icon = (Icons as any)[item.icon];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, backgroundColor: '#b88635' }}
                className="bg-[#c9943c] rounded-lg p-6 flex flex-col items-center group transition-all duration-300 shadow-xl"
              >
                <div className="w-12 h-12 rounded-full bg-dark/10 flex items-center justify-center mb-4 border border-dark/20 group-hover:bg-dark transition-all duration-500">
                  <Icon size={20} className="text-dark group-hover:text-[#c9943c] transition-colors" />
                </div>
                <h4 className="font-semibold text-sm tracking-wide mb-1 text-dark uppercase">{item.title}</h4>
                <span className="text-[10px] text-dark/70 uppercase tracking-[0.2em] font-bold">{item.description.split(' ')[0]}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
