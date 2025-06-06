
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'hi' | 'en' | 'mr' | 'ta';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    dashboard: 'Road Safety Dashboard',
    subtitle: 'AI-based Road Safety Management System',
    totalVehicles: 'Total Vehicles',
    activeDrivers: 'Active Drivers',
    safetyAlerts: 'Safety Alerts',
    safetyScore: 'Safety Score',
    hotspots: 'Hotspot Areas',
    activities: 'Today\'s Activities',
    liveMonitoring: 'Live Monitoring',
    emergencyResponse: 'Emergency Response',
    analytics: 'AI Analytics',
    reports: 'Safety Reports',
    settings: 'Settings',
    systemStatus: 'System Status',
    allSystemsOnline: 'All systems online',
    chatSupport: 'Chat Support',
    selectLanguage: 'Select Language',
    continue: 'Continue',
    welcomeTitle: 'Welcome to Thore Network',
    welcomeSubtitle: 'AI Safety Portal'
  },
  hi: {
    dashboard: 'सड़क सुरक्षा डैशबोर्ड',
    subtitle: 'AI-आधारित सड़क सुरक्षा प्रबंधन प्रणाली',
    totalVehicles: 'कुल वाहन',
    activeDrivers: 'सक्रिय चालक',
    safetyAlerts: 'सुरक्षा अलर्ट',
    safetyScore: 'सुरक्षा स्कोर',
    hotspots: 'हॉटस्पॉट क्षेत्र',
    activities: 'आज की गतिविधियां',
    liveMonitoring: 'लाइव निगरानी',
    emergencyResponse: 'आपातकालीन प्रतिक्रिया',
    analytics: 'AI विश्लेषण',
    reports: 'सुरक्षा रिपोर्ट',
    settings: 'सेटिंग्स',
    systemStatus: 'सिस्टम स्थिति',
    allSystemsOnline: 'सभी सिस्टम ऑनलाइन',
    chatSupport: 'चैट सहायता',
    selectLanguage: 'भाषा चुनें',
    continue: 'जारी रखें',
    welcomeTitle: 'Thore Network में आपका स्वागत है',
    welcomeSubtitle: 'AI सुरक्षा पोर्टल'
  },
  mr: {
    dashboard: 'रस्ता सुरक्षा डॅशबोर्ड',
    subtitle: 'AI-आधारित रस्ता सुरक्षा व्यवस्थापन प्रणाली',
    totalVehicles: 'एकूण वाहने',
    activeDrivers: 'सक्रिय चालक',
    safetyAlerts: 'सुरक्षा सूचना',
    safetyScore: 'सुरक्षा गुण',
    hotspots: 'हॉटस्पॉट क्षेत्रे',
    activities: 'आजची क्रियाकलाप',
    liveMonitoring: 'थेट निरीक्षण',
    emergencyResponse: 'आपत्कालीन प्रतिसाद',
    analytics: 'AI विश्लेषण',
    reports: 'सुरक्षा अहवाल',
    settings: 'सेटिंग्ज',
    systemStatus: 'सिस्टम स्थिती',
    allSystemsOnline: 'सर्व सिस्टम चालू आहेत',
    chatSupport: 'चॅट सपोर्ट',
    selectLanguage: 'भाषा निवडा',
    continue: 'पुढे चला',
    welcomeTitle: 'Thore Network मध्ये आपले स्वागत',
    welcomeSubtitle: 'AI सुरक्षा पोर्टल'
  },
  ta: {
    dashboard: 'சாலை பாதுகாப்பு டாஷ்போர்டு',
    subtitle: 'AI-அடிப்படையிலான சாலை பாதுகாப்பு மேலாண்மை அமைப்பு',
    totalVehicles: 'மொத்த வாகனங்கள்',
    activeDrivers: 'செயல்படும் ஓட்டுநர்கள்',
    safetyAlerts: 'பாதுகாப்பு எச்சரிக்கைகள்',
    safetyScore: 'பாதுகாப்பு மதிப்பெண்',
    hotspots: 'ஹாட்ஸ்பாட் பகுதிகள்',
    activities: 'இன்றைய செயல்பாடுகள்',
    liveMonitoring: 'நேரடி கண்காணிப்பு',
    emergencyResponse: 'அவசரகால பதில்',
    analytics: 'AI பகுப்பாய்வு',
    reports: 'பாதுகாப்பு அறிக்கைகள்',
    settings: 'அமைப்புகள்',
    systemStatus: 'அமைப்பு நிலை',
    allSystemsOnline: 'அனைத்து அமைப்புகளும் ஆன்லைனில்',
    chatSupport: 'சாட் ஆதரவு',
    selectLanguage: 'மொழியைத் தேர்ந்தெடுக்கவும்',
    continue: 'தொடரவும்',
    welcomeTitle: 'Thore Network இல் உங்களை வரவேற்கிறோம்',
    welcomeSubtitle: 'AI பாதுகாப்பு போர்டல்'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
