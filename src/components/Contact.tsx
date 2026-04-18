import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Phone, Send, ArrowRight, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-bg">
      <div className="max-w-7xl mx-auto">
        {/* Banner */}
        <div className="bg-linear-to-r from-card to-bg p-16 rounded-[40px] border border-white/5 mb-32 flex flex-col md:flex-row items-center justify-between golden-glow">
          <div className="max-w-lg mb-8 md:mb-0">
            <h2 className="text-5xl font-bold mb-4">Join 500+ Happy Clients</h2>
            <p className="text-white/40 leading-relaxed">
              Ready to scale your business? Let&apos;s discuss your custom digital transformation strategy today.
            </p>
          </div>
          <a href="#contact" className="btn-golden px-10 py-5 text-sm uppercase tracking-widest">
            Book a Free Call <ArrowRight size={18} />
          </a>
        </div>

        {/* Contact Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="bg-card border border-white/10 px-4 py-2 rounded-full text-[10px] uppercase font-bold tracking-widest text-accent mb-8 inline-block">
              Get in Touch
            </span>
            <h2 className="text-6xl font-bold mb-8">
              Let&apos;s Build Something <br />
              <span className="text-accent underline decoration-white/20 underline-offset-8">Extraordinary</span>
            </h2>
            <p className="text-white/40 mb-12 max-w-md leading-relaxed">
              Whether you have a specific project in mind or just want to explore the possibilities of AI in your business, I&apos;m here to help.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest opacity-30 block mb-1">Email Me</span>
                  <a href="mailto:sheikhhridoy456@gmail.com" className="font-bold border-b border-transparent hover:border-accent transition-colors">sheikhhridoy456@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent">
                  <Linkedin size={20} />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest opacity-30 block mb-1">LinkedIn</span>
                  <a href="#" className="font-bold border-b border-transparent hover:border-accent transition-colors">Ashraf Marketo</a>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest opacity-30 block mb-1">WhatsApp</span>
                  <a href="tel:+8801784517651" className="font-bold border-b border-transparent hover:border-accent transition-colors">+880 1784 517661</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-12 rounded-[40px] border border-white/5 shadow-2xl relative overflow-hidden">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 bg-card flex flex-col items-center justify-center text-center p-12 z-10"
              >
                <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center text-accent mb-6">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                <p className="text-white/40 mb-8">Thank you for reaching out. <br /> I will get back to you shortly.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold uppercase tracking-widest text-accent hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-[10px] uppercase tracking-widest opacity-40 font-bold mb-2 block">Your Name</label>
                <input required type="text" placeholder="Ashraf Marketo" className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 focus:border-accent focus:outline-none transition-colors" />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest opacity-40 font-bold mb-2 block">Email Address</label>
                <input required type="email" placeholder="sheikhhridoy456@gmail.com" className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 focus:border-accent focus:outline-none transition-colors" />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest opacity-40 font-bold mb-2 block">Your Message</label>
                <textarea required rows={4} placeholder="Tell me about your project..." className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 focus:border-accent focus:outline-none transition-colors" />
              </div>
              <button type="submit" className="btn-golden w-full py-5 justify-center mt-8">
                Send Message <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
