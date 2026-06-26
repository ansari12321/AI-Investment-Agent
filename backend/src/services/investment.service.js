import searchService from './search.service.js';
import companyService from './company.service.js';
import analysisService from './analysis.service.js';
import { investmentAnalysisSchema } from '../schemas/analysis.schema.js';
import logger from '../utils/logger.js';

class InvestmentService {
  async processInvestmentRequest(company) {
    const startTime = Date.now();
    logger.info({ msg: 'Orchestrating investment workflow', company, MOCK_MODE: process.env.MOCK_MODE });

    if (process.env.MOCK_MODE === 'true') {
      logger.info({ msg: 'Running in MOCK_MODE' });
      const processingTime = '2.5s';
      const mockResult = {
        success: true,
        timestamp: new Date().toISOString(),
        processingTime,
        data: {
          company: company,
          overview: `${company} is a leading global company in its industry, revolutionized by innovation and strategic growth.`,
          industry: 'Dynamic Sector',
          ceo: 'Visionary Leader',
          headquarters: 'Innovation Hub, Tech City',
          recommendation: 'INVEST',
          confidence: 94,
          summary: `Strong market position and robust financial outlook makes ${company} a top pick.`,
          financialAnalysis: {
            revenue: 'Consistently exceeding expectations with 20% YoY growth.',
            marketCap: '$850 Billion',
            growth: 'Expanding rapidly into emerging markets.',
            profitability: 'Maintains industry-leading margins of 25%.'
          },
          pros: ['Market Leadership', 'Strong R&D Pipeline', 'Exceptional Cash Flow'],
          cons: ['Regulatory Scrutiny', 'Valuation Premium', 'Geopolitical Risks'],
          swot: {
            strengths: ['Global Brand', 'Patented Tech', 'Loyal Customer Base'],
            weaknesses: ['Concentration Risk', 'Legacy Infrastructure'],
            opportunities: ['AI Integration', 'Sustainable Energy', 'Direct-to-Consumer'],
            threats: ['Aggressive Competition', 'Supply Chain Disruptions']
          },
          latestNews: [
            { title: `${company} Announces New AI Integration`, summary: 'A breakthrough in automation and customer experience.', url: 'https://example.com/news1' },
            { title: `Quarterly Earnings Beat Estimates`, summary: 'Revenue grew by 22% led by services business.', url: 'https://example.com/news2' }
          ],
          reasoning: `Analysis shows that ${company} is exceptionally well-positioned to capitalize on secular trends. Its robust balance sheet and innovative culture provide a significant competitive moat.`,
          sources: ['https://finance.yahoo.com', 'https://bloomberg.com']
        }
      };
      return mockResult;
    }

    try {
      // 1. Search for information
      const searchResults = await searchService.performSearch(company);

      // 2. Extract structured context
      const { rawContext, sources } = companyService.extractStructuredInfo(searchResults);

      // 3. Analyze with AI
      const analysisData = await analysisService.runAnalysis(company, rawContext);

      // 4. Validate AI response
      const validatedData = investmentAnalysisSchema.parse(analysisData);

      // 5. Add sources from search
      validatedData.sources = sources;

      const processingTime = `${((Date.now() - startTime) / 1000).toFixed(1)}s`;

      return {
        success: true,
        timestamp: new Date().toISOString(),
        processingTime,
        data: validatedData,
      };
    } catch (error) {
      logger.error({ msg: 'Investment workflow failed', error });
      throw error;
    }
  }
}

export default new InvestmentService();
