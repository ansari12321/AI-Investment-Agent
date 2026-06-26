import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import HowItWorks from '../components/home/HowItWorks';
import SamplePreview from '../components/home/SamplePreview';
import Loading from '../components/common/Loading';
import ResultsDashboard from '../components/ResultsDashboard';
import RecentSearches from '../components/search/RecentSearches';
import useAnalysis from '../hooks/useAnalysis';
import { AnimatePresence, motion } from 'framer-motion';

const Home = () => {
  const { analysis, loading, error, analyzeCompany } = useAnalysis();

  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary/30">
      <Navbar />
      
      <main className="container mx-auto pt-16">
        <AnimatePresence mode="wait">
          {!analysis && !loading ? (
            <motion.div
              key="landing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Hero onSearch={analyzeCompany} />
              <Features />
              <SamplePreview />
              <HowItWorks />
              <RecentSearches />
            </motion.div>
          ) : loading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Loading />
            </motion.div>
          ) : (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="py-12"
            >
              <div className="max-w-7xl mx-auto px-6 mb-8 flex justify-between items-center">
                 <button 
                  onClick={() => window.location.reload()} 
                  className="text-sm font-bold text-gray-500 hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Search
                </button>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-xl border border-primary/20">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-xs font-black uppercase text-primary">Live Report Generated</span>
                </div>
              </div>
              
              <ResultsDashboard data={analysis} />
              
              <RecentSearches />
            </motion.div>
          )}
        </AnimatePresence>

        {error && (
          <div className="max-w-md mx-auto mt-8 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-500 text-center text-sm font-medium">
            ⚠️ {error}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Home;
