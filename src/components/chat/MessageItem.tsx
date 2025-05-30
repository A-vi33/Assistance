import React from 'react';
import { Message } from '../../types';
import ReactMarkdown from 'react-markdown';
import { Bot, User } from 'lucide-react';

interface MessageItemProps {
  message: Message;
}

const MessageItem: React.FC<MessageItemProps> = ({ message }) => {
  const isUser = message.role === 'user';
  
  return (
    <div 
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4 animate-fade-in`}
      data-testid={`message-${message.id}`}
    >
      <div className={`flex ${isUser ? 'flex-row-reverse' : 'flex-row'} max-w-[85%] items-start gap-2 group`}>
        <div className={`flex-shrink-0 ${isUser ? 'ml-2' : 'mr-2'} transform transition-transform duration-200 group-hover:scale-110`}>
          <div className={`w-8 h-8 rounded-xl flex items-center justify-center shadow-md ${
            isUser 
              ? 'bg-gradient-to-br from-blue-600 to-blue-700' 
              : 'bg-gradient-to-br from-purple-600 to-purple-700'
          }`}>
            {isUser ? <User size={16} className="text-white" /> : <Bot size={16} className="text-white" />}
          </div>
        </div>
        
        <div 
          className={`py-3 px-4 rounded-2xl shadow-md transform transition-all duration-200 hover:shadow-lg ${
            isUser 
              ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-br-none'
              : 'bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-white rounded-bl-none'
          }`}
        >
          {isUser ? (
            <p className="whitespace-pre-wrap">{message.content}</p>
          ) : (
            <div className="markdown-content prose dark:prose-invert prose-sm max-w-none">
              <ReactMarkdown>{message.content}</ReactMarkdown>
            </div>
          )}
          
          <div className={`text-xs mt-1 ${isUser ? 'text-blue-200' : 'text-gray-500 dark:text-gray-400'}`}>
            {formatTime(message.timestamp)}
          </div>
        </div>
      </div>
    </div>
  );
};

const formatTime = (timestamp: Date) => {
  return new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  }).format(timestamp);
};

export default MessageItem;