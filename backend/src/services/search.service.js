import { search as tavilySearch } from '../config/tavily.js';
import logger from '../utils/logger.js';

class SearchService {
  async performSearch(company) {
    try {
      if (!process.env.TAVILY_API_KEY || process.env.TAVILY_API_KEY === 'mock_key' || process.env.TAVILY_API_KEY === '') {
        logger.warn({ msg: 'Tavily API key missing, using fallback search context' });
        return {
          results: [],
          context: `This is a fallback context for ${company} because no search API key was provided. 
          ${company} is a well-known public company. Please analyze it based on your internal knowledge for the purpose of this demonstration.`,
          sources: ['https://demo-fallback.com'],
        };
      }

      logger.info({ msg: 'Performing search for company', company });
      
      const queries = [
        `${company} stock financial performance 2024 2025`,
        `${company} latest news and developments`,
        `${company} business model and SWOT analysis`,
        `${company} CEO and headquarters info`,
      ];

      const searchPromises = queries.map((query) => 
        tavilySearch(query, { search_depth: 'smart', max_results: 5 })
      );

      const results = await Promise.all(searchPromises);
      
      const uniqueResults = [];
      const seenUrls = new Set();

      results.forEach((res) => {
        if (res.results) {
          res.results.forEach((item) => {
            if (!seenUrls.has(item.url)) {
              seenUrls.add(item.url);
              uniqueResults.push(item);
            }
          });
        }
      });

      return {
        results: uniqueResults,
        context: uniqueResults.map(r => r.content).join('\n\n'),
        sources: Array.from(seenUrls),
      };
    } catch (error) {
      logger.error({ msg: 'Search service failed', error });
      // Fallback search result on failure
      return {
        results: [],
        context: `Research failed for ${company}, falling back to internal AI knowledge.`,
        sources: [],
      };
    }
  }
}

export default new SearchService();
