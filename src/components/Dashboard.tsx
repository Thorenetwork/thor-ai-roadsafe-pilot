import React, { useState, useEffect } from 'react';
import { Users, Car, AlertTriangle, Shield, MapPin, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import MetricCard from './MetricCard';
import { useLanguage } from '../contexts/LanguageContext';

const Dashboard = () => {
  const { t, language } = useLanguage();
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 3;

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
              title={t('totalVehicles')}
              value={language === "en" ? "2,847" : "२,८४७"}
              change="+12%"
              icon={Car}
              trend="up"
            />
            <MetricCard
              title={t('activeDrivers')}
              value={language === "en" ? "1,923" : "१,९२३"}
              change="+8%"
              icon={Users}
              trend="up"
            />
            <MetricCard
              title={t('safetyAlerts')}
              value={language === "en" ? "156" : "१५६"}
              change="-23%"
              icon={AlertTriangle}
              trend="down"
            />
            <MetricCard
              title={t('safetyScore')}
              value={language === "en" ? "94.2%" : "९४.२%"}
              change="+2.1%"
              icon={Shield}
              trend="up"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <MapPin className="h-5 w-5 text-blue-500 mr-2" />
                {t('hotspots')}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">
                      {language === "en" ? "Mumbai - Pune Expressway" : "मुंबई - पुणे एक्सप्रेसवे"}
                    </p>
                    <p className="text-sm text-gray-600">
                      {language === "en" ? "18 incidents this week" : "या आठवड्यात १८ घटना"}
                    </p>
                  </div>
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                    {language === "en" ? "High Risk" : "उच्च धोका"}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">
                      {language === "en" ? "Delhi - Gurgaon Highway" : "दिल्ली - गुड़गांव हायवे"}
                    </p>
                    <p className="text-sm text-gray-600">
                      {language === "en" ? "12 incidents this week" : "या आठवड्यात १२ घटना"}
                    </p>
                  </div>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                    {language === "en" ? "Medium Risk" : "मध्यम धोका"}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">
                      {language === "en" ? "Bangalore Outer Ring Road" : "बंगळूर आऊटर रिंग रोड"}
                    </p>
                    <p className="text-sm text-gray-600">
                      {language === "en" ? "9 incidents this week" : "या आठवड्यात ९ घटना"}
                    </p>
                  </div>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    {language === "en" ? "Medium Risk" : "मध्यम धोका"}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Clock className="h-5 w-5 text-green-500 mr-2" />
                {t('activities')}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm text-gray-900">
                      {language === "en" 
                        ? "AI model detected 12 potential hazards" 
                        : "AI मॉडेलने १२ संभाव्य धोक्यांचा शोध लावला"}
                    </p>
                    <p className="text-xs text-gray-500">
                      {language === "en" ? "5 minutes ago" : "५ मिनिटांपूर्वी"}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm text-gray-900">
                      {language === "en"
                        ? "Traffic pattern updated in Mumbai"
                        : "मुंबईमध्ये ट्रॅफिक पॅटर्न अपडेट केले"}
                    </p>
                    <p className="text-xs text-gray-500">
                      {language === "en" ? "15 minutes ago" : "१५ मिनिटांपूर्वी"}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm text-gray-900">
                      {language === "en"
                        ? "Weather alert issued in Pune"
                        : "पुण्यात हवामान चेतावणी जारी"}
                    </p>
                    <p className="text-xs text-gray-500">
                      {language === "en" ? "1 hour ago" : "१ तासापूर्वी"}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm text-gray-900">
                      {language === "en"
                        ? "Weekly safety report prepared"
                        : "साप्ताहिक सुरक्षा अहवाल तयार"}
                    </p>
                    <p className="text-xs text-gray-500">
                      {language === "en" ? "2 hours ago" : "२ तासांपूर्वी"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Page 1: AI Safety Insights */}
      {currentPage === 1 && (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {language === "en"
              ? "AI Safety Insights"
              : "AI सुरक्षा अंतर्दृष्टी"}
          </h3>
          <p className="text-gray-700 mb-4">
            {language === "en"
              ? "Our AI model predicted and averted 127 potential accidents this week with 94% accuracy. Highest risk period observed between 6-8PM in Mumbai-Pune area."
              : "आमच्या AI मॉडेलने या आठवड्यात ९४% अचूकतेसह १२७ संभाव्य अपघातांची भविष्यवाणी केली आणि टाळली. मुंबई-पुणे क्षेत्रात संध्याकाळी ६-८ दरम्यान सर्वाधिक धोका दिसून आला."}
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-white rounded-lg p-3 border border-blue-200">
              <p className="text-sm text-gray-600">
                {language === "en" ? "Average response time" : "सरासरी प्रतिसाद वेळ"}
              </p>
              <p className="text-xl font-bold text-blue-600">
                {language === "en" ? "3.2 Minutes" : "३.२ मिनिटे"}
              </p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-blue-200">
              <p className="text-sm text-gray-600">
                {language === "en" ? "Accidents averted" : "टाळलेले अपघात"}
              </p>
              <p className="text-xl font-bold text-green-600">
                {language === "en" ? "127" : "१२७"}
              </p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-blue-200">
              <p className="text-sm text-gray-600">
                {language === "en" ? "AI accuracy" : "AI अचूकता"}
              </p>
              <p className="text-xl font-bold text-purple-600">
                {language === "en" ? "94%" : "९४%"}
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
              {language === "en" ? "Weekly Performance" : "साप्ताहिक कामगिरी"}
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">
                  {language === "en" ? "Total Distance Covered" : "एकूण अंतर"}
                </span>
                <span className="font-semibold">
                  {language === "en" ? "2.4M km" : "२.४ लाख किमी"}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">
                  {language === "en" ? "Fuel Efficiency" : "इंधन कार्यक्षमता"}
                </span>
                <span className="font-semibold">
                  {language === "en" ? "12.5 kmpl" : "१२.५ किमी/लिटर"}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">
                  {language === "en" ? "Driver Performance" : "चालक कामगिरी"}
                </span>
                <span className="font-semibold text-green-600">
                  {language === "en" ? "Excellent" : "उत्कृष्ट"}
                </span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {language === "en" ? "Safety Metrics" : "सुरक्षा मेट्रिक्स"}
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">
                  {language === "en" ? "Near Miss Events" : "जवळपास चुकणारी घटना"}
                </span>
                <span className="font-semibold text-yellow-600">
                  {language === "en" ? "23" : "२३"}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">
                  {language === "en" ? "Speed Violations" : "वेग उल्लंघन"}
                </span>
                <span className="font-semibold text-red-600">
                  {language === "en" ? "8" : "८"}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">
                  {language === "en" ? "Safe Driving Score" : "सुरक्षित ड्रायव्हिंग स्कोअर"}
                </span>
                <span className="font-semibold text-green-600">
                  {language === "en" ? "94/100" : "९४/१००"}
                </span>
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
