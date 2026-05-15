
import { motion } from 'motion/react';
import { MapPin, Maximize, BedDouble } from 'lucide-react';
import { PROPERTIES } from '../data/constants';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';

export default function Properties() {
  return (
    <section id="properties" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Curated Collection</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Featured Projects</h2>
          </div>
          <div className="flex gap-4">
             <Button variant="outline" className="!bg-white/5 !border-white/10 scale-90">Residential</Button>
             <Button variant="outline" className="!bg-white/5 !border-white/10 scale-90 opacity-40 hover:opacity-100">Commercial</Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROPERTIES.map((property, i) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group glass-card overflow-hidden shadow-2xl hover:shadow-secondary/5 transition-all duration-500"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                
                {property.featured && (
                  <div className="absolute top-6 left-6">
                    <Badge className="!rounded-sm">Featured</Badge>
                  </div>
                )}
                
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                   <Button variant="outline" className="w-full text-[10px] py-2 scale-95 !border-secondary !text-secondary hover:!bg-secondary hover:!text-dark">View Details</Button>
                </div>
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-secondary transition-colors">{property.name}</h3>
                    <div className="flex items-center gap-2 text-white/40 text-[10px] font-bold uppercase tracking-widest mt-1">
                      <MapPin size={12} className="text-secondary" />
                      {property.location}
                    </div>
                  </div>
                  <span className="text-secondary font-bold text-xl">{property.price.split(' ')[0]}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10 mb-6">
                  <div className="flex flex-col">
                    <span className="text-white font-semibold text-sm">{property.type}</span>
                    <span className="text-[10px] text-white/30 uppercase tracking-widest">Type</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-semibold text-sm">{property.area.split(' ')[0]}</span>
                    <span className="text-[10px] text-white/30 uppercase tracking-widest">Sq.Ft</span>
                  </div>
                </div>

                <Button variant="secondary" className="w-full py-2.5 opacity-0 group-hover:opacity-100 transition-all duration-500">Inquire Now</Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
           <Button variant="secondary" className="px-12">View All Projects</Button>
        </div>
      </div>
    </section>
  );
}
