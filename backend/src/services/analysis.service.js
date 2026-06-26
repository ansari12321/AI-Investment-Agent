import { investmentPrompt } from '../prompts/investmentPrompt.js';
import aiService from './ai.service.js';
import logger from '../utils/logger.js';

class AnalysisService {
  async runAnalysis(company, context) {
    logger.info({ msg: 'Running analysis service', company });
    
    const formattedPrompt = investmentPrompt
      .replace('{company}', company)
      .replace('{context}', context);

    const analysis = await aiService.generateAnalysis(formattedPrompt, company);
    return analysis;
  }
}

export default new AnalysisService();
