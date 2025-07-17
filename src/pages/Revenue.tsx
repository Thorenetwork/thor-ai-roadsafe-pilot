import React from 'react';
import Navigation from '../components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Progress } from '../components/ui/progress';
import { Badge } from '../components/ui/badge';
import { 
  DollarSign, 
  TrendingUp, 
  Target, 
  Calendar,
  BarChart3,
  PieChart,
  Users,
  Zap
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Revenue = () => {
  const { t } = useLanguage();

  const revenueStreams = [
    {
      title: 'State Government Grants',
      amount: '₹1,50,00,000',
      percentage: 50,
      growth: '+25%',
      icon: Target,
      color: 'bg-emerald-500'
    },
    {
      title: 'Corporate Partnerships',
      amount: '₹90,00,000',
      percentage: 30,
      growth: '+18%',
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      title: 'Ride Sharing Apps',
      amount: '₹45,00,000',
      percentage: 15,
      growth: '+22%',
      icon: Zap,
      color: 'bg-orange-500'
    },
    {
      title: 'Data Analytics & API',
      amount: '₹15,00,000',
      percentage: 5,
      growth: '+15%',
      icon: BarChart3,
      color: 'bg-purple-500'
    }
  ];

  const projections = [
    { month: 'Jan 2026', revenue: 2400000, target: 2300000 },
    { month: 'Feb 2026', revenue: 2600000, target: 2500000 },
    { month: 'Mar 2026', revenue: 2800000, target: 2700000 },
    { month: 'Apr 2026', revenue: 3000000, target: 2900000 },
    { month: 'May 2026', revenue: 3200000, target: 3100000 },
    { month: 'Jun 2026', revenue: 3400000, target: 3300000 }
  ];

  const metrics = [
    { label: 'Monthly Recurring Revenue', value: '₹30,00,000', change: '+25%' },
    { label: 'Annual Revenue Run Rate', value: '₹3,60,00,000', change: '+28%' },
    { label: 'Average Contract Value', value: '₹8,50,000', change: '+22%' },
    { label: 'Government Grant Pipeline', value: '₹85,00,000', change: '+35%' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="ml-64 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Revenue Model & Projections</h1>
          <p className="text-gray-600">Track revenue streams and financial projections</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {metric.label}
                </CardTitle>
                <DollarSign className="h-4 w-4 text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                <p className="text-xs text-green-600 font-medium">
                  {metric.change} from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Revenue Streams */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <PieChart className="h-5 w-5" />
                <span>Revenue Streams</span>
              </CardTitle>
              <CardDescription>Breakdown of revenue sources</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {revenueStreams.map((stream, index) => {
                const Icon = stream.icon;
                return (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${stream.color}`}>
                        <Icon className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{stream.title}</p>
                        <p className="text-sm text-gray-500">{stream.percentage}% of total</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">{stream.amount}</p>
                      <Badge variant="outline" className="text-green-600">
                        {stream.growth}
                      </Badge>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Monthly Projections */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5" />
                <span>Monthly Projections</span>
              </CardTitle>
              <CardDescription>Revenue vs targets for 2026</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {projections.map((projection, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{projection.month}</span>
                    <span>₹{(projection.revenue/100000).toFixed(1)}L / ₹{(projection.target/100000).toFixed(1)}L</span>
                  </div>
                  <Progress 
                    value={(projection.revenue / projection.target) * 100} 
                    className="h-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Target Achievement</span>
                    <span>{Math.round((projection.revenue / projection.target) * 100)}%</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Revenue Model Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="h-5 w-5" />
              <span>Revenue Model Overview</span>
            </CardTitle>
            <CardDescription>Business model and pricing strategy</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-emerald-50 rounded-lg border-2 border-emerald-200">
                <Target className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">State Government Grants</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Road safety initiatives & smart city projects
                </p>
                <p className="text-lg font-bold text-emerald-600 mt-2">₹15L-75L/project</p>
                <div className="mt-2 px-2 py-1 bg-emerald-100 rounded text-xs text-emerald-700 font-medium">
                  PRIMARY REVENUE
                </div>
              </div>
              
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Users className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">Corporate Partnerships</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Fleet management & employee safety solutions
                </p>
                <p className="text-lg font-bold text-blue-600 mt-2">₹1.5L-15L/year</p>
              </div>
              
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <Zap className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">Ride Sharing Apps</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Ola, Uber, Rapido safety integration
                </p>
                <p className="text-lg font-bold text-orange-600 mt-2">₹60K-8L/month</p>
              </div>
              
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <BarChart3 className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">Data & API Services</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Real-time data feeds & custom analytics
                </p>
                <p className="text-lg font-bold text-purple-600 mt-2">₹15K-3L/month</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Financial Projections */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>12-Month Financial Projections (2026-27)</span>
            </CardTitle>
            <CardDescription>Expected revenue growth and targets</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Q1 2026 Target</h3>
                <p className="text-3xl font-bold">₹80L</p>
                <p className="text-sm opacity-90 mt-1">Jan - Mar 2026</p>
                <p className="text-xs opacity-75 mt-1">Govt grants pipeline</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Q2 2026 Target</h3>
                <p className="text-3xl font-bold">₹95L</p>
                <p className="text-sm opacity-90 mt-1">Apr - Jun 2026</p>
                <p className="text-xs opacity-75 mt-1">Corporate expansion</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Annual Target</h3>
                <p className="text-3xl font-bold">₹3.6Cr</p>
                <p className="text-sm opacity-90 mt-1">FY 2026-27</p>
                <p className="text-xs opacity-75 mt-1">Multi-state deployment</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Revenue;