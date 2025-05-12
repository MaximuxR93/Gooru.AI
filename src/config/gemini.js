// gemini.js or gemini.mjs
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY, // Correct environment usage
});

const config = {
  responseMimeType: 'text/plain',
};

const model = 'gemini-1.5-flash';

/**
 * Generate Gemini response from user input.
 * @param {string} userInput
 * @returns {Promise<string>} Response from Gemini
 */
async function generateGeminiResponse(userInput) {
  const contents = [
    {
      role: 'user',
      parts: [{ text: userInput }],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });

  let fullResponse = '';
  for await (const chunk of response) {
    fullResponse += chunk.text;
  }

  return fullResponse;
}

export default generateGeminiResponse;
