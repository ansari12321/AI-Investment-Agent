import express from 'express';
import analyzeController from '../controllers/analyze.controller.js';
import { validateRequest } from '../middleware/validateRequest.js';
import { analysisRequestSchema } from '../schemas/analysis.schema.js';

const router = express.Router();

router.post('/', validateRequest(analysisRequestSchema), analyzeController.analyze);

export default router;
