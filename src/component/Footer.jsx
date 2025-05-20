import { Mail, Facebook, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";

function Footer() {
  const [email, setEmail] = useState("");
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-emerald-700 text-white">
      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-4 pt-10 pb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-emerald-600 pb-8 mb-8">
          <div className="max-w-md">
            <h2 className="text-2xl font-bold mb-1">
              Keep up with the latest
            </h2>
            <p className="text-gray-200">
              Join our newsletter to stay up to date on features and releases.
            </p>
          </div>
          
          <div className="w-full md:w-auto">
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email" 
                className="px-4 py-2 rounded-md outline-none bg-white text-black w-full sm:w-64 outline-none"
                aria-label="Email address"
              />
              <button 
                className="bg-yellow-400 hover:bg-yellow-500 text-emerald-950 px-6 py-2 rounded-md font-medium transition-colors"
                aria-label="Subscribe to newsletter"
              >
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-300 mt-2">
              By subscribing you agree to our Privacy Policy.
            </p>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Social Links */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-yellow-400 text-2xl font-bold mr-1">⚡</span>
              <span className="font-bold text-xl text-white">Fintech</span>
            </div>
            <p className="text-gray-200 mb-6">
              Making finance easy for everyone
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="text-white hover:text-yellow-400 transition-colors"
                aria-label="Facebook"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center hover:bg-emerald-500">
                  <Facebook size={16} />
                </div>
              </a>
              <a 
                href="#" 
                className="text-white hover:text-yellow-400 transition-colors"
                aria-label="LinkedIn"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center hover:bg-emerald-500">
                  <Linkedin size={16} />
                </div>
              </a>
              <a 
                href="#" 
                className="text-white hover:text-yellow-400 transition-colors"
                aria-label="Twitter"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center hover:bg-emerald-500">
                  <Twitter size={16} />
                </div>
              </a>
            </div>
          </div>
          
          {/* Company Links */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-200 hover:text-yellow-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-200 hover:text-yellow-400 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-200 hover:text-yellow-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-200 hover:text-yellow-400 transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          {/* Features Links */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Features</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-200 hover:text-yellow-400 transition-colors">Cards</a></li>
              <li><a href="#" className="text-gray-200 hover:text-yellow-400 transition-colors">Payments</a></li>
              <li><a href="#" className="text-gray-200 hover:text-yellow-400 transition-colors">Transfers</a></li>
              <li><a href="#" className="text-gray-200 hover:text-yellow-400 transition-colors">Currencies</a></li>
            </ul>
          </div>
          
          {/* Support Links */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-200 hover:text-yellow-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-200 hover:text-yellow-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-200 hover:text-yellow-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-200 hover:text-yellow-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="border-t border-emerald-600 py-6 bg-emerald-800">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 mb-4 md:mb-0">
            © {currentYear} Fintech. All rights reserved.
          </p>
          <div className="flex items-center">
            <img 
              src="/api/placeholder/180/30" 
              alt="Payment Methods" 
              className="h-6" 
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;