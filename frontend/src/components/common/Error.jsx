import React from 'react';
import { AlertCircle, RefreshCcw } from 'lucide-react';

const Error = ({ message, onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 bg-red-500/5 border border-red-500/20 rounded-3xl">
      <div className="bg-red-500/10 p-4 rounded-full mb-6">
        <AlertCircle size={48} className="text-red-500" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">Analysis Failed</h3>
      <p className="text-gray-400 text-center max-w-md mb-8">
        {message || "We encountered an unexpected error while researching this company. Please try again or check your API keys."}
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="flex items-center gap-2 px-6 py-3 bg-red-500/10 hover:bg-red-500/20 text-red-500 font-semibold rounded-2xl border border-red-500/20 transition-all"
        >
          <RefreshCcw size={20} />
          Try Again
        </button>
      )}
    </div>
  );
};

export default Error;
