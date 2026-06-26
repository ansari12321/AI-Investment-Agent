import React, { createContext, useContext, useState, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const AnalysisContext = createContext();

export const AnalysisProvider = ({ children }) => {
  const [analysisData, setAnalysisData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchHistory, setSearchHistory] = useLocalStorage('searchHistory', []);

  const addToHistory = (company) => {
    const updatedHistory = [company, ...searchHistory.filter(c => c !== company)].slice(0, 5);
    setSearchHistory(updatedHistory);
  };

  return (
    <AnalysisContext.Provider
      value={{
        analysisData,
        setAnalysisData,
        loading,
        setLoading,
        error,
        setError,
        searchHistory,
        addToHistory,
      }}
    >
      {children}
    </AnalysisContext.Provider>
  );
};

export const useAnalysisContext = () => useContext(AnalysisContext);
