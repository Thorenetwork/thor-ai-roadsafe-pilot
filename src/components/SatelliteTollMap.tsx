import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { MapPin, CheckCircle, Clock, Calendar } from 'lucide-react';

interface HighwayRegion {
  id: string;
  name: string;
  nameHi: string;
  phase: number;
  status: 'completed' | 'in-progress' | 'upcoming';
  highways: string[];
  path: string;
  labelX: number;
  labelY: number;
}

const SatelliteTollMap = () => {
  const { language } = useLanguage();
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  const regions: HighwayRegion[] = [
    {
      id: 'north',
      name: 'Northern Corridor',
      nameHi: 'उत्तरी गलियारा',
      phase: 1,
      status: 'completed',
      highways: ['NH-44', 'NH-48', 'NH-9'],
      path: 'M180,80 L220,60 L280,70 L300,100 L280,130 L240,140 L200,120 Z',
      labelX: 230,
      labelY: 100,
    },
    {
      id: 'delhi-ncr',
      name: 'Delhi-NCR Hub',
      nameHi: 'दिल्ली-एनसीआर हब',
      phase: 1,
      status: 'completed',
      highways: ['NH-48', 'NH-24', 'NH-44'],
      path: 'M200,130 L240,130 L250,160 L230,180 L200,170 Z',
      labelX: 220,
      labelY: 155,
    },
    {
      id: 'west',
      name: 'Western Express',
      nameHi: 'पश्चिमी एक्सप्रेस',
      phase: 2,
      status: 'in-progress',
      highways: ['NH-48', 'NH-8', 'Mumbai-Pune'],
      path: 'M100,180 L140,160 L160,200 L150,280 L120,320 L90,280 L85,220 Z',
      labelX: 115,
      labelY: 240,
    },
    {
      id: 'central',
      name: 'Central Region',
      nameHi: 'मध्य क्षेत्र',
      phase: 2,
      status: 'in-progress',
      highways: ['NH-44', 'NH-46', 'NH-30'],
      path: 'M160,180 L230,180 L260,220 L250,280 L200,300 L150,280 L140,220 Z',
      labelX: 195,
      labelY: 235,
    },
    {
      id: 'east',
      name: 'Eastern Corridor',
      nameHi: 'पूर्वी गलियारा',
      phase: 3,
      status: 'upcoming',
      highways: ['NH-27', 'NH-31', 'NH-12'],
      path: 'M280,140 L340,120 L380,160 L360,220 L320,240 L280,220 L260,180 Z',
      labelX: 315,
      labelY: 175,
    },
    {
      id: 'northeast',
      name: 'Northeast Network',
      nameHi: 'पूर्वोत्तर नेटवर्क',
      phase: 4,
      status: 'upcoming',
      highways: ['NH-27', 'NH-37', 'NH-54'],
      path: 'M360,100 L400,90 L430,120 L420,160 L380,160 L350,130 Z',
      labelX: 385,
      labelY: 125,
    },
    {
      id: 'south-west',
      name: 'South-West Zone',
      nameHi: 'दक्षिण-पश्चिम क्षेत्र',
      phase: 3,
      status: 'upcoming',
      highways: ['NH-48', 'NH-66', 'NH-44'],
      path: 'M100,320 L150,300 L180,340 L160,400 L120,420 L80,380 Z',
      labelX: 125,
      labelY: 360,
    },
    {
      id: 'south-east',
      name: 'South-East Zone',
      nameHi: 'दक्षिण-पूर्व क्षेत्र',
      phase: 3,
      status: 'upcoming',
      highways: ['NH-44', 'NH-65', 'NH-16'],
      path: 'M200,300 L280,280 L320,320 L300,380 L240,400 L180,360 Z',
      labelX: 245,
      labelY: 335,
    },
    {
      id: 'deep-south',
      name: 'Deep South',
      nameHi: 'सुदूर दक्षिण',
      phase: 4,
      status: 'upcoming',
      highways: ['NH-44', 'NH-66', 'NH-48'],
      path: 'M140,400 L200,390 L240,420 L220,480 L180,500 L140,480 L130,440 Z',
      labelX: 180,
      labelY: 445,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return { fill: '#10B981', stroke: '#059669', bg: 'bg-emerald-500' };
      case 'in-progress':
        return { fill: '#3B82F6', stroke: '#2563EB', bg: 'bg-blue-500' };
      case 'upcoming':
        return { fill: '#9CA3AF', stroke: '#6B7280', bg: 'bg-gray-400' };
      default:
        return { fill: '#9CA3AF', stroke: '#6B7280', bg: 'bg-gray-400' };
    }
  };

  const phases = [
    { 
      phase: 1, 
      period: language === 'en' ? 'Q1 2025' : 'Q1 २०२५', 
      status: 'completed',
      title: language === 'en' ? 'Phase 1: Pilot Launch' : 'चरण 1: पायलट लॉन्च',
    },
    { 
      phase: 2, 
      period: language === 'en' ? 'Q3 2025' : 'Q3 २०२५', 
      status: 'in-progress',
      title: language === 'en' ? 'Phase 2: Major Corridors' : 'चरण 2: प्रमुख गलियारे',
    },
    { 
      phase: 3, 
      period: language === 'en' ? 'Q1 2026' : 'Q1 २०२६', 
      status: 'upcoming',
      title: language === 'en' ? 'Phase 3: Pan-India Expansion' : 'चरण 3: पूरे भारत में विस्तार',
    },
    { 
      phase: 4, 
      period: language === 'en' ? 'End of 2026' : '२०२६ के अंत तक', 
      status: 'upcoming',
      title: language === 'en' ? 'Phase 4: 100% Coverage' : 'चरण 4: १००% कवरेज',
    },
  ];

  const hoveredRegionData = regions.find(r => r.id === hoveredRegion);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <MapPin className="h-5 w-5 text-emerald-500" />
        {language === 'en' ? 'Phased Rollout Map' : 'चरणबद्ध रोलआउट मानचित्र'}
      </h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map Section */}
        <div className="lg:col-span-2 relative">
          <svg 
            viewBox="0 0 500 550" 
            className="w-full h-auto"
            style={{ maxHeight: '450px' }}
          >
            {/* India outline (simplified) */}
            <path
              d="M180,60 L220,50 L280,55 L320,70 L360,80 L400,75 L440,100 L430,150 L400,180 L380,220 L350,250 L330,290 L320,330 L290,370 L260,400 L230,450 L210,490 L180,510 L150,490 L140,450 L120,420 L100,380 L80,340 L75,280 L80,220 L100,160 L140,100 L160,70 Z"
              fill="#f3f4f6"
              stroke="#d1d5db"
              strokeWidth="2"
            />
            
            {/* Regional paths */}
            {regions.map((region) => {
              const colors = getStatusColor(region.status);
              const isHovered = hoveredRegion === region.id;
              
              return (
                <g key={region.id}>
                  <path
                    d={region.path}
                    fill={colors.fill}
                    fillOpacity={isHovered ? 0.9 : 0.6}
                    stroke={colors.stroke}
                    strokeWidth={isHovered ? 3 : 1.5}
                    className="cursor-pointer transition-all duration-200"
                    onMouseEnter={() => setHoveredRegion(region.id)}
                    onMouseLeave={() => setHoveredRegion(null)}
                  />
                  <text
                    x={region.labelX}
                    y={region.labelY}
                    textAnchor="middle"
                    fontSize="10"
                    fontWeight="bold"
                    fill={isHovered ? '#ffffff' : '#374151'}
                    className="pointer-events-none"
                  >
                    {language === 'en' ? `P${region.phase}` : `च${region.phase}`}
                  </text>
                </g>
              );
            })}
            
            {/* Legend */}
            <g transform="translate(10, 480)">
              <rect x="0" y="0" width="150" height="60" fill="white" rx="4" fillOpacity="0.9" />
              <circle cx="15" cy="15" r="6" fill="#10B981" />
              <text x="28" y="19" fontSize="10" fill="#374151">
                {language === 'en' ? 'Completed' : 'पूर्ण'}
              </text>
              <circle cx="15" cy="35" r="6" fill="#3B82F6" />
              <text x="28" y="39" fontSize="10" fill="#374151">
                {language === 'en' ? 'In Progress' : 'प्रगति में'}
              </text>
              <circle cx="90" cy="15" r="6" fill="#9CA3AF" />
              <text x="103" y="19" fontSize="10" fill="#374151">
                {language === 'en' ? 'Upcoming' : 'आगामी'}
              </text>
            </g>
          </svg>
          
          {/* Hover tooltip */}
          {hoveredRegionData && (
            <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-4 border border-gray-200 min-w-[200px] z-10">
              <h4 className="font-semibold text-gray-900 mb-1">
                {language === 'en' ? hoveredRegionData.name : hoveredRegionData.nameHi}
              </h4>
              <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium mb-2 ${
                hoveredRegionData.status === 'completed' ? 'bg-emerald-100 text-emerald-700' :
                hoveredRegionData.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                'bg-gray-100 text-gray-600'
              }`}>
                {hoveredRegionData.status === 'completed' && <CheckCircle className="h-3 w-3" />}
                {hoveredRegionData.status === 'in-progress' && <Clock className="h-3 w-3" />}
                {hoveredRegionData.status === 'upcoming' && <Calendar className="h-3 w-3" />}
                {language === 'en' 
                  ? `Phase ${hoveredRegionData.phase}` 
                  : `चरण ${hoveredRegionData.phase}`}
              </div>
              <div className="text-xs text-gray-600">
                <p className="font-medium mb-1">{language === 'en' ? 'Highways:' : 'राजमार्ग:'}</p>
                <div className="flex flex-wrap gap-1">
                  {hoveredRegionData.highways.map((hw) => (
                    <span key={hw} className="bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
                      {hw}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Phase Timeline */}
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-900">
            {language === 'en' ? 'Implementation Phases' : 'कार्यान्वयन चरण'}
          </h4>
          {phases.map((phase) => {
            const colors = getStatusColor(phase.status);
            const regionsInPhase = regions.filter(r => r.phase === phase.phase);
            
            return (
              <div 
                key={phase.phase} 
                className={`p-3 rounded-lg border-2 transition-all ${
                  phase.status === 'completed' ? 'border-emerald-200 bg-emerald-50' :
                  phase.status === 'in-progress' ? 'border-blue-200 bg-blue-50' :
                  'border-gray-200 bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-3 h-3 rounded-full ${colors.bg}`}></div>
                  <span className="font-semibold text-sm text-gray-900">{phase.title}</span>
                </div>
                <p className="text-xs text-gray-500 mb-2">{phase.period}</p>
                <div className="flex flex-wrap gap-1">
                  {regionsInPhase.map((region) => (
                    <span 
                      key={region.id}
                      className="text-xs bg-white px-2 py-0.5 rounded border cursor-pointer hover:bg-gray-100"
                      onMouseEnter={() => setHoveredRegion(region.id)}
                      onMouseLeave={() => setHoveredRegion(null)}
                    >
                      {language === 'en' ? region.name : region.nameHi}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
          
          {/* Stats */}
          <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-lg p-4 text-white mt-4">
            <p className="text-sm opacity-90 mb-1">
              {language === 'en' ? 'Total Coverage by 2026' : '२०२६ तक कुल कवरेज'}
            </p>
            <p className="text-3xl font-bold">1,00,000+ km</p>
            <p className="text-xs opacity-80 mt-1">
              {language === 'en' ? 'National Highways' : 'राष्ट्रीय राजमार्ग'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SatelliteTollMap;
