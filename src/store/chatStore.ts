import { create } from 'zustand';
import { Message, ChatSettings } from '../types';

interface ChatState {
  messages: Message[];
  isTyping: boolean;
  settings: ChatSettings;
  addMessage: (message: Omit<Message, 'id' | 'timestamp'>) => void;
  setIsTyping: (isTyping: boolean) => void;
  clearMessages: () => void;
  toggleDarkMode: () => void;
  updateSettings: (settings: Partial<ChatSettings>) => void;
}

export const useChatStore = create<ChatState>((set) => ({
  messages: [],
  isTyping: false,
  settings: {
    darkMode: false,
    apiKey: '',
    model: 'gpt-3.5-turbo',
  },
  addMessage: (message) =>
    set((state) => ({
      messages: [
        ...state.messages,
        {
          ...message,
          id: crypto.randomUUID(),
          timestamp: new Date(),
        },
      ],
    })),
  setIsTyping: (isTyping) => set({ isTyping }),
  clearMessages: () => set({ messages: [] }),
  toggleDarkMode: () =>
    set((state) => ({
      settings: {
        ...state.settings,
        darkMode: !state.settings.darkMode,
      },
    })),
  updateSettings: (newSettings) =>
    set((state) => ({
      settings: {
        ...state.settings,
        ...newSettings,
      },
    })),
}));