import { Facebook, Instagram, Youtube, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-bg">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <div className="flex gap-8 mb-8">
          <a href="#" className="opacity-40 hover:opacity-100 hover:text-accent transition-all"><Facebook size={20} /></a>
          <a href="#" className="opacity-40 hover:opacity-100 hover:text-accent transition-all"><Instagram size={20} /></a>
          <a href="#" className="opacity-40 hover:opacity-100 hover:text-accent transition-all"><Youtube size={14} fill="currentColor" /></a>
          <a href="#" className="opacity-40 hover:opacity-100 hover:text-accent transition-all"><Twitter size={20} /></a>
          <a href="#" className="opacity-40 hover:opacity-100 hover:text-accent transition-all"><Linkedin size={20} /></a>
        </div>
        
        <div className="text-[10px] uppercase tracking-[0.2em] opacity-30 font-bold">
          © 2024 ASHRAF MARKETO. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}
