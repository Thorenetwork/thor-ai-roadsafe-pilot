import React, { useState, useEffect } from 'react';
import {
  Users,
  AlertTriangle,
  Gauge,
  Leaf,
  Target,
  Clock,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Satellite,
  Car,
  ScanLine,
  Zap,
  CheckCircle,
} from 'lucide-react';
import MetricCard from './MetricCard';
import DriverLeaderboard from './DriverLeaderboard';
import { useLanguage } from '../contexts/LanguageContext';

const Dashboard = () => {
  const { t, language } = useLanguage();
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 5;

  // Auto-advance pages every 3.5 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 210000); // 3.5 minutes in milliseconds

    return () => clearInterval(interval);
  }, [totalPages]);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{t('dashboard')}</h1>
          <p className="text-gray-600 mt-1">{t('subtitle')}</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-lg">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-700 font-medium">{t('allSystemsOnline')}</span>
          </div>
          
          {/* Pagination Controls */}
          <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm border">
            <button
              onClick={prevPage}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <ChevronLeft className="h-4 w-4 text-gray-600" />
            </button>
            <span className="text-sm text-gray-600">
              {currentPage + 1} / {totalPages}
            </span>
            <button
              onClick={nextPage}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <ChevronRight className="h-4 w-4 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Page 0: Main Dashboard */}
      {currentPage === 0 && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              title={t('safetyScore')}
              value={language === 'en' ? '94.2%' : '९४.२%'}
              change="+2.4%"
              icon={Gauge}
              trend="up"
            />
            <MetricCard
              title={t('totalVehicles')}
              value={language === 'en' ? '1,280' : '१,२८०'}
              change="+15%"
              icon={Users}
              trend="up"
            />
            <MetricCard
              title={t('safetyAlerts')}
              value={language === 'en' ? '48' : '४८'}
              change="-27%"
              icon={AlertTriangle}
              trend="down"
            />
            <MetricCard
              title={language === 'en' ? 'Eco efficiency' : 'ईको दक्षता'}
              value={language === 'en' ? '88%' : '८८%'}
              change="+4%"
              icon={Leaf}
              trend="up"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Target className="h-5 w-5 text-blue-500 mr-2" />
                {language === 'en' ? 'Priority coaching topics' : 'प्राथमिक कोचिंग विषय'}
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: language === 'en' ? 'Speed anticipation' : 'गति पूर्वानुमान',
                    detail:
                      language === 'en'
                        ? 'Baleno urban cycle · braking before zebra crossing'
                        : 'बलेनो शहरी चक्र · ज़ेबरा क्रॉसिंग से पहले ब्रेकिंग',
                    status: language === 'en' ? 'Coach today' : 'आज कोच करें',
                    color: 'bg-blue-100 text-blue-700',
                  },
                  {
                    title: language === 'en' ? 'Corner exit control' : 'कोने से बाहर नियंत्रण',
                    detail:
                      language === 'en'
                        ? 'Swift highway loop · throttle smoothing'
                        : 'स्विफ्ट हाईवे लूप · थ्रॉटल स्मूथिंग',
                    status: language === 'en' ? 'In review' : 'समीक्षा में',
                    color: 'bg-yellow-100 text-yellow-700',
                  },
                  {
                    title: language === 'en' ? 'Idle fuel discipline' : 'इडल ईंधन अनुशासन',
                    detail:
                      language === 'en'
                        ? 'Ertiga depot simulation · auto engine stop usage'
                        : 'अर्टिगा डिपो सिमुलेशन · ऑटो इंजन स्टॉप उपयोग',
                    status: language === 'en' ? 'Scheduled' : 'अनुसूचित',
                    color: 'bg-green-100 text-green-700',
                  },
                ].map((topic) => (
                  <div key={topic.title} className="p-4 border border-slate-100 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-gray-900">{topic.title}</p>
                        <p className="text-sm text-gray-600">{topic.detail}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${topic.color}`}>
                        {topic.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Clock className="h-5 w-5 text-green-500 mr-2" />
                {language === 'en' ? 'Simulation event log' : 'सिमुलेशन इवेंट लॉग'}
              </h3>
              <div className="space-y-4">
                {[
                  {
                    message:
                      language === 'en'
                        ? 'Driver A102 accepted AI lane change recommendation'
                        : 'ड्राइवर A102 ने एआई लेन परिवर्तन अनुशंसा स्वीकार की',
                    time: language === 'en' ? '5 minutes ago' : '५ मिनट पहले',
                    indicator: 'bg-green-500',
                  },
                  {
                    message:
                      language === 'en'
                        ? 'Swift diesel: harsh braking detected · auto tag added'
                        : 'स्विफ्ट डीज़ल: कठोर ब्रेकिंग का पता चला · ऑटो टैग जोड़ा गया',
                    time: language === 'en' ? '18 minutes ago' : '१८ मिनट पहले',
                    indicator: 'bg-blue-500',
                  },
                  {
                    message:
                      language === 'en'
                        ? 'Coaching clip generated for Urban Loop Batch 07'
                        : 'अर्बन लूप बैच ०७ के लिए कोचिंग क्लिप तैयार की गई',
                    time: language === 'en' ? '45 minutes ago' : '४५ मिनट पहले',
                    indicator: 'bg-yellow-500',
                  },
                  {
                    message:
                      language === 'en'
                        ? 'Simulation exported to driver mobile companion app'
                        : 'सिमुलेशन ड्राइवर मोबाइल साथी ऐप पर निर्यात किया गया',
                    time: language === 'en' ? '1 hour ago' : '१ घंटा पहले',
                    indicator: 'bg-purple-500',
                  },
                ].map((entry) => (
                  <div key={entry.message} className="flex items-start space-x-3">
                    <div className={`w-2 h-2 rounded-full mt-2 ${entry.indicator}`}></div>
                    <div>
                      <p className="text-sm text-gray-900">{entry.message}</p>
                      <p className="text-xs text-gray-500">{entry.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {/* Page 1: AI Safety Insights */}
      {currentPage === 1 && (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-indigo-500" />
            {language === 'en' ? 'AI simulation insights' : 'एआई सिमुलेशन अंतर्दृष्टि'}
          </h3>
          <p className="text-gray-700 mb-4">
            {language === 'en'
              ? 'Digital twins of Maruti routes highlight the evening congestion window between 6–8 PM. Updated model suppresses harsh braking by 23% while preserving arrival times.'
              : 'मारुति मार्ग के डिजिटल ट्विन शाम ६–८ बजे की भीड़भाड़ अवधि को दर्शाते हैं। अद्यतन मॉडल आगमन समय बरकरार रखते हुए कठोर ब्रेकिंग को २३% तक घटाता है।'}
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-white rounded-lg p-3 border border-blue-200">
              <p className="text-sm text-gray-600">
                {language === 'en' ? 'Average lap variance' : 'औसत लैप विचलन'}
              </p>
              <p className="text-xl font-bold text-blue-600">
                {language === 'en' ? '±4.2%' : '±४.२%'}
              </p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-blue-200">
              <p className="text-sm text-gray-600">
                {language === 'en' ? 'Coaching clips generated' : 'तैयार कोचिंग क्लिप्स'}
              </p>
              <p className="text-xl font-bold text-green-600">
                {language === 'en' ? '312' : '३१२'}
              </p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-blue-200">
              <p className="text-sm text-gray-600">
                {language === 'en' ? 'Prediction accuracy' : 'भविष्यवाणी सटीकता'}
              </p>
              <p className="text-xl font-bold text-purple-600">
                {language === 'en' ? '96%' : '९६%'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Page 2: Weekly Statistics */}
      {currentPage === 2 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {language === 'en' ? 'Driver score breakdown' : 'ड्राइवर स्कोर विवरण'}
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">
                  {language === 'en' ? 'City cycle mastery' : 'शहरी चक्र दक्षता'}
                </span>
                <span className="font-semibold">
                  {language === 'en' ? '92%' : '९२%'}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">
                  {language === 'en' ? 'Highway smoothness' : 'हाईवे स्मूदनेस'}
                </span>
                <span className="font-semibold">
                  {language === 'en' ? '89%' : '८९%'}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">
                  {language === 'en' ? 'Eco shift adherence' : 'ईको शिफ्ट अनुशासन'}
                </span>
                <span className="font-semibold text-green-600">
                  {language === 'en' ? 'High' : 'उच्च'}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {language === 'en' ? 'Risk signals' : 'जोखिम संकेत'}
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">
                  {language === 'en' ? 'Harsh braking events' : 'कठोर ब्रेकिंग घटनाएं'}
                </span>
                <span className="font-semibold text-yellow-600">
                  {language === 'en' ? '18 (-6)' : '१८ (−६)'}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">
                  {language === 'en' ? 'Speed variance alerts' : 'गति विचलन अलर्ट'}
                </span>
                <span className="font-semibold text-red-600">
                  {language === 'en' ? '12 (-3)' : '१२ (−३)'}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">
                  {language === 'en' ? 'Driver focus flags' : 'ड्राइवर फोकस संकेत'}
                </span>
                <span className="font-semibold text-green-600">
                  {language === 'en' ? '42 (-11)' : '४२ (−११)'}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Page 3: Driver Leaderboard */}
      {currentPage === 3 && (
        <DriverLeaderboard />
      )}

      {/* Page 4: Satellite Toll Collection System */}
      {currentPage === 4 && (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 rounded-2xl p-8 text-white relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white/20 p-3 rounded-xl">
                  <Satellite className="h-8 w-8" />
                </div>
                <div>
                  <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full">
                    {language === 'en' ? '100% IMPLEMENTATION BY 2026' : '२०२६ तक १००% कार्यान्वयन'}
                  </span>
                </div>
              </div>
              
              <h2 className="text-3xl font-bold mb-2">
                {language === 'en' 
                  ? 'Satellite-Based Toll Collection System' 
                  : 'उपग्रह-आधारित टोल संग्रह प्रणाली'}
              </h2>
              <p className="text-lg text-white/90 mb-6 max-w-2xl">
                {language === 'en'
                  ? 'Revolutionary toll-free travel across national highways – no stopping, no queues, complete automation.'
                  : 'राष्ट्रीय राजमार्गों पर क्रांतिकारी टोल-मुक्त यात्रा – कोई रुकावट नहीं, कोई कतार नहीं, पूर्ण स्वचालन।'}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    icon: Satellite,
                    title: language === 'en' ? 'Satellite Tracking' : 'उपग्रह ट्रैकिंग',
                    desc: language === 'en' ? 'GPS-based vehicle monitoring' : 'GPS-आधारित वाहन निगरानी',
                  },
                  {
                    icon: Sparkles,
                    title: language === 'en' ? 'AI Processing' : 'एआई प्रसंस्करण',
                    desc: language === 'en' ? 'Intelligent toll calculation' : 'बुद्धिमान टोल गणना',
                  },
                  {
                    icon: ScanLine,
                    title: language === 'en' ? 'Number Plate Recognition' : 'नंबर प्लेट पहचान',
                    desc: language === 'en' ? 'ANPR technology integration' : 'एएनपीआर तकनीक एकीकरण',
                  },
                  {
                    icon: Zap,
                    title: language === 'en' ? 'FASTag Integration' : 'फास्टैग एकीकरण',
                    desc: language === 'en' ? 'Automatic deduction' : 'स्वचालित कटौती',
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <item.icon className="h-6 w-6 mb-2 text-yellow-300" />
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-sm text-white/80">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-emerald-500" />
                {language === 'en' ? 'Key Benefits' : 'प्रमुख लाभ'}
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: language === 'en' ? 'Elimination of Toll Booths' : 'टोल बूथों का उन्मूलन',
                    desc: language === 'en' 
                      ? 'Complete removal of physical toll plazas across national highways'
                      : 'राष्ट्रीय राजमार्गों पर भौतिक टोल प्लाजा का पूर्ण उन्मूलन',
                  },
                  {
                    title: language === 'en' ? 'Seamless Travel' : 'निर्बाध यात्रा',
                    desc: language === 'en'
                      ? 'Vehicles no longer need to stop or queue at toll plazas'
                      : 'वाहनों को अब टोल प्लाजा पर रुकने या कतार में लगने की जरूरत नहीं',
                  },
                  {
                    title: language === 'en' ? 'Reduced Congestion' : 'भीड़भाड़ में कमी',
                    desc: language === 'en'
                      ? 'Significant reduction in highway traffic bottlenecks'
                      : 'राजमार्ग यातायात बाधाओं में महत्वपूर्ण कमी',
                  },
                  {
                    title: language === 'en' ? 'Automatic Deduction' : 'स्वचालित कटौती',
                    desc: language === 'en'
                      ? 'Toll charges deducted automatically via AI and FASTag'
                      : 'एआई और फास्टैग के माध्यम से टोल शुल्क स्वचालित रूप से कटता है',
                  },
                ].map((benefit) => (
                  <div key={benefit.title} className="flex items-start gap-3 p-3 bg-emerald-50 rounded-lg border border-emerald-100">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2"></div>
                    <div>
                      <p className="font-semibold text-gray-900">{benefit.title}</p>
                      <p className="text-sm text-gray-600">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Car className="h-5 w-5 text-blue-500" />
                {language === 'en' ? 'Implementation Timeline' : 'कार्यान्वयन समयरेखा'}
              </h3>
              <div className="space-y-4">
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-teal-500 to-emerald-500"></div>
                  {[
                    { 
                      phase: language === 'en' ? 'Phase 1' : 'चरण 1', 
                      period: language === 'en' ? 'Q1 2025' : 'Q1 २०२५',
                      desc: language === 'en' ? 'Pilot on select highways' : 'चुनिंदा राजमार्गों पर पायलट',
                      status: 'completed'
                    },
                    { 
                      phase: language === 'en' ? 'Phase 2' : 'चरण 2', 
                      period: language === 'en' ? 'Q3 2025' : 'Q3 २०२५',
                      desc: language === 'en' ? 'Major corridor expansion' : 'प्रमुख गलियारा विस्तार',
                      status: 'in-progress'
                    },
                    { 
                      phase: language === 'en' ? 'Phase 3' : 'चरण 3', 
                      period: language === 'en' ? 'Q1 2026' : 'Q1 २०२६',
                      desc: language === 'en' ? 'Pan-India rollout' : 'पूरे भारत में लागू',
                      status: 'upcoming'
                    },
                    { 
                      phase: language === 'en' ? 'Phase 4' : 'चरण 4', 
                      period: language === 'en' ? 'End of 2026' : '२०२६ के अंत तक',
                      desc: language === 'en' ? '100% Implementation' : '१००% कार्यान्वयन',
                      status: 'upcoming'
                    },
                  ].map((item, index) => (
                    <div key={item.phase} className="relative pl-10 pb-4">
                      <div className={`absolute left-2.5 w-3 h-3 rounded-full border-2 ${
                        item.status === 'completed' ? 'bg-emerald-500 border-emerald-500' :
                        item.status === 'in-progress' ? 'bg-blue-500 border-blue-500 animate-pulse' :
                        'bg-white border-gray-300'
                      }`}></div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-gray-900">{item.phase}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          item.status === 'completed' ? 'bg-emerald-100 text-emerald-700' :
                          item.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                          'bg-gray-100 text-gray-600'
                        }`}>
                          {item.period}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Auto-advance indicator */}
      <div className="flex justify-center">
        <div className="flex space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentPage ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
