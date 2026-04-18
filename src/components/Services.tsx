import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import { Facebook, Instagram, Zap, Youtube, Video, Apple, ShoppingBag, TrendingUp, ArrowRight } from 'lucide-react';

const icons: Record<string, any> = { Facebook, Instagram, Zap, Youtube, Video, Apple, ShoppingBag, TrendingUp };

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Our Services</span>
          <h2 className="text-5xl font-bold mb-4">Our Digital Expertise</h2>
          <p className="text-white/40 max-w-2xl mx-auto leading-relaxed">
            From social media dominance to custom high-converting e-commerce platforms — I provide everything you need to grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s, idx) => {
            const Icon = icons[s.icon] || Zap;
            return (
              <motion.div 
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="bg-card p-8 rounded-[32px] border border-white/5 hover:border-accent/20 group transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-black transition-all">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4 leading-tight">{s.title}</h3>
                <p className="text-white/40 text-sm mb-6 leading-relaxed">
                  {s.desc}
                </p>
                <a href="#contact" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/60 hover:text-accent transition-colors">
                  Inquire Now <ArrowRight size={14} />
                </a>
              </motion.div>
            );
          })}
        </div>

        <div className="flex justify-center mt-12">
          <a href="#blog" className="btn-golden px-8 py-3">View Case Studies <ArrowRight size={16} /></a>
        </div>
      </div>
    </section>
  );
}
