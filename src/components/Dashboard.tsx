
import React from 'react';
import { Users, Car, AlertTriangle, Shield, MapPin, Clock } from 'lucide-react';
import MetricCard from './MetricCard';

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">रस्ता सुरक्षा डॅशबोर्ड</h1>
          <p className="text-gray-600 mt-1">AI-आधारित रस्ता सुरक्षा व्यवस्थापन प्रणाली</p>
        </div>
        <div className="flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-lg">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-green-700 font-medium">सर्व सिस्टम चालू</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="एकूण वाहने"
          value="२,८४७"
          change="+१२%"
          icon={Car}
          trend="up"
        />
        <MetricCard
          title="सक्रिय चालक"
          value="१,९२३"
          change="+८%"
          icon={Users}
          trend="up"
        />
        <MetricCard
          title="सुरक्षा सूचना"
          value="१५६"
          change="-२३%"
          icon={AlertTriangle}
          trend="down"
        />
        <MetricCard
          title="सुरक्षा गुण"
          value="९४.२%"
          change="+२.१%"
          icon={Shield}
          trend="up"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <MapPin className="h-5 w-5 text-blue-500 mr-2" />
            हॉटस्पॉट क्षेत्रे
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">मुंबई - पुणे एक्सप्रेसवे</p>
                <p className="text-sm text-gray-600">या आठवड्यात १८ घटना</p>
              </div>
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                उच्च धोका
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">दिल्ली - गुड़गांव हायवे</p>
                <p className="text-sm text-gray-600">या आठवड्यात १२ घटना</p>
              </div>
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                मध्यम धोका
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">बंगळूर आऊटर रिंग रोड</p>
                <p className="text-sm text-gray-600">या आठवड्यात ९ घटना</p>
              </div>
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                मध्यम धोका
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Clock className="h-5 w-5 text-green-500 mr-2" />
            आजची क्रियाकलाप
          </h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm text-gray-900">AI मॉडेलने १२ संभाव्य धोक्यांचा शोध लावला</p>
                <p className="text-xs text-gray-500">५ मिनिटांपूर्वी</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm text-gray-900">मुंबईमध्ये ट्रॅफिक पॅटर्न अपडेट केले</p>
                <p className="text-xs text-gray-500">१५ मिनिटांपूर्वी</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm text-gray-900">पुण्यात हवामान चेतावणी जारी</p>
                <p className="text-xs text-gray-500">१ तासापूर्वी</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm text-gray-900">साप्ताहिक सुरक्षा अहवाल तयार</p>
                <p className="text-xs text-gray-500">२ तासांपूर्वी</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">AI सुरक्षा अंतर्दृष्टी</h3>
        <p className="text-gray-700 mb-4">
          आमच्या AI मॉडेलने या आठवड्यात ९४% अचूकतेसह १२७ संभाव्य अपघातांची भविष्यवाणी केली आणि टाळली.
          मुंबई-पुणे क्षेत्रात संध्याकाळी ६-८ दरम्यान सर्वाधिक धोका दिसून आला.
        </p>
        <div className="flex flex-wrap gap-4">
          <div className="bg-white rounded-lg p-3 border border-blue-200">
            <p className="text-sm text-gray-600">सरासरी प्रतिसाद वेळ</p>
            <p className="text-xl font-bold text-blue-600">३.२ मिनिटे</p>
          </div>
          <div className="bg-white rounded-lg p-3 border border-blue-200">
            <p className="text-sm text-gray-600">टाळलेले अपघात</p>
            <p className="text-xl font-bold text-green-600">१२७</p>
          </div>
          <div className="bg-white rounded-lg p-3 border border-blue-200">
            <p className="text-sm text-gray-600">AI अचूकता</p>
            <p className="text-xl font-bold text-purple-600">९४%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
