
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const HeroSection = () => {
  const { t, language } = useLanguage();

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4">
                <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
                  <path d="M19 12L20.09 18.26L23 19L20.09 19.74L19 26L17.91 19.74L15 19L17.91 18.26L19 12Z" />
                  <path d="M5 12L6.09 18.26L9 19L6.09 19.74L5 26L3.91 19.74L1 19L3.91 18.26L5 12Z" />
                </svg>
              </div>
              <div>
                <h1 className="text-4xl font-bold mb-2">Maarg.AI</h1>
                <p className="text-xl text-blue-100">
                  {language === 'en' 
                    ? 'Intelligent Road Safety Management'
                    : 'बुद्धिमान सड़क सुरक्षा प्रबंधन'}
                </p>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                {language === 'en' 
                  ? 'AI-Powered Road Safety Solutions'
                  : 'AI-संचालित सड़क सुरक्षा समाधान'}
              </h2>
              <p className="text-lg text-blue-100 leading-relaxed">
                {language === 'en'
                  ? 'Transform road safety with cutting-edge artificial intelligence. Our advanced system monitors traffic patterns, predicts potential hazards, and enables rapid emergency response to keep roads safer for everyone.'
                  : 'अत्याधुनिक आर्टिफिशियल इंटेलिजेंस के साथ सड़क सुरक्षा को बदलें। हमारा उन्नत सिस्टम ट्रैफिक पैटर्न की निगरानी करता है, संभावित खतरों की भविष्यवाणी करता है, और सभी के लिए सड़कों को सुरक्षित रखने हेतु त्वरित आपातकालीन प्रतिक्रिया सक्षम करता है।'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="w-8 h-8 bg-green-400 rounded-full mb-3"></div>
                <h3 className="font-semibold mb-2">
                  {language === 'en' ? 'Real-time Monitoring' : 'रीयल-टाइम निगरानी'}
                </h3>
                <p className="text-sm text-blue-100">
                  {language === 'en' 
                    ? '24/7 AI-powered surveillance of road conditions and traffic'
                    : '24/7 AI-संचालित सड़क स्थितियों और यातायात की निगरानी'}
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="w-8 h-8 bg-yellow-400 rounded-full mb-3"></div>
                <h3 className="font-semibold mb-2">
                  {language === 'en' ? 'Predictive Analytics' : 'भविष्यसूचक विश्लेषण'}
                </h3>
                <p className="text-sm text-blue-100">
                  {language === 'en' 
                    ? 'Advanced algorithms predict and prevent potential accidents'
                    : 'उन्नत एल्गोरिदम संभावित दुर्घटनाओं की भविष्यवाणी और रोकथाम करते हैं'}
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="w-8 h-8 bg-red-400 rounded-full mb-3"></div>
                <h3 className="font-semibold mb-2">
                  {language === 'en' ? 'Emergency Response' : 'आपातकालीन प्रतिक्रिया'}
                </h3>
                <p className="text-sm text-blue-100">
                  {language === 'en' 
                    ? 'Instant alert system with coordinated emergency services'
                    : 'समन्वित आपातकालीन सेवाओं के साथ तत्काल अलर्ट सिस्टम'}
                </p>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block ml-8">
            <div className="relative">
              <svg className="w-64 h-64 text-white/20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM15.1 8H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                <path d="M4 15.5C4 17.43 5.57 19 7.5 19L6 17.5V19C6 20.66 7.34 22 9 22s3-1.34 3-3V17.5L10.5 19C12.43 19 14 17.43 14 15.5S12.43 12 10.5 12L12 13.5V12C12 10.34 10.66 9 9 9S6 10.34 6 12V13.5L7.5 12C5.57 12 4 13.57 4 15.5Z"/>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-32 h-32 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
