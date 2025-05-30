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
    <header className="py-4 px-4 sm:px-6 border-b border-gray-200 dark:border-gray-800 bg-gradient-to-r from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-200 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3 group">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 h-10 w-10 rounded-xl flex items-center justify-center shadow-md transform transition-transform duration-200 group-hover:scale-110">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-white"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            AI Chat Assistant
          </h1>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleDarkMode}
            aria-label={settings.darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            icon={settings.darkMode ? <Sun size={18} /> : <Moon size={18} />}
            className="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl"
          />
          <Button
            variant="ghost"
            size="sm"
            onClick={onSettingsClick}
            aria-label="Settings"
            icon={<Settings size={18} />}
            className="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;