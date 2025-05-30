import OpenAI from 'openai';
import { Message } from '../types';

export const fetchAIResponse = async (
  messages: Message[],
  apiKey: string,
  model: string
): Promise<string> => {
  if (!apiKey) {
    throw new Error('OpenAI API key is required');
  }

  const openai = new OpenAI({
    apiKey,
    dangerouslyAllowBrowser: true // Note: In production, API calls should go through a backend
  });

  try {
    const completion = await openai.chat.completions.create({
      model,
      messages: messages.map(msg => ({
        role: msg.role,
        content: msg.content
      })),
      temperature: 0.7,
      max_tokens: 1000,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0
    });

    const response = completion.choices[0]?.message?.content;
    if (!response) {
      throw new Error('No response generated from OpenAI');
    }
    return response;
  } catch (error: any) {
    console.error('OpenAI API Error:', error);
    
    if (error.response?.status === 401) {
      throw new Error('Invalid API key. Please check your API key in the settings.');
    } else if (error.response?.status === 429) {
      throw new Error('Rate limit exceeded. Please try again later.');
    } else if (error.message?.includes('model')) {
      throw new Error('Invalid model selected. Please check your model selection in the settings.');
    } else {
      throw new Error(`OpenAI API Error: ${error.message || 'Unknown error occurred'}`);
    }
  }
};