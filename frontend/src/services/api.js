import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const analyzeCompany = async (company) => {
  const response = await api.post("/api/analyze", {
    company,
  });

  return response.data;
};

export default api;
