import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Link as LinkIcon, ShieldCheck } from 'lucide-react';

const SourcesCard = ({ sources }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass p-8 rounded-3xl border border-white/10 h-full"
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-blue-400/20 rounded-xl">
          <Globe className="w-6 h-6 text-blue-400" />
        </div>
        <h3 className="text-xl font-bold tracking-tight">🔗 Sources</h3>
      </div>

      <div className="space-y-3">
        {sources && sources.length > 0 ? (
          sources.map((url, index) => (
            <a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-primary/20 transition-all overflow-hidden"
            >
              <div className="p-2 bg-white/5 rounded-lg text-gray-500 group-hover:text-primary transition-colors">
                <LinkIcon className="w-3 h-3" />
              </div>
              <span className="text-sm text-gray-400 group-hover:text-white transition-colors truncate">
                {new URL(url).hostname}
              </span>
            </a>
          ))
        ) : (
          <p className="text-sm text-gray-600 italic px-2">No sources available for fallback search.</p>
        )}
      </div>

      <div className="mt-8 pt-6 border-t border-white/5">
        <div className="flex items-center gap-2 text-green-500/60 font-black text-[10px] uppercase tracking-widest">
           <ShieldCheck className="w-4 h-4" /> Verify Accuracy
        </div>
      </div>
    </motion.div>
  );
};

export default SourcesCard;
