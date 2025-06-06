
import React from 'react';
import Navigation from '../components/Navigation';
import { Settings as SettingsIcon, User, Bell, Shield, Database, Globe, Smartphone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Settings = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="ml-64 p-8">
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">सेटिंग्ज</h1>
              <p className="text-gray-600 mt-1">सिस्टम कॉन्फिगरेशन आणि प्राधान्ये</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">सेटिंग श्रेणी</h3>
                <nav className="space-y-2">
                  <a href="#" className="flex items-center space-x-3 px-3 py-2 bg-blue-50 text-blue-700 rounded-lg">
                    <User className="h-5 w-5" />
                    <span>खाते सेटिंग्ज</span>
                  </a>
                  <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                    <Bell className="h-5 w-5" />
                    <span>सूचना</span>
                  </a>
                  <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                    <Shield className="h-5 w-5" />
                    <span>सुरक्षा</span>
                  </a>
                  <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                    <Database className="h-5 w-5" />
                    <span>डेटा व्यवस्थापन</span>
                  </a>
                  <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                    <Globe className="h-5 w-5" />
                    <span>भाषा</span>
                  </a>
                  <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                    <Smartphone className="h-5 w-5" />
                    <span>मोबाइल अॅप</span>
                  </a>
                </nav>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">खाते सेटिंग्ज</h3>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">पूर्ण नाव</label>
                      <input type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2" value="अमित शर्मा" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">ईमेल</label>
                      <input type="email" className="w-full border border-gray-300 rounded-lg px-3 py-2" value="amit@example.com" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">फोन नंबर</label>
                      <input type="tel" className="w-full border border-gray-300 rounded-lg px-3 py-2" value="+91 98765 43210" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">पद</label>
                      <input type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2" value="सुरक्षा व्यवस्थापक" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">कंपनी</label>
                    <input type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2" value="Thore Network Safety Solutions" />
                  </div>

                  <div className="border-t pt-6">
                    <h4 className="text-md font-medium text-gray-900 mb-4">सूचना प्राधान्ये</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">सुरक्षा अलर्ट</p>
                          <p className="text-sm text-gray-600">गंभीर सुरक्षा घटनांसाठी तत्काळ सूचना</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">साप्ताहिक अहवाल</p>
                          <p className="text-sm text-gray-600">साप्ताहिक कार्यप्रदर्शन सारांश</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">सिस्टम अपडेट</p>
                          <p className="text-sm text-gray-600">नवीन वैशिष्ट्ये आणि सुधारणांची माहिती</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h4 className="text-md font-medium text-gray-900 mb-4">AI मॉडेल सेटिंग्ज</h4>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">जोखीम संवेदनशीलता</label>
                        <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                          <option>उच्च (अधिक अलर्ट)</option>
                          <option>मध्यम (संतुलित)</option>
                          <option>कमी (कमी अलर्ट)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">अपडेट वारंवारता</label>
                        <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                          <option>रियल-टाइम</option>
                          <option>दर मिनिटाला</option>
                          <option>दर ५ मिनिटांनी</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end space-x-4 pt-6">
                    <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                      रद्द करा
                    </button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                      बदल जतन करा
                    </button>
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

export default Settings;
