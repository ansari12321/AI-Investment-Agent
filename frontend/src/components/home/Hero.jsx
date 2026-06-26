import React from 'react';
import { motion } from 'framer-motion';
import { Search, Sparkles, TrendingUp } from 'lucide-react';

const Hero = ({ onSearch }) => {
  const trending = [
    { name: 'Tesla', symbol: 'TSLA' },
    { name: 'Apple', symbol: 'AAPL' },
    { name: 'NVIDIA', symbol: 'NVDA' },
    { name: 'Meta', symbol: 'META' },
    { name: 'Amazon', symbol: 'AMZN' }
  ];

  const [query, setQuery] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) onSearch(query);
  };

  return (
    <div className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
        >
          <Sparkles className="w-4 h-4" />
          ✨ AI Powered Investment Research
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight"
        >
          Research Any Public Company <br />
          <span className="text-white/60 font-medium italic">Using Advanced AI</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Analyze companies with live web search, financial insights, 
          and AI-powered investment recommendations.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto flex gap-2 p-2 bg-white/5 border border-white/10 rounded-2xl mb-8 focus-within:border-primary/50 transition-all shadow-2xl"
        >
          <div className="flex-1 flex items-center gap-3 px-4">
            <Search className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search Company (Tesla, Apple, NVIDIA...)"
              className="w-full bg-transparent border-none outline-none text-white placeholder:text-gray-500 py-3"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="px-8 py-3 bg-primary hover:bg-primary-hover text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/20 active:scale-95"
          >
            Analyze
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <span className="text-sm font-bold text-gray-500 flex items-center gap-1.5 uppercase tracking-wider">
            <TrendingUp className="w-4 h-4" /> Trending
          </span>
          {trending.map((company) => (
            <button
              key={company.symbol}
              onClick={() => onSearch(company.name)}
              className="px-4 py-1.5 rounded-full bg-white/5 border border-white/5 hover:border-primary/50 hover:bg-primary/5 transition-all text-sm font-medium text-gray-300 hover:text-white"
            >
              {company.name}
            </button>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
