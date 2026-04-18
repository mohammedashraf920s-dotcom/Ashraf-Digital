import { motion } from 'motion/react';
import { NAV_ITEMS } from '../constants';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-bg/80 backdrop-blur-md border-b border-border">
      <div className="flex items-center gap-2">
        <span className="text-xl font-extrabold text-accent">Ashraf</span>
        <span className="text-xl font-extrabold text-white">Marketo</span>
      </div>

      <div className="hidden lg:flex gap-8">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-xs font-semibold hover:text-accent transition-colors uppercase tracking-widest opacity-70 hover:opacity-100"
          >
            {item.label}
          </a>
        ))}
      </div>

      <a href="#contact" className="btn-golden text-xs px-6 py-2">
        Hire Me
      </a>
    </nav>
  );
}
