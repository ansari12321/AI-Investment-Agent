import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, AlertTriangle, Plus, Minus, Check, X } from 'lucide-react';

const SWOTCard = ({ swot, pros, cons }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass p-8 rounded-3xl border border-white/10"
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-purple-500/20 rounded-xl">
          <Lightbulb className="w-6 h-6 text-purple-400" />
        </div>
        <h3 className="text-xl font-bold tracking-tight">💡 SWOT Analysis</h3>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-8">
        <SWOTSection label="Strengths" items={swot.strengths} color="text-green-400" icon={<Plus className="w-3 h-3" />} />
        <SWOTSection label="Weaknesses" items={swot.weaknesses} color="text-red-400" icon={<Minus className="w-3 h-3" />} />
        <SWOTSection label="Opportunities" items={swot.opportunities} color="text-blue-400" icon={<Plus className="w-3 h-3" />} />
        <SWOTSection label="Threats" items={swot.threats} color="text-orange-400" icon={<X className="w-3 h-3" />} />
      </div>

      <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
        <div>
          <h4 className="text-xs font-black uppercase text-gray-500 mb-4 tracking-widest flex items-center gap-2">
            <Check className="w-4 h-4 text-green-500" /> Key Pros
          </h4>
          <ul className="space-y-2">
            {pros.map((p, i) => (
              <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-black uppercase text-gray-500 mb-4 tracking-widest flex items-center gap-2">
             <AlertTriangle className="w-4 h-4 text-red-500" /> Key Cons
          </h4>
          <ul className="space-y-2">
            {cons.map((c, i) => (
              <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const SWOTSection = ({ label, items, color, icon }) => (
  <div>
    <h4 className={`text-[10px] font-black uppercase mb-4 tracking-widest ${color}`}>{label}</h4>
    <div className="flex flex-wrap gap-2">
      {items.map((item, i) => (
        <span key={i} className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-[11px] font-bold text-gray-300 flex items-center gap-1.5 hover:border-white/20 transition-all">
          {icon} {item}
        </span>
      ))}
    </div>
  </div>
);

export default SWOTCard;
