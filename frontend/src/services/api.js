import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
});

export const analyzeCompany = async (company) => {
  const response = await api.post('/analyze', { company });
  return response.data;
};

export default api;
