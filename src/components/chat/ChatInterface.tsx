import React, { useState, useCallback } from 'react';
import MessageList from './MessageList';
import ChatInput from './ChatInput';
import Tutorial from '../tutorial/Tutorial';
import { useChatStore } from '../../store/chatStore';
import { fetchAIResponse } from '../../services/api';

const ChatInterface: React.FC = () => {
  const { 
    messages, 
    isTyping, 
    settings, 
    addMessage, 
    setIsTyping, 
    clearMessages 
  } = useChatStore();

  const handleSendMessage = useCallback(async (content: string) => {
    // Add user message to chat
    addMessage({ content, role: 'user' });
    
    // Set typing indicator
    setIsTyping(true);
    
    try {
      if (!settings.apiKey) {
        throw new Error('Please add your OpenAI API key in the settings');
      }

      // In a real app, you would call your backend here
      const response = await fetchAIResponse(
        [...messages, { id: 'temp', content, role: 'user', timestamp: new Date() }],
        settings.apiKey,
        settings.model
      );
      
      // Add AI response to chat
      addMessage({ content: response, role: 'assistant' });
    } catch (error) {
      console.error('Error fetching AI response:', error);
      let errorMessage = 'I apologize, but I encountered an error. ';
      
      if (error instanceof Error) {
        if (error.message.includes('API key')) {
          errorMessage += 'Please check your API key in the settings.';
        } else if (error.message.includes('rate limit')) {
          errorMessage += 'You have exceeded the API rate limit. Please try again later.';
        } else {
          errorMessage += error.message;
        }
      }
      
      addMessage({ 
        content: errorMessage, 
        role: 'assistant' 
      });
    } finally {
      setIsTyping(false);
    }
  }, [messages, addMessage, setIsTyping, settings]);

  return (
    <div className="flex flex-col h-full">
      {messages.length === 0 ? (
        <Tutorial />
      ) : (
        <MessageList messages={messages} isTyping={isTyping} />
      )}
      <ChatInput 
        onSendMessage={handleSendMessage} 
        onClearChat={clearMessages}
        isTyping={isTyping}
      />
    </div>
  );
};

export default ChatInterface;