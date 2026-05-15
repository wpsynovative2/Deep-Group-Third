
import { Send, Mail, MapPin, Phone, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';
import { NAVIGATION_LINKS } from '../data/constants';

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <a href="#home" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-none border border-secondary flex items-center justify-center">
                <span className="text-secondary text-sm font-bold">D</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-[0.2em] text-white -mb-1 uppercase">DEEP <span className="text-secondary">GROUP</span></span>
                <span className="text-[0.6rem] tracking-[0.4em] text-white/30 uppercase">Premium Spaces</span>
              </div>
            </a>
            <p className="text-white/30 leading-relaxed font-light text-sm">
              Crafting architectural legacies that define modern excellence. 
              Our commitment to quality and transparency makes us the preferred choice.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:bg-secondary hover:text-dark transition-all">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold mb-8 uppercase tracking-[0.3em] text-secondary">Quick Links</h4>
            <ul className="space-y-4">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/40 hover:text-secondary transition-colors text-xs uppercase tracking-widest flex items-center gap-2 group">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold mb-8 uppercase tracking-[0.3em] text-secondary">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="text-secondary shrink-0" size={16} />
                <span className="text-white/40 text-xs font-light">BKC, Mumbai, Maharashtra <br />400051</span>
              </li>
              <li className="flex gap-4">
                <Phone className="text-secondary shrink-0" size={16} />
                <span className="text-white/40 text-xs font-light">+91 22 2456 7890</span>
              </li>
              <li className="flex gap-4">
                <Mail className="text-secondary shrink-0" size={16} />
                <span className="text-white/40 text-xs font-light">sales@deepgroup.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold mb-8 uppercase tracking-[0.3em] text-secondary">Newsletter</h4>
            <p className="text-white/40 text-xs mb-6 font-light">Subscribe to receive exclusive project updates and market insights.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white/5 border border-white/10 rounded-none py-3 px-4 outline-none focus:border-secondary transition-all text-xs text-white"
              />
              <button className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 bg-secondary rounded-none flex items-center justify-center text-dark hover:bg-white transition-colors">
                 <Send size={14} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
           <p className="text-white/10 text-[10px] font-bold tracking-[0.3em] uppercase">
             © 2026 DEEP GROUP. ALL RIGHTS RESERVED.
           </p>
           <div className="flex gap-10">
              <a href="#" className="text-white/10 text-[10px] font-bold uppercase tracking-[0.3em] hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/10 text-[10px] font-bold uppercase tracking-[0.3em] hover:text-white transition-colors">Terms of Service</a>
           </div>
        </div>
      </div>
    </footer>

  );
}
