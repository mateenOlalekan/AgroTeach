import { Facebook, Linkedin, Twitter, Mail, Phone, MapPin, Sparkles } from "lucide-react";
import { useState } from "react";

function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const currentYear = new Date().getFullYear();
  
  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubscribing(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubscribing(false);
      setEmail("");
      alert("Thank you for subscribing!");
    }, 1000);
  };
  
  return (
    <>


      <footer className="relative overflow-hidden bg-gradient-to-br from-green-400 via-green-800 to-green-600">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-500/5 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/5 to-transparent"></div>
        
        {/* Newsletter Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 pt-16 pb-12">
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 mb-12 shadow-2xl">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              <div className="max-w-lg">
                <div className="flex items-center gap-2 mb-4">
                  <Mail className="h-6 w-6 text-yellow-400" />
                  <h2 className="text-3xl font-bold text-white">
                    Stay Updated
                  </h2>
                </div>
                <p className="text-green-100 text-lg leading-relaxed">
                  Get the latest updates on new features, security updates, and financial insights delivered straight to your inbox.
                </p>
              </div>
              
              <div className="w-full lg:w-auto lg:min-w-[400px]">
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1">
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address" 
                      className="w-full px-4 py-3 rounded-lg border-0 bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition-all"
                      aria-label="Email address"
                      required
                    />
                  </div>
                  <button 
                    type="submit"
                    disabled={isSubscribing}
                    className="bg-yellow-400 hover:bg-yellow-500 disabled:bg-yellow-300 text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-300 disabled:transform-none"
                    aria-label="Subscribe to newsletter"
                  >
                    {isSubscribing ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </form>
                <p className="text-sm text-green-100 mt-3 opacity-80">
                  By subscribing, you agree to our Privacy Policy and Terms of Service.
                </p>
              </div>
            </div>
          </div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Logo and Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="bg-green-500 rounded-full p-2 mr-3">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <span className="font-bold text-2xl text-white">
                  <span className="text-green-400">Swift</span>Pay
                </span>
              </div>
              
              <p className="text-white text-lg mb-6 leading-relaxed max-w-md">
                Revolutionizing digital payments with secure, fast, and reliable financial solutions for individuals and businesses worldwide.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-white">
                  <Phone className="h-4 w-4 mr-3 text-green-400" />
                  <span>+234 (0) 123 456 7890</span>
                </div>
                <div className="flex items-center text-white">
                  <Mail className="h-4 w-4 mr-3 text-green-400" />
                  <span>support@swiftpay.com</span>
                </div>
                <div className="flex items-center text-white">
                  <MapPin className="h-4 w-4 mr-3 text-green-400" />
                  <span>Lagos, Nigeria</span>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="group"
                  aria-label="Facebook"
                >
                  <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center hover:bg-green-600 hover:border-green-600 transition-all transform group-hover:scale-110">
                    <Facebook size={18} className="text-white group-hover:text-white" />
                  </div>
                </a>
                <a 
                  href="#" 
                  className="group"
                  aria-label="LinkedIn"
                >
                  <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center hover:bg-green-600 hover:border-green-600 transition-all transform group-hover:scale-110">
                    <Linkedin size={18} className="text-white group-hover:text-white" />
                  </div>
                </a>
                <a 
                  href="#" 
                  className="group"
                  aria-label="Twitter"
                >
                  <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center hover:bg-green-600 hover:border-green-600 transition-all transform group-hover:scale-110">
                    <Twitter size={18} className="text-white group-hover:text-white" />
                  </div>
                </a>
              </div>
            </div>
            
            {/* Company Links */}
            <div>
              <h3 className="font-bold mb-6 text-xl text-white border-b border-green-600 pb-2">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-white hover:text-green-400 transition-colors hover:translate-x-1 transform inline-block">About Us</a></li>
                <li><a href="#" className="text-white hover:text-green-400 transition-colors hover:translate-x-1 transform inline-block">Careers</a></li>
                <li><a href="#" className="text-white hover:text-green-400 transition-colors hover:translate-x-1 transform inline-block">News & Blog</a></li>
                <li><a href="#" className="text-white hover:text-green-400 transition-colors hover:translate-x-1 transform inline-block">Investor Relations</a></li>
                <li><a href="#" className="text-white hover:text-green-400 transition-colors hover:translate-x-1 transform inline-block">Partnerships</a></li>
              </ul>
            </div>
            
            {/* Products Links */}
            <div>
              <h3 className="font-bold mb-6 text-xl text-white border-b border-green-600 pb-2">Products</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-white hover:text-green-400 transition-colors hover:translate-x-1 transform inline-block">Personal Cards</a></li>
                <li><a href="#" className="text-white hover:text-green-400 transition-colors hover:translate-x-1 transform inline-block">Business Solutions</a></li>
                <li><a href="#" className="text-white hover:text-green-400 transition-colors hover:translate-x-1 transform inline-block">International Transfers</a></li>
                <li><a href="#" className="text-white hover:text-green-400 transition-colors hover:translate-x-1 transform inline-block">Currency Exchange</a></li>
                <li><a href="#" className="text-white hover:text-green-400 transition-colors hover:translate-x-1 transform inline-block">Savings & Investment</a></li>
              </ul>
            </div>
            
            {/* Support Links */}
            <div>
              <h3 className="font-bold mb-6 text-xl text-white border-b border-green-600 pb-2">Support</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-white hover:text-green-400 transition-colors hover:translate-x-1 transform inline-block">Help Center</a></li>
                <li><a href="#" className="text-white hover:text-green-400 transition-colors hover:translate-x-1 transform inline-block">Contact Support</a></li>
                <li><a href="#" className="text-white hover:text-green-400 transition-colors hover:translate-x-1 transform inline-block">API Documentation</a></li>
                <li><a href="#" className="text-white hover:text-green-400 transition-colors hover:translate-x-1 transform inline-block">System Status</a></li>
                <li><a href="#" className="text-white hover:text-green-400 transition-colors hover:translate-x-1 transform inline-block">Security</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom Copyright Section */}
        <div className="relative z-10 border-t border-slate-700 bg-slate-900/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <p className="text-gray-400 text-sm">
                  © {currentYear} SwiftPay Financial Technologies. All rights reserved.
                </p>
                <div className="flex items-center gap-6 text-sm">
                  <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Privacy Policy</a>
                  <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Terms of Service</a>
                  <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Cookie Policy</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <span className="text-gray-400 text-sm">Secured by:</span>
                <div className="flex items-center gap-3">
                  <div className="bg-slate-800 rounded px-3 py-1 border border-slate-700">
                    <span className="text-green-400 font-semibold text-xs">SSL</span>
                  </div>
                  <div className="bg-slate-800 rounded px-3 py-1 border border-slate-700">
                    <span className="text-green-400 font-semibold text-xs">256-bit</span>
                  </div>
                  <div className="bg-slate-800 rounded px-3 py-1 border border-slate-700">
                    <span className="text-yellow-400 font-semibold text-xs">PCI DSS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;