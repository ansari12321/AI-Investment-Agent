import { useAnalysisContext } from '../context/AnalysisContext';
import { analyzeCompany } from '../services/api';
import toast from 'react-hot-toast';

const useAnalysis = () => {
  const {
    analysisData,
    loading,
    error,
    setAnalysisData,
    setLoading,
    setError,
    addToHistory,
  } = useAnalysisContext();

  const performAnalysis = async (company) => {
    if (!company) {
      toast.error('Please enter a company name');
      return;
    }

    setLoading(true);
    setError(null);
    setAnalysisData(null);

    try {
      const response = await analyzeCompany(company);
      if (response.success) {
        setAnalysisData(response.data);
        addToHistory(company);
        toast.success(`Analysis for ${company} completed!`);
      } else {
        throw new Error(response.message || 'Analysis failed');
      }
    } catch (err) {
      const errMsg = err.response?.data?.message || err.message || 'Something went wrong';
      setError(errMsg);
      toast.error(errMsg);
    } finally {
      setLoading(false);
    }
  };

  return { 
    analysis: analysisData, 
    loading, 
    error, 
    analyzeCompany: performAnalysis 
  };
};

export default useAnalysis;
