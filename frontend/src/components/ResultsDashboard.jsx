import React from 'react';
import CompanyCard from './cards/CompanyCard';
import RecommendationCard from './cards/RecommendationCard';
import FinancialCard from './cards/FinancialCard';
import SWOTCard from './cards/SWOTCard';
import NewsCard from './cards/NewsCard';
import SourcesCard from './cards/SourcesCard';

const ResultsDashboard = ({ data }) => {
  if (!data) return null;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
      {/* Row 1: Overview & Recommendation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <CompanyCard data={data} />
        </div>
        <div className="lg:col-span-4">
          <RecommendationCard 
            recommendation={data.recommendation} 
            confidence={data.confidence} 
            summary={data.summary}
            reasoning={data.reasoning}
          />
        </div>
      </div>

      {/* Row 2: Financials & SWOT */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <FinancialCard financials={data.financialAnalysis} />
        <SWOTCard swot={data.swot} pros={data.pros} cons={data.cons} />
      </div>

      {/* Row 3: News & Sources */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <NewsCard news={data.latestNews} />
        </div>
        <div className="lg:col-span-4">
          <SourcesCard sources={data.sources} />
        </div>
      </div>
    </div>
  );
};

export default ResultsDashboard;
