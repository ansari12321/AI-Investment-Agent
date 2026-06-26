import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Star, Info, Copy } from 'lucide-react';
import toast from 'react-hot-toast';

const RecommendationCard = ({ recommendation, confidence, summary, reasoning }) => {
  const getColors = () => {
    switch (recommendation) {
      case 'INVEST': return 'text-green-500 bg-green-500/10 border-green-500/20';
      case 'PASS': return 'text-red-500 bg-red-500/10 border-red-500/20';
      case 'WATCH': return 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20';
      default: return 'text-primary bg-primary/10 border-primary/20';
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(reasoning);
    toast.success('Reasoning copied to clipboard!');
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="glass p-8 rounded-3xl h-full border border-white/10 flex flex-col"
    >
      <div className="flex justify-between items-start mb-8">
        <div className="p-3 bg-primary/20 rounded-2xl">
          <Bot className="w-8 h-8 text-primary" />
        </div>
        <div className="flex flex-col items-end">
           <span className="text-[10px] font-black uppercase tracking-tighter text-gray-500 mb-1">AI Confidence</span>
           <div className="flex items-center gap-2">
             <span className="text-2xl font-black text-white">{confidence}%</span>
             <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
           </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">🤖 AI Recommendation</h3>
        <div className={`inline-block px-10 py-4 rounded-2xl font-black text-3xl tracking-widest mb-4 border ${getColors()}`}>
          {recommendation}
        </div>
        <p className="text-gray-300 font-medium leading-relaxed italic">
          "{summary}"
        </p>
      </div>

      <div className="mt-auto pt-6 border-t border-white/5">
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2 text-primary">
            <Info className="w-4 h-4" />
            <span className="text-sm font-bold uppercase tracking-widest">Model Reasoning</span>
          </div>
          <button 
            onClick={copyToClipboard}
            className="p-2 hover:bg-white/5 rounded-lg transition-colors text-gray-500 hover:text-primary"
          >
            <Copy className="w-4 h-4" />
          </button>
        </div>
        <p className="text-sm text-gray-400 line-clamp-4 leading-relaxed">
          {reasoning}
        </p>
      </div>
    </motion.div>
  );
};

export default RecommendationCard;
