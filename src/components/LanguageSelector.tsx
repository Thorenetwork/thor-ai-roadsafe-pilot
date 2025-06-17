
import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage, Language } from '../contexts/LanguageContext';

interface LanguageSelectorProps {
  onLanguageSelect: () => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ onLanguageSelect }) => {
  const { language, setLanguage, t } = useLanguage();

  const languages = [
    { code: 'en' as Language, name: 'English', flag: '🇬🇧' },
    { code: 'hi' as Language, name: 'हिंदी', flag: '🇮🇳' },
  ];

  const handleLanguageSelect = (langCode: Language) => {
    setLanguage(langCode);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          {/* Maarg.AI Header */}
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-3">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
                <path d="M19 12L20.09 18.26L23 19L20.09 19.74L19 26L17.91 19.74L15 19L17.91 18.26L19 12Z" />
                <path d="M5 12L6.09 18.26L9 19L6.09 19.74L5 26L3.91 19.74L1 19L3.91 18.26L5 12Z" />
              </svg>
            </div>
            <div className="text-left">
              <h1 className="text-2xl font-bold text-gray-900">Maarg.AI</h1>
              <p className="text-sm text-blue-600 font-medium">AI Road Safety Management</p>
            </div>
          </div>

          <div className="flex items-center justify-center mb-4">
            <img 
              src="/lovable-uploads/48d4d164-3bff-4b69-92eb-bc2968eb582b.png" 
              alt="Thore Network Logo" 
              className="h-10 w-auto mr-3"
            />
            <Globe className="h-8 w-8 text-blue-500" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">{t('selectLanguage')}</h2>
          <p className="text-gray-600 text-sm mb-4">
            {language === 'en' 
              ? 'Choose your preferred language to continue'
              : 'जारी रखने के लिए अपनी पसंदीदा भाषा चुनें'}
          </p>
        </div>

        <div className="space-y-3 mb-6">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageSelect(lang.code)}
              className={`w-full p-4 rounded-lg border-2 transition-all duration-200 flex items-center space-x-3 ${
                language === lang.code
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
              }`}
            >
              <span className="text-2xl">{lang.flag}</span>
              <span className="font-medium text-lg">{lang.name}</span>
              {language === lang.code && (
                <div className="ml-auto w-4 h-4 bg-blue-500 rounded-full"></div>
              )}
            </button>
          ))}
        </div>

        <button
          onClick={onLanguageSelect}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
        >
          {t('continue')}
        </button>

        <div className="mt-6 text-center text-xs text-gray-500">
          Powered by Thore Network PVT LTD
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
