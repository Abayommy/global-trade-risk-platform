import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, ScatterChart, Scatter, AreaChart, Area } from 'recharts';
import { AlertTriangle, Shield, Globe, TrendingUp, Activity, Database, Brain, Eye, MapPin, Clock, Zap, Lock } from 'lucide-react';

export default function GlobalTradeRiskPlatform() {
  const [activeTab, setActiveTab] = useState('overview');
  const [realTimeData, setRealTimeData] = useState([]);
  const [alerts, setAlerts] = useState([]);

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString();
      
      setRealTimeData(prev => {
        const newData = [...prev.slice(-19), {
          time: timeStr,
          riskScore: Math.random() * 100,
          volumeAnomaly: Math.random() * 50 + 25,
          complianceHealth: Math.random() * 30 + 70,
          geopoliticalIndex: Math.random() * 40 + 30
        }];
        return newData;
      });

      // Generate random alerts
      if (Math.random() < 0.1) {
        const alertTypes = ['High Risk Transaction', 'Regulatory Change', 'Geopolitical Event', 'Platform Anomaly'];
        const severities = ['critical', 'high', 'medium', 'low'];
        const regions = ['APAC', 'EMEA', 'Americas', 'Middle East'];
        
        setAlerts(prev => [{
          id: Date.now(),
          type: alertTypes[Math.floor(Math.random() * alertTypes.length)],
          severity: severities[Math.floor(Math.random() * severities.length)],
          region: regions[Math.floor(Math.random() * regions.length)],
          message: `Detected anomaly in cross-border transaction patterns`,
          timestamp: now.toLocaleString()
        }, ...prev.slice(0, 9)]);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Mock data for various visualizations
  const crossBorderRiskData = [
    { country: 'Singapore', riskScore: 15, volume: 2400, compliance: 98 },
    { country: 'UAE', riskScore: 22, volume: 1800, compliance: 94 },
    { country: 'Hong Kong', riskScore: 28, volume: 3200, compliance: 91 },
    { country: 'India', riskScore: 45, volume: 1600, compliance: 85 },
    { country: 'Brazil', riskScore: 52, volume: 900, compliance: 82 },
    { country: 'Turkey', riskScore: 68, volume: 600, compliance: 76 },
    { country: 'Russia', riskScore: 85, volume: 200, compliance: 65 }
  ];

  const regulatoryTimelineData = [
    { date: '2025-01', mifid: 85, basel: 92, gdpr: 98, pci: 94 },
    { date: '2025-02', mifid: 87, basel: 94, gdpr: 97, pci: 95 },
    { date: '2025-03', mifid: 89, basel: 89, gdpr: 99, pci: 93 },
    { date: '2025-04', mifid: 91, basel: 91, gdpr: 98, pci: 96 },
    { date: '2025-05', mifid: 88, basel: 93, gdpr: 97, pci: 97 },
    { date: '2025-06', mifid: 92, basel: 95, gdpr: 99, pci: 98 },
    { date: '2025-07', mifid: 94, basel: 96, gdpr: 98, pci: 99 }
  ];

  const platformIntegrityMetrics = [
    { time: '00:00', apiLatency: 45, errorRate: 0.2, throughput: 1200, security: 99.8 },
    { time: '04:00', apiLatency: 38, errorRate: 0.1, throughput: 800, security: 99.9 },
    { time: '08:00', apiLatency: 52, errorRate: 0.3, throughput: 2100, security: 99.7 },
    { time: '12:00', apiLatency: 48, errorRate: 0.2, throughput: 2800, security: 99.8 },
    { time: '16:00', apiLatency: 55, errorRate: 0.4, throughput: 3200, security: 99.6 },
    { time: '20:00', apiLatency: 42, errorRate: 0.1, throughput: 1800, security: 99.9 }
  ];

  const geopoliticalEvents = [
    { event: 'Trade Agreement Signed', impact: 15, probability: 85, region: 'APAC' },
    { event: 'Sanctions Updated', impact: 75, probability: 60, region: 'EMEA' },
    { event: 'Regulatory Framework Change', impact: 45, probability: 70, region: 'Americas' },
    { event: 'Currency Volatility', impact: 30, probability: 90, region: 'Global' },
    { event: 'Political Transition', impact: 55, probability: 40, region: 'Middle East' }
  ];

  const aiInsights = [
    {
      type: 'Predictive',
      insight: 'ML models predict 23% increase in cross-border payment scrutiny for APAC region',
      confidence: 87,
      timeframe: '7-14 days'
    },
    {
      type: 'Anomaly',
      insight: 'Unusual pattern detected in EUR-USD trade corridors, potential regulatory shift',
      confidence: 74,
      timeframe: 'Immediate'
    },
    {
      type: 'Optimization',
      insight: 'Routing optimization could reduce compliance overhead by 15% in EMEA',
      confidence: 92,
      timeframe: '2-3 weeks'
    },
    {
      type: 'Risk',
      insight: 'Elevated geopolitical tension signals suggest proactive KYC reinforcement needed',
      confidence: 81,
      timeframe: '48 hours'
    }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  const getSeverityColor = (severity) => {
    switch(severity) {
      case 'critical': return 'bg-red-100 border-red-500 text-red-800';
      case 'high': return 'bg-orange-100 border-orange-500 text-orange-800';
      case 'medium': return 'bg-yellow-100 border-yellow-500 text-yellow-800';
      case 'low': return 'bg-blue-100 border-blue-500 text-blue-800';
      default: return 'bg-gray-100 border-gray-500 text-gray-800';
    }
  };

  const MetricCard = ({ title, value, change, icon: Icon, color = 'blue' }) => {
  const colorClasses = {
    blue: {
      border: 'border-blue-500',
      text: 'text-blue-600',
      icon: 'text-blue-500'
    },
    red: {
      border: 'border-red-500',
      text: 'text-red-600',
      icon: 'text-red-500'
    },
    green: {
      border: 'border-green-500',
      text: 'text-green-600',
      icon: 'text-green-500'
    },
    purple: {
      border: 'border-purple-500',
      text: 'text-purple-600',
      icon: 'text-purple-500'
    }
  };

  const classes = colorClasses[color] || colorClasses.blue;

  return (
    <div className={`bg-white p-6 rounded-xl shadow-lg border-l-4 ${classes.border}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className={`text-2xl font-bold ${classes.text}`}>{value}</p>
          {change && (
            <p className={`text-sm ${change > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {change > 0 ? '↗' : '↘'} {Math.abs(change)}%
            </p>
          )}
        </div>
        <Icon className={`h-12 w-12 ${classes.icon}`} />
      </div>
    </div>
  );
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="bg-black/50 backdrop-blur-md border-b border-purple-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Global Trade Risk Intelligence</h1>
                <p className="text-purple-300">AI-Powered Cross-Border Platform Monitoring</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-green-400 flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">Live</span>
              </div>
              <div className="text-white text-sm">
                Last Updated: {new Date().toLocaleTimeString()}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="flex space-x-1 bg-black/30 rounded-lg p-1">
          {[
            { id: 'overview', label: 'Risk Overview', icon: Eye },
            { id: 'cross-border', label: 'Cross-Border Signals', icon: Globe },
            { id: 'integrity', label: 'Platform Integrity', icon: Shield },
            { id: 'regulatory', label: 'Regulatory Intelligence', icon: Database },
            { id: 'ai-insights', label: 'AI Insights', icon: Brain }
          ].map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all ${
                  activeTab === tab.id 
                    ? 'bg-purple-600 text-white shadow-lg' 
                    : 'text-purple-300 hover:bg-purple-800/50'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="text-sm font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <MetricCard
                title="Global Risk Score"
                value="42.3"
                change={-2.1}
                icon={AlertTriangle}
                color="red"
              />
              <MetricCard
                title="Platform Uptime"
                value="99.97%"
                change={0.05}
                icon={Activity}
                color="green"
              />
              <MetricCard
                title="Active Monitors"
                value="2,847"
                change={5.2}
                icon={Eye}
                color="blue"
              />
              <MetricCard
                title="AI Predictions"
                value="156"
                change={12.3}
                icon={Brain}
                color="purple"
              />
            </div>

            {/* Real-time Risk Monitoring */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Zap className="h-5 w-5 mr-2 text-yellow-400" />
                Real-Time Risk Signals
              </h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={realTimeData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="time" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1F2937', 
                        border: '1px solid #6366F1',
                        borderRadius: '8px',
                        color: '#F3F4F6'
                      }} 
                    />
                    <Legend />
                    <Line type="monotone" dataKey="riskScore" stroke="#EF4444" strokeWidth={2} name="Risk Score" />
                    <Line type="monotone" dataKey="complianceHealth" stroke="#10B981" strokeWidth={2} name="Compliance Health" />
                    <Line type="monotone" dataKey="geopoliticalIndex" stroke="#F59E0B" strokeWidth={2} name="Geopolitical Index" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Alerts Panel */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2 text-red-400" />
                Live Alert Stream
              </h3>
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {alerts.length === 0 ? (
                  <p className="text-gray-400 text-center py-8">Monitoring for alerts... System operational</p>
                ) : (
                  alerts.map(alert => (
                    <div key={alert.id} className={`p-4 rounded-lg border-l-4 ${getSeverityColor(alert.severity)}`}>
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="font-semibold">{alert.type}</span>
                            <span className="px-2 py-1 bg-gray-200 rounded text-xs">{alert.region}</span>
                          </div>
                          <p className="text-sm mt-1">{alert.message}</p>
                        </div>
                        <span className="text-xs text-gray-500">{alert.timestamp}</span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'cross-border' && (
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
              <h3 className="text-xl font-bold text-white mb-4">Cross-Border Trade Risk Matrix</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <ScatterChart data={crossBorderRiskData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="volume" stroke="#9CA3AF" name="Volume" />
                    <YAxis dataKey="riskScore" stroke="#9CA3AF" name="Risk Score" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1F2937', 
                        border: '1px solid #6366F1',
                        borderRadius: '8px',
                        color: '#F3F4F6'
                      }}
                      formatter={(value, name) => [value, name]}
                      labelFormatter={(label) => `Country: ${crossBorderRiskData.find(d => d.volume === label)?.country || 'Unknown'}`}
                    />
                    <Scatter dataKey="riskScore" fill="#8884d8" />
                  </ScatterChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
                <h4 className="text-lg font-semibold text-white mb-4">Country Risk Ranking</h4>
                <div className="space-y-3">
                  {crossBorderRiskData.map((country, index) => (
                    <div key={country.country} className="flex items-center justify-between p-3 bg-black/30 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <span className="text-white font-mono text-sm">#{index + 1}</span>
                        <span className="text-white">{country.country}</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className={`px-2 py-1 rounded text-xs ${
                          country.riskScore < 30 ? 'bg-green-500/20 text-green-300' :
                          country.riskScore < 60 ? 'bg-yellow-500/20 text-yellow-300' :
                          'bg-red-500/20 text-red-300'
                        }`}>
                          Risk: {country.riskScore}
                        </span>
                        <span className="text-gray-300 text-sm">{country.compliance}% compliant</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
                <h4 className="text-lg font-semibold text-white mb-4">Trade Volume Distribution</h4>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={crossBorderRiskData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="volume"
                        nameKey="country"
                      >
                        {crossBorderRiskData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1F2937', 
                          border: '1px solid #6366F1',
                          borderRadius: '8px',
                          color: '#F3F4F6'
                        }} 
                      />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'integrity' && (
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
              <h3 className="text-xl font-bold text-white mb-4">Platform Health Monitoring</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={platformIntegrityMetrics}>
                    <defs>
                      <linearGradient id="colorLatency" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorThroughput" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="time" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1F2937', 
                        border: '1px solid #6366F1',
                        borderRadius: '8px',
                        color: '#F3F4F6'
                      }} 
                    />
                    <Area type="monotone" dataKey="apiLatency" stroke="#8884d8" fillOpacity={1} fill="url(#colorLatency)" name="API Latency (ms)" />
                    <Area type="monotone" dataKey="throughput" stroke="#82ca9d" fillOpacity={1} fill="url(#colorThroughput)" name="Throughput (req/s)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Activity className="h-5 w-5 mr-2 text-green-400" />
                  System Status
                </h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">API Gateway</span>
                    <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">Healthy</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Database Cluster</span>
                    <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">Healthy</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">ML Pipeline</span>
                    <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded text-xs">Degraded</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Security Layer</span>
                    <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">Optimal</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Lock className="h-5 w-5 mr-2 text-blue-400" />
                  Security Metrics
                </h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-300">Threat Detection</span>
                      <span className="text-white">99.8%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '99.8%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-300">Encryption Strength</span>
                      <span className="text-white">AES-256</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{width: '100%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-300">Access Control</span>
                      <span className="text-white">Zero Trust</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{width: '97%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-purple-400" />
                  Performance KPIs
                </h4>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">99.97%</div>
                    <div className="text-sm text-gray-300">Uptime SLA</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">42ms</div>
                    <div className="text-sm text-gray-300">Avg Response</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">2.8K</div>
                    <div className="text-sm text-gray-300">Req/sec Peak</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'regulatory' && (
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
              <h3 className="text-xl font-bold text-white mb-4">Regulatory Compliance Timeline</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={regulatoryTimelineData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="date" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1F2937', 
                        border: '1px solid #6366F1',
                        borderRadius: '8px',
                        color: '#F3F4F6'
                      }} 
                    />
                    <Legend />
                    <Line type="monotone" dataKey="mifid" stroke="#8884d8" strokeWidth={2} name="MiFID II Compliance" />
                    <Line type="monotone" dataKey="basel" stroke="#82ca9d" strokeWidth={2} name="Basel III" />
                    <Line type="monotone" dataKey="gdpr" stroke="#ffc658" strokeWidth={2} name="GDPR" />
                    <Line type="monotone" dataKey="pci" stroke="#ff7300" strokeWidth={2} name="PCI DSS" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
                <h4 className="text-lg font-semibold text-white mb-4">Geopolitical Risk Events</h4>
                <div className="space-y-4">
                  {geopoliticalEvents.map((event, index) => (
                    <div key={index} className="p-4 bg-black/30 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-white font-medium">{event.event}</span>
                        <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">
                          {event.region}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-4">
                          <span className="text-sm text-gray-300">
                            Impact: <span className={`font-semibold ${
                              event.impact < 30 ? 'text-green-400' :
                              event.impact < 60 ? 'text-yellow-400' :
                              'text-red-400'
                            }`}>{event.impact}%</span>
                          </span>
                          <span className="text-sm text-gray-300">
                            Probability: <span className="font-semibold text-blue-400">{event.probability}%</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
                <h4 className="text-lg font-semibold text-white mb-4">Compliance Score by Framework</h4>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={[
                      { framework: 'GDPR', score: 98, target: 95 },
                      { framework: 'PCI DSS', score: 99, target: 98 },
                      { framework: 'Basel III', score: 96, target: 92 },
                      { framework: 'MiFID II', score: 94, target: 90 },
                      { framework: 'FATCA', score: 91, target: 88 },
                      { framework: 'AML/KYC', score: 97, target: 95 }
                    ]}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="framework" stroke="#9CA3AF" />
                      <YAxis stroke="#9CA3AF" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1F2937', 
                          border: '1px solid #6366F1',
                          borderRadius: '8px',
                          color: '#F3F4F6'
                        }} 
                      />
                      <Bar dataKey="score" fill="#8884d8" name="Current Score" />
                      <Bar dataKey="target" fill="#82ca9d" name="Target Score" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'ai-insights' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {aiInsights.map((insight, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${
                        insight.type === 'Predictive' ? 'bg-blue-500/20' :
                        insight.type === 'Anomaly' ? 'bg-red-500/20' :
                        insight.type === 'Optimization' ? 'bg-green-500/20' :
                        'bg-yellow-500/20'
                      }`}>
                        <Brain className={`h-5 w-5 ${
                          insight.type === 'Predictive' ? 'text-blue-400' :
                          insight.type === 'Anomaly' ? 'text-red-400' :
                          insight.type === 'Optimization' ? 'text-green-400' :
                          'text-yellow-400'
                        }`} />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">{insight.type} Analysis</h4>
                        <div className="flex items-center space-x-4 mt-1">
                          <span className="text-sm text-gray-300">
                            Confidence: <span className="font-semibold text-blue-400">{insight.confidence}%</span>
                          </span>
                          <span className="text-sm text-gray-300">
                            Timeframe: <span className="font-semibold text-purple-400">{insight.timeframe}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-200 leading-relaxed">{insight.insight}</p>
                  <div className="mt-4">
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          insight.confidence > 80 ? 'bg-green-500' :
                          insight.confidence > 60 ? 'bg-yellow-500' :
                          'bg-red-500'
                        }`}
                        style={{width: `${insight.confidence}%`}}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Brain className="h-5 w-5 mr-2 text-purple-400" />
                ML Model Performance Dashboard
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">94.7%</div>
                  <div className="text-gray-300">Risk Prediction Accuracy</div>
                  <div className="text-sm text-gray-400 mt-1">↗ +1.2% vs last week</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">156ms</div>
                  <div className="text-gray-300">Model Inference Time</div>
                  <div className="text-sm text-gray-400 mt-1">↘ -23ms vs baseline</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">2.3M</div>
                  <div className="text-gray-300">Predictions Today</div>
                  <div className="text-sm text-gray-400 mt-1">Processing live</div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
              <h4 className="text-lg font-semibold text-white mb-4">AI Model Architecture</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 bg-black/30 rounded-lg text-center">
                  <Database className="h-8 w-8 mx-auto mb-2 text-blue-400" />
                  <div className="text-white font-medium">Data Ingestion</div>
                  <div className="text-sm text-gray-400">Real-time ETL</div>
                </div>
                <div className="p-4 bg-black/30 rounded-lg text-center">
                  <Brain className="h-8 w-8 mx-auto mb-2 text-green-400" />
                  <div className="text-white font-medium">Feature Engineering</div>
                  <div className="text-sm text-gray-400">Auto ML Pipeline</div>
                </div>
                <div className="p-4 bg-black/30 rounded-lg text-center">
                  <TrendingUp className="h-8 w-8 mx-auto mb-2 text-purple-400" />
                  <div className="text-white font-medium">Risk Modeling</div>
                  <div className="text-sm text-gray-400">Ensemble Methods</div>
                </div>
                <div className="p-4 bg-black/30 rounded-lg text-center">
                  <AlertTriangle className="h-8 w-8 mx-auto mb-2 text-red-400" />
                  <div className="text-white font-medium">Alert Generation</div>
                  <div className="text-sm text-gray-400">Smart Notifications</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="bg-black/50 backdrop-blur-md border-t border-purple-500/30 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2025 Global Trade Risk Intelligence Platform • Built for Cross-Border Resilience
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Data Sources: 47 Active</span>
              <span>Models: 12 Running</span>
              <span>Coverage: 195 Countries</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
