
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, User, Bot, Phone, Mail, MapPin, AlertCircle, Shield, Car } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  type?: 'inquiry' | 'emergency' | 'general';
}

const Maargdarshak: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [inquiryType, setInquiryType] = useState<string>('');
  const [showQuickActions, setShowQuickActions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { t, language } = useLanguage();

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: 1,
        text: language === 'en' 
          ? 'नमस्कार! I am Maargdarshak, your AI road safety assistant. How can I help you today?'
          : 'नमस्कार! मी मार्गदर्शक आहे, तुमचा AI रोड सेफ्टी असिस्टंट. आज मी तुम्हाला कशी मदत करू शकतो?',
        sender: 'bot',
        timestamp: new Date(),
        type: 'general'
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, language]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const quickActions = [
    {
      icon: AlertCircle,
      label: language === 'en' ? 'Report Emergency' : 'आपत्कालीन रिपोर्ट',
      action: 'emergency',
      color: 'red'
    },
    {
      icon: Car,
      label: language === 'en' ? 'Vehicle Inquiry' : 'वाहन चौकशी',
      action: 'vehicle',
      color: 'blue'
    },
    {
      icon: Shield,
      label: language === 'en' ? 'Safety Guidelines' : 'सुरक्षा मार्गदर्शन',
      action: 'safety',
      color: 'green'
    },
    {
      icon: MapPin,
      label: language === 'en' ? 'Route Information' : 'मार्ग माहिती',
      action: 'route',
      color: 'purple'
    }
  ];

  const handleQuickAction = (action: string) => {
    setInquiryType(action);
    setShowQuickActions(false);
    
    let response = '';
    switch (action) {
      case 'emergency':
        response = language === 'en' 
          ? 'Emergency services activated! Please provide your location and describe the situation.'
          : 'आपत्कालीन सेवा सक्रिय! कृपया तुमचे स्थान आणि परिस्थितीचे वर्णन द्या.';
        break;
      case 'vehicle':
        response = language === 'en'
          ? 'I can help with vehicle tracking, maintenance schedules, or driver performance. What would you like to know?'
          : 'वाहन ट्रॅकिंग, देखभाल वेळापत्रक किंवा चालक कामगिरी बद्दल मी मदत करू शकतो. तुम्हाला काय जाणून घ्यायचे आहे?';
        break;
      case 'safety':
        response = language === 'en'
          ? 'Here are some key safety guidelines:\n• Maintain safe following distance\n• Check blind spots\n• Use indicators properly\n• Avoid mobile phones while driving'
          : 'येथे काही मुख्य सुरक्षा मार्गदर्शक तत्त्वे आहेत:\n• सुरक्षित अंतर राखा\n• अंध कोन तपासा\n• योग्य रीतीने इंडिकेटर वापरा\n• ड्रायव्हिंग करताना मोबाइल वापरू नका';
        break;
      case 'route':
        response = language === 'en'
          ? 'I can provide real-time traffic updates, route optimization, and hazard alerts. Which route are you interested in?'
          : 'मी रिअल-टाइम ट्रॅफिक अपडेट्स, मार्ग अनुकूलन आणि धोका इशारे देऊ शकतो. तुम्हाला कोणत्या मार्गात रस आहे?';
        break;
    }

    const botMessage: Message = {
      id: messages.length + 1,
      text: response,
      sender: 'bot',
      timestamp: new Date(),
      type: action as any
    };

    setMessages(prev => [...prev, botMessage]);
  };

  const getSmartResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Emergency keywords
    if (lowerMessage.includes('emergency') || lowerMessage.includes('accident') || lowerMessage.includes('help') || 
        lowerMessage.includes('आपत्काल') || lowerMessage.includes('अपघात') || lowerMessage.includes('मदत')) {
      return language === 'en' 
        ? 'Emergency protocol activated! 🚨 Please call 112 immediately. Share your exact location. I\'m also alerting nearby emergency services.'
        : 'आपत्कालीन प्रोटोकॉल सक्रिय! 🚨 कृपया ताबडतोब ११२ वर कॉल करा. तुमचे नेमके स्थान सांगा. मी जवळपासच्या आपत्कालीन सेवांनाही सूचना देत आहे.';
    }

    // Vehicle tracking keywords
    if (lowerMessage.includes('track') || lowerMessage.includes('vehicle') || lowerMessage.includes('location') ||
        lowerMessage.includes('ट्रॅक') || lowerMessage.includes('वाहन') || lowerMessage.includes('स्थान')) {
      return language === 'en'
        ? 'I can help you track vehicles in real-time. Please provide the vehicle registration number or driver ID for tracking information.'
        : 'मी तुम्हाला रिअल-टाइममध्ये वाहने ट्रॅक करण्यास मदत करू शकतो. ट्रॅकिंग माहितीसाठी कृपया वाहन नोंदणी क्रमांक किंवा चालक आयडी द्या.';
    }

    // Safety keywords
    if (lowerMessage.includes('safety') || lowerMessage.includes('guideline') || lowerMessage.includes('rule') ||
        lowerMessage.includes('सुरक्षा') || lowerMessage.includes('मार्गदर्शन') || lowerMessage.includes('नियम')) {
      return language === 'en'
        ? 'Road safety is our priority! Key tips: 1) Always wear seatbelt 2) Follow speed limits 3) Maintain vehicle distance 4) Avoid distractions. Need specific safety information?'
        : 'रस्त्यावरील सुरक्षा आमची प्राथमिकता आहे! मुख्य टिप्स: १) नेहमी सीटबेल्ट घाला २) वेग मर्यादांचे पालन करा ३) वाहनांमधील अंतर राखा ४) लक्ष विचलित करणारे टाळा. विशिष्ट सुरक्षा माहिती हवी आहे का?';
    }

    // Traffic keywords
    if (lowerMessage.includes('traffic') || lowerMessage.includes('route') || lowerMessage.includes('road') ||
        lowerMessage.includes('ट्रॅफिक') || lowerMessage.includes('मार्ग') || lowerMessage.includes('रस्ता')) {
      return language === 'en'
        ? 'Current traffic status: Mumbai-Pune Expressway (Heavy), Delhi-Gurgaon (Moderate), Bangalore ORR (Light). Which specific route do you need information about?'
        : 'सध्याची ट्रॅफिक स्थिती: मुंबई-पुणे एक्सप्रेसवे (जास्त), दिल्ली-गुड़गांव (मध्यम), बंगळूर ORR (कमी). तुम्हाला कोणत्या विशिष्ट मार्गाची माहिती हवी आहे?';
    }

    // Default response
    return language === 'en'
      ? 'Thank you for your query. I can assist with emergency reporting, vehicle tracking, safety guidelines, and route information. How can I help you specifically?'
      : 'तुमच्या प्रश्नासाठी धन्यवाद. आपत्कालीन अहवाल, वाहन ट्रॅकिंग, सुरक्षा मार्गदर्शन आणि मार्ग माहितीमध्ये मी मदत करू शकतो. मी तुम्हाला नेमके कशात मदत करू शकतो?';
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const userMessage: Message = {
        id: messages.length + 1,
        text: inputValue,
        sender: 'user',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, userMessage]);
      setInputValue('');

      // Generate smart response
      setTimeout(() => {
        const response = getSmartResponse(inputValue);
        const botMessage: Message = {
          id: messages.length + 2,
          text: response,
          sender: 'bot',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 z-50 animate-pulse"
      >
        <MessageCircle className="h-6 w-6" />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <span className="font-semibold">मार्गदर्शक</span>
                <p className="text-xs text-blue-100">AI Road Safety Assistant</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 p-1 rounded-full hover:bg-white hover:bg-opacity-20"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Quick Actions */}
          {showQuickActions && (
            <div className="p-4 bg-gray-50 border-b">
              <p className="text-sm text-gray-600 mb-3">
                {language === 'en' ? 'Quick Actions:' : 'त्वरित क्रिया:'}
              </p>
              <div className="grid grid-cols-2 gap-2">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickAction(action.action)}
                    className={`p-2 rounded-lg border-2 border-${action.color}-200 bg-${action.color}-50 hover:bg-${action.color}-100 transition-colors text-left`}
                  >
                    <action.icon className={`h-4 w-4 text-${action.color}-600 mb-1`} />
                    <p className="text-xs font-medium text-gray-700">{action.label}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-2 max-w-xs ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`p-2 rounded-full ${message.sender === 'user' ? 'bg-blue-100' : 'bg-purple-100'}`}>
                    {message.sender === 'user' ? 
                      <User className="h-3 w-3 text-blue-600" /> : 
                      <Bot className="h-3 w-3 text-purple-600" />
                    }
                  </div>
                  <div className={`p-3 rounded-2xl max-w-xs ${
                    message.sender === 'user' 
                      ? 'bg-blue-600 text-white rounded-br-sm' 
                      : 'bg-white text-gray-900 shadow-sm rounded-bl-sm border'
                  }`}>
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                    <p className={`text-xs mt-1 ${
                      message.sender === 'user' ? 'text-blue-100' : 'text-gray-400'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Emergency Contacts Bar */}
          <div className="px-4 py-2 bg-red-50 border-t border-red-200">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center space-x-2">
                <Phone className="h-3 w-3 text-red-600" />
                <span className="text-red-700 font-medium">Emergency: 112</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-3 w-3 text-red-600" />
                <span className="text-red-700">support@maarg.ai</span>
              </div>
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={language === 'en' ? "Type your message..." : "संदेश टाइप करा..."}
                className="flex-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                onClick={handleSendMessage}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Maargdarshak;
