import React from 'react';
import { History } from 'lucide-react';
import { useAnalysisContext } from '../../context/AnalysisContext';
import useAnalysis from '../../hooks/useAnalysis';

const RecentSearches = () => {
  const { searchHistory, setSearchHistory } = useAnalysisContext();
  const { analyzeCompany } = useAnalysis();

  if (!searchHistory || searchHistory.length === 0) return null;

  const clearHistory = () => setSearchHistory([]);

  return (
    <section className="py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
             <div className="p-2 bg-white/5 rounded-lg">
                <History className="w-5 h-5 text-gray-400" />
             </div>
             <h2 className="text-xl font-bold">Recent Searches</h2>
          </div>
          <button 
            onClick={clearHistory}
            className="text-xs text-gray-500 hover:text-red-400 transition-colors uppercase tracking-widest font-bold"
          >
            Clear All
          </button>
        </div>

        <div className="flex flex-wrap gap-3">
          {searchHistory.map((company, index) => (
            <button
              key={index}
              onClick={() => analyzeCompany(company)}
              className="group flex items-center gap-3 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-primary/5 transition-all"
            >
              <span className="text-sm font-medium text-gray-300 group-hover:text-white">{company}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentSearches;
