import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, History, Zap, Github } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass shadow-2xl rounded-2xl px-6 py-3 border border-white/10">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="p-2 bg-primary/20 rounded-xl group-hover:bg-primary/30 transition-colors">
            <LayoutDashboard className="w-6 h-6 text-primary" />
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
            AI Investment Agent
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <NavLink icon={<Zap className="w-4 h-4" />} label="Home" active />
          <NavLink icon={<History className="w-4 h-4" />} label="Recent Searches" />
          <NavLink icon={<LayoutDashboard className="w-4 h-4" />} label="Features" />
        </div>

        <div className="flex items-center gap-4">
          <a 
            href="https://github.com/hasamuddin-ansari" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group"
          >
            <Github className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            <span className="text-sm font-medium">GitHub</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ icon, label, active = false }) => (
  <button className={`flex items-center gap-2 text-sm font-medium transition-all hover:text-primary ${active ? 'text-primary' : 'text-gray-400'}`}>
    {icon}
    {label}
  </button>
);

export default Navbar;
