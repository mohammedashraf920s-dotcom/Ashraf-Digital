import { motion } from 'motion/react';
import { Calendar, Briefcase } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen pt-32 pb-20 px-6 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto gap-12">
      <div className="flex-1">
        <h1 className="text-7xl md:text-8xl font-bold leading-tight mb-8">
          Digital <br />
          <span className="text-white">Marketing</span> <br />
          <span className="text-accent">Specialist.</span>
        </h1>

        <div className="flex flex-wrap gap-3 mb-12">
          {['FACEBOOK & INSTAGRAM', 'TIKTOK & YOUTUBE', 'SHORT VIDEO EDITING', 'E-COMMERCE DEV'].map(tag => (
            <span key={tag} className="px-4 py-2 bg-transparent border border-white/20 rounded-full text-[10px] font-bold tracking-widest text-white/60">
              {tag}
            </span>
          ))}
        </div>

        <p className="text-lg text-white/50 mb-12 max-w-lg leading-relaxed">
          I help businesses grow with powerful social media marketing, high-converting e-commerce solutions, and short video content.
        </p>

        <a href="#contact" className="btn-golden flex items-center gap-2 px-8 py-4 w-fit">
          <Calendar size={18} />
          Book a Consultation
        </a>
      </div>

      <div className="flex-1 relative">
        <div className="w-[450px] h-[550px] rounded-[40px] overflow-hidden border-4 border-accent/20 golden-glow">
          <img 
            src="/profile.jpg.png" 
            alt="Ashraf Marketo" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Badge */}
        <div className="absolute top-10 -right-10 bg-card/90 backdrop-blur-md p-6 rounded-3xl border border-white/10 flex items-center gap-4 shadow-2xl">
          <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent">
            <Briefcase size={24} />
          </div>
          <div>
            <div className="text-2xl font-bold">50+</div>
            <div className="text-[10px] uppercase tracking-widest opacity-50">Projects Delivered</div>
          </div>
        </div>

        {/* Open for Projects */}
        <div className="absolute bottom-10 left-10 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Open for Projects</span>
        </div>
      </div>
    </section>
  );
}
