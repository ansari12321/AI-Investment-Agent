import React from 'react';
import { motion } from 'framer-motion';
import { Search, TrendingUp, Cpu, BarChart3, ChevronRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Search className="w-6 h-6 text-blue-400" />,
      title: "1. Web Research",
      description: "Tavily Search queries the live web for the latest company news and filings."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-green-400" />,
      title: "2. Data Gathering",
      description: "Market fundamentals and real-time financial metrics are collected and structured."
    },
    {
      icon: <Cpu className="w-6 h-6 text-purple-400" />,
      title: "3. AI Orchestration",
      description: "LangChain & Gemini analyze gathered data with deep investment reasoning."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-primary" />,
      title: "4. Final Report",
      description: "A comprehensive investment recommendation with SWOT & financial insights."
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">How the AI Works</h2>
          <p className="text-gray-400">A sophisticated multi-step process to ensure accurate insights.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all">
                {step.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(100%-1rem)] w-full text-white/10 z-0">
                   <ChevronRight className="w-8 h-8 mx-auto" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
