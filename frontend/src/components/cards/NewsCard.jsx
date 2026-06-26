import React from 'react';
import { motion } from 'framer-motion';
import { Newspaper, ExternalLink, Calendar } from 'lucide-react';

const NewsCard = ({ news }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass p-8 rounded-3xl border border-white/10 h-full"
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-orange-500/20 rounded-xl">
          <Newspaper className="w-6 h-6 text-orange-400" />
        </div>
        <h3 className="text-xl font-bold tracking-tight">📰 Latest News</h3>
      </div>

      <div className="space-y-4">
        {news.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/30 hover:bg-primary/5 transition-all"
          >
            <div className="flex justify-between items-start gap-4 mb-2">
              <h4 className="font-bold text-gray-200 group-hover:text-primary transition-colors leading-tight">
                {item.title}
              </h4>
              <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-primary flex-shrink-0" />
            </div>
            <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed mb-3">
              {item.summary}
            </p>
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-600">
               <Calendar className="w-3 h-3" />
               Latest market update
            </div>
          </a>
        ))}
      </div>
    </motion.div>
  );
};

export default NewsCard;
