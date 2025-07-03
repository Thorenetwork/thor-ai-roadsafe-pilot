import React, { useState } from 'react';
import { Cloud, CloudRain, Sun, Wind, Thermometer, Eye, Droplets, AlertTriangle, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const WeatherPrediction = () => {
  const { t, language } = useLanguage();
  const [selectedCity, setSelectedCity] = useState('mumbai');

  const cities = [
    { value: 'mumbai', label: language === 'en' ? 'Mumbai' : 'मुंबई' },
    { value: 'delhi', label: language === 'en' ? 'Delhi' : 'दिल्ली' },
    { value: 'bangalore', label: language === 'en' ? 'Bangalore' : 'बेंगलुरु' },
    { value: 'chennai', label: language === 'en' ? 'Chennai' : 'चेन्नई' },
    { value: 'kolkata', label: language === 'en' ? 'Kolkata' : 'कोलकाता' },
    { value: 'hyderabad', label: language === 'en' ? 'Hyderabad' : 'हैदराबाद' },
    { value: 'pune', label: language === 'en' ? 'Pune' : 'पुणे' },
    { value: 'ahmedabad', label: language === 'en' ? 'Ahmedabad' : 'अहमदाबाद' },
  ];

  const cityWeatherData: { [key: string]: any } = {
    mumbai: {
      temperature: 28,
      condition: 'partly-cloudy',
      humidity: 85,
      windSpeed: 12,
      visibility: 6.5,
      roadCondition: 'caution',
      forecast: [
        { day: 'Today', icon: 'partly-cloudy', high: 28, low: 22, rain: 40, condition: 'Partly Cloudy' },
        { day: 'Tomorrow', icon: 'rain', high: 26, low: 21, rain: 85, condition: 'Heavy Rain' },
        { day: 'Thu', icon: 'rain', high: 24, low: 20, rain: 90, condition: 'Thunderstorm' },
        { day: 'Fri', icon: 'cloudy', high: 27, low: 22, rain: 60, condition: 'Cloudy' },
        { day: 'Sat', icon: 'partly-cloudy', high: 29, low: 23, rain: 30, condition: 'Partly Cloudy' },
      ]
    },
    delhi: {
      temperature: 35,
      condition: 'sunny',
      humidity: 45,
      windSpeed: 8,
      visibility: 10,
      roadCondition: 'good',
      forecast: [
        { day: 'Today', icon: 'sunny', high: 35, low: 28, rain: 5, condition: 'Sunny' },
        { day: 'Tomorrow', icon: 'sunny', high: 37, low: 29, rain: 10, condition: 'Hot' },
        { day: 'Thu', icon: 'partly-cloudy', high: 34, low: 27, rain: 20, condition: 'Partly Cloudy' },
        { day: 'Fri', icon: 'cloudy', high: 32, low: 25, rain: 40, condition: 'Cloudy' },
        { day: 'Sat', icon: 'rain', high: 30, low: 24, rain: 70, condition: 'Light Rain' },
      ]
    },
    bangalore: {
      temperature: 24,
      condition: 'cloudy',
      humidity: 70,
      windSpeed: 10,
      visibility: 8,
      roadCondition: 'good',
      forecast: [
        { day: 'Today', icon: 'cloudy', high: 24, low: 18, rain: 30, condition: 'Cloudy' },
        { day: 'Tomorrow', icon: 'rain', high: 22, low: 17, rain: 75, condition: 'Rain' },
        { day: 'Thu', icon: 'rain', high: 21, low: 16, rain: 80, condition: 'Heavy Rain' },
        { day: 'Fri', icon: 'partly-cloudy', high: 25, low: 19, rain: 25, condition: 'Partly Cloudy' },
        { day: 'Sat', icon: 'sunny', high: 27, low: 20, rain: 10, condition: 'Sunny' },
      ]
    },
    chennai: {
      temperature: 32,
      condition: 'partly-cloudy',
      humidity: 75,
      windSpeed: 15,
      visibility: 7,
      roadCondition: 'good',
      forecast: [
        { day: 'Today', icon: 'partly-cloudy', high: 32, low: 26, rain: 25, condition: 'Partly Cloudy' },
        { day: 'Tomorrow', icon: 'rain', high: 30, low: 25, rain: 65, condition: 'Rain' },
        { day: 'Thu', icon: 'rain', high: 29, low: 24, rain: 75, condition: 'Heavy Rain' },
        { day: 'Fri', icon: 'cloudy', high: 31, low: 25, rain: 45, condition: 'Cloudy' },
        { day: 'Sat', icon: 'sunny', high: 33, low: 27, rain: 15, condition: 'Sunny' },
      ]
    },
    kolkata: {
      temperature: 30,
      condition: 'rain',
      humidity: 90,
      windSpeed: 18,
      visibility: 5,
      roadCondition: 'dangerous',
      forecast: [
        { day: 'Today', icon: 'rain', high: 30, low: 25, rain: 95, condition: 'Heavy Rain' },
        { day: 'Tomorrow', icon: 'rain', high: 28, low: 23, rain: 90, condition: 'Thunderstorm' },
        { day: 'Thu', icon: 'rain', high: 27, low: 22, rain: 85, condition: 'Rain' },
        { day: 'Fri', icon: 'cloudy', high: 29, low: 24, rain: 50, condition: 'Cloudy' },
        { day: 'Sat', icon: 'partly-cloudy', high: 31, low: 26, rain: 30, condition: 'Partly Cloudy' },
      ]
    },
    hyderabad: {
      temperature: 26,
      condition: 'cloudy',
      humidity: 65,
      windSpeed: 12,
      visibility: 9,
      roadCondition: 'good',
      forecast: [
        { day: 'Today', icon: 'cloudy', high: 26, low: 20, rain: 35, condition: 'Cloudy' },
        { day: 'Tomorrow', icon: 'rain', high: 24, low: 19, rain: 70, condition: 'Rain' },
        { day: 'Thu', icon: 'partly-cloudy', high: 27, low: 21, rain: 20, condition: 'Partly Cloudy' },
        { day: 'Fri', icon: 'sunny', high: 29, low: 22, rain: 10, condition: 'Sunny' },
        { day: 'Sat', icon: 'sunny', high: 31, low: 24, rain: 5, condition: 'Sunny' },
      ]
    },
    pune: {
      temperature: 25,
      condition: 'partly-cloudy',
      humidity: 60,
      windSpeed: 14,
      visibility: 8.5,
      roadCondition: 'good',
      forecast: [
        { day: 'Today', icon: 'partly-cloudy', high: 25, low: 19, rain: 20, condition: 'Partly Cloudy' },
        { day: 'Tomorrow', icon: 'rain', high: 23, low: 18, rain: 60, condition: 'Rain' },
        { day: 'Thu', icon: 'cloudy', high: 24, low: 19, rain: 40, condition: 'Cloudy' },
        { day: 'Fri', icon: 'sunny', high: 27, low: 21, rain: 15, condition: 'Sunny' },
        { day: 'Sat', icon: 'sunny', high: 28, low: 22, rain: 10, condition: 'Sunny' },
      ]
    },
    ahmedabad: {
      temperature: 33,
      condition: 'sunny',
      humidity: 40,
      windSpeed: 6,
      visibility: 12,
      roadCondition: 'good',
      forecast: [
        { day: 'Today', icon: 'sunny', high: 33, low: 27, rain: 5, condition: 'Sunny' },
        { day: 'Tomorrow', icon: 'sunny', high: 35, low: 28, rain: 0, condition: 'Hot' },
        { day: 'Thu', icon: 'partly-cloudy', high: 32, low: 26, rain: 15, condition: 'Partly Cloudy' },
        { day: 'Fri', icon: 'cloudy', high: 30, low: 24, rain: 30, condition: 'Cloudy' },
        { day: 'Sat', icon: 'sunny', high: 34, low: 27, rain: 10, condition: 'Sunny' },
      ]
    }
  };

  const currentWeather = cityWeatherData[selectedCity];
  const forecast = currentWeather.forecast;

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
      {/* City Selector */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <MapPin className="h-6 w-6 text-blue-600" />
            {language === 'en' ? 'Weather Predictions' : 'मौसम पूर्वानुमान'}
          </h2>
          <div className="w-48">
            <Select value={selectedCity} onValueChange={setSelectedCity}>
              <SelectTrigger>
                <SelectValue placeholder={language === 'en' ? 'Select City' : 'शहर चुनें'} />
              </SelectTrigger>
              <SelectContent>
                {cities.map((city) => (
                  <SelectItem key={city.value} value={city.value}>
                    {city.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

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