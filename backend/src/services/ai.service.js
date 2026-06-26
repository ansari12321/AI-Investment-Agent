import { ChatGroq } from "@langchain/groq";
import logger from '../utils/logger.js';
import dotenv from 'dotenv';

dotenv.config();

class AIService {
  constructor() {
    this.model = new ChatGroq({
      apiKey: process.env.GROQ_API_KEY,
      model: "llama-3.1-8b-instant",
      temperature: 0.2,
    });
  }

  async generateAnalysis(prompt, company) {
    try {
      logger.info({ msg: 'Generating AI analysis with Groq', company });
      
      const response = await this.model.invoke(prompt);
      let text = response.content;

      // Clean markdown if AI included it
      text = text.replace(/^```json\n?/, '').replace(/\n?```$/, '').trim();

      return JSON.parse(text);
    } catch (error) {
      logger.error({ msg: 'AI service (Groq) failed', error });
      throw error;
    }
  }
}

export default new AIService();
