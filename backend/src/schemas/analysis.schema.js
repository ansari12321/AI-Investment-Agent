import { z } from 'zod';

export const analysisRequestSchema = z.object({
  body: z.object({
    company: z.string().min(1, 'Company name is required'),
  }),
});

export const investmentAnalysisSchema = z.object({
  company: z.string(),
  overview: z.string(),
  industry: z.string(),
  ceo: z.string(),
  headquarters: z.string(),
  recommendation: z.enum(['INVEST', 'PASS', 'WATCH']),
  confidence: z.number().min(0).max(100),
  summary: z.string(),
  financialAnalysis: z.object({
    revenue: z.string(),
    marketCap: z.string(),
    growth: z.string(),
    profitability: z.string(),
  }),
  pros: z.array(z.string()),
  cons: z.array(z.string()),
  swot: z.object({
    strengths: z.array(z.string()),
    weaknesses: z.array(z.string()),
    opportunities: z.array(z.string()),
    threats: z.array(z.string()),
  }),
  latestNews: z.array(
    z.object({
      title: z.string(),
      summary: z.string(),
      url: z.string().url(),
    })
  ),
  reasoning: z.string(),
  sources: z.array(z.string()),
});
