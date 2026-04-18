import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
        <div className="flex-1">
          <div className="rounded-[40px] overflow-hidden border-4 border-white/5 golden-glow">
            <img 
              src="/profile.jpg.png" 
              alt="Ashraf" 
              className="w-full aspect-[4/5] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="flex-1">
          <span className="text-accent text-xs font-bold uppercase tracking-[0.4em] mb-4 block">About Me</span>
          <h2 className="text-5xl font-bold mb-8">
            Empowering Brands with <br />
            <span className="text-accent tracking-tight">Digital Strategy</span>
          </h2>

          <div className="space-y-6 text-white/60 leading-relaxed mb-10">
            <p>
              Hi, I&apos;m <span className="text-white font-bold underline decoration-accent">Ashraf</span> — a passionate and results-driven Digital Marketing Specialist dedicated to helping businesses grow in the digital world.
            </p>
            <p>
              I specialize in powerful social media marketing across Facebook, Instagram, TikTok, and YouTube, creating strategies that increase engagement, build brand awareness, and drive real results. From content planning to execution, I focus on what actually works.
            </p>
            <p>
              Beyond marketing, I design and develop modern e-commerce websites that are clean, user-friendly, and optimized for conversions. My goal is simple — to help your business grow faster with smart, effective digital solutions.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            {['Social Media Marketing', 'Short Video Editing', 'E-commerce Dev', 'Apple ID Support'].map(tag => (
              <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold">
                {tag}
              </span>
            ))}
          </div>

          <div className="bg-card p-8 rounded-[32px] border border-white/5">
            <h4 className="text-lg font-bold mb-6">Why Work With Me?</h4>
            <ul className="space-y-4">
              {[
                "Expert in Facebook & Instagram Ad algorithms.",
                "Creative Short Video editor for Reels & TikTok.",
                "High-converting E-commerce website developer.",
                "Proven strategies for YouTube channel growth.",
                "Apple ID marketing for digital infrastructure setup."
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4 text-sm">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0 mt-0.5">
                    <Check size={12} />
                  </div>
                  <span className="text-white/60">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
