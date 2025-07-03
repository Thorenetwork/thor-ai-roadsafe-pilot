
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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

            {/* Mobile App Download Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">
                    {language === 'en' ? 'Download Maarg.AI Mobile App' : 'Maarg.AI मोबाइल ऐप डाउनलोड करें'}
                  </h3>
                  <p className="text-blue-100 mb-4">
                    {language === 'en' 
                      ? 'Get real-time alerts, track vehicles, and access emergency features on-the-go'
                      : 'रीयल-टाइम अलर्ट प्राप्त करें, वाहनों को ट्रैक करें, और चलते-फिरते आपातकालीन सुविधाओं का उपयोग करें'}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="flex items-center justify-center space-x-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.61 3 21.09 3 20.5ZM16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12ZM20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.53 12.9 20.18 13.18L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81ZM6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z"/>
                      </svg>
                      <span>{language === 'en' ? 'Download for Android' : 'Android के लिए डाउनलोड करें'}</span>
                    </button>
                    <button className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                      </svg>
                      <span>{language === 'en' ? 'Download for iOS' : 'iOS के लिए डाउनलोड करें'}</span>
                    </button>
                  </div>
                </div>
                <div className="hidden md:block ml-6">
                  <div className="bg-white p-3 rounded-lg">
                    <svg className="w-16 h-16 text-gray-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                      <rect x="7" y="7" width="4" height="4"/>
                      <rect x="7" y="13" width="4" height="4"/>
                      <rect x="13" y="7" width="4" height="4"/>
                      <rect x="13" y="13" width="4" height="4"/>
                    </svg>
                  </div>
                </div>
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
