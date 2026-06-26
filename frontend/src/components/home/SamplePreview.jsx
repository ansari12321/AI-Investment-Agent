import React from 'react';
import { motion } from 'framer-motion';
import { Star, TrendingUp, AlertCircle, Newspaper, DollarSign } from 'lucide-react';

const SamplePreview = () => {
  return (
    <div className="py-20 px-6 max-w-7xl mx-auto text-center">
      <div className="mb-12">
          <span className="text-sm font-bold text-primary uppercase tracking-widest">Sample Analysis Preview</span>
          <h2 className="text-2xl font-bold text-white/40 mt-2 italic">Visualize the depth of AI research</h2>
      </div>

      <div className="relative group grayscale hover:grayscale-0 transition-all duration-700">
        <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-2xl opacity-40 shadow-2xl overflow-hidden relative border-dashed">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-10 group-hover:opacity-0 transition-opacity">
               <p className="text-xl font-bold text-white/60">Sample Data Preview</p>
          </div>

          {/* Rec Card */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-left">
            <div className="flex justify-between items-start mb-4">
              <span className="p-2 bg-green-500/20 rounded-lg text-green-500 font-bold text-xs uppercase">Recommendation</span>
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            </div>
            <h3 className="text-3xl font-bold text-green-500 mb-1 tracking-wider italic font-black">INVEST</h3>
            <p className="text-sm text-gray-400 font-medium">92% Confidence Score</p>
          </div>

          {/* Financials */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-left">
             <div className="flex justify-between items-start mb-4">
              <span className="p-2 bg-blue-500/20 rounded-lg text-blue-500 font-bold text-xs uppercase">Financials</span>
              <DollarSign className="w-5 h-5 text-blue-500" />
            </div>
            <div className="space-y-2">
              <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Market Cap</p>
              <p className="text-2xl font-bold">$1.1T</p>
            </div>
          </div>

          {/* News Preview */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-left">
             <div className="flex justify-between items-start mb-4">
              <span className="p-2 bg-purple-500/20 rounded-lg text-purple-500 font-bold text-xs uppercase">Latest News</span>
              <Newspaper className="w-5 h-5 text-purple-500" />
            </div>
            <div className="space-y-3">
               <div className="h-4 bg-white/10 rounded w-full anim-pulse"></div>
               <div className="h-4 bg-white/10 rounded w-2/3 anim-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SamplePreview;
