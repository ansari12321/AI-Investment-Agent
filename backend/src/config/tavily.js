import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const TAVILY_API_KEY = process.env.TAVILY_API_KEY;
const TAVILY_BASE_URL = "https://api.tavily.com";

const tavilyClient = axios.create({
  baseURL: TAVILY_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const search = async (query, options = {}) => {
  const response = await tavilyClient.post("/search", {
    api_key: TAVILY_API_KEY,
    query,
    search_depth: options.search_depth || "smart",
    max_results: options.max_results || 5,
    include_domains: options.include_domains || [],
    exclude_domains: options.exclude_domains || [],
    include_answer: true,
    include_raw_content: false,
    include_images: false,
  });

  return response.data;
};

export default tavilyClient;
