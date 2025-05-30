export type Message = {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
};

export type ChatSettings = {
  darkMode: boolean;
  apiKey: string;
  model: string;
};