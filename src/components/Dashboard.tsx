
import React from 'react';
import { Users, Car, AlertTriangle, Shield, MapPin, Clock } from 'lucide-react';
import MetricCard from './MetricCard';

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">सड़क सुरक्षा डैशबोर्ड</h1>
          <p className="text-gray-600 mt-1">AI-based Road Safety Management System</p>
        </div>
        <div className="flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-lg">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-green-700 font-medium">सभी सिस्टम चालू</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="कुल वाहन"
          value="2,847"
          change="+12%"
          icon={Car}
          trend="up"
        />
        <MetricCard
          title="सक्रिय ड्राइवर"
          value="1,923"
          change="+8%"
          icon={Users}
          trend="up"
        />
        <MetricCard
          title="सुरक्षा अलर्ट"
          value="156"
          change="-23%"
          icon={AlertTriangle}
          trend="down"
        />
        <MetricCard
          title="सुरक्षा स्कोर"
          value="94.2%"
          change="+2.1%"
          icon={Shield}
          trend="up"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <MapPin className="h-5 w-5 text-blue-500 mr-2" />
            हॉटस्पॉट क्षेत्र
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">दिल्ली - गुड़गांव एक्सप्रेसवे</p>
                <p className="text-sm text-gray-600">18 घटनाएं इस सप्ताह</p>
              </div>
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                उच्च जोखिम
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">मुंबई-पुणे हाइवे</p>
                <p className="text-sm text-gray-600">12 घटनाएं इस सप्ताह</p>
              </div>
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                मध्यम जोखिम
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">बैंगलोर आउटर रिंग रोड</p>
                <p className="text-sm text-gray-600">9 घटनाएं इस सप्ताह</p>
              </div>
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                मध्यम जोखिम
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Clock className="h-5 w-5 text-green-500 mr-2" />
            आज की गतिविधि
          </h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm text-gray-900">AI मॉडल ने 12 संभावित खतरों का पता लगाया</p>
                <p className="text-xs text-gray-500">5 मिनट पहले</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm text-gray-900">नहीं दिल्ली में ट्रैफिक पैटर्न अपडेट किया गया</p>
                <p className="text-xs text-gray-500">15 मिनट पहले</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm text-gray-900">मुंबई में मौसम चेतावनी जारी</p>
                <p className="text-xs text-gray-500">1 घंटा पहले</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm text-gray-900">साप्ताहिक सुरक्षा रिपोर्ट तैयार</p>
                <p className="text-xs text-gray-500">2 घंटे पहले</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">AI सुरक्षा अंतर्दृष्टि</h3>
        <p className="text-gray-700 mb-4">
          हमारे AI मॉडल ने इस सप्ताह 94% सटीकता के साथ 127 संभावित दुर्घटनाओं की भविष्यवाणी की और रोकी।
          दिल्ली-NCR क्षेत्र में शाम 6-8 बजे के बीच सबसे अधिक जोखिम देखा गया।
        </p>
        <div className="flex flex-wrap gap-4">
          <div className="bg-white rounded-lg p-3 border border-blue-200">
            <p className="text-sm text-gray-600">औसत प्रतिक्रिया समय</p>
            <p className="text-xl font-bold text-blue-600">3.2 मिनट</p>
          </div>
          <div className="bg-white rounded-lg p-3 border border-blue-200">
            <p className="text-sm text-gray-600">रोकी गई दुर्घटनाएं</p>
            <p className="text-xl font-bold text-green-600">127</p>
          </div>
          <div className="bg-white rounded-lg p-3 border border-blue-200">
            <p className="text-sm text-gray-600">AI सटीकता</p>
            <p className="text-xl font-bold text-purple-600">94%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
