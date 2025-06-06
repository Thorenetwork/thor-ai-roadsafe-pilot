
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  AlertTriangle, 
  BarChart3, 
  Settings, 
  Brain,
  Map,
  Activity
} from 'lucide-react';

const Navigation = () => {
  const navItems = [
    { to: '/', icon: Activity, label: 'Dashboard', end: true },
    { to: '/monitoring', icon: Map, label: 'Live Monitoring' },
    { to: '/emergency', icon: AlertTriangle, label: 'Emergency Response' },
    { to: '/analytics', icon: Brain, label: 'AI Analytics' },
    { to: '/reports', icon: BarChart3, label: 'Safety Reports' },
    { to: '/settings', icon: Settings, label: 'Settings' }
  ];

  return (
    <nav className="bg-slate-900 text-white h-screen w-64 fixed left-0 top-0 z-50 shadow-2xl">
      <div className="p-6 border-b border-slate-700">
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/48d4d164-3bff-4b69-92eb-bc2968eb582b.png" 
            alt="Thore Network Logo" 
            className="h-8 w-auto"
          />
          <div>
            <h1 className="text-xl font-bold">Thore Network</h1>
            <p className="text-sm text-slate-400">AI Safety Portal</p>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`
                }
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="absolute bottom-6 left-6 right-6">
        <div className="bg-slate-800 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">System Status</span>
          </div>
          <p className="text-xs text-slate-400">All systems operational</p>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
