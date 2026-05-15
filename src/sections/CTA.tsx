
import { motion } from 'motion/react';
import Button from '../components/ui/Button';

export default function CTA() {
  return (
    <section className="py-24 bg-dark relative overflow-hidden border-t border-white/5">
      <div className="absolute top-0 right-0 w-full h-full opacity-5">
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary via-transparent to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-light text-white mb-8 leading-tight">
            Find Your Dream Property <br />
            With <span className="font-bold text-secondary">Deep Group</span>
          </h2>
          <p className="text-white/40 text-lg mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Elevate your lifestyle with our bespoke architectural marvels. 
            Exclusive site visits and private consultations available by appointment.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button variant="secondary" className="px-12 py-5">Book Site Visit</Button>
            <Button variant="outline" className="px-12 py-5 font-bold">
               Free Consultation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
