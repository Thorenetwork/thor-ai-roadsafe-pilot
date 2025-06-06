
import React, { useState } from 'react';
import { MapPin, Eye, AlertCircle, Car, Navigation } from 'lucide-react';

const LiveMonitoring = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const vehicles = [
    { id: 'TN001', location: 'Highway A1, Mile 15', status: 'Normal', speed: '65 mph', driver: 'John Smith' },
    { id: 'TN002', location: 'Route B7, Mile 8', status: 'Alert', speed: '45 mph', driver: 'Sarah Johnson' },
    { id: 'TN003', location: 'City Center', status: 'Normal', speed: '25 mph', driver: 'Mike Wilson' },
    { id: 'TN004', location: 'Highway A1, Mile 22', status: 'Warning', speed: '78 mph', driver: 'Lisa Brown' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Normal': return 'bg-green-100 text-green-800';
      case 'Alert': return 'bg-red-100 text-red-800';
      case 'Warning': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Live Vehicle Monitoring</h1>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-600">Live Updates</span>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-8 mb-6 text-center">
          <MapPin className="h-16 w-16 text-blue-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Interactive Map View</h3>
          <p className="text-gray-600">Real-time vehicle positions and route tracking</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-blue-600">2,847</div>
              <div className="text-sm text-gray-600">Active Vehicles</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-green-600">2,831</div>
              <div className="text-sm text-gray-600">Normal Status</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-orange-600">12</div>
              <div className="text-sm text-gray-600">Warnings</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-red-600">4</div>
              <div className="text-sm text-gray-600">Critical Alerts</div>
            </div>
          </div>
        </div>

        {/* Vehicle List */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">Vehicle Status</h2>
          {vehicles.map((vehicle) => (
            <div 
              key={vehicle.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
              onClick={() => setSelectedVehicle(vehicle)}
            >
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Car className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-gray-900">{vehicle.id}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(vehicle.status)}`}>
                      {vehicle.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{vehicle.driver}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-900">{vehicle.speed}</p>
                <p className="text-sm text-gray-600">{vehicle.location}</p>
              </div>
              <Eye className="h-5 w-5 text-gray-400" />
            </div>
          ))}
        </div>
      </div>

      {/* Vehicle Details Modal */}
      {selectedVehicle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">Vehicle Details</h3>
              <button 
                onClick={() => setSelectedVehicle(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-600">Vehicle ID</label>
                <p className="text-lg font-semibold">{selectedVehicle.id}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Driver</label>
                <p className="text-lg">{selectedVehicle.driver}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Current Speed</label>
                <p className="text-lg">{selectedVehicle.speed}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Location</label>
                <p className="text-lg">{selectedVehicle.location}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Status</label>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedVehicle.status)}`}>
                  {selectedVehicle.status}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveMonitoring;
