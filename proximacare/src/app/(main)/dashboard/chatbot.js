import React, { useState, useEffect } from 'react';

const Chatbot = () => {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { user: false, message: 'Welcome to the chatbot!' }, // Initial message
  ]);

  const sendMessage = async () => {
    if (!userInput) return;

    setChatHistory((prevHistory) => [...prevHistory, { user: true, message: userInput }]);
    setUserInput('');

    try {
      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: userInput }),
      });

      const data = await response.json();
      setChatHistory((prevHistory) => [...prevHistory, { user: false, message: data.response }]);
    } catch (error) {
      console.error('Error fetching chatbot response:', error);
      // You can display an error message to the user here
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="flex flex-col space-y-4 bg-gray-100 rounded-lg p-4 shadow-md">
      <ul className="flex flex-col gap-2 overflow-y-auto max-h-80">
        {chatHistory.map((message, index) => (
          <li key={index} className={`flex items-center ${message.user ? 'justify-end' : 'justify-start'}`}>
            {message.user ? (
              <div className="text-gray-700">{message.message}</div>
            ) : (
              <div className="flex items-center space-x-2">
                <img className="w-8 h-8 rounded-full object-cover bg-gray-300" src="https://placeimg.com/64/64/people" alt="Chatbot avatar" />
                <span className="text-gray-700">{message.message}</span>
              </div>
            )}
          </li>
        ))}
      </ul>
      <div className="flex">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyPress={handleKeyPress}
          className="flex-grow rounded-lg px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type your message..."
        />
        <button onClick={sendMessage} className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
