import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, BarChart3, Bot, FileText, CheckCircle2, Loader2 } from 'lucide-react';

const Loading = () => {
  const [step, setStep] = useState(0);
  const steps = [
    { icon: <Search className="w-5 h-5" />, text: "Searching Latest News & Market Data..." },
    { icon: <BarChart3 className="w-5 h-5" />, text: "Collecting Company Financials..." },
    { icon: <Bot className="w-5 h-5" />, text: "Gemini AI is Analyzing Data Patterns..." },
    { icon: <FileText className="w-5 h-5" />, text: "Generating Investment Report..." }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-20">
      <div className="relative mb-12">
        <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full animate-pulse" />
        <Loader2 className="w-16 h-16 text-primary animate-spin relative" />
      </div>

      <div className="max-w-md w-full space-y-4 px-6">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ 
              opacity: i <= step ? 1 : 0.3,
              x: 0,
              scale: i === step ? 1.05 : 1
            }}
            className={`flex items-center gap-4 p-4 rounded-2xl border transition-all ${
              i === step 
                ? 'bg-primary/10 border-primary/30 shadow-lg shadow-primary/10' 
                : i < step 
                  ? 'bg-white/5 border-green-500/20' 
                  : 'bg-white/5 border-white/5'
            }`}
          >
            <div className={`${i < step ? 'text-green-500' : i === step ? 'text-primary' : 'text-gray-500'}`}>
              {i < step ? <CheckCircle2 className="w-5 h-5" /> : s.icon}
            </div>
            <span className={`text-sm font-medium ${i <= step ? 'text-white' : 'text-gray-600'}`}>
              {s.text}
            </span>
            {i === step && (
              <motion.div 
                className="ml-auto w-1 h-1 rounded-full bg-primary"
                animate={{ scale: [1, 2, 1] }}
                transition={{ repeat: Infinity, duration: 1 }}
              />
            )}
          </motion.div>
        ))}
      </div>

      <p className="mt-8 text-xs text-gray-500 uppercase tracking-widest font-bold animate-pulse">
        Our Agent is working hard for you
      </p>
    </div>
  );
};

export default Loading;
