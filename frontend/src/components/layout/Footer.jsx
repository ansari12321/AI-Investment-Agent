import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-20 py-12 px-6 border-t border-white/5 bg-black/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div>
          <h3 className="text-xl font-bold mb-2">AI Investment Agent</h3>
          <p className="text-gray-400 text-sm max-w-xs">
            Professional-grade investment research powered by state-of-the-art AI and real-time market data.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-3 text-sm text-gray-400">
          <div className="flex flex-wrap justify-center md:justify-end gap-4">
            <span>React</span>
            <span>•</span>
            <span>Node.js</span>
            <span>•</span>
            <span>LangChain</span>
            <span>•</span>
            <span>Gemini</span>
            <span>•</span>
            <span>Tavily</span>
          </div>
          <div className="flex items-center gap-2">
            Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by 
            <span className="font-semibold text-white">Hasamuddin Ansari</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
