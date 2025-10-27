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
} from 'lucide-react';
import MetricCard from './MetricCard';
import DriverLeaderboard from './DriverLeaderboard';
import { useLanguage } from '../contexts/LanguageContext';

const Dashboard = () => {
  const { t, language } = useLanguage();
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 4;

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

      {/* Page 3: Weather Prediction */}
      {currentPage === 3 && (
        <DriverLeaderboard />
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
