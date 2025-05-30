import React from 'react';
import { Moon, Sun, Settings } from 'lucide-react';
import Button from '../ui/Button';
import { useChatStore } from '../../store/chatStore';

interface HeaderProps {
  onSettingsClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSettingsClick }) => {
  const { settings, toggleDarkMode } = useChatStore();

  return (
    <header className="py-4 px-4 sm:px-6 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="bg-blue-600 h-8 w-8 rounded-md flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 text-white"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">AI Chat Bot</h1>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleDarkMode}
            aria-label={settings.darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            icon={settings.darkMode ? <Sun size={18} /> : <Moon size={18} />}
          />
          <Button
            variant="ghost"
            size="sm"
            onClick={onSettingsClick}
            aria-label="Settings"
            icon={<Settings size={18} />}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;