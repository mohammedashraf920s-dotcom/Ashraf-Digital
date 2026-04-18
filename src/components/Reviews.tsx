import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { REVIEWS } from '../constants';

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center gap-1 text-yellow-500 mb-4">
            {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
            <span className="text-[10px] font-bold uppercase tracking-widest ml-2 text-white/40">Google Rated 4.9/5</span>
          </div>
          <h2 className="text-6xl font-bold mb-4">Client Reviews</h2>
          <p className="text-white/40 max-w-2xl mx-auto leading-relaxed">
            Join over 500+ global clients from major cities who have scaled their businesses using our advanced strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {REVIEWS.map((r, i) => (
            <div key={i} className="bg-card p-10 rounded-[32px] border border-white/5 relative group">
              <div className="flex gap-1 text-yellow-500 mb-6">
                {[1,2,3,4,5].map(star => <Star key={star} size={12} fill="currentColor" />)}
              </div>
              <p className="text-white/60 leading-relaxed mb-8 italic">
                &quot;{r.text}&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">
                  {r.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="font-bold text-sm">{r.name}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold mt-1">
                    {r.role} • {r.date}
                  </p>
                </div>
              </div>
              <div className="absolute top-10 right-10 text-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-7xl font-serif">&quot;</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a href="#reviews" className="bg-black border border-white/10 px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:border-accent transition-colors">
            View All 30 Reviews
          </a>
        </div>
      </div>
    </section>
  );
}
