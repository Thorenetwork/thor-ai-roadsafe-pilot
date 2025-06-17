
import React from 'react';
import Navigation from '../components/Navigation';
import Dashboard from '../components/Dashboard';
import HeroSection from '../components/HeroSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="ml-64">
        <HeroSection />
        <div className="p-8">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default Index;
