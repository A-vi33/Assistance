import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-4 px-4 sm:px-6 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-colors duration-200">
      <p>© {new Date().getFullYear()} AI Chat Assistant. All rights reserved.</p>
      <p className="mt-1">
        Powered by React and OpenAI GPT
      </p>
    </footer>
  );
};

export default Footer;