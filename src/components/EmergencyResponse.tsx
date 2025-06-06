
import React, { useState } from 'react';
import { Phone, MapPin, Clock, Users, AlertTriangle, CheckCircle } from 'lucide-react';

const EmergencyResponse = () => {
  const [selectedIncident, setSelectedIncident] = useState(null);

  const emergencies = [
    {
      id: 'EMG-001',
      type: 'सड़क दुर्घटना',
      location: 'NH-8, गुड़गांव मिलेनियम सिटी के पास',
      severity: 'critical',
      time: '10 मिनट पहले',
      responders: 3,
      status: 'सक्रिय',
      description: 'दो कारों की टक्कर, 3 घायल व्यक्ति',
      coordinates: '28.4595, 77.0266'
    },
    {
      id: 'EMG-002',
      type: 'वाहन खराबी',
      location: 'मुंबई-पुणे एक्सप्रेसवे, लोनावला के पास',
      severity: 'medium',
      time: '25 मिनट पहले',
      responders: 2,
      status: 'जांच में',
      description: 'ट्रक इंजन फेल, ट्रैफिक जाम',
      coordinates: '18.7533, 73.4061'
    },
    {
      id: 'EMG-003',
      type: 'मौसम चेतावनी',
      location: 'दिल्ली-जयपुर हाइवे',
      severity: 'low',
      time: '1 घंटा पहले',
      responders: 1,
      status: 'हल हो गया',
      description: 'तेज़ बारिश, दृश्यता कम',
      coordinates: '28.0473, 76.9847'
    },
    {
      id: 'EMG-004',
      type: 'ट्रैफिक जाम',
      location: 'बैंगलोर आउटर रिंग रोड, सिल्क बोर्ड जंक्शन',
      severity: 'medium',
      time: '45 मिनट पहले',
      responders: 2,
      status: 'सक्रिय',
      description: 'भारी ट्रैफिक जाम, वैकल्पिक मार्ग सुझाया गया',
      coordinates: '12.9176, 77.6210'
    }
  ];

  const responseTeams = [
    { name: 'दिल्ली ट्रैफिक पुलिस', contact: '+91-11-2334-5678', status: 'उपलब्ध', location: 'दिल्ली' },
    { name: 'मुंबई एम्बुलेंस सेवा', contact: '+91-22-2456-7890', status: 'तैनात', location: 'मुंबई' },
    { name: 'गुड़गांव फायर ब्रिगेड', contact: '+91-124-234-5678', status: 'उपलब्ध', location: 'गुड़गांव' },
    { name: 'बैंगलोर हाइवे पेट्रोल', contact: '+91-80-2345-6789', status: 'सक्रिय', location: 'बैंगलोर' }
  ];

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">आपातकालीन प्रतिक्रिया</h1>
          <p className="text-gray-600 mt-1">त्वरित प्रतिक्रिया और समन्वय केंद्र</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-red-50 px-4 py-2 rounded-lg flex items-center space-x-2">
            <AlertTriangle className="h-4 w-4 text-red-500" />
            <span className="text-red-700 font-medium">4 सक्रिय आपातकाल</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">कुल आपातकाल</p>
              <p className="text-2xl font-bold text-gray-900">47</p>
            </div>
            <AlertTriangle className="h-8 w-8 text-red-500" />
          </div>
          <p className="text-xs text-gray-500 mt-2">इस महीने</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">औसत प्रतिक्रिया</p>
              <p className="text-2xl font-bold text-gray-900">4.2 मिनट</p>
            </div>
            <Clock className="h-8 w-8 text-blue-500" />
          </div>
          <p className="text-xs text-green-600 mt-2">-12% पिछले महीने से</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">सक्रिय टीमें</p>
              <p className="text-2xl font-bold text-gray-900">12</p>
            </div>
            <Users className="h-8 w-8 text-green-500" />
          </div>
          <p className="text-xs text-gray-500 mt-2">6 शहरों में</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">समाधान दर</p>
              <p className="text-2xl font-bold text-gray-900">94%</p>
            </div>
            <CheckCircle className="h-8 w-8 text-purple-500" />
          </div>
          <p className="text-xs text-green-600 mt-2">+3% सुधार</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-lg">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
              वर्तमान आपातकाल
            </h3>
          </div>
          <div className="divide-y divide-gray-200">
            {emergencies.map((emergency) => (
              <div key={emergency.id} className="p-4 hover:bg-gray-50 cursor-pointer"
                   onClick={() => setSelectedIncident(emergency)}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="font-mono text-sm font-medium text-gray-900">
                        {emergency.id}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getSeverityColor(emergency.severity)}`}>
                        {emergency.severity === 'critical' ? 'गंभीर' : 
                         emergency.severity === 'medium' ? 'मध्यम' : 'कम'}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{emergency.type}</p>
                    <p className="text-sm text-gray-600">{emergency.location}</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3 text-gray-400" />
                        <span className="text-xs text-gray-500">{emergency.time}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-3 w-3 text-gray-400" />
                        <span className="text-xs text-gray-500">{emergency.responders} टीमें</span>
                      </div>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    emergency.status === 'सक्रिय' 
                      ? 'bg-red-100 text-red-800' 
                      : emergency.status === 'जांच में'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-green-100 text-green-800'
                  }`}>
                    {emergency.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-lg">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <Phone className="h-5 w-5 text-green-500 mr-2" />
                प्रतिक्रिया टीमें
              </h3>
            </div>
            <div className="divide-y divide-gray-200">
              {responseTeams.map((team, index) => (
                <div key={index} className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{team.name}</p>
                      <p className="text-sm text-gray-600">{team.contact}</p>
                      <p className="text-xs text-gray-500">{team.location}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      team.status === 'उपलब्ध' 
                        ? 'bg-green-100 text-green-800' 
                        : team.status === 'तैनात'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-blue-100 text-blue-800'
                    }`}>
                      {team.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {selectedIncident && (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <MapPin className="h-5 w-5 text-blue-500 mr-2" />
                घटना विवरण
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600">घटना ID</p>
                  <p className="font-mono text-sm font-medium">{selectedIncident.id}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">प्रकार</p>
                  <p className="text-sm font-medium">{selectedIncident.type}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">स्थान</p>
                  <p className="text-sm font-medium">{selectedIncident.location}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">विवरण</p>
                  <p className="text-sm">{selectedIncident.description}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">निर्देशांक</p>
                  <p className="text-sm font-mono">{selectedIncident.coordinates}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 border border-red-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">आपातकालीन संपर्क हॉटलाइन</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 border border-red-200 text-center">
            <Phone className="h-6 w-6 text-red-500 mx-auto mb-2" />
            <p className="text-sm text-gray-600">पुलिस</p>
            <p className="text-xl font-bold text-red-600">100</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-red-200 text-center">
            <Phone className="h-6 w-6 text-red-500 mx-auto mb-2" />
            <p className="text-sm text-gray-600">एम्बुलेंस</p>
            <p className="text-xl font-bold text-red-600">108</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-red-200 text-center">
            <Phone className="h-6 w-6 text-red-500 mx-auto mb-2" />
            <p className="text-sm text-gray-600">फायर ब्रिगेड</p>
            <p className="text-xl font-bold text-red-600">101</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyResponse;
