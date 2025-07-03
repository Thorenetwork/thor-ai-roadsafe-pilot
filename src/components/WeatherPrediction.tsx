import React from 'react';
import { Cloud, CloudRain, Sun, Wind, Thermometer, Eye, Droplets, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const WeatherPrediction = () => {
  const { t, language } = useLanguage();

  const currentWeather = {
    temperature: 28,
    condition: 'partly-cloudy',
    humidity: 65,
    windSpeed: 12,
    visibility: 8.5,
    roadCondition: 'good'
  };

  const forecast = [
    { day: 'Today', icon: 'partly-cloudy', high: 28, low: 22, rain: 20, condition: 'Partly Cloudy' },
    { day: 'Tomorrow', icon: 'rain', high: 25, low: 20, rain: 80, condition: 'Heavy Rain' },
    { day: 'Thu', icon: 'rain', high: 23, low: 18, rain: 90, condition: 'Thunderstorm' },
    { day: 'Fri', icon: 'cloudy', high: 26, low: 21, rain: 40, condition: 'Cloudy' },
    { day: 'Sat', icon: 'sunny', high: 30, low: 24, rain: 10, condition: 'Sunny' },
  ];

  const roadSafetyAlerts = [
    {
      type: 'warning',
      message: language === 'en' ? 'Heavy rain expected tomorrow - Increased accident risk' : 'कल भारी बारिश की संभावना - दुर्घटना का खतरा बढ़ा',
      time: 'Tomorrow 6 AM - 2 PM'
    },
    {
      type: 'alert',
      message: language === 'en' ? 'Thunderstorm alert for Thursday - Avoid highway travel' : 'गुरुवार को तूफान की चेतावनी - राजमार्ग यात्रा से बचें',
      time: 'Thursday 10 AM - 6 PM'
    }
  ];

  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case 'sunny':
        return <Sun className="h-8 w-8 text-yellow-500" />;
      case 'partly-cloudy':
        return <Cloud className="h-8 w-8 text-gray-500" />;
      case 'rain':
        return <CloudRain className="h-8 w-8 text-blue-500" />;
      case 'cloudy':
        return <Cloud className="h-8 w-8 text-gray-600" />;
      default:
        return <Sun className="h-8 w-8 text-yellow-500" />;
    }
  };

  const getRoadConditionColor = (condition: string) => {
    switch (condition) {
      case 'good':
        return 'text-green-600 bg-green-50';
      case 'caution':
        return 'text-yellow-600 bg-yellow-50';
      case 'dangerous':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="space-y-6">
      {/* Current Weather */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          {language === 'en' ? 'Current Weather Conditions' : 'वर्तमान मौसम स्थिति'}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex items-center space-x-3">
            {getWeatherIcon(currentWeather.condition)}
            <div>
              <p className="text-2xl font-bold text-gray-900">{currentWeather.temperature}°C</p>
              <p className="text-sm text-gray-600">
                {language === 'en' ? 'Partly Cloudy' : 'आंशिक बादल'}
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Droplets className="h-6 w-6 text-blue-500" />
            <div>
              <p className="text-lg font-semibold text-gray-900">{currentWeather.humidity}%</p>
              <p className="text-sm text-gray-600">
                {language === 'en' ? 'Humidity' : 'नमी'}
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Wind className="h-6 w-6 text-gray-500" />
            <div>
              <p className="text-lg font-semibold text-gray-900">{currentWeather.windSpeed} km/h</p>
              <p className="text-sm text-gray-600">
                {language === 'en' ? 'Wind Speed' : 'हवा की गति'}
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Eye className="h-6 w-6 text-green-500" />
            <div>
              <p className="text-lg font-semibold text-gray-900">{currentWeather.visibility} km</p>
              <p className="text-sm text-gray-600">
                {language === 'en' ? 'Visibility' : 'दृश्यता'}
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">
              {language === 'en' ? 'Road Condition:' : 'सड़क की स्थिति:'}
            </span>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getRoadConditionColor(currentWeather.roadCondition)}`}>
              {language === 'en' ? 'Good' : 'अच्छी'}
            </span>
          </div>
        </div>
      </div>

      {/* 5-Day Forecast */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          {language === 'en' ? '5-Day Weather Forecast' : '5-दिन का मौसम पूर्वानुमान'}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {forecast.map((day, index) => (
            <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
              <p className="font-medium text-gray-900 mb-2">{day.day}</p>
              <div className="flex justify-center mb-2">
                {getWeatherIcon(day.icon)}
              </div>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-gray-900">{day.high}°/{day.low}°</p>
                <p className="text-xs text-blue-600">{day.rain}% rain</p>
                <p className="text-xs text-gray-600">{day.condition}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Road Safety Weather Alerts */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          {language === 'en' ? 'Road Safety Weather Alerts' : 'सड़क सुरक्षा मौसम चेतावनी'}
        </h3>
        
        <div className="space-y-3">
          {roadSafetyAlerts.map((alert, index) => (
            <div key={index} className={`p-4 rounded-lg border-l-4 ${
              alert.type === 'warning' ? 'bg-yellow-50 border-yellow-400' : 'bg-red-50 border-red-400'
            }`}>
              <div className="flex items-start space-x-3">
                <AlertTriangle className={`h-5 w-5 mt-0.5 ${
                  alert.type === 'warning' ? 'text-yellow-600' : 'text-red-600'
                }`} />
                <div className="flex-1">
                  <p className={`font-medium ${
                    alert.type === 'warning' ? 'text-yellow-800' : 'text-red-800'
                  }`}>
                    {alert.message}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">{alert.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Weather Impact on Traffic */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          {language === 'en' ? 'Weather Impact Analysis' : 'मौसम प्रभाव विश्लेषण'}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-green-50 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">
              {language === 'en' ? 'Today' : 'आज'}
            </h4>
            <p className="text-sm text-green-700">
              {language === 'en' ? 'Normal traffic conditions expected' : 'सामान्य यातायात स्थिति अपेक्षित'}
            </p>
          </div>
          
          <div className="p-4 bg-yellow-50 rounded-lg">
            <h4 className="font-semibold text-yellow-800 mb-2">
              {language === 'en' ? 'Tomorrow' : 'कल'}
            </h4>
            <p className="text-sm text-yellow-700">
              {language === 'en' ? '30% slower traffic due to heavy rain' : 'भारी बारिश के कारण 30% धीमा यातायात'}
            </p>
          </div>
          
          <div className="p-4 bg-red-50 rounded-lg">
            <h4 className="font-semibold text-red-800 mb-2">
              {language === 'en' ? 'Thursday' : 'गुरुवार'}
            </h4>
            <p className="text-sm text-red-700">
              {language === 'en' ? 'Severe weather - Major delays expected' : 'गंभीर मौसम - बड़ी देरी की उम्मीद'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherPrediction;