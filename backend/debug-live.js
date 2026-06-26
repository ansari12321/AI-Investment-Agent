import investmentService from './src/services/investment.service.js';
import logger from './src/utils/logger.js';
import dotenv from 'dotenv';

dotenv.config();

async function debugRequest() {
  console.log('🔍 Debugging Live Request...');
  try {
    const result = await investmentService.processInvestmentRequest('NVIDIA');
    console.log('✅ Success:', JSON.stringify(result, null, 2));
  } catch (error) {
    console.error('❌ Error caught in debug script:');
    console.error('Message:', error.message);
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Data:', JSON.stringify(error.response.data, null, 2));
    } else {
      console.error('Full Error:', error);
    }
  }
}

debugRequest();
