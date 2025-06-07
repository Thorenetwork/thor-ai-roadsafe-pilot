
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'hi' | 'en';

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
