
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
    { code: 'mr' as Language, name: 'मराठी', flag: '🇮🇳' },
    { code: 'ta' as Language, name: 'தமிழ்', flag: '🇮🇳' },
  ];

  const handleLanguageSelect = (langCode: Language) => {
    setLanguage(langCode);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <img 
              src="/lovable-uploads/48d4d164-3bff-4b69-92eb-bc2968eb582b.png" 
              alt="Thore Network Logo" 
              className="h-12 w-auto mr-3"
            />
            <div className="text-left">
              <h1 className="text-2xl font-bold text-gray-900">{t('welcomeTitle')}</h1>
              <p className="text-sm text-gray-600">{t('welcomeSubtitle')}</p>
            </div>
          </div>
          <Globe className="h-12 w-12 text-blue-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">{t('selectLanguage')}</h2>
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
      </div>
    </div>
  );
};

export default LanguageSelector;
