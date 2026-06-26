import investmentService from './src/services/investment.service.js';
import logger from './src/utils/logger.js';

// Mock Services
import searchService from './src/services/search.service.js';
import aiService from './src/services/ai.service.js';

async function runMockTest() {
  console.log('🚀 Starting Backend Mock Test...');

  // Mock Search results
  searchService.performSearch = async (company) => ({
    results: [{ url: 'https://test.com', content: 'Test content about ' + company }],
    context: 'Mocked context for ' + company,
    sources: ['https://test.com'],
  });

  // Mock AI results
  aiService.generateAnalysis = async (prompt, company) => ({
    company: company,
    overview: 'This is a mock overview for ' + company,
    industry: 'Technology',
    ceo: 'Test CEO',
    headquarters: 'Mock City',
    recommendation: 'INVEST',
    confidence: 85,
    summary: 'A great company to watch in this mock test.',
    financialAnalysis: {
      revenue: 'Growing steadily',
      marketCap: '$1T',
      growth: '15% YoY',
      profitability: 'High',
    },
    pros: ['Strong leadership', 'Market dominance', 'Innovation'],
    cons: ['Regulatory risks', 'High valuation', 'Competition'],
    swot: {
      strengths: ['Brand', 'Tech'],
      weaknesses: ['Debt'],
      opportunities: ['AI'],
      threats: ['Regulation'],
    },
    latestNews: [
      { title: 'Mock News 1', summary: 'Something happened', url: 'https://news.com/1' }
    ],
    reasoning: 'The company is performing well in this simulated environment.',
    sources: ['https://test.com'],
  });

  try {
    const result = await investmentService.processInvestmentRequest('Tesla');
    console.log('✅ Mock Test Passed!');
    console.log(JSON.stringify(result, null, 2));
  } catch (error) {
    console.error('❌ Mock Test Failed:', error);
  }
}

runMockTest();
