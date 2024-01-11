/// ChatBot.js
import React, { useEffect, useState } from 'react';
import './chatbot.css';

function ChatBot() {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    if (!scriptLoaded) {
      const script = document.createElement('script');
      script.src = 'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1';
      script.async = true;

      script.onload = () => {
        console.log('Script loaded successfully');
        setScriptLoaded(true);
      };

      script.onerror = (error) => {
        console.error('Error loading script:', error);
        setScriptLoaded(true); // Set to true to prevent continuous attempts if an error occurs
      };

      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [scriptLoaded]);

  return (
    <div>
      <df-messenger
        chat-icon="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/JNTU-GV_Logo.jpg/800px-JNTU-GV_Logo.jpg"
        intent="WELCOME"
        chat-title="jntu_gv_chatbot"
        agent-id="996f0aa0-e6ff-4d96-bdd4-84be3cc4f0a6"
        language-code="en"
      ></df-messenger>
    </div>
  );
}

export default ChatBot;





