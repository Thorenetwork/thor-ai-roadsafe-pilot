
import React from 'react';
import Navigation from '../components/Navigation';
import LiveMonitoring from '../components/LiveMonitoring';

const Monitoring = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="ml-64 p-8">
        <LiveMonitoring />
      </div>
    </div>
  );
};

export default Monitoring;
