import { useState, useEffect, useCallback } from "react";
import {   
  FaUserCircle,  
  FaChevronDown, 
  FaBuilding,
  FaDollarSign,
  FaBook,
  FaSignInAlt,
  FaTimes,
  FaChartBar,
  FaSync,
  FaChartPie,
  FaUniversity,
  FaBullseye
} from 'react-icons/fa';
import { Sparkles } from "lucide-react";

export default function HomepageNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [featuresDropdownOpen, setFeaturesDropdownOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest('.mobile-menu-container')) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  const toggleFeaturesDropdown = useCallback(() => {
    setFeaturesDropdownOpen(prev => !prev);
  }, []);

  const features = [
    { 
      name: "Payment Management", 
      icon: <FaChartBar className="mr-3 text-green-500" />, 
      description: "Schedule, track & automate payments",
      path: "#payment-management" 
    },
    { 
      name: "Subscription Tracker", 
      icon: <FaSync className="mr-3 text-blue-500" />, 
      description: "Monitor & cancel recurring bills",
      path: "#subscription-tracker" 
    },
    { 
      name: "Spending Analytics", 
      icon: <FaChartPie className="mr-3 text-purple-500" />, 
      description: "AI-powered expense insights",
      path: "#spending-analytics" 
    },
    { 
      name: "Banking Partners", 
      icon: <FaUniversity className="mr-3 text-indigo-500" />, 
      description: "Secure integrations with trusted banks",
      path: "#banking-partners" 
    },
    { 
      name: "Life Goals Planner", 
      icon: <FaBullseye className="mr-3 text-orange-500" />, 
      description: "Save for opportunities (travel, home, etc.)",
      path: "#life-goals-planner" 
    }
  ];

  const middleNavLinks = [
    { name: "For Business", icon: <FaBuilding className="mr-2" />, path: "#business" },
    { name: "Pricing", icon: <FaDollarSign className="mr-2" />, path: "#pricing" },
    { name: "Resources", icon: <FaBook className="mr-2" />, path: "#resources" }
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-gradient-to-r from-green-600 to-green-700 shadow-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Left Section - Logo */}
            <div className="flex items-center">
              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className={`md:hidden mr-3 p-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 ${
                  scrolled 
                    ? 'text-gray-700 hover:text-green-600 hover:bg-gray-100' 
                    : 'text-white hover:text-green-100 hover:bg-green-500/20'
                }`}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <FaTimes className="h-5 w-5" />
                ) : (
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>

              {/* Logo */}
              <a href="#home" className="flex items-center gap-3">
                <div className="bg-green-500 rounded-full p-2">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <span className={`text-xl font-bold transition-colors ${
                  scrolled ? 'text-gray-900' : 'text-white'
                }`}>
                  <span className={scrolled ? 'text-green-600' : 'text-green-100'}>Swift</span>Pay
                </span>
              </a>
            </div>

            {/* Middle Section - Navigation Links + Features Dropdown */}
            <div className="hidden md:flex items-center space-x-1">
              {/* Features Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleFeaturesDropdown}
                  className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    scrolled
                      ? 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                      : 'text-white hover:text-green-100 hover:bg-white/10'
                  }`}
                >
                  Features
                  <FaChevronDown className={`w-3 h-3 ml-1 transition-transform ${featuresDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {featuresDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50">
                    {features.map((feature) => (
                      <a
                        key={feature.name}
                        href={feature.path}
                        className="flex items-start px-4 py-3 hover:bg-gray-50 transition-colors"
                        onClick={() => setFeaturesDropdownOpen(false)}
                      >
                        {feature.icon}
                        <div>
                          <div className="font-medium text-gray-900 text-sm">{feature.name}</div>
                          <div className="text-gray-500 text-xs mt-1">{feature.description}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Middle Navigation Links */}
              {middleNavLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className={`flex items-center text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200 ${
                    scrolled
                      ? 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                      : 'text-white hover:text-green-100 hover:bg-white/10'
                  }`}
                >
                  {item.icon}
                  {item.name}
                </a>
              ))}
            </div>

            {/* Right Section - User Actions */}
            <div className="flex items-center space-x-3">
              {/* Login Button */}
              <a
                href="#login"
                className={`hidden sm:flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  scrolled
                    ? 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                    : 'text-white hover:text-green-100 hover:bg-white/10'
                }`}
              >
                <FaSignInAlt className="mr-2" />
                Login
              </a>

              {/* Sign Up Button */}
              <a
                href="#signup"
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  scrolled
                    ? 'bg-green-600 hover:bg-green-700 text-white shadow-md hover:shadow-lg'
                    : 'bg-white text-green-600 hover:bg-green-50 shadow-md hover:shadow-lg'
                }`}
              >
                Sign Up Free
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`mobile-menu-container md:hidden fixed inset-y-0 left-0 w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-40 ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          {/* Mobile Header */}
          <div className="flex items-center justify-between px-4 pt-5 pb-4 border-b border-gray-200 bg-gradient-to-r from-green-600 to-green-700">
            <div className="flex items-center">
              <div className="bg-green-500 rounded-full p-2">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="ml-2 text-xl font-bold text-white">
                <span className="text-green-100">Swift</span>Pay
              </span>
            </div>
            <button
              onClick={closeMobileMenu}
              className="p-2 rounded-md text-white hover:text-green-100 hover:bg-white/10 focus:outline-none"
              aria-label="Close menu"
            >
              <FaTimes className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile Menu Content */}
          <div className="flex-1 px-2 pt-4 pb-8 space-y-2">
            {/* Features Section */}
            <div className="px-3 py-2">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Features</h3>
              {features.map((feature) => (
                <a
                  key={feature.name}
                  href={feature.path}
                  onClick={closeMobileMenu}
                  className="flex items-start px-3 py-3 rounded-md text-sm hover:bg-gray-50 transition-colors"
                >
                  {feature.icon}
                  <div>
                    <div className="font-medium text-gray-900">{feature.name}</div>
                    <div className="text-gray-500 text-xs mt-1">{feature.description}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 my-4"></div>

            {/* Main Navigation */}
            {middleNavLinks.map((item) => (
              <a
                key={item.name}
                href={item.path}
                onClick={closeMobileMenu}
                className="flex items-center px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors"
              >
                {item.icon}
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Footer Actions */}
          <div className="px-4 py-4 border-t border-gray-200 bg-gray-50 space-y-3">
            <a
              href="#login"
              onClick={closeMobileMenu}
              className="flex items-center justify-center w-full px-4 py-3 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-white border border-gray-300 transition-colors"
            >
              <FaSignInAlt className="mr-2" />
              Login
            </a>
            
            <a
              href="#signup"
              onClick={closeMobileMenu}
              className="flex items-center justify-center w-full px-4 py-3 rounded-md bg-green-600 hover:bg-green-700 text-white font-medium shadow-sm transition-colors"
            >
              Sign Up Free
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Desktop Features Dropdown Backdrop */}
      {featuresDropdownOpen && (
        <div 
          className="hidden lg:block fixed inset-0 z-40"
          onClick={() => setFeaturesDropdownOpen(false)}
        />
      )}
    </>
  );
}