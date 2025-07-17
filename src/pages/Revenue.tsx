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
      title: 'Subscription Revenue',
      amount: '₹2,40,000',
      percentage: 45,
      growth: '+12%',
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      title: 'Emergency Services',
      amount: '₹1,80,000',
      percentage: 35,
      growth: '+8%',
      icon: Zap,
      color: 'bg-red-500'
    },
    {
      title: 'Data Analytics',
      amount: '₹80,000',
      percentage: 15,
      growth: '+15%',
      icon: BarChart3,
      color: 'bg-green-500'
    },
    {
      title: 'API Licensing',
      amount: '₹40,000',
      percentage: 5,
      growth: '+20%',
      icon: PieChart,
      color: 'bg-purple-500'
    }
  ];

  const projections = [
    { month: 'Jan 2024', revenue: 320000, target: 300000 },
    { month: 'Feb 2024', revenue: 350000, target: 340000 },
    { month: 'Mar 2024', revenue: 380000, target: 380000 },
    { month: 'Apr 2024', revenue: 420000, target: 420000 },
    { month: 'May 2024', revenue: 450000, target: 460000 },
    { month: 'Jun 2024', revenue: 480000, target: 500000 }
  ];

  const metrics = [
    { label: 'Monthly Recurring Revenue', value: '₹3,20,000', change: '+15%' },
    { label: 'Annual Revenue Run Rate', value: '₹38,40,000', change: '+18%' },
    { label: 'Customer Lifetime Value', value: '₹45,000', change: '+12%' },
    { label: 'Average Revenue Per User', value: '₹1,200', change: '+8%' }
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
              <CardDescription>Revenue vs targets for 2024</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {projections.map((projection, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{projection.month}</span>
                    <span>₹{projection.revenue.toLocaleString()} / ₹{projection.target.toLocaleString()}</span>
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
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Users className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">SaaS Subscriptions</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Monthly/Annual plans for road safety monitoring
                </p>
                <p className="text-lg font-bold text-blue-600 mt-2">₹999-9,999/mo</p>
              </div>
              
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <Zap className="h-8 w-8 text-red-500 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">Emergency Services</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Pay-per-use emergency response coordination
                </p>
                <p className="text-lg font-bold text-red-600 mt-2">₹500-2,000/call</p>
              </div>
              
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <BarChart3 className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">Data Analytics</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Custom reports and analytics solutions
                </p>
                <p className="text-lg font-bold text-green-600 mt-2">₹5,000-50,000</p>
              </div>
              
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <PieChart className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">API Licensing</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Third-party integrations and API access
                </p>
                <p className="text-lg font-bold text-purple-600 mt-2">₹10,000-1,00,000</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Financial Projections */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>12-Month Financial Projections</span>
            </CardTitle>
            <CardDescription>Expected revenue growth and targets</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Q1 2024 Target</h3>
                <p className="text-3xl font-bold">₹12L</p>
                <p className="text-sm opacity-90 mt-1">Jan - Mar 2024</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Q2 2024 Target</h3>
                <p className="text-3xl font-bold">₹15L</p>
                <p className="text-sm opacity-90 mt-1">Apr - Jun 2024</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Annual Target</h3>
                <p className="text-3xl font-bold">₹60L</p>
                <p className="text-sm opacity-90 mt-1">Full Year 2024</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Revenue;