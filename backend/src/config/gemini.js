import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const getModel = (modelName = "gemini-1.5-pro") => {
  return genAI.getGenerativeModel({ model: modelName });
};

export default genAI;
