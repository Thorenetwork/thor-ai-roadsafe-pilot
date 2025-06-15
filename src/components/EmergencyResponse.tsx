import React, { useState } from 'react';
import { Phone, MapPin, Clock, Users, AlertTriangle, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const EmergencyResponse = () => {
  const [selectedIncident, setSelectedIncident] = useState(null);
  const { t, language } = useLanguage();

  const emergencies = [
    {
      id: 'EMG-001',
      type: language === 'en' ? "Road Accident" : "सड़क दुर्घटना",
      location: language === 'en' ? "NH-8, near Gurgaon Millennium City" : "NH-8, गुड़गांव मिलेनियम सिटी जवळ",
      severity: 'critical',
      time: language === 'en' ? "10 minutes ago" : "१० मिनिटांपूर्वी",
      responders: 3,
      status: language === 'en' ? "Active" : "सक्रिय",
      description: language === 'en' ? "Two vehicle collision, 3 people injured" : "दोन गाड्यांची टक्कर, ३ जखमी व्यक्ती",
      coordinates: '28.4595, 77.0266'
    },
    {
      id: 'EMG-002',
      type: language === 'en' ? "Vehicle Breakdown" : "वाहन खराबी",
      location: language === 'en' ? "Mumbai-Pune Expressway, near Lonavala" : "मुंबई-पुणे एक्सप्रेसवे, लोनावळा जवळ",
      severity: 'medium',
      time: language === 'en' ? "25 minutes ago" : "२५ मिनिटांपूर्वी",
      responders: 2,
      status: language === 'en' ? "Under Review" : "तपासणी",
      description: language === 'en' ? "Truck engine dead, traffic jam" : "ट्रक इंजिन बंद, ट्रॅफिक जाम",
      coordinates: '18.7533, 73.4061'
    },
    {
      id: 'EMG-003',
      type: language === 'en' ? "Weather Alert" : "हवामान चेतावणी",
      location: language === 'en' ? "Delhi-Jaipur Highway" : "दिल्ली-जयपूर हायवे",
      severity: 'low',
      time: language === 'en' ? "1 hour ago" : "१ तासापूर्वी",
      responders: 1,
      status: language === 'en' ? "Resolved" : "सोडवले",
      description: language === 'en' ? "Heavy rain, low visibility" : "जोरदार पाऊस, दृश्यता कमी",
      coordinates: '28.0473, 76.9847'
    },
    {
      id: 'EMG-004',
      type: language === 'en' ? "Traffic Jam" : "ट्रॅफिक जाम",
      location: language === 'en' ? "Bangalore Outer Ring Road, Silk Board Junction" : "बंगळूर आऊटर रिंग रोड, सिल्क बोर्ड जंक्शन",
      severity: 'medium',
      time: language === 'en' ? "45 minutes ago" : "४५ मिनिटांपूर्वी",
      responders: 2,
      status: language === 'en' ? "Active" : "सक्रिय",
      description: language === 'en' ? "Major traffic jam, alternate route suggested" : "मोठा ट्रॅफिक जाम, पर्यायी मार्ग सुचवला",
      coordinates: '12.9176, 77.6210'
    }
  ];

  const responseTeams = [
    { name: language === 'en' ? "Delhi Traffic Police" : "दिल्ली ट्रॅफिक पोलीस", contact: '+91-11-2334-5678', status: language === 'en' ? "Available" : "उपलब्ध", location: language === 'en' ? "Delhi" : "दिल्ली" },
    { name: language === 'en' ? "Mumbai Ambulance Service" : "मुंबई रुग्णवाहिका सेवा", contact: '+91-22-2456-7890', status: language === 'en' ? "Deployed" : "तैनात", location: language === 'en' ? "Mumbai" : "मुंबई" },
    { name: language === 'en' ? "Gurgaon Fire Brigade" : "गुड़गांव अग्निशामक दल", contact: '+91-124-234-5678', status: language === 'en' ? "Available" : "उपलब्ध", location: language === 'en' ? "Gurgaon" : "गुड़गांव" },
    { name: language === 'en' ? "Bangalore Highway Patrol" : "बंगळूर हायवे पेट्रोल", contact: '+91-80-2345-6789', status: language === 'en' ? "Active" : "सक्रिय", location: language === 'en' ? "Bangalore" : "बंगळूर" }
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
          <h1 className="text-3xl font-bold text-gray-900">
            {language === "en" ? "Emergency Response" : "आपत्कालीन प्रतिसाद"}
          </h1>
          <p className="text-gray-600 mt-1">
            {language === "en" ? "Rapid response and coordination center" : "त्वरित प्रतिसाद आणि समन्वय केंद्र"}
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-red-50 px-4 py-2 rounded-lg flex items-center space-x-2">
            <AlertTriangle className="h-4 w-4 text-red-500" />
            <span className="text-red-700 font-medium">
              {language === "en" ? "4 Active Emergencies" : "४ सक्रिय आपत्काळ"}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">{language === "en" ? "Total Emergencies" : "एकूण आपत्काळ"}</p>
              <p className="text-2xl font-bold text-gray-900">47</p>
            </div>
            <AlertTriangle className="h-8 w-8 text-red-500" />
          </div>
          <p className="text-xs text-gray-500 mt-2">{language === "en" ? "This month" : "या महिन्यात"}</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">{language === "en" ? "Average Response" : "सरासरी प्रतिसाद"}</p>
              <p className="text-2xl font-bold text-gray-900">4.2 {language === "en" ? "Minutes" : "मिनिटे"}</p>
            </div>
            <Clock className="h-8 w-8 text-blue-500" />
          </div>
          <p className="text-xs text-green-600 mt-2">-12% {language === "en" ? "from last month" : "गेल्या महिन्यापासून"}</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">{language === "en" ? "Active Teams" : "सक्रिय टीम"}</p>
              <p className="text-2xl font-bold text-gray-900">12</p>
            </div>
            <Users className="h-8 w-8 text-green-500" />
          </div>
          <p className="text-xs text-gray-500 mt-2">{language === "en" ? "In 6 cities" : "६ शहरांमध्ये"}</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">{language === "en" ? "Resolution Rate" : "निराकरण दर"}</p>
              <p className="text-2xl font-bold text-gray-900">94%</p>
            </div>
            <CheckCircle className="h-8 w-8 text-purple-500" />
          </div>
          <p className="text-xs text-green-600 mt-2">+3% {language === "en" ? "improvement" : "सुधारणा"}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-lg">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
              {language === "en" ? "Current Emergencies" : "सध्याचे आपत्काळ"}
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
                        {emergency.severity === 'critical' ? (language === "en" ? 'Critical' : 'गंभीर') :
                         emergency.severity === 'medium' ? (language === "en" ? 'Medium' : 'मध्यम') : (language === "en" ? 'Low' : 'कमी')}
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
                        <span className="text-xs text-gray-500">{emergency.responders} {language === "en" ? 'Team' : 'टीम'}</span>
                      </div>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    emergency.status === 'सक्रिय'
                      ? 'bg-red-100 text-red-800'
                      : emergency.status === 'तपासणी'
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
                {language === "en" ? "Response Team" : "प्रतिसाद टीम"}
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
                {language === "en" ? "Incident Details" : "घटना तपशील"}
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600">{language === "en" ? "Incident ID" : "घटना ID"}</p>
                  <p className="font-mono text-sm font-medium">{selectedIncident.id}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{language === "en" ? "Type" : "प्रकार"}</p>
                  <p className="text-sm font-medium">{selectedIncident.type}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{language === "en" ? "Location" : "स्थान"}</p>
                  <p className="text-sm font-medium">{selectedIncident.location}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{language === "en" ? "Details" : "तपशील"}</p>
                  <p className="text-sm">{selectedIncident.description}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{language === "en" ? "Coordinates" : "निर्देशांक"}</p>
                  <p className="text-sm font-mono">{selectedIncident.coordinates}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 border border-red-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{language === "en" ? "Emergency Contact Hotline" : "आपत्कालीन संपर्क हॉटलाइन"}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 border border-red-200 text-center">
            <Phone className="h-6 w-6 text-red-500 mx-auto mb-2" />
            <p className="text-sm text-gray-600">{language === "en" ? "Police" : "पोलीस"}</p>
            <p className="text-xl font-bold text-red-600">100</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-red-200 text-center">
            <Phone className="h-6 w-6 text-red-500 mx-auto mb-2" />
            <p className="text-sm text-gray-600">{language === "en" ? "Ambulance" : "रुग्णवाहिका"}</p>
            <p className="text-xl font-bold text-red-600">108</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-red-200 text-center">
            <Phone className="h-6 w-6 text-red-500 mx-auto mb-2" />
            <p className="text-sm text-gray-600">{language === "en" ? "Fire Brigade" : "अग्निशामक दल"}</p>
            <p className="text-xl font-bold text-red-600">101</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyResponse;
