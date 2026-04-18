import { motion } from 'motion/react';
import { BLOG_POSTS } from '../constants';
import { ArrowRight, Calendar } from 'lucide-react';

export default function Blog() {
  return (
    <section id="blog" className="py-24 px-6 bg-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Insights & Strategy</span>
          <h2 className="text-5xl font-bold mb-4">Marketing Blog</h2>
          <p className="text-white/40 max-w-2xl mx-auto leading-relaxed">
            Expert marketing advice and digital strategies to help your business scale in an ever-evolving digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {BLOG_POSTS.map((post) => (
            <div key={post.id} className="bg-card rounded-[32px] overflow-hidden border border-white/5 flex flex-col group">
              <div className="h-64 relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <span className="bg-card/80 backdrop-blur-md border border-white/10 px-3 py-1 rounded text-[10px] uppercase font-bold tracking-widest text-white/60">
                    ID: {post.id} // BK-RT
                  </span>
                </div>
              </div>
              
              <div className="p-8 pb-10 flex-1 flex flex-col">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-accent text-[10px] font-bold uppercase tracking-widest">{post.category}</span>
                  <span className="text-white/30 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                    <Calendar size={12} /> {post.date}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-6 leading-tight flex-1">
                  {post.title}
                </h3>
                <p className="text-white/40 text-sm mb-8 line-clamp-2 italic">
                  Learn how to master the latest digital strategies to lower your CPA and increase ROI...
                </p>
                <div className="flex items-center gap-4">
                  <a href="#contact" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-accent transition-colors">
                    Read Strategy <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a href="#contact" className="btn-golden px-8 py-3 translate-y-[-50%]">Get Custom Strategy <ArrowRight size={16} /></a>
        </div>
      </div>
    </section>
  );
}
