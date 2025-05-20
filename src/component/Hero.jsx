import { useState } from "react";
import { 
  FaPaypal, 
  FaCcVisa, 
  FaCcMastercard, 
  FaArrowRight, 
  FaCreditCard, 
  FaChartLine, 
  FaMoneyBillWave,
  FaPiggyBank,
  FaExchangeAlt,
  FaReceipt
} from 'react-icons/fa';
import { SiStripe, SiAmazonpay, SiApplepay } from 'react-icons/si';
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
  Cell 
} from 'recharts';
import NigeriaFlag from "../assets/nigeria.png";

const COLORS = ['#10B981', '#3B82F6', '#F59E0B', '#EF4444', '#8B5CF6'];

export default function FinancialDashboard() {
  const [activeTab, setActiveTab] = useState('income');
  const [activeCard, setActiveCard] = useState(0);

  // Sample data
  const weeklyData = [
    { name: 'Mon', income: 3200, expense: 1800 },
    { name: 'Tue', income: 2900, expense: 2200 },
    { name: 'Wed', income: 3500, expense: 1900 },
    { name: 'Thu', income: 4100, expense: 2100 },
    { name: 'Fri', income: 3800, expense: 2400 },
    { name: 'Sat', income: 2200, expense: 1500 },
    { name: 'Sun', income: 1800, expense: 1200 },
  ];

  const categoryData = [
    { name: 'Shopping', value: 35 },
    { name: 'Dining', value: 25 },
    { name: 'Transport', value: 15 },
    { name: 'Entertainment', value: 15 },
    { name: 'Utilities', value: 10 },
  ];

  const cards = [
    { 
      type: 'VISA', 
      balance: 35700.40, 
      currency: 'USD', 
      lastDigits: '4589', 
      color: 'from-blue-600 to-blue-800',
      expires: '05/26'
    },
    { 
      type: 'Mastercard', 
      balance: 12500.75, 
      currency: 'EUR', 
      lastDigits: '6723', 
      color: 'from-purple-600 to-purple-800',
      expires: '09/25'
    }
  ];

  const transactions = [
    { id: 1, name: 'Amazon Purchase', amount: 189.99, date: 'Today', type: 'expense', category: 'Shopping', icon: '🛍️' },
    { id: 2, name: 'Salary Deposit', amount: 4500.00, date: 'Yesterday', type: 'income', category: 'Income', icon: '💰' },
    { id: 3, name: 'Uber Ride', amount: 24.50, date: 'Yesterday', type: 'expense', category: 'Transport', icon: '🚕' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 to-emerald-950 py-12 px-4 sm:px-6 lg:px-8">
      {/* Centered Container */}
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Welcome to Your <span className="text-emerald-300">Financial Hub</span>
          </h1>
          <p className="text-emerald-200 text-lg max-w-2xl mx-auto">
            Manage your finances with clarity and control through our intuitive dashboard
          </p>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid lg:grid-cols-12 gap-3">
          {/* Left Sidebar - Accounts Summary */}
          <div className="lg:col-span-3 space-y-6">
            {/* User Profile Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-lg">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <span className="text-xl">👤</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Alex Johnson</h3>
                  <p className="text-emerald-300 text-sm">Premium Member</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-emerald-200 text-sm">Total Balance</span>
                  <span className="text-white font-medium">$48,201.15</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-emerald-200 text-sm">This Month</span>
                  <span className="text-emerald-400 font-medium">+$2,450.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-emerald-200 text-sm">Savings</span>
                  <span className="text-white font-medium">$12,800.00</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-lg">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-1">
                <FaExchangeAlt className="text-emerald-400" /> Quick Actions
              </h3>
              <div className="grid grid-cols-2 gap-2">
                <button className="flex flex-col items-center justify-center p-3 bg-emerald-600/30 rounded-lg hover:bg-emerald-600/40 transition-colors border border-emerald-400/20">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center mb-2">
                    <FaMoneyBillWave className="text-emerald-400" />
                  </div>
                  <span className="text-white text-sm">Transfer</span>
                </button>
                <button className="flex flex-col items-center justify-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-white/10">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center mb-2">
                    <FaReceipt className="text-blue-400" />
                  </div>
                  <span className="text-white text-sm">Pay Bills</span>
                </button>
                <button className="flex flex-col items-center justify-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-white/10">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center mb-2">
                    <FaPiggyBank className="text-purple-400" />
                  </div>
                  <span className="text-white text-sm">Savings</span>
                </button>
                <button className="flex flex-col items-center justify-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-white/10">
                  <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center mb-2">
                    <FaCreditCard className="text-amber-400" />
                  </div>
                  <span className="text-white text-sm">Cards</span>
                </button>
              </div>
            </div>

            {/* Payment Partners */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-lg">
              <h3 className="text-emerald-300 text-sm font-semibold mb-4">PAYMENT PARTNERS</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                <FaPaypal size={24} className="text-white opacity-80 hover:opacity-100 transition-opacity" />
                <SiStripe size={24} className="text-white opacity-80 hover:opacity-100 transition-opacity" />
                <FaCcVisa size={24} className="text-white opacity-80 hover:opacity-100 transition-opacity" />
                <FaCcMastercard size={24} className="text-white opacity-80 hover:opacity-100 transition-opacity" />
                <SiAmazonpay size={24} className="text-white opacity-80 hover:opacity-100 transition-opacity" />
                <SiApplepay size={24} className="text-white opacity-80 hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-6 space-y-6">
            {/* Financial Cards */}
            <div className="grid md:grid-cols-2 gap-3">
              {cards.map((card, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-br ${card.color} rounded-xl p-5 shadow-lg cursor-pointer transition-transform hover:scale-[1.02] ${activeCard === index ? 'ring-2 ring-emerald-400' : ''}`}
                  onClick={() => setActiveCard(index)}
                >
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-white/80 text-sm">{card.type}</span>
                    <span className="text-white/80 text-xs">Expires {card.expires}</span>
                  </div>
                  <div className="text-white text-xl font-bold mb-1">
                    {card.currency} {card.balance.toLocaleString('en-US', {minimumFractionDigits: 2})}
                  </div>
                  <div className="text-white/70 text-sm mb-4">Available Balance</div>
                  <div className="text-white text-lg tracking-widest">•••• •••• •••• {card.lastDigits}</div>
                </div>
              ))}
            </div>

            {/* Financial Analytics */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-white font-semibold flex items-center gap-1">
                  <FaChartLine className="text-emerald-400" /> Financial Overview
                </h2>
                <div className="flex bg-white/10 rounded-full p-1">
                  <button 
                    className={`px-3 py-1 text-xs rounded-full ${activeTab === 'income' ? 'bg-emerald-500 text-white' : 'text-emerald-200'}`}
                    onClick={() => setActiveTab('income')}
                  >
                    Income
                  </button>
                  <button 
                    className={`px-3 py-1 text-xs rounded-full ${activeTab === 'expense' ? 'bg-emerald-500 text-white' : 'text-emerald-200'}`}
                    onClick={() => setActiveTab('expense')}
                  >
                    Expense
                  </button>
                </div>
              </div>

              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={weeklyData}
                    margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={activeTab === 'income' ? "#10b981" : "#EF4444"} stopOpacity={0.8}/>
                        <stop offset="95%" stopColor={activeTab === 'income' ? "#10b981" : "#EF4444"} stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#9CA3AF' }}
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#9CA3AF' }}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: '#1f2937',
                        borderColor: '#374151',
                        borderRadius: '0.5rem',
                        color: '#fff'
                      }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey={activeTab} 
                      stroke={activeTab === 'income' ? "#10b981" : "#EF4444"} 
                      fillOpacity={1} 
                      fill="url(#colorValue)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
            {/* Recent Transfer */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-lg">
              <h3 className="text-white font-semibold mb-4">Recent Transfer</h3>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <img src={NigeriaFlag} className="w-10 h-10 rounded-full border border-white/10" />
                  <div>
                    <div className="text-white font-medium">From Nigeria</div>
                    <div className="text-emerald-200 text-xs">Completed • Today</div>
                  </div>
                </div>
                <div className="text-emerald-400 font-medium">+$5,700.00</div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Transactions & Categories */}
          <div className="lg:col-span-3 space-y-6">
            {/* Spending Categories */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-lg">
              <h3 className="text-white font-semibold mb-4">Spending Categories</h3>
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
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: '#1f2937',
                        borderColor: '#374151',
                        borderRadius: '0.5rem',
                        color: '#fff'
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-1 mt-2">
                {categoryData.map((category, index) => (
                  <div key={index} className="flex items-center">
                    <div 
                      className="w-3 h-3 rounded-full mr-2" 
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    ></div>
                    <span className="text-white text-sm">{category.name}</span>
                    <span className="text-emerald-300 text-sm ml-auto">{category.value}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-lg">
              <h3 className="text-white font-semibold mb-4">Recent Transactions</h3>
              <div className="space-y-4">
                {transactions.map((txn) => (
                  <div key={txn.id} className="flex items-center justify-between p-3 hover:bg-white/5 rounded-lg transition-colors cursor-pointer">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-xl">
                        {txn.icon}
                      </div>
                      <div>
                        <div className="text-white font-medium">{txn.name}</div>
                        <div className="text-emerald-200 text-xs">{txn.date} • {txn.category}</div>
                      </div>
                    </div>
                    <div className={`font-medium ${txn.type === 'income' ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {txn.type === 'income' ? '+' : '-'}${txn.amount.toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}