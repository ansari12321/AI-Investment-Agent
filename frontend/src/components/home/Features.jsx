import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Newspaper, AlertTriangle, Lightbulb, Bot, Globe } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <BarChart3 className="w-6 h-6 text-blue-400" />,
      title: "Financial Analysis",
      desc: "Real-time company fundamentals and metrics."
    },
    {
      icon: <Newspaper className="w-6 h-6 text-orange-400" />,
      title: "Latest News",
      desc: "Latest market developments and news summaries."
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-red-400" />,
      title: "Risk Assessment",
      desc: "Comprehensive SWOT profiling and risk detection."
    },
    {
      icon: <Bot className="w-6 h-6 text-green-400" />,
      title: "AI Recommendation",
      desc: "Invest • Watch • Pass with AI reasoning."
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-transparent to-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 italic">What You'll Get</h2>
          <p className="text-gray-400">Everything you need for data-driven investment decisions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all group"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
