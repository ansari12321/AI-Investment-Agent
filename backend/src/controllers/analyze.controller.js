import investmentService from '../services/investment.service.js';
import { asyncHandler } from '../middleware/asyncHandler.js';
import logger from '../utils/logger.js';

class AnalyzeController {
  analyze = asyncHandler(async (req, res) => {
    const { company } = req.body;
    logger.info({ msg: 'Received analysis request', company });

    const result = await investmentService.processInvestmentRequest(company);

    res.status(200).json(result);
  });
}

export default new AnalyzeController();
