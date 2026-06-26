import React from 'react';
import { motion } from 'framer-motion';
import { Building2, MapPin, User, Tag } from 'lucide-react';

const CompanyCard = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="glass p-8 rounded-3xl h-full border border-white/10"
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-primary/20 rounded-2xl">
          <Building2 className="w-8 h-8 text-primary" />
        </div>
        <div>
          <h2 className="text-4xl font-black tracking-tight">{data.company}</h2>
          <div className="flex items-center gap-4 mt-2">
            <span className="flex items-center gap-1.5 text-sm text-gray-400">
              <Tag className="w-4 h-4" /> {data.industry}
            </span>
            <span className="flex items-center gap-1.5 text-sm text-gray-400">
              <MapPin className="w-4 h-4" /> {data.headquarters}
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-3">About the Company</h3>
          <p className="text-gray-300 leading-relaxed text-lg italic">
            "{data.overview}"
          </p>
        </div>

        <div className="pt-6 border-t border-white/5 flex items-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl border border-white/10">
            <User className="w-4 h-4 text-primary" />
            <span className="text-sm font-bold">CEO: {data.ceo}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CompanyCard;
