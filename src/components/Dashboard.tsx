
import React from 'react';
import MetricCard from './MetricCard';
import { 
  Shield, 
  AlertTriangle, 
  Car, 
  Clock, 
  Users,
  Zap,
  MapPin,
  TrendingUp
} from 'lucide-react';

const Dashboard = () => {
  const metrics = [
    {
      title: 'Active Vehicles',
      value: '2,847',
      change: '+12%',
      changeType: 'positive' as const,
      icon: Car,
      description: 'Vehicles currently monitored'
    },
    {
      title: 'Incidents Prevented',
      value: '156',
      change: '+24%',
      changeType: 'positive' as const,
      icon: Shield,
      description: 'AI-prevented incidents today'
    },
    {
      title: 'Response Time',
      value: '2.3min',
      change: '-18%',
      changeType: 'positive' as const,
      icon: Clock,
      description: 'Average emergency response'
    },
    {
      title: 'Active Alerts',
      value: '8',
      change: '-5',
      changeType: 'positive' as const,
      icon: AlertTriangle,
      description: 'Current safety alerts'
    }
  ];

  const recentIncidents = [
    { id: 1, type: 'Near Miss', location: 'Highway A1, Mile 23', time: '2 min ago', severity: 'Medium' },
    { id: 2, type: 'Weather Alert', location: 'Route B7, Mile 15', time: '5 min ago', severity: 'Low' },
    { id: 3, type: 'Traffic Jam', location: 'City Center', time: '8 min ago', severity: 'Medium' },
    { id: 4, type: 'Speed Violation', location: 'Highway A1, Mile 18', time: '12 min ago', severity: 'Low' }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">AI Safety Command Center</h1>
            <p className="text-blue-100">Real-time monitoring and emergency response coordination</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold">99.7%</div>
            <div className="text-blue-200">System Uptime</div>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Incidents */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Recent Incidents</h2>
            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
              Live
            </span>
          </div>
          <div className="space-y-4">
            {recentIncidents.map((incident) => (
              <div key={incident.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div>
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="h-4 w-4 text-orange-500" />
                    <span className="font-medium text-gray-900">{incident.type}</span>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      incident.severity === 'High' ? 'bg-red-100 text-red-800' :
                      incident.severity === 'Medium' ? 'bg-orange-100 text-orange-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {incident.severity}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{incident.location}</p>
                </div>
                <span className="text-sm text-gray-500">{incident.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* AI Analytics Preview */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">AI Performance</h2>
            <TrendingUp className="h-5 w-5 text-green-500" />
          </div>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Prediction Accuracy</span>
                <span className="text-sm font-bold text-green-600">94.2%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '94.2%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Response Efficiency</span>
                <span className="text-sm font-bold text-blue-600">91.8%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '91.8%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Model Performance</span>
                <span className="text-sm font-bold text-purple-600">89.5%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '89.5%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center space-x-3 p-4 bg-red-50 hover:bg-red-100 rounded-lg transition-colors">
            <AlertTriangle className="h-6 w-6 text-red-600" />
            <span className="font-medium text-red-800">Emergency Protocol</span>
          </button>
          <button className="flex items-center space-x-3 p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
            <MapPin className="h-6 w-6 text-blue-600" />
            <span className="font-medium text-blue-800">View Live Map</span>
          </button>
          <button className="flex items-center space-x-3 p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
            <Zap className="h-6 w-6 text-green-600" />
            <span className="font-medium text-green-800">System Diagnostics</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
