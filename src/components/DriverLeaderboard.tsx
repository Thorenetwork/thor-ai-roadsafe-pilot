import React from 'react';
import { Trophy, Award, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const DriverLeaderboard = () => {
  const { language } = useLanguage();

  const heading = language === 'en' ? 'Driver leaderboard' : 'ड्राइवर लीडरबोर्ड';
  const subheading =
    language === 'en'
      ? 'Top performing Maruti pilots across active simulations'
      : 'सक्रिय सिमुलेशन में शीर्ष प्रदर्शन करने वाले मारुति चालक';

  const columns = {
    name: language === 'en' ? 'Driver' : 'चालक',
    vehicle: language === 'en' ? 'Vehicle' : 'वाहन',
    score: language === 'en' ? 'Score' : 'स्कोर',
    trend: language === 'en' ? 'Trend' : 'रुझान',
    focus: language === 'en' ? 'Focus area' : 'फोकस क्षेत्र',
  } as const;

  const focusTags = {
    smooth: language === 'en' ? 'Smooth braking' : 'स्मूद ब्रेकिंग',
    eco: language === 'en' ? 'Eco discipline' : 'ईको अनुशासन',
    anticipation: language === 'en' ? 'Traffic anticipation' : 'यातायात पूर्वानुमान',
    shift: language === 'en' ? 'Gear shift timing' : 'गियर शिफ्ट टाइमिंग',
    highway: language === 'en' ? 'Highway cruise' : 'हाईवे क्रूज़',
  } as const;

  const drivers = [
    {
      rank: 1,
      name: 'Priya Deshmukh',
      vehicle: language === 'en' ? 'Baleno Petrol' : 'बलेनो पेट्रोल',
      score: '97',
      improvement: '+4.2',
      focus: focusTags.smooth,
      badge: language === 'en' ? 'Champion pilot' : 'चैंपियन चालक',
    },
    {
      rank: 2,
      name: 'Rahul Nair',
      vehicle: language === 'en' ? 'Swift Diesel' : 'स्विफ्ट डीज़ल',
      score: '95',
      improvement: '+3.1',
      focus: focusTags.eco,
      badge: language === 'en' ? 'Eco hero' : 'ईको हीरो',
    },
    {
      rank: 3,
      name: 'Amrita Singh',
      vehicle: language === 'en' ? 'Ertiga CNG' : 'अर्टिगा सीएनजी',
      score: '93',
      improvement: '+2.7',
      focus: focusTags.anticipation,
      badge: language === 'en' ? 'Anticipation ace' : 'पूर्वानुमान विशेषज्ञ',
    },
    {
      rank: 4,
      name: 'Karan Patel',
      vehicle: language === 'en' ? 'Dzire Petrol' : 'डिज़ायर पेट्रोल',
      score: '91',
      improvement: '+2.1',
      focus: focusTags.shift,
    },
    {
      rank: 5,
      name: 'Neha Kulkarni',
      vehicle: language === 'en' ? 'Fronx Turbo' : 'फ्रॉन्क्स टर्बो',
      score: '90',
      improvement: '+1.9',
      focus: focusTags.highway,
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-100">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-100 px-6 py-5">
        <div>
          <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm uppercase tracking-wide">
            <Trophy className="h-4 w-4" />
            {heading}
          </div>
          <p className="text-sm text-slate-500 mt-1">{subheading}</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-600 bg-slate-50 px-4 py-2 rounded-full">
          <TrendingUp className="h-4 w-4 text-emerald-500" />
          {language === 'en' ? 'Average uplift +2.8%' : 'औसत सुधार +२.८%'}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-100">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">#</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                {columns.name}
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                {columns.vehicle}
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                {columns.score}
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                {columns.trend}
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                {columns.focus}
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-100">
            {drivers.map((driver) => (
              <tr key={driver.name} className="hover:bg-slate-50/60 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-slate-500">{driver.rank}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-slate-900">{driver.name}</span>
                    {driver.badge && (
                      <span className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-amber-600">
                        <Award className="h-3 w-3" />
                        {driver.badge}
                      </span>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{driver.vehicle}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-slate-900">{driver.score}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-emerald-600">{driver.improvement}%</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full bg-blue-50 text-blue-600">
                    {driver.focus}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DriverLeaderboard;
