import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ChatInterface from './components/chat/ChatInterface';
import SettingsPanel from './components/settings/SettingsPanel';
import { useChatStore } from './store/chatStore';

function App() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const { settings } = useChatStore();

  // Apply dark mode
  useEffect(() => {
    if (settings.darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [settings.darkMode]);

  return (
    <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-200">
      <Header onSettingsClick={() => setIsSettingsOpen(true)} />
      
      <main className="flex-1 overflow-hidden">
        <div className="h-full max-w-7xl mx-auto">
          <ChatInterface />
        </div>
      </main>
      
      <Footer />
      
      <SettingsPanel 
        isOpen={isSettingsOpen} 
        onClose={() => setIsSettingsOpen(false)} 
      />
    </div>
  );
}

export default App;