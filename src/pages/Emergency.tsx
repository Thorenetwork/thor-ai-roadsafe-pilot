
import React from 'react';
import Navigation from '../components/Navigation';
import EmergencyResponse from '../components/EmergencyResponse';

const Emergency = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="ml-64 p-8">
        <EmergencyResponse />
      </div>
    </div>
  );
};

export default Emergency;
