
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const HeroSection = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      badge: 'Thore Network Pvt Ltd',
      title: 'Maruti Simulation Driver Scorecard',
      subtitle: 'Digital twin for India’s most trusted fleet',
      description:
        'Design, replay, and optimise Maruti drive cycles in a safe virtual sandbox. Thore Network’s simulation stack calibrates driver scorecards before they ever reach the road.',
      primaryCta: 'Launch Simulation',
      secondaryCta: 'View Driver Scorecard',
      metrics: [
        { label: 'Drivers simulated today', value: '1,280' },
        { label: 'Routes stress-tested', value: '86' },
        { label: 'Safety uplift projected', value: '+18%' },
      ],
      features: [
        {
          title: 'Realistic Maruti drive cycles',
          description: 'Blend city, highway, and depot conditions to capture signature Maruti behaviours.',
        },
        {
          title: 'Driver behaviour scoring',
          description: 'Model acceleration, braking, fatigue, and eco discipline for every journey.',
        },
        {
          title: 'Actionable coaching plans',
          description: 'Share AI-generated scorecards directly with fleet trainers in one click.',
        },
      ],
      snapshotTitle: 'Live driver snapshot',
      snapshotSubtitle: 'Maruti Baleno · Demo Route 12',
      scoreLabel: 'Safety score',
      scoreValue: '94 / 100',
      breakdown: [
        { label: 'Smooth braking', value: '92%' },
        { label: 'Speed discipline', value: '96%' },
        { label: 'Eco efficiency', value: '88%' },
      ],
      eventsTitle: 'Latest simulated events',
      events: [
        'Adaptive cruise engaged at 52 km/h',
        'Eco mode suggestion accepted – Sector 4',
        'Coaching note: anticipate pedestrian crossings',
      ],
    },
    hi: {
      badge: 'थोर नेटवर्क प्रा. लि.',
      title: 'मारुति सिमुलेशन ड्राइवर स्कोरकार्ड',
      subtitle: 'भारत के भरोसेमंद बेड़े का डिजिटल ट्विन',
      description:
        'मारुति ड्राइव साइकिल को सुरक्षित वर्चुअल सैंडबॉक्स में डिज़ाइन करें, दोहराएं और अनुकूलित करें। थोर नेटवर्क का सिमुलेशन स्टैक ड्राइवर स्कोरकार्ड को सड़क पर जाने से पहले ही कैलिब्रेट करता है।',
      primaryCta: 'सिमुलेशन शुरू करें',
      secondaryCta: 'ड्राइवर स्कोरकार्ड देखें',
      metrics: [
        { label: 'आज सिम्युलेटेड चालक', value: '१,२८०' },
        { label: 'परीक्षित मार्ग', value: '८६' },
        { label: 'अनुमानित सुरक्षा सुधार', value: '+१८%' },
      ],
      features: [
        {
          title: 'यथार्थवादी मारुति ड्राइव साइकिल',
          description: 'शहर, हाईवे और डिपो स्थितियों को मिलाकर विशिष्ट मारुति व्यवहार पकड़ें।',
        },
        {
          title: 'ड्राइवर व्यवहार स्कोरिंग',
          description: 'हर यात्रा के लिए त्वरण, ब्रेकिंग, थकान और पर्यावरण अनुशासन का मॉडल बनाएं।',
        },
        {
          title: 'कार्रवाई योग्य कोचिंग योजनाएँ',
          description: 'AI द्वारा तैयार स्कोरकार्ड को केवल एक क्लिक में बेड़े प्रशिक्षकों के साथ साझा करें।',
        },
      ],
      snapshotTitle: 'लाइव ड्राइवर स्नैपशॉट',
      snapshotSubtitle: 'मारुति बलेनो · डेमो मार्ग १२',
      scoreLabel: 'सुरक्षा स्कोर',
      scoreValue: '९४ / १००',
      breakdown: [
        { label: 'स्मूद ब्रेकिंग', value: '९२%' },
        { label: 'स्पीड अनुशासन', value: '९६%' },
        { label: 'ईको दक्षता', value: '८८%' },
      ],
      eventsTitle: 'नवीनतम सिम्युलेटेड घटनाएं',
      events: [
        '५२ किमी/घं पर एडाप्टिव क्रूज़ सक्रिय',
        'ईको मोड सुझाव स्वीकार – सेक्टर ४',
        'कोचिंग नोट: पैदल क्रॉसिंग का पूर्वानुमान लगाएं',
      ],
    },
  } as const;

  const copy = content[language];

  return (
    <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center text-sm font-semibold uppercase tracking-wider bg-white/10 border border-white/20 text-blue-100 px-4 py-1 rounded-full">
                {copy.badge}
              </span>
              <div className="space-y-3">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  {copy.title}
                </h1>
                <p className="text-xl text-blue-100">{copy.subtitle}</p>
                <p className="text-lg text-blue-100/80 leading-relaxed max-w-2xl">
                  {copy.description}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="inline-flex items-center justify-center px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-lg transition-colors">
                  {copy.primaryCta}
                </button>
                <button className="inline-flex items-center justify-center px-6 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors">
                  {copy.secondaryCta}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {copy.metrics.map((metric) => (
                <div key={metric.label} className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <p className="text-sm text-blue-100/80 uppercase tracking-wide">
                    {metric.label}
                  </p>
                  <p className="text-2xl font-semibold mt-2">{metric.value}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {copy.features.map((feature) => (
                <div key={feature.title} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="text-sm text-blue-100/80 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-[420px]">
            <div className="bg-white text-slate-900 rounded-3xl shadow-2xl p-8 space-y-6">
              <div className="space-y-1">
                <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                  {copy.snapshotTitle}
                </p>
                <h2 className="text-xl font-bold">{copy.snapshotSubtitle}</h2>
              </div>

              <div className="bg-slate-900 text-white rounded-2xl p-6">
                <p className="text-sm text-blue-200 uppercase tracking-wide">
                  {copy.scoreLabel}
                </p>
                <div className="flex items-end gap-3 mt-4">
                  <span className="text-5xl font-bold">{copy.scoreValue}</span>
                  <span className="text-sm text-blue-200">{language === 'en' ? 'Target ≥ 90' : 'लक्ष्य ≥ ९०'}</span>
                </div>
                <div className="mt-6 space-y-4">
                  {copy.breakdown.map((item) => (
                    <div key={item.label} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{item.label}</span>
                        <span className="font-semibold">{item.value}</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-500 rounded-full"
                          style={{ width: item.value }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                  {copy.eventsTitle}
                </p>
                <div className="space-y-2">
                  {copy.events.map((event) => (
                    <div key={event} className="flex items-start gap-3 text-sm">
                      <span className="mt-1 h-2 w-2 rounded-full bg-blue-500"></span>
                      <p className="text-slate-600 leading-relaxed">{event}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
