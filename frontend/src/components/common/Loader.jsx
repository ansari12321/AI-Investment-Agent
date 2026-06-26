import React from 'react';

const Loader = ({ message = "AI is researching and analyzing..." }) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 bg-primary/20 rounded-full animate-pulse"></div>
        </div>
      </div>
      <p className="mt-8 text-lg font-medium text-gray-400 animate-pulse">
        {message}
      </p>
      <div className="mt-4 flex gap-1">
        <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};

export default Loader;
