
import { motion } from 'motion/react';

export default function Stats() {
  const stats = [
    { label: 'Years Experience', value: '15+' },
    { label: 'Happy Clients', value: '5000+' },
    { label: 'Premium Projects', value: '50+' },
    { label: 'Transparency', value: '100%' },
  ];

  return (
    <section className="py-24 bg-dark text-white overflow-hidden relative border-y border-white/5" style={{ backgroundColor: "#fff" }}>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="border-l border-secondary pl-8 py-2"
            style={{ borderLeftColor: "#650727" }}
          >
            <h3 className="text-5xl md:text-6xl font-bold text-secondary mb-2" style={{ fontFamily: "MontserratExtraBold", color: "#650727" }}>{stat.value}</h3>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-black">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
