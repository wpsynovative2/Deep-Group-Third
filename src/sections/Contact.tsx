
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';
import Button from '../components/ui/Button';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-secondary"></div>
              <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs">Reach Out</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light mb-10 text-white">Visit Our <span className="font-bold text-secondary">Office</span></h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full border border-secondary/20 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-dark transition-all shrink-0">
                   <MapPin size={24} />
                </div>
                <div>
                   <h4 className="text-lg font-bold mb-1 text-white uppercase tracking-tight">Corporate Head Office</h4>
                   <p className="text-white/40 leading-relaxed font-light">
                     1201, Deep Group Towers, BKC, <br />
                     Mumbai, Maharashtra - 400051
                   </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full border border-secondary/20 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-dark transition-all shrink-0">
                   <Phone size={24} />
                </div>
                <div>
                   <h4 className="text-lg font-bold mb-1 text-white uppercase tracking-tight">Call Us</h4>
                   <p className="text-white/40 leading-relaxed font-light">+91 22 2456 7890</p>
                   <p className="text-white/40 leading-relaxed font-light">+91 98989 76543</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full border border-secondary/20 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-dark transition-all shrink-0">
                   <Mail size={24} />
                </div>
                <div>
                   <h4 className="text-lg font-bold mb-1 text-white uppercase tracking-tight">Email Us</h4>
                   <p className="text-white/40 leading-relaxed font-light">sales@deepgroup.com</p>
                   <p className="text-white/40 leading-relaxed font-light">info@deepgroup.com</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
               {[Instagram, Facebook, Linkedin, Twitter].map((Icon, i) => (
                 <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:text-secondary hover:border-secondary transition-all">
                    <Icon size={18} />
                 </a>
               ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 shadow-2xl border border-white/5"
          >
            <h3 className="text-3xl font-bold mb-8 text-white uppercase tracking-tight">Consultation</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-white/30">Full Name</label>
                  <input type="text" className="w-full bg-white/5 border-b border-white/10 py-3 px-4 focus:border-secondary transition-all outline-none text-white rounded-t-md" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-white/30">Email Address</label>
                  <input type="email" className="w-full bg-white/5 border-b border-white/10 py-3 px-4 focus:border-secondary transition-all outline-none text-white rounded-t-md" placeholder="john@example.com" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-white/30">Phone Number</label>
                  <input type="tel" className="w-full bg-white/5 border-b border-white/10 py-3 px-4 focus:border-secondary transition-all outline-none text-white rounded-t-md" placeholder="+91 00000 00000" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-white/30">Subject</label>
                  <select className="w-full bg-white/5 border-b border-white/10 py-3 px-4 focus:border-secondary transition-all outline-none cursor-pointer text-white rounded-t-md appearance-none">
                    <option className="bg-dark">General Inquiry</option>
                    <option className="bg-dark">Property Tour</option>
                    <option className="bg-dark">Investment Advice</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-white/30">Message</label>
                <textarea rows={4} className="w-full bg-white/5 border-b border-white/10 py-3 px-4 focus:border-secondary transition-all outline-none resize-none text-white rounded-t-md" placeholder="How can we help you?" />
              </div>
              <Button variant="secondary" className="w-full mt-6 py-4">Submit Inquiry</Button>
            </form>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-24 h-[400px] bg-dark border border-white/5 rounded-lg overflow-hidden relative grayscale shadow-inner">
           <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="text-center p-8 glass-card border border-white/10">
                 <MapPin className="mx-auto mb-4 text-secondary" size={40} />
                 <h4 className="text-white text-2xl font-bold uppercase tracking-tight">Experience Center</h4>
                 <p className="text-white/40 font-light mt-2">Deep Group Towers, BKC, Mumbai</p>
                 <Button variant="outline" className="mt-6 text-[10px]">Get Directions</Button>
              </div>
           </div>
           <img 
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2066&auto=format&fit=crop" 
            alt="Map View" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
           />
        </div>
      </div>
    </section>
  );
}
