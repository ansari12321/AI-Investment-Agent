import React from 'react';
import { Link2 } from 'lucide-react';

const SourceCard = ({ sources }) => {
  return (
    <div className="glass-card p-6">
      <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-gray-400">
        <Link2 size={20} />
        Research Sources
      </h3>
      <div className="flex flex-wrap gap-2">
        {sources.map((url, idx) => {
          let domain = 'Source';
          try { domain = new URL(url).hostname.replace('www.', ''); } catch (e) {}
          return (
            <a
              key={idx}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-3 py-1.5 bg-white/5 hover:bg-primary/10 hover:text-primary border border-white/5 rounded-lg transition-all"
            >
              {domain}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SourceCard;
