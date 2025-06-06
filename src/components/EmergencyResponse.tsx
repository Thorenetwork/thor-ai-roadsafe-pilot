
import React, { useState } from 'react';
import { AlertTriangle, Phone, MapPin, Clock, Users, Radio } from 'lucide-react';

const EmergencyResponse = () => {
  const [selectedIncident, setSelectedIncident] = useState(null);

  const activeIncidents = [
    {
      id: 'INC001',
      type: 'Vehicle Collision',
      severity: 'High',
      location: 'Highway A1, Mile 23',
      time: '5 min ago',
      responders: 3,
      status: 'Active',
      description: 'Multi-vehicle collision reported, emergency services dispatched'
    },
    {
      id: 'INC002',
      type: 'Weather Alert',
      severity: 'Medium',
      location: 'Route B7, Mile 15-20',
      time: '12 min ago',
      responders: 1,
      status: 'Monitoring',
      description: 'Heavy fog conditions affecting visibility'
    },
    {
      id: 'INC003',
      type: 'Medical Emergency',
      severity: 'High',
      location: 'Service Area 12',
      time: '18 min ago',
      responders: 4,
      status: 'Resolved',
      description: 'Medical assistance provided, patient transported'
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'High': return 'bg-red-100 text-red-800 border-red-200';
      case 'Medium': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Low': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-red-500';
      case 'Monitoring': return 'bg-orange-500';
      case 'Resolved': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-6">
      {/* Emergency Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Emergency Response Center</h1>
            <p className="text-red-100">Coordinating rapid response to incidents and emergencies</p>
          </div>
          <div className="text-center">
            <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>Emergency Call</span>
            </button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
          <div className="flex items-center space-x-3">
            <AlertTriangle className="h-8 w-8 text-red-500" />
            <div>
              <p className="text-sm font-medium text-gray-600">Active Incidents</p>
              <p className="text-2xl font-bold text-gray-900">8</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
          <div className="flex items-center space-x-3">
            <Users className="h-8 w-8 text-blue-500" />
            <div>
              <p className="text-sm font-medium text-gray-600">Responders</p>
              <p className="text-2xl font-bold text-gray-900">24</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
          <div className="flex items-center space-x-3">
            <Clock className="h-8 w-8 text-green-500" />
            <div>
              <p className="text-sm font-medium text-gray-600">Avg Response</p>
              <p className="text-2xl font-bold text-gray-900">2.3min</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
          <div className="flex items-center space-x-3">
            <Radio className="h-8 w-8 text-purple-500" />
            <div>
              <p className="text-sm font-medium text-gray-600">Units Available</p>
              <p className="text-2xl font-bold text-gray-900">16</p>
            </div>
          </div>
        </div>
      </div>

      {/* Active Incidents */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Active Incidents</h2>
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
            Create New Incident
          </button>
        </div>

        <div className="space-y-4">
          {activeIncidents.map((incident) => (
            <div 
              key={incident.id}
              className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors cursor-pointer"
              onClick={() => setSelectedIncident(incident)}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${getStatusColor(incident.status)}`}></div>
                  <span className="font-semibold text-gray-900">{incident.id}</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getSeverityColor(incident.severity)}`}>
                    {incident.severity}
                  </span>
                </div>
                <span className="text-sm text-gray-500">{incident.time}</span>
              </div>
              
              <h3 className="font-medium text-gray-900 mb-2">{incident.type}</h3>
              <p className="text-sm text-gray-600 mb-3">{incident.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{incident.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{incident.responders} responders</span>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  incident.status === 'Active' ? 'bg-red-100 text-red-800' :
                  incident.status === 'Monitoring' ? 'bg-orange-100 text-orange-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {incident.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Incident Details Modal */}
      {selectedIncident && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-lg w-full mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">Incident Details</h3>
              <button 
                onClick={() => setSelectedIncident(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-600">Incident ID</label>
                  <p className="text-lg font-semibold">{selectedIncident.id}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Type</label>
                  <p className="text-lg">{selectedIncident.type}</p>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Description</label>
                <p className="text-gray-900">{selectedIncident.description}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Location</label>
                <p className="text-gray-900">{selectedIncident.location}</p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-600">Severity</label>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${getSeverityColor(selectedIncident.severity)}`}>
                    {selectedIncident.severity}
                  </span>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Status</label>
                  <p className="text-gray-900">{selectedIncident.status}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Responders</label>
                  <p className="text-gray-900">{selectedIncident.responders}</p>
                </div>
              </div>
              <div className="flex space-x-3 pt-4">
                <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Update Status
                </button>
                <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
                  Add Responder
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmergencyResponse;
