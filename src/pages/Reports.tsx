
import React from 'react';
import Navigation from '../components/Navigation';
import { FileText, Download, Calendar, Filter, TrendingUp, AlertTriangle, Shield, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Reports = () => {
  const { t } = useLanguage();

  const reports = [
    { 
      title: 'साप्ताहिक सुरक्षा अहवाल', 
      date: '२० डिसेंबर २०२४', 
      type: 'सुरक्षा', 
      status: 'तयार',
      icon: Shield,
      description: 'या आठवड्यातील सर्व सुरक्षा मेट्रिक्स आणि घटना'
    },
    { 
      title: 'मासिक कार्यप्रदर्शन अहवाल', 
      date: '१५ डिसेंबर २०२४', 
      type: 'कार्यप्रदर्शन', 
      status: 'तयार',
      icon: TrendingUp,
      description: 'वाहन उत्पादकता आणि कार्यक्षमता विश्लेषण'
    },
    { 
      title: 'चालक मूल्यांकन अहवाल', 
      date: '१० डिसेंबर २०२४', 
      type: 'मानव संसाधन', 
      status: 'प्रक्रियेत',
      icon: Users,
      description: 'चालकांची कामगिरी आणि प्रशिक्षण गरजा'
    },
    { 
      title: 'घटना विश्लेषण अहवाल', 
      date: '५ डिसेंबर २०२४', 
      type: 'घटना', 
      status: 'तयार',
      icon: AlertTriangle,
      description: 'अपघात आणि जवळच्या चुकांचे तपशीलवार विश्लेषण'
    }
  ];

  const metrics = [
    { label: 'एकूण अहवाल', value: '१२८', change: '+८%' },
    { label: 'मासिक अहवाल', value: '२४', change: '+५%' },
    { label: 'सुरक्षा स्कोअर', value: '९४.२%', change: '+२.१%' },
    { label: 'अनुपालन दर', value: '९८.५%', change: '+१.३%' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="ml-64 p-8">
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">अहवाल आणि विश्लेषण</h1>
              <p className="text-gray-600 mt-1">तपशीलवार अहवाल आणि डेटा निर्यात</p>
            </div>
            <div className="flex items-center space-x-3">
              <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                <Download className="h-4 w-4" />
                <span>अहवाल डाउनलोड</span>
              </button>
              <button className="flex items-center space-x-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700">
                <Filter className="h-4 w-4" />
                <span>फिल्टर</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{metric.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                    <p className="text-sm text-green-600 font-medium">{metric.change}</p>
                  </div>
                  <FileText className="h-8 w-8 text-blue-500" />
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-lg">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <FileText className="h-5 w-5 text-blue-500 mr-2" />
                अलीकडील अहवाल
              </h3>
            </div>
            <div className="divide-y divide-gray-200">
              {reports.map((report, index) => (
                <div key={index} className="p-6 hover:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <report.icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-medium text-gray-900">{report.title}</h4>
                        <p className="text-sm text-gray-600 mt-1">{report.description}</p>
                        <div className="flex items-center space-x-4 mt-2">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4 text-gray-400" />
                            <span className="text-sm text-gray-500">{report.date}</span>
                          </div>
                          <span className="text-sm text-gray-500">प्रकार: {report.type}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        report.status === 'तयार' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {report.status}
                      </span>
                      <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-800">
                        <Download className="h-4 w-4" />
                        <span className="text-sm">डाउनलोड</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">अहवाल श्रेणी</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">सुरक्षा अहवाल</span>
                  <span className="font-medium text-gray-900">४२</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">कार्यप्रदर्शन अहवाल</span>
                  <span className="font-medium text-gray-900">३८</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">अनुपालन अहवाल</span>
                  <span className="font-medium text-gray-900">२८</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">घटना अहवाल</span>
                  <span className="font-medium text-gray-900">२०</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">कस्टम अहवाल तयार करा</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">अहवाल प्रकार</label>
                  <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                    <option>सुरक्षा विश्लेषण</option>
                    <option>कार्यप्रदर्शन मेट्रिक्स</option>
                    <option>चालक मूल्यांकन</option>
                    <option>घटना अहवाल</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">कालावधी</label>
                  <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                    <option>गेला आठवडा</option>
                    <option>गेला महिना</option>
                    <option>गेली तीन महिने</option>
                    <option>कस्टम रेंज</option>
                  </select>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                  अहवाल तयार करा
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
