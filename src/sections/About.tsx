
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import Button from '../components/ui/Button';

export default function About() {
  const stats = [
    { label: 'Projects Completed', value: 50 },
    { label: 'Satisfied Clients', value: 5000 },
    { label: 'Awards Won', value: 12 },
  ];

  return (
    <section id="about" className="py-24 bg-dark overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
          
          <img
            src="https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop"
            alt="Deep Group Architecture"
            className="rounded-lg shadow-2xl relative z-10 w-full aspect-square md:aspect-auto md:h-[600px] object-cover opacity-80"
            referrerPolicy="no-referrer"
          />
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-10 -right-10 bg-secondary p-8 rounded-lg shadow-2xl z-20 text-dark hidden md:block"
          >
            <span className="text-5xl font-bold">15+</span>
            <p className="text-[10px] font-bold uppercase tracking-widest mt-2">Years of <br />Excellence</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-secondary"></div>
            <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs">Trust & Legacy</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight text-white">
            Building Trust Through <br />
            <span className="font-bold text-secondary">Premium Spaces</span>
          </h2>
          
          <p className="text-white/50 text-lg mb-8 leading-relaxed font-light">
            At Deep Group, we don't just build structures; we craft sanctuaries that reflect your aspirations. 
            For over a decade, our architectural philosophy has blended modern innovation with timeless ethics.
          </p>

          <div className="grid grid-cols-2 gap-6 mb-12">
            {['Eco-friendly Design', 'Global Quality Standards', 'Customer-Centric', 'Timely Delivery'].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="text-secondary" size={16} />
                <span className="font-medium text-xs text-white/70">{item}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-8 pb-12 border-b border-white/10 mb-12">
            {stats.map((stat, i) => (
              <div key={i} className="border-l border-secondary pl-6">
                <h4 className="text-3xl font-bold text-secondary">{stat.value}+</h4>
                <p className="text-[10px] uppercase font-bold text-white/30 tracking-wider mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          <Button variant="outline">Learn More</Button>
        </motion.div>
      </div>
    </section>
  );
}
