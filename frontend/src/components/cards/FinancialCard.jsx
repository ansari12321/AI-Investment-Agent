import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, DollarSign, PieChart, Activity } from 'lucide-react';

const FinancialCard = ({ financials }) => {
  const metrics = [
    { label: 'Revenue', value: financials.revenue, icon: <DollarSign className="w-4 h-4" />, color: 'text-blue-400' },
    { label: 'Market Cap', value: financials.marketCap, icon: <PieChart className="w-4 h-4" />, color: 'text-purple-400' },
    { label: 'Growth', value: financials.growth, icon: <TrendingUp className="w-4 h-4" />, color: 'text-green-400' },
    { label: 'Profitability', value: financials.profitability, icon: <Activity className="w-4 h-4" />, color: 'text-orange-400' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass p-8 rounded-3xl border border-white/10"
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-blue-500/20 rounded-xl">
          <BarChart3 className="w-6 h-6 text-blue-400" />
        </div>
        <h3 className="text-xl font-bold tracking-tight">📈 Financial Analysis</h3>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {metrics.map((m, i) => (
          <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-all">
            <div className="flex items-center gap-2 mb-2">
              <div className={`p-1.5 rounded-lg bg-black/20 ${m.color}`}>
                {m.icon}
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">{m.label}</span>
            </div>
            <p className="font-bold text-lg text-white">{m.value}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default FinancialCard;
