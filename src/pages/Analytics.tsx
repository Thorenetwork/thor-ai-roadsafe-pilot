
import React from 'react';
import Navigation from '../components/Navigation';
import { BarChart3, Brain, TrendingUp, AlertTriangle, Car, Users, Target, Activity } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Analytics = () => {
  const { t } = useLanguage();

  const analyticsData = [
    { label: 'एकूण विश्लेषण', value: '२,८४७', icon: BarChart3, color: 'blue' },
    { label: 'AI अचूकता', value: '९४.२%', icon: Brain, color: 'purple' },
    { label: 'सुधारणा दर', value: '+१२%', icon: TrendingUp, color: 'green' },
    { label: 'जोखीम घटना', value: '१५६', icon: AlertTriangle, color: 'red' }
  ];

  const trendData = [
    { month: 'जानेवारी', incidents: 45, predictions: 98, accuracy: 92 },
    { month: 'फेब्रुवारी', incidents: 38, predictions: 89, accuracy: 94 },
    { month: 'मार्च', incidents: 32, predictions: 76, accuracy: 96 },
    { month: 'एप्रिल', incidents: 28, predictions: 65, accuracy: 94 },
    { month: 'मे', incidents: 22, predictions: 54, accuracy: 95 },
    { month: 'जून', incidents: 18, predictions: 43, accuracy: 94 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="ml-64 p-8">
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">AI Analytics</h1>
              <p className="text-gray-600 mt-1">डेटा आधारित अंतर्दृष्टी आणि कार्यप्रदर्शन मेट्रिक्स</p>
            </div>
            <div className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-lg">
              <Brain className="h-4 w-4 text-blue-500" />
              <span className="text-blue-700 font-medium">AI मॉडेल सक्रिय</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {analyticsData.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{item.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{item.value}</p>
                  </div>
                  <item.icon className={`h-8 w-8 text-${item.color}-500`} />
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <TrendingUp className="h-5 w-5 text-green-500 mr-2" />
                मासिक ट्रेंड विश्लेषण
              </h3>
              <div className="space-y-4">
                {trendData.map((month, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{month.month}</p>
                      <div className="flex space-x-4 mt-1">
                        <span className="text-sm text-gray-600">घटना: {month.incidents}</span>
                        <span className="text-sm text-gray-600">भविष्यवाणी: {month.predictions}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-blue-600">{month.accuracy}%</p>
                      <p className="text-xs text-gray-500">अचूकता</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Target className="h-5 w-5 text-purple-500 mr-2" />
                AI मॉडेल कार्यप्रदर्शन
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">अपघात भविष्यवाणी</span>
                    <span className="text-sm font-medium">९४%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '94%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">ट्रॅफिक पॅटर्न विश्लेषण</span>
                    <span className="text-sm font-medium">९१%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '91%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">चालक वर्तन विश्लेषण</span>
                    <span className="text-sm font-medium">८८%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '88%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">हवामान प्रभाव मॉडेल</span>
                    <span className="text-sm font-medium">९६%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-500 h-2 rounded-full" style={{ width: '96%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">उन्नत AI अंतर्दृष्टी</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 border border-purple-200">
                <div className="flex items-center space-x-3">
                  <Car className="h-6 w-6 text-blue-500" />
                  <div>
                    <p className="font-medium text-gray-900">वाहन अनुकूलन</p>
                    <p className="text-sm text-gray-600">मार्ग योजना सुधारणा: +१८%</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-purple-200">
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-green-500" />
                  <div>
                    <p className="font-medium text-gray-900">चालक प्रशिक्षण</p>
                    <p className="text-sm text-gray-600">सुरक्षा स्कोअर सुधारणा: +२३%</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-purple-200">
                <div className="flex items-center space-x-3">
                  <Activity className="h-6 w-6 text-purple-500" />
                  <div>
                    <p className="font-medium text-gray-900">रियल-टाइम अलर्ट</p>
                    <p className="text-sm text-gray-600">प्रतिसाद वेळ: -४५%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
