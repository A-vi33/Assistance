import React from 'react';
import { Settings, MessageSquare, Send, AlertCircle, Lightbulb, Zap, Shield, ChevronRight } from 'lucide-react';

const Tutorial: React.FC = () => {
  return (
    <div className="h-full overflow-y-auto scroll-smooth">
      <div className="max-w-4xl mx-auto p-4 sm:p-6">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-4 sm:p-6 border border-blue-200 dark:border-blue-800 shadow-lg">
          <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-6 sticky top-0 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 py-4 px-2 rounded-lg backdrop-blur-sm z-10 flex items-center">
            <span className="bg-blue-600 text-white p-2 rounded-lg mr-3">
              <MessageSquare className="h-6 w-6" />
            </span>
            Welcome to AI Chat Assistant
          </h2>
          
          <div className="space-y-8">
            {/* Step 1: API Key Setup */}
            <div className="transform hover:scale-[1.02] transition-all duration-200">
              <div className="flex items-start space-x-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 rounded-xl p-3 flex-shrink-0 shadow-md">
                  <Settings className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100 text-lg flex items-center">
                    Step 1: Set Up Your API Key
                    <ChevronRight className="h-5 w-5 ml-2 text-blue-500" />
                  </h3>
                  <div className="text-blue-700 dark:text-blue-300 mt-3 space-y-3">
                    <p className="flex items-center bg-blue-50 dark:bg-blue-900/30 p-2 rounded-lg">
                      <span className="font-bold text-blue-600 dark:text-blue-400 mr-3">1.</span>
                      Click the settings icon (⚙️) in the top right corner
                    </p>
                    <p className="flex items-center bg-blue-50 dark:bg-blue-900/30 p-2 rounded-lg">
                      <span className="font-bold text-blue-600 dark:text-blue-400 mr-3">2.</span>
                      In the settings panel, find the "OpenAI API Key" field
                    </p>
                    <p className="flex items-center bg-blue-50 dark:bg-blue-900/30 p-2 rounded-lg">
                      <span className="font-bold text-blue-600 dark:text-blue-400 mr-3">3.</span>
                      Paste your OpenAI API key (starts with "sk-...")
                    </p>
                    <p className="flex items-center bg-blue-50 dark:bg-blue-900/30 p-2 rounded-lg">
                      <span className="font-bold text-blue-600 dark:text-blue-400 mr-3">4.</span>
                      Click "Save Changes"
                    </p>
                    <div className="mt-4 p-3 bg-blue-100 dark:bg-blue-800/30 rounded-lg border border-blue-200 dark:border-blue-700">
                      <p className="text-sm italic flex items-center">
                        <Lightbulb className="h-4 w-4 mr-2 text-yellow-500" />
                        Don't have an API key? Get one at{' '}
                        <a 
                          href="https://platform.openai.com/api-keys" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300 ml-1"
                        >
                          platform.openai.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Using the Chat */}
            <div className="transform hover:scale-[1.02] transition-all duration-200">
              <div className="flex items-start space-x-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="bg-gradient-to-br from-green-500 to-green-600 dark:from-green-600 dark:to-green-700 rounded-xl p-3 flex-shrink-0 shadow-md">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100 text-lg flex items-center">
                    Step 2: Start Chatting
                    <ChevronRight className="h-5 w-5 ml-2 text-green-500" />
                  </h3>
                  <div className="text-blue-700 dark:text-blue-300 mt-3 space-y-3">
                    <p className="flex items-center bg-green-50 dark:bg-green-900/30 p-2 rounded-lg">
                      <span className="font-bold text-green-600 dark:text-green-400 mr-3">1.</span>
                      Type your message in the input box at the bottom
                    </p>
                    <p className="flex items-center bg-green-50 dark:bg-green-900/30 p-2 rounded-lg">
                      <span className="font-bold text-green-600 dark:text-green-400 mr-3">2.</span>
                      Press Enter or click the send button
                    </p>
                    <p className="flex items-center bg-green-50 dark:bg-green-900/30 p-2 rounded-lg">
                      <span className="font-bold text-green-600 dark:text-green-400 mr-3">3.</span>
                      Wait for the AI to respond
                    </p>
                    <div className="mt-4 p-3 bg-green-100 dark:bg-green-800/30 rounded-lg border border-green-200 dark:border-green-700">
                      <p className="text-sm italic flex items-center">
                        <Zap className="h-4 w-4 mr-2 text-yellow-500" />
                        Tip: You can use Shift + Enter for a new line
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Example Questions */}
            <div className="transform hover:scale-[1.02] transition-all duration-200">
              <div className="flex items-start space-x-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-600 dark:to-purple-700 rounded-xl p-3 flex-shrink-0 shadow-md">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100 text-lg flex items-center">
                    Example Questions
                    <ChevronRight className="h-5 w-5 ml-2 text-purple-500" />
                  </h3>
                  <div className="text-blue-700 dark:text-blue-300 mt-3">
                    <p className="mb-3 font-medium">Try asking:</p>
                    <div className="space-y-2">
                      {[
                        "Explain quantum computing in simple terms",
                        "Write a short story about a robot learning to paint",
                        "Help me debug this code: [paste your code]",
                        "What are the best practices for React hooks?"
                      ].map((question, index) => (
                        <div 
                          key={index}
                          className="flex items-start bg-purple-50 dark:bg-purple-900/30 p-3 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-800/30 transition-colors duration-200"
                        >
                          <span className="font-bold text-purple-600 dark:text-purple-400 mr-3">•</span>
                          "{question}"
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tips */}
            <div className="transform hover:scale-[1.02] transition-all duration-200">
              <div className="flex items-start space-x-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 dark:from-yellow-600 dark:to-yellow-700 rounded-xl p-3 flex-shrink-0 shadow-md">
                  <AlertCircle className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100 text-lg flex items-center">
                    Tips for Better Results
                    <ChevronRight className="h-5 w-5 ml-2 text-yellow-500" />
                  </h3>
                  <ul className="text-blue-700 dark:text-blue-300 mt-3 space-y-2">
                    {[
                      "Be specific in your questions",
                      "Provide context when needed",
                      "Use clear and concise language",
                      "If you get an error, check your API key and try again",
                      "For code-related questions, specify the programming language"
                    ].map((tip, index) => (
                      <li 
                        key={index}
                        className="flex items-start bg-yellow-50 dark:bg-yellow-900/30 p-2 rounded-lg hover:bg-yellow-100 dark:hover:bg-yellow-800/30 transition-colors duration-200"
                      >
                        <span className="font-bold text-yellow-600 dark:text-yellow-400 mr-3">•</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="transform hover:scale-[1.02] transition-all duration-200">
              <div className="flex items-start space-x-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="bg-gradient-to-br from-red-500 to-red-600 dark:from-red-600 dark:to-red-700 rounded-xl p-3 flex-shrink-0 shadow-md">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100 text-lg flex items-center">
                    Features
                    <ChevronRight className="h-5 w-5 ml-2 text-red-500" />
                  </h3>
                  <ul className="text-blue-700 dark:text-blue-300 mt-3 space-y-2">
                    {[
                      "Dark mode support",
                      "Markdown formatting in responses",
                      "Code syntax highlighting",
                      "Clear chat history",
                      "Multiple AI models to choose from"
                    ].map((feature, index) => (
                      <li 
                        key={index}
                        className="flex items-start bg-red-50 dark:bg-red-900/30 p-2 rounded-lg hover:bg-red-100 dark:hover:bg-red-800/30 transition-colors duration-200"
                      >
                        <span className="font-bold text-red-600 dark:text-red-400 mr-3">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Privacy */}
            <div className="transform hover:scale-[1.02] transition-all duration-200">
              <div className="flex items-start space-x-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 dark:from-indigo-600 dark:to-indigo-700 rounded-xl p-3 flex-shrink-0 shadow-md">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100 text-lg flex items-center">
                    Privacy & Security
                    <ChevronRight className="h-5 w-5 ml-2 text-indigo-500" />
                  </h3>
                  <div className="text-blue-700 dark:text-blue-300 mt-3 space-y-2">
                    {[
                      "Your API key is stored locally in your browser",
                      "Chat history is not saved on any server",
                      "You can clear your chat history at any time",
                      "No data is shared with third parties"
                    ].map((item, index) => (
                      <p 
                        key={index}
                        className="flex items-start bg-indigo-50 dark:bg-indigo-900/30 p-2 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-800/30 transition-colors duration-200"
                      >
                        <span className="font-bold text-indigo-600 dark:text-indigo-400 mr-3">•</span>
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorial; 