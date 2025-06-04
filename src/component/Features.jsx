import  { useState, useEffect, useRef } from 'react';

// Mock components since we don't have the originals
const FeatureCard = ({ number, title, description, children, reverse = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref}
      className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-16 mb-20 transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      <div className="flex-1 space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
            {number}
          </div>
          <div className="w-16 h-1 bg-gradient-to-r from-green-600 to-green-600 rounded-full"></div>
        </div>
        
        <h3 className="text-3xl lg:text-4xl font-bold text-slate-800 leading-tight">
          {title}
        </h3>
        
        <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
          {description}
        </p>

        <div className="flex items-center gap-4 pt-4">
          <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
            Learn More
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <button className="text-green-600 hover:text-green-700 font-medium flex items-center gap-2 transition-colors duration-300">
            Watch Demo
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m-6-8h1m4 0h1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>
      </div>
      
      <div className="flex-1 flex justify-center">
        <div className="relative">
          {children}
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-green-500/10 rounded-3xl blur-3xl -z-10 transform scale-110"></div>
        </div>
      </div>
    </div>
  );
};

const CreditCard = () => (
  <div className="relative group">
    <div className="w-80 h-48 bg-gradient-to-br from-slate-900 via-green-900 to-green-900 rounded-3xl p-8 shadow-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500">
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-green-500/20 rounded-3xl"></div>
      <div className="relative z-10 h-full flex flex-col justify-between text-white">
        <div className="flex justify-between items-start">
          <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl shadow-lg"></div>
          <div className="text-right">
            <div className="text-sm opacity-80">FINSY CARD</div>
            <div className="font-bold text-lg">PREMIUM</div>
          </div>
        </div>
        <div>
          <div className="text-xl font-mono tracking-widest mb-4">•••• •••• •••• 1234</div>
          <div className="flex justify-between items-end">
            <div>
              <div className="text-xs opacity-70">VALID THRU</div>
              <div className="font-semibold">12/28</div>
            </div>
            <div className="text-xl font-bold">VISA</div>
          </div>
        </div>
      </div>
    </div>
    
    {/* Customization colors */}
    <div className="absolute -bottom-4 left-4 flex gap-2">
      {['bg-green-500', 'bg-green-500', 'bg-green-500', 'bg-green-500'].map((color, index) => (
        <div key={index} className={`w-6 h-6 ${color} rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform duration-200`}></div>
      ))}
    </div>
  </div>
);

const TransactionCard = () => (
  <div className="w-80 bg-white rounded-3xl shadow-2xl p-6 border border-slate-200">
    <div className="flex items-center justify-between mb-6">
      <h4 className="font-bold text-lg text-slate-800">Recent Activity</h4>
      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      </div>
    </div>
    
    <div className="space-y-4">
      {[
        { name: 'Spotify Premium', amount: '-$9.99', icon: '🎵', trend: 'down', category: 'Entertainment' },
        { name: 'Grocery Store', amount: '-$67.50', icon: '🛒', trend: 'down', category: 'Food & Dining' },
        { name: 'Salary Deposit', amount: '+$3,250.00', icon: '💰', trend: 'up', category: 'Income' }
      ].map((transaction, index) => (
        <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors duration-200">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-xl">
              {transaction.icon}
            </div>
            <div>
              <div className="font-semibold text-slate-800">{transaction.name}</div>
              <div className="text-sm text-slate-500">{transaction.category}</div>
            </div>
          </div>
          <div className="text-right">
            <div className={`font-bold ${transaction.trend === 'up' ? 'text-green-600' : 'text-slate-800'}`}>
              {transaction.amount}
            </div>
            <div className="text-xs text-slate-500">Today</div>
          </div>
        </div>
      ))}
    </div>
    
    {/* Spending insights */}
    <div className="mt-6 p-4 bg-green-50 rounded-2xl">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs">💡</span>
        </div>
        <span className="font-semibold text-green-800">Smart Insight</span>
      </div>
      <p className="text-sm text-green-700">You've spent 15% less on entertainment this month!</p>
    </div>
  </div>
);

const DashboardCard = ({ title, className, children }) => (
  <div className={`bg-white rounded-3xl shadow-2xl p-6 border border-slate-200 ${className}`}>
    <h4 className="font-bold text-lg text-slate-800 mb-4">{title}</h4>
    {children}
  </div>
);

const Features = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  useEffect(() => {
    setIsHeaderVisible(true);
  }, []);

  return (
    <div className="relative py-20 px-4 md:px-12 lg:px-24 bg-gradient-to-br from-white via-slate-50 to-green-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${isHeaderVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-ping"></div>
            Premium Features
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 via-green-900 to-slate-900 bg-clip-text text-transparent mb-6 leading-tight">
            Feel the Best Experience
            <br />
            <span className="text-green-600">with Our Features</span>
          </h2>

          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover powerful tools designed to simplify your financial life and help you achieve your goals faster than ever before.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="space-y-20">
          <FeatureCard 
            number="1"
            title="Custom and Design Your Card, Make It Unique"
            description="Choose from a range of premium colors and designs to create a credit card that reflects your personality. Stand out with style while enjoying world-class financial services."
          >
            <CreditCard />
          </FeatureCard>
          
          <FeatureCard 
            number="2"
            title="Personalize Your Financial Habits and Goals"
            description="Track your spending patterns with AI-powered insights. Get personalized recommendations to optimize your finances and achieve your savings goals faster."
            reverse={true}
          >
            <TransactionCard />
          </FeatureCard>
          
          <FeatureCard 
            number="3"
            title="Free Transfer Anywhere Around the World"
            description="Send money globally without hidden fees or excessive charges. Our advanced technology ensures secure, instant transfers to over 200 countries worldwide."
          >
            <DashboardCard title="Global Transfers" className="max-w-md">
              <div className="flex justify-between items-center">
                <div className="space-y-3">
                  <div>
                    <div className="text-sm text-slate-500 mb-1">Destination</div>
                    <div className="font-bold text-slate-800">Canada</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src="https://cdn.britannica.com/68/7068-004-7848FEB4/Flag-Canada.jpg" alt="Canada" className="w-6 h-4 object-cover rounded" />
                    <span className="text-sm font-medium">CAD</span>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">0% Fee</span>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-green-100 rounded-2xl flex items-center justify-center">
                    <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </DashboardCard>
          </FeatureCard>
        </div>

        {/* Additional Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          
          {/* Multi-Currency */}
          <div className="group bg-gradient-to-br from-green-600 to-green-600 p-8 rounded-3xl text-white shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-500">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-2xl font-bold">
                4
              </div>
              <div className="w-12 h-1 bg-white/30 rounded-full"></div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">Hold Money in 30+ Currencies</h3>
            <p className="text-green-100 mb-6">Store and exchange multiple currencies with real-time rates and zero hidden fees.</p>
            
            <div className="flex gap-3 flex-wrap">
              {[
                { flag: "https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg", code: "USD" },
                { flag: "https://cdn.britannica.com/68/7068-004-7848FEB4/Flag-Canada.jpg", code: "CAD" },
                { flag: "https://cdn.britannica.com/44/344-004-494CC2E8/Flag-England.jpg", code: "GBP" },
                { flag: "https://cdn.britannica.com/82/682-004-F0B47FCB/Flag-France.jpg", code: "EUR" }
              ].map((currency, index) => (
                <div key={index} className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-xl px-3 py-2">
                  <img src={currency.flag} alt={currency.code} className="w-6 h-4 object-cover rounded" />
                  <span className="text-sm font-medium">{currency.code}</span>
                </div>
              ))}
              <div className="flex items-center justify-center w-12 h-8 bg-white/20 backdrop-blur-sm rounded-xl text-sm font-medium">
                +26
              </div>
            </div>
          </div>

          {/* Subscriptions */}
          <div className="group bg-white p-8 rounded-3xl shadow-2xl border border-slate-200 hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-500">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
                5
              </div>
              <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-teal-500 rounded-full"></div>
            </div>
            
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Subscriptions You Control</h3>
            <p className="text-slate-600 mb-6">Manage all your subscriptions in one place with smart alerts and spending insights.</p>
            
            <div className="space-y-3">
              {[
                { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png", amount: "$15.99" },
                { name: "Spotify", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/2560px-Spotify_logo_with_text.svg.png", amount: "$9.99" },
                { name: "YouTube", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png", amount: "$11.99" }
              ].map((sub, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <img src={sub.logo} alt={sub.name} className="h-6 w-auto" />
                  </div>
                  <span className="font-semibold text-slate-800">{sub.amount}</span>
                </div>
              ))}
            </div>
          </div>

          {/* More Features */}
          <div className="group bg-gradient-to-br from-green-600 to-green-600 p-8 rounded-3xl text-white shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-500">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-2xl font-bold">
                6
              </div>
              <div className="w-12 h-1 bg-white/30 rounded-full"></div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">Check Our Other Product Features</h3>
            <p className="text-green-100 mb-6">Discover advanced tools like investment tracking, crypto trading, and premium analytics.</p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Investment Portfolio</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Crypto Wallet</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Advanced Analytics</span>
              </div>
            </div>
            
            <button className="w-full bg-white text-green-600 px-6 py-3 rounded-xl font-bold mt-6 hover:bg-gray-50 transition-colors duration-300 transform hover:scale-105">
              Explore All Features
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: radial-gradient(circle at 25px 25px, rgba(0,0,0,0.05) 2px, transparent 0);
          background-size: 50px 50px;
        }
        
        .hover\\:shadow-3xl:hover {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  );
};

export default Features;