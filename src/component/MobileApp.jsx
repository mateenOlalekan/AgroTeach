
import React, { useState, useEffect } from 'react';

// Mock components since we don't have the originals
const DashboardCard = ({ title, className, children }) => (
  <div className={`bg-white rounded-2xl p-4 shadow-lg border border-slate-200/50 ${className}`}>
    <h3 className="text-sm font-medium text-slate-600 mb-3">{title}</h3>
    {children}
  </div>
);

const CreditCard = () => (
  <div className="relative w-64 h-40 bg-gradient-to-br from-slate-900 via-green-900 to-slate-800 rounded-2xl p-6 shadow-2xl transform rotate-6 hover:rotate-3 transition-transform duration-300">
    <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-green-500/20 rounded-2xl"></div>
    <div className="relative z-10 h-full flex flex-col justify-between text-white">
      <div className="flex justify-between items-start">
        <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg"></div>
        <div className="text-right">
          <div className="text-xs opacity-70">VISA</div>
          <div className="font-bold">FINSY</div>
        </div>
      </div>
      <div>
        <div className="text-lg font-mono tracking-wider mb-2">•••• •••• •••• 7654</div>
        <div className="flex justify-between text-sm">
          <div>
            <div className="text-xs opacity-70">VALID THRU</div>
            <div>12/28</div>
          </div>
          <div>
            <div className="text-xs opacity-70">CVV</div>
            <div>•••</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const MobileApp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { title: "Instant Transfers", desc: "Send money in seconds", icon: "⚡" },
    { title: "Smart Analytics", desc: "Track spending patterns", icon: "📊" },
    { title: "Secure Payments", desc: "Bank-grade security", icon: "🔒" }
  ];

  return (
    <div className="relative py-20 px-4 md:px-12 lg:px-24 bg-gradient-to-br from-slate-50 via-white to-green-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-ping"></div>
              Mobile First Experience
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 via-green-900 to-slate-900 bg-clip-text text-transparent mb-6 leading-tight">
              Get the Finsy
              <br />
              <span className="text-green-600">Mobile App</span>
            </h2>
            
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
              Download the app to view and manage your finances from the palm of your hands. 
              Experience seamless banking with our award-winning mobile interface.
            </p>

            {/* Feature Highlights */}
            <div className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-500 ${
                    activeFeature === index 
                      ? 'bg-green-50 border-2 border-green-200 transform scale-105' 
                      : 'bg-white/50 border border-slate-200 hover:bg-white/80'
                  }`}
                >
                  <div className="text-2xl">{feature.icon}</div>
                  <div>
                    <h4 className="font-semibold text-slate-800">{feature.title}</h4>
                    <p className="text-sm text-slate-600">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group flex items-center justify-center gap-3 bg-black hover:bg-gray-800 text-white px-6 py-4 rounded-2xl font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs opacity-80">Download on the</div>
                  <div className="font-bold">App Store</div>
                </div>
              </button>

              <button className="group flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-black border-2 border-slate-200 hover:border-slate-300 px-6 py-4 rounded-2xl font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="m12.954 11.616 2.957-2.957L6.36 3.291c-.633-.342-1.226-.39-1.746-.016l8.34 8.341zm3.461 3.462 3.074-1.729c.6-.336.929-.812.929-1.34 0-.527-.329-1.004-.929-1.34l-3.074-1.729-2.876 2.876 2.876 2.262zm-3.461-3.462L4.614 3.275c-.52-.374-.1133-.326-1.746.016L8.91 8.658l2.957 2.957z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs opacity-60">Get it on</div>
                  <div className="font-bold">Google Play</div>
                </div>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-slate-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">4.9★</div>
                <div className="text-sm text-slate-600">App Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">500K+</div>
                <div className="text-sm text-slate-600">Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">#1</div>
                <div className="text-sm text-slate-600">Finance App</div>
              </div>
            </div>
          </div>

          {/* Right Content - Mobile Mockup */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
            <div className="relative flex justify-center items-center">
              
              {/* Phone Frame */}
              <div className="relative">
                <div className="w-80 h-[600px] bg-slate-900 rounded-[3rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                    
                    {/* Status Bar */}
                    <div className="h-12 bg-gradient-to-r from-green-600 to-green-600 flex items-center justify-between px-6 text-white text-sm">
                      <div className="flex items-center gap-1">
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                        <span className="ml-2 text-xs">Finsy</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs">
                        <span>9:41</span>
                        <div className="w-6 h-3 border border-white rounded-sm">
                          <div className="w-4 h-1 bg-white rounded-sm m-0.5"></div>
                        </div>
                      </div>
                    </div>

                    {/* App Content */}
                    <div className="p-6 space-y-6">
                      
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-slate-800">Good Morning</h3>
                          <p className="text-sm text-slate-600">John Smith</p>
                        </div>
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold">
                          JS
                        </div>
                      </div>

                      {/* Balance Card */}
                      <div className="bg-gradient-to-r from-green-600 to-green-600 rounded-2xl p-6 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                        <div className="relative z-10">
                          <p className="text-green-100 text-sm mb-2">Total Balance</p>
                          <h2 className="text-3xl font-bold mb-4">$35,700.40</h2>
                          <div className="flex items-center gap-4">
                            <div className="text-sm">
                              <div className="text-green-100">Income</div>
                              <div className="font-semibold">+$5,420</div>
                            </div>
                            <div className="text-sm">
                              <div className="text-green-100">Spending</div>
                              <div className="font-semibold">-$2,340</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Quick Actions */}
                      <div className="grid grid-cols-4 gap-4">
                        {[
                          { icon: '💸', label: 'Send' },
                          { icon: '💳', label: 'Pay' },
                          { icon: '📊', label: 'Stats' },
                          { icon: '⚙️', label: 'More' }
                        ].map((action, index) => (
                          <div key={index} className="flex flex-col items-center gap-2 p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer">
                            <div className="text-2xl">{action.icon}</div>
                            <span className="text-xs font-medium text-slate-600">{action.label}</span>
                          </div>
                        ))}
                      </div>

                      {/* Recent Transactions */}
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-4">Recent Activity</h4>
                        <div className="space-y-3">
                          {[
                            { name: 'Spotify Premium', amount: '-$9.99', icon: '🎵', color: 'bg-green-100' },
                            { name: 'Salary Deposit', amount: '+$3,250', icon: '💰', color: 'bg-green-100' },
                            { name: 'Coffee Shop', amount: '-$4.50', icon: '☕', color: 'bg-orange-100' }
                          ].map((transaction, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-white rounded-xl border border-slate-100">
                              <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 ${transaction.color} rounded-xl flex items-center justify-center`}>
                                  <span>{transaction.icon}</span>
                                </div>
                                <div>
                                  <div className="font-medium text-slate-800 text-sm">{transaction.name}</div>
                                  <div className="text-xs text-slate-500">Today</div>
                                </div>
                              </div>
                              <div className={`font-semibold text-sm ${transaction.amount.startsWith('+') ? 'text-green-600' : 'text-slate-800'}`}>
                                {transaction.amount}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-8 -left-8 w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center text-white shadow-2xl animate-bounce">
                  <span className="text-2xl">📱</span>
                </div>
                
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white shadow-xl animate-pulse">
                  <span className="text-xl">✓</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: radial-gradient(circle at 25px 25px, rgba(0,0,0,0.05) 2px, transparent 0);
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  );
};

export default MobileApp;