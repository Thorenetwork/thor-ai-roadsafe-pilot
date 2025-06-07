
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const PoweredByPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Auto hide after 5 seconds
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 z-50 bg-white rounded-lg shadow-2xl border border-gray-200 p-4 max-w-sm animate-in slide-in-from-right">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/48d4d164-3bff-4b69-92eb-bc2968eb582b.png" 
            alt="Thore Network Logo" 
            className="h-8 w-auto"
          />
          <div>
            <h3 className="font-semibold text-gray-900 text-sm">Powered by</h3>
            <p className="text-blue-600 font-bold text-sm">Thore Network PVT LTD</p>
            <p className="text-xs text-gray-500 mt-1">AI Safety Solutions</p>
          </div>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default PoweredByPopup;
