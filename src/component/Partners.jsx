import { useState, useEffect } from 'react';
import { 
  FaCreditCard, 
  FaChartLine, 
  FaMoneyBillWave,
  FaPiggyBank,
  FaExchangeAlt,
  FaReceipt,
  FaShieldAlt,
  FaLock,
  FaBell
} from 'react-icons/fa';
import { ArrowRight, Shield, TrendingUp, CreditCard, Calendar, Users, CheckCircle, Star, Play } from 'lucide-react';

import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart, 
  Pie, 
  Cell,
  Legend
} from 'recharts';
import NigeriaFlag from "../assets/nigeria.png";
import { 
  Sparkles, 
  WalletCards, 
  Clock,  
  ShieldCheck, 
  Bell,
  ChevronRight,
  ArrowUpRight,
  ArrowDownRight,
  Plus
} from 'lucide-react';

const COLORS = ['#10B981', '#3B82F6', '#F59E0B', '#EF4444', '#8B5CF6'];

const HeroPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('income');
  const [activeView, setActiveView] = useState('week');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Sample data with more realistic values
  const financialData = {
    week: [
      { name: 'Mon', income: 4200, expense: 2800 },
      { name: 'Tue', income: 3900, expense: 3200 },
      { name: 'Wed', income: 4500, expense: 2900 },
      { name: 'Thu', income: 5100, expense: 3100 },
      { name: 'Fri', income: 4800, expense: 3400 },
      { name: 'Sat', income: 3200, expense: 2500 },
      { name: 'Sun', income: 2800, expense: 2200 },
    ],
    month: [
      { name: 'Week 1', income: 18500, expense: 12500 },
      { name: 'Week 2', income: 22000, expense: 15800 },
      { name: 'Week 3', income: 19500, expense: 14200 },
      { name: 'Week 4', income: 21000, expense: 13600 },
    ],
    year: [
      { name: 'Jan', income: 82000, expense: 58000 },
      { name: 'Feb', income: 76000, expense: 52000 },
      { name: 'Mar', income: 89000, expense: 61000 },
      { name: 'Apr', income: 78000, expense: 54000 },
      { name: 'May', income: 92000, expense: 67000 },
      { name: 'Jun', income: 85000, expense: 59000 },
    ]
  };

  const categoryData = [
    { name: 'Shopping', value: 35, icon: '🛍️', trend: 'up' },
    { name: 'Dining', value: 25, icon: '🍽️', trend: 'down' },
    { name: 'Transport', value: 15, icon: '🚕', trend: 'stable' },
    { name: 'Entertainment', value: 15, icon: '🎬', trend: 'up' },
    { name: 'Utilities', value: 10, icon: '💡', trend: 'stable' },
  ];

  const transactions = [
    { id: 1, name: 'Amazon Purchase', amount: 189.99, date: 'Today, 10:45 AM', type: 'expense', category: 'Shopping', icon: '🛍️' },
    { id: 2, name: 'Salary Deposit', amount: 4500.00, date: 'Today, 9:00 AM', type: 'income', category: 'Income', icon: '💰' },
    { id: 3, name: 'Starbucks', amount: 6.75, date: 'Yesterday, 8:30 AM', type: 'expense', category: 'Dining', icon: '☕' },
    { id: 4, name: 'Netflix Subscription', amount: 14.99, date: 'May 28, 3:15 PM', type: 'expense', category: 'Entertainment', icon: '🎬' },
    { id: 5, name: 'Uber Ride', amount: 23.50, date: 'May 27, 7:45 PM', type: 'expense', category: 'Transport', icon: '🚕' },
  ];

  const features = [
    {
      icon: <WalletCards className="w-6 h-6 text-green-500" />,
      title: "Smart Subscriptions",
      description: "Automatically track and manage all your subscriptions in one place",
      highlight: "Save up to 30% on unused services"
    },
    {
      icon: <Clock className="w-6 h-6 text-green-700" />,
      title: "Payment History",
      description: "Detailed records of all transactions with powerful search and filtering",
      highlight: "7-year archive available"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-green-500" />,
      title: "Investment Tracking",
      description: "Monitor all your investments in one dashboard",
      highlight: "Real-time market data"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-yellow-500" />,
      title: "Security Alerts",
      description: "Instant notifications for suspicious activity",
      highlight: "24/7 monitoring"
    }
  ];

  const partners = [
    { name: "Visa", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" },
    { name: "Mastercard", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/2560px-Mastercard-logo.svg.png" },
    { name: "Stripe", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png" },
    { name: "PayPal", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png" },
    { name: "Revolut", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Revolut_logo.svg/2560px-Revolut_logo.svg.png" },
    { name: "Chase", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Chase_Bank_logo_2007.svg/1200px-Chase_Bank_logo_2007.svg.png" }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-green-50 to-white">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-green-100 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] opacity-20"></div>
      <div className="absolute top-20 left-20 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 ">
        {/* Hero content */}
        <div className="text-center">
            {/* Announcement Badge */}
            <div className={`inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-100 to-green-100 text-green-700 text-sm font-semibold mb-8 border border-green-200 shadow-lg transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-ping"></div>
              🚀 New: AI-Powered Financial Planning Now Live!
            </div>

            {/* Main Headline */}
            <h1 className={`text-5xl md:text-5xl lg:text-6xl font-bold mb-2 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <span className="bg-gradient-to-r from-slate-900 via-green-900 to-slate-900 bg-clip-text text-transparent">
                Master Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-600 via-green-600 to-green-600 bg-clip-text text-transparent animate-pulse">
                Financial Future
              </span>
            </h1>

            {/* Subtitle */}
            <p className={`text-xl md:text-2xl text-slate-600 mb-6 max-w-4xl mx-auto leading-relaxed transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              The all-in-one fintech platform that helps you manage payments, track subscriptions, 
              analyze spending, maintain account history, and plan for different life opportunities 
              with <span className="font-bold text-green-600">trusted banking partners</span>.
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-8 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <button className="group bg-gradient-to-r from-green-600 to-green-800 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-green-500/25 transform hover:-translate-y-1 transition-all duration-300 flex items-center">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="group flex items-center px-8 py-4 rounded-full font-semibold text-lg text-slate-700 hover:text-green-600 transition-colors duration-300">
                <div className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <Play className="w-5 h-5 text-green-600 ml-1" />
                </div>
                Watch Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className={`flex flex-wrap justify-center items-center gap-8 mb-10 transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="flex items-center text-slate-600">
                <Shield className="w-6 h-6 text-green-500 mr-2" />
                <span className="font-medium">Bank-Grade Security</span>
              </div>
              <div className="flex items-center text-slate-600">
                <Users className="w-6 h-6 text-green-500 mr-2" />
                <span className="font-medium">500K+ Active Users</span>
              </div>
              <div className="flex items-center text-slate-600">
                <Star className="w-6 h-6 text-yellow-500 mr-2" />
                <span className="font-medium">4.9/5 App Store Rating</span>
              </div>
            </div>
          </div>

        <div className="text-center">

          
          {/* App dashboard preview */}
          <div className={`relative mx-auto max-w-7xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-green-700/10"></div>
            <div className="relative p-1">
              {/* Browser chrome */}
              <div className="bg-gray-800 rounded-t-2xl h-10 flex items-center px-4 justify-between">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs text-gray-400">app.finsight.com/dashboard</div>
                <div className="w-6"></div>
              </div>
              
              {/* Dashboard content */}
              <div className="bg-white p-6 rounded-b-2xl">
                <div className="grid lg:grid-cols-12 gap-6">
                  {/* Left Sidebar - Accounts Summary */}
                  <div className="lg:col-span-3 space-y-6">
                    {/* User Profile Card */}
                    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-100 to-green-100 flex items-center justify-center">
                          <span className="text-xl">👤</span>
                        </div>
                        <div>
                          <h3 className="text-gray-900 font-semibold">Alex Johnson</h3>
                          <p className="text-gray-500 text-sm">Premium Member</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-500 text-sm">Total Balance</span>
                          <span className="text-gray-900 font-medium">$48,201.15</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-500 text-sm">This Month</span>
                          <span className="text-green-500 font-medium">+$2,450.00</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-500 text-sm">Savings</span>
                          <span className="text-gray-900 font-medium">$12,800.00</span>
                        </div>
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                      <h3 className="text-gray-900 font-semibold mb-4 flex items-center gap-2">
                        <FaExchangeAlt className="text-green-500" /> Quick Actions
                      </h3>
                      <div className="grid grid-cols-2 gap-3">
                        <button className="flex flex-col items-center justify-center p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors border border-green-100">
                          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-2">
                            <FaMoneyBillWave className="text-green-500" />
                          </div>
                          <span className="text-gray-700 text-sm">Transfer</span>
                        </button>
                        <button className="flex flex-col items-center justify-center p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors border border-green-100">
                          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-2">
                            <FaReceipt className="text-green-700" />
                          </div>
                          <span className="text-gray-700 text-sm">Pay Bills</span>
                        </button>
                        <button className="flex flex-col items-center justify-center p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors border border-green-100">
                          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-2">
                            <FaPiggyBank className="text-green-500" />
                          </div>
                          <span className="text-gray-700 text-sm">Savings</span>
                        </button>
                        <button className="flex flex-col items-center justify-center p-3 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors border border-yellow-100">
                          <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mb-2">
                            <FaCreditCard className="text-yellow-500" />
                          </div>
                          <span className="text-gray-700 text-sm">Cards</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Main Content Area */}
                  <div className="lg:col-span-6 space-y-6">
                    {/* Financial Analytics */}
                    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                      <div className="flex justify-between items-center mb-6">
                        <h2 className="text-gray-900 font-semibold flex items-center gap-2">
                          <FaChartLine className="text-green-500" /> Financial Overview
                        </h2>
                        <div className="flex items-center gap-2">
                          <div className="flex bg-gray-100 rounded-full p-1">
                            <button 
                              className={`px-3 py-1 text-xs rounded-full ${activeView === 'week' ? 'bg-green-500 text-white' : 'text-gray-600'}`}
                              onClick={() => setActiveView('week')}
                            >
                              Week
                            </button>
                            <button 
                              className={`px-3 py-1 text-xs rounded-full ${activeView === 'month' ? 'bg-green-500 text-white' : 'text-gray-600'}`}
                              onClick={() => setActiveView('month')}
                            >
                              Month
                            </button>
                            <button 
                              className={`px-3 py-1 text-xs rounded-full ${activeView === 'year' ? 'bg-green-500 text-white' : 'text-gray-600'}`}
                              onClick={() => setActiveView('year')}
                            >
                              Year
                            </button>
                          </div>
                          <div className="flex bg-gray-100 rounded-full p-1">
                            <button 
                              className={`px-3 py-1 text-xs rounded-full ${activeTab === 'income' ? 'bg-green-500 text-white' : 'text-gray-600'}`}
                              onClick={() => setActiveTab('income')}
                            >
                              Income
                            </button>
                            <button 
                              className={`px-3 py-1 text-xs rounded-full ${activeTab === 'expense' ? 'bg-red-500 text-white' : 'text-gray-600'}`}
                              onClick={() => setActiveTab('expense')}
                            >
                              Expense
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart
                            data={financialData[activeView]}
                            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                          >
                            <defs>
                              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={activeTab === 'income' ? "#10b981" : "#EF4444"} stopOpacity={0.8}/>
                                <stop offset="95%" stopColor={activeTab === 'income' ? "#10b981" : "#EF4444"} stopOpacity={0}/>
                              </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
                            <XAxis 
                              dataKey="name" 
                              axisLine={false} 
                              tickLine={false} 
                              tick={{ fill: '#6B7280' }}
                            />
                            <YAxis 
                              axisLine={false} 
                              tickLine={false} 
                              tick={{ fill: '#6B7280' }}
                              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                            />
                            <Tooltip 
                              contentStyle={{
                                backgroundColor: '#1F2937',
                                borderColor: '#374151',
                                borderRadius: '0.5rem',
                                color: '#FFF'
                              }}
                              formatter={(value) => [`$${value.toLocaleString()}`, activeTab === 'income' ? 'Income' : 'Expense']}
                            />
                            <Area 
                              type="monotone" 
                              dataKey={activeTab} 
                              stroke={activeTab === 'income' ? "#10b981" : "#EF4444"} 
                              strokeWidth={2}
                              fillOpacity={1} 
                              fill="url(#colorValue)" 
                            />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    </div>

                    {/* Recent Transactions Preview */}
                    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-gray-900 font-semibold">Recent Transactions</h3>
                        <button className="text-sm text-green-500 font-medium flex items-center">
                          View All <ChevronRight className="w-4 h-4 ml-1" />
                        </button>
                      </div>
                      <div className="space-y-3">
                        {transactions.slice(0, 3).map((txn) => (
                          <div key={txn.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-xl">
                                {txn.icon}
                              </div>
                              <div>
                                <div className="text-gray-900 font-medium">{txn.name}</div>
                                <div className="text-gray-500 text-xs">{txn.date} • {txn.category}</div>
                              </div>
                            </div>
                            <div className={`font-medium ${txn.type === 'income' ? 'text-green-500' : 'text-red-500'}`}>
                              {txn.type === 'income' ? '+' : '-'}${txn.amount.toFixed(2)}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Sidebar - Stats */}
                  <div className="lg:col-span-3 space-y-6">
                    {/* Spending Categories */}
                    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-gray-900 font-semibold">Spending Categories</h3>
                        <button className="text-sm text-green-500 font-medium">Details</button>
                      </div>
                      <div className="h-48">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={categoryData}
                              cx="50%"
                              cy="50%"
                              innerRadius={50}
                              outerRadius={70}
                              paddingAngle={2}
                              dataKey="value"
                              labelLine={false}
                            >
                              {categoryData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                            </Pie>
                            <Tooltip 
                              formatter={(value) => [`${value}%`, 'Percentage']}
                              contentStyle={{
                                backgroundColor: '#1F2937',
                                borderColor: '#374151',
                                borderRadius: '0.5rem',
                                color: '#FFF'
                              }}
                            />
                            <Legend 
                              layout="vertical"
                              verticalAlign="middle"
                              align="right"
                              wrapperStyle={{
                                paddingLeft: '20px'
                              }}
                              formatter={(value) => <span className="text-gray-500 text-xs">{value}</span>}
                            />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </div>

                    {/* Recent Transfer */}
                    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                      <h3 className="text-gray-900 font-semibold mb-4">Recent Transfer</h3>
                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-100">
                        <div className="flex items-center gap-3">
                          <img src={NigeriaFlag} className="w-10 h-10 rounded-full border border-white" />
                          <div>
                            <div className="text-gray-900 font-medium">From Nigeria</div>
                            <div className="text-gray-500 text-xs">Completed • Today</div>
                          </div>
                        </div>
                        <div className="text-green-500 font-medium">+$5,700.00</div>
                      </div>
                      <button className="w-full mt-4 flex items-center justify-center gap-2 text-green-500 text-sm font-medium p-2 hover:bg-green-50 rounded-lg transition-colors">
                        <Plus className="w-4 h-4" /> New Transfer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Features section */}
        <div className={`mt-32 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Powerful features for <span className="text-green-600">financial control</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md border border-gray-200 hover:border-green-200 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <p className="text-sm text-green-500 font-medium">{feature.highlight}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Trusted partners */}
        <div className={`mt-32 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by <span className="text-green-600">leading institutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We partner with the most trusted names in banking and fintech to bring you secure financial management.
            </p>
          </div>
          
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {partners.map((partner, index) => (
                <div key={index} className="flex justify-center">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="h-10 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Security section */}
        <div className={`mt-32 bg-gradient-to-r from-green-600 to-green-800 rounded-3xl p-12 shadow-2xl overflow-hidden transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
                <ShieldCheck className="w-4 h-4 mr-2" />
                Bank-grade security
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Your data is protected with <span className="text-yellow-300">military-grade encryption</span>
              </h2>
              
              <p className="text-xl text-green-100 mb-10">
                We use the same security standards as major banks to keep your financial information safe and private.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/10">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <FaLock className="text-white w-5 h-5" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">256-bit Encryption</h3>
                  <p className="text-green-100 text-sm">All data is encrypted in transit and at rest</p>
                </div>
                
                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/10">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <FaShieldAlt className="text-white w-5 h-5" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Two-Factor Auth</h3>
                  <p className="text-green-100 text-sm">Required for all sensitive operations</p>
                </div>
                
                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/10">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <FaBell className="text-white w-5 h-5" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Real-time Alerts</h3>
                  <p className="text-green-100 text-sm">Instant notifications for all account activity</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-green-700/20 to-green-600/20"></div>
        </div>
      </div>

      <style jsx>{`
        .bg-grid-green-100 {
          background-image: url("data:image/svg+xml,%3csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%2393c5fd' fill-opacity='0.1'%3e%3ccircle cx='5' cy='5' r='1'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e");
        }
        
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default HeroPage;