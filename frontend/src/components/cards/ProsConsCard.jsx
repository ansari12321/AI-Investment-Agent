import React from 'react';
import { PlusCircle, MinusCircle } from 'lucide-react';

const ProsConsCard = ({ pros, cons }) => {
  return (
    <div className="glass-card p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-success">
            <PlusCircle size={24} />
            <h3 className="text-lg font-bold">Investment Pros</h3>
          </div>
          <ul className="space-y-3">
            {pros.map((pro, i) => (
              <li key={i} className="bg-success/5 border border-success/10 p-3 rounded-xl text-sm text-gray-300 leading-relaxed">
                {pro}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2 text-danger">
            <MinusCircle size={24} />
            <h3 className="text-lg font-bold">Investment Cons</h3>
          </div>
          <ul className="space-y-3">
            {cons.map((con, i) => (
              <li key={i} className="bg-danger/5 border border-danger/10 p-3 rounded-xl text-sm text-gray-300 leading-relaxed">
                {con}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProsConsCard;
