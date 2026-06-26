import React from 'react';
import { FileText, Copy, Download } from 'lucide-react';
import toast from 'react-hot-toast';

const ReasoningCard = ({ reasoning, company }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(reasoning);
    toast.success('Reasoning copied to clipboard!');
  };

  return (
    <div className="glass-card p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold flex items-center gap-2">
          <FileText size={24} className="text-primary" />
          Detailed Reasoning
        </h3>
        <div className="flex gap-2">
          <button 
            onClick={handleCopy}
            className="p-2 hover:bg-white/5 rounded-lg transition-colors text-gray-400 hover:text-white"
            title="Copy Reasoning"
          >
            <Copy size={20} />
          </button>
        </div>
      </div>
      <div className="prose prose-invert max-w-none">
        <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">
          {reasoning}
        </p>
      </div>
    </div>
  );
};

export default ReasoningCard;
