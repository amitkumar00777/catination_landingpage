"use client";

import { useState, useEffect, useRef } from "react";
import { X, MessageCircle, Minimize2, Send, Bot, User } from "lucide-react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi there! 👋",
      sender: "bot",
      timestamp: new Date()
    },
    {
      id: 2,
      text: "I'm Cati, your assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [onlineStatus, setOnlineStatus] = useState(true);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Auto-generated avatar for Cati using DiceBear Avatars API
  const catiAvatar = `https://api.dicebear.com/7.x/avataaars/svg?seed=cati&radius=50&backgroundColor=65c89b&mouth=smile&eyes=happy`;

  const scopeKeywords = [
    'pricing', 'price', 'cost', 'plan', 'subscription',
    'features', 'feature', 'functionality', 'what can it do',
    'support', 'help', 'issue', 'problem', 'trouble',
    'demo', 'demonstration', 'trial', 'request', 'schedule',
    'hello', 'hi', 'hey', 'greetings',
    'thanks', 'thank you', 'bye', 'goodbye'
  ];

  const isOutOfScope = (message) => {
    const lowerMessage = message.toLowerCase();
    return !scopeKeywords.some(keyword => lowerMessage.includes(keyword));
  };

  // Create WhatsApp URL to send question directly to Cati
  const createWhatsAppUrl = (message, includeConversation = false) => {
    let fullMessage = message;
    
    if (includeConversation) {
      // Include the entire conversation history for context
      const conversation = messages.map(msg => 
        `${msg.sender === 'user' ? 'Me' : 'Cati'}: ${msg.text}`
      ).join('\n');
      
      fullMessage = `Question for Cati:\n\n${conversation}\n\nMy question: ${message}`;
    } else {
      fullMessage = `Question for Cati:\n\n"${message}"\n\nPlease help me with this.`;
    }
    
    const encodedMessage = encodeURIComponent(fullMessage);
    return `https://wa.me/9178714102?text=${encodedMessage}`;
  };

  // Create WhatsApp URL for sending entire conversation to Cati
  const createConversationWhatsAppUrl = () => {
    const conversation = messages.map(msg => 
      `${msg.sender === 'user' ? 'Me' : 'Cati'}: ${msg.text}`
    ).join('\n');
    
    const fullMessage = `Continuing conversation with Cati:\n\n${conversation}\n\nI'd like to continue this conversation with you on WhatsApp.`;
    const encodedMessage = encodeURIComponent(fullMessage);
    return `https://wa.me/9178714102?text=${encodedMessage}`;
  };

  // Create WhatsApp URL specifically for asking a question to Cati
  const createQuestionForCatiUrl = (question) => {
    const fullMessage = `Hi Cati! I have a question:\n\n"${question}"\n\nCan you please help me with this?`;
    const encodedMessage = encodeURIComponent(fullMessage);
    return `https://wa.me/9178714102?text=${encodedMessage}`;
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      text: inputText,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);
    setShowQuickReplies(false);

    // Check if message is out of scope
    if (isOutOfScope(inputText)) {
      const whatsappUrl = createQuestionForCatiUrl(inputText);
      
      setTimeout(() => {
        const botMessage = {
          id: Date.now() + 1,
          text: "This seems to be outside my current scope. I've sent your question directly to Cati on WhatsApp. She'll get back to you shortly with a proper response!",
          sender: "bot",
          timestamp: new Date(),
          isOutOfScope: true,
          whatsappUrl: whatsappUrl
        };

        setMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
      }, 1500);
    } else {
      setTimeout(() => {
        const responses = [
          "I can help you with that! I've sent your question to Cati on WhatsApp for detailed assistance.",
          "Great question! I've forwarded this to Cati on WhatsApp - she'll provide you with expert help.",
          "Thanks for your query! Cati will assist you personally on WhatsApp with this matter.",
          "I've shared your question with Cati on WhatsApp. She'll contact you shortly with comprehensive information."
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        
        const botMessage = {
          id: Date.now() + 1,
          text: randomResponse,
          sender: "bot",
          timestamp: new Date(),
          whatsappUrl: createQuestionForCatiUrl(inputText)
        };

        setMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
      }, 1500);
    }
  };

  // Function to scroll to specific sections
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setOpen(false);
      setMinimized(false);
      
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start'
      });
      
      element.style.transition = 'all 0.5s ease';
      element.style.boxShadow = '0 0 0 4px rgba(101, 200, 155, 0.5)';
      
      setTimeout(() => {
        element.style.boxShadow = 'none';
      }, 2000);
    }
  };

  const quickReplies = [
    { text: "Pricing", section: "pricing" },
    { text: "Features", section: "features" },
    { text: "Support", section: "support" },
    { text: "Demo Request", section: "demo" }
  ];

  const handleQuickReply = (reply) => {
    setShowQuickReplies(false);
    
    const userMessage = {
      id: Date.now(),
      text: reply.text,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        text: `I can help you with ${reply.text.toLowerCase()}. Let me scroll to the ${reply.text.toLowerCase()} section for you! I've also sent your query to Cati on WhatsApp for personalized assistance.`,
        sender: "bot",
        timestamp: new Date(),
        whatsappUrl: createQuestionForCatiUrl(reply.text)
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);

      // Scroll to the respective section after a short delay
      setTimeout(() => {
        scrollToSection(reply.section);
      }, 500);
    }, 1000);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // WhatsApp SVG Icon Component
  const WhatsAppIcon = ({ className = "w-4 h-4" }) => (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893-.001-3.189-1.262-6.187-3.55-8.444"/>
    </svg>
  );

  // Function to handle direct WhatsApp click - sends question to Cati
  const handleDirectWhatsApp = (customMessage = null) => {
    const whatsappUrl = customMessage 
      ? createQuestionForCatiUrl(customMessage)
      : createConversationWhatsAppUrl();
    
    window.open(whatsappUrl, '_blank');
  };

  // Function to send any message directly to Cati on WhatsApp
  const sendToCatiOnWhatsApp = (message) => {
    const whatsappUrl = createQuestionForCatiUrl(message);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Enhanced Floating WhatsApp Icon with Multiple Animations */}
      {!open && (
        <div className="relative">
          {/* Outer Pulse Ring */}
          <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
          
          {/* Middle Pulse Ring */}
          <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" 
               style={{ animationDelay: '0.5s' }}></div>
          
          {/* Notification Badge */}
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center border-2 border-white shadow-lg animate-bounce">
            <span className="text-xs font-bold text-white">!</span>
          </div>

          {/* Floating Icon with Hover Effects */}
          <button
            onClick={() => setOpen(true)}
            className="relative bg-green-500 hover:bg-green-600 transition-all duration-500 p-5 rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 group animate-float"
          >
            {/* WhatsApp Icon with Enhanced Animation */}
            <WhatsAppIcon className="w-8 h-8 text-white transform group-hover:scale-110 transition-transform duration-300" />
            
            {/* Inner Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-green-400 opacity-0 group-hover:opacity-40 animate-pulse transition-opacity duration-300"></div>
          </button>
        </div>
      )}

      {/* Chat Popup */}
      {open && (
        <div className={`bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${
          minimized ? 'w-80 h-14' : 'w-80 h-[550px]'
        }`}>
          {/* Header */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 px-4 py-3 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="relative">
                {/* Cati Avatar with Online Status */}
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden">
                  <img 
                    src={catiAvatar} 
                    alt="Cati Assistant"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                  onlineStatus ? 'bg-green-400 animate-pulse' : 'bg-gray-400'
                }`}></div>
              </div>
              <div>
                <p className="font-bold text-white text-sm">Cati Assistant</p>
                <p className="text-green-100 text-xs flex items-center gap-1">
                  <span className={`w-2 h-2 rounded-full ${
                    onlineStatus ? 'bg-green-400 animate-pulse' : 'bg-gray-400'
                  }`}></span>
                  {onlineStatus ? 'Online • Ask Cati on WhatsApp' : 'Offline'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button 
                onClick={() => setMinimized(!minimized)}
                className="p-1 hover:bg-green-400 rounded transition-colors"
              >
                <Minimize2 className="w-4 h-4 text-white" />
              </button>
              <button 
                onClick={() => {
                  setOpen(false);
                  setMinimized(false);
                  setShowQuickReplies(true);
                }}
                className="p-1 hover:bg-green-400 rounded transition-colors"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>

          {!minimized && (
            <>
              {/* Messages Container */}
              <div className="h-72 bg-gray-50 overflow-y-auto p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} items-end gap-2`}
                    >
                      {/* Cati Avatar for Bot Messages */}
                      {message.sender === 'bot' && (
                        <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
                          <img 
                            src={catiAvatar} 
                            alt="Cati"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                          message.sender === 'user'
                            ? 'bg-green-500 text-white rounded-br-none'
                            : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none'
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                        
                        {/* WhatsApp Button for ALL Bot Messages - Send to Cati */}
                        {message.sender === 'bot' && message.whatsappUrl && (
                          <div className="mt-2 space-y-1">
                            <a 
                              href={message.whatsappUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-3 py-1 bg-green-500 text-white text-xs rounded-full hover:bg-green-600 transition-colors w-full justify-center"
                            >
                              <WhatsAppIcon className="w-3 h-3" />
                              Ask Cati on WhatsApp
                            </a>
                            <p className="text-xs text-gray-500 text-center">
                              Get personal assistance from Cati
                            </p>
                          </div>
                        )}

                        {/* For user messages, show option to send to Cati */}
                        {message.sender === 'user' && (
                          <button
                            onClick={() => sendToCatiOnWhatsApp(message.text)}
                            className="inline-flex items-center gap-1 mt-2 px-3 py-1 bg-blue-500 text-white text-xs rounded-full hover:bg-blue-600 transition-colors"
                          >
                            <WhatsAppIcon className="w-3 h-3" />
                            Send to Cati
                          </button>
                        )}
                        
                        <p className={`text-xs mt-1 ${
                          message.sender === 'user' ? 'text-green-100' : 'text-gray-500'
                        }`}>
                          {formatTime(message.timestamp)}
                        </p>
                      </div>

                      {/* User Avatar for User Messages */}
                      {message.sender === 'user' && (
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <User className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex justify-start items-end gap-2">
                      <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
                        <img 
                          src={catiAvatar} 
                          alt="Cati"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-none px-4 py-3">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>
              </div>

              {/* Quick Replies - IMPROVED VISIBILITY */}
              {showQuickReplies && (
                <div className="px-4 py-3 bg-green-50 border-t border-green-200">
                  <p className="text-xs text-gray-600 mb-2 font-medium">Ask Cati about:</p>
                  <div className="flex flex-wrap gap-2">
                    {quickReplies.map((reply, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuickReply(reply)}
                        className="text-xs bg-white border border-green-300 text-green-700 hover:bg-green-500 hover:text-white hover:border-green-500 rounded-full px-3 py-2 transition-all duration-200 shadow-sm hover:shadow-md"
                      >
                        {reply.text}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Direct WhatsApp to Cati Button */}
              <div className="px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 border-t border-green-200">
                <button
                  onClick={() => handleDirectWhatsApp()}
                  className="w-full flex items-center justify-center gap-2 bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 text-white py-2 px-4 rounded-lg transition-all duration-300 text-sm font-medium border border-white border-opacity-30"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  💬 Chat Directly with Cati on WhatsApp
                </button>
                <p className="text-xs text-white text-center mt-1 opacity-90">
                  Get instant personal assistance
                </p>
              </div>

              {/* Input Area */}
              <div className="border-t border-gray-200 p-4">
                <form onSubmit={handleSendMessage} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Ask your question..."
                    className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 text-gray-800 placeholder-gray-500"
                  />
                  <button
                    type="submit"
                    disabled={!inputText.trim()}
                    className="bg-green-500 hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white p-2 rounded-full transition-colors"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
                
                {/* Quick WhatsApp Send to Cati */}
                {inputText.trim() && (
                  <button
                    onClick={() => handleDirectWhatsApp(inputText)}
                    className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full transition-colors text-xs font-medium mb-2 shadow-sm"
                  >
                    <WhatsAppIcon className="w-3 h-3" />
                    📱 Send directly to Cati on WhatsApp
                  </button>
                )}
                
                <p className="text-xs text-gray-500 text-center">
                  All questions are sent to Cati for personal assistance
                </p>
              </div>
            </>
          )}
        </div>
      )}

      {/* Add custom styles for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}