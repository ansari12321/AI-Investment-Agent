import React, { useState } from 'react';
import { Search, Loader2 } from 'lucide-react';
import { useAnalysisContext } from '../../context/AnalysisContext';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const { loading, searchHistory } = useAnalysisContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4">
      <form onSubmit={handleSubmit} className="relative group">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
          {loading ? <Loader2 className="animate-spin" size={20} /> : <Search size={20} />}
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter company name (e.g. Tesla, Apple, NVIDIA)..."
          disabled={loading}
          className="w-full bg-card/50 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all text-lg placeholder:text-gray-500 disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={loading || !query.trim()}
          className="absolute right-3 top-2 bottom-2 px-6 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Analyze
        </button>
      </form>
      
      {searchHistory.length > 0 && (
        <div className="flex flex-wrap gap-2 justify-center">
          <span className="text-xs text-gray-500 uppercase tracking-widest self-center mr-2">Recent:</span>
          {searchHistory.map((item) => (
            <button
              key={item}
              onClick={() => {
                setQuery(item);
                onSearch(item);
              }}
              className="text-xs px-3 py-1 bg-white/5 hover:bg-white/10 rounded-full border border-white/5 transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
