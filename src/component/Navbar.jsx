import { useState, useEffect, useCallback } from "react";
import {   
  FaUserCircle,  
  FaChevronDown,  
  FaSearch,  
  FaWallet,  
  FaChartPie,  
  FaExchangeAlt,  
  FaCreditCard,  
  FaPiggyBank,  
  FaTimes
} from 'react-icons/fa';
import { Sparkles } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


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



  const navLinks = [
    { name: "Dashboard", icon: <FaWallet className="mr-2" />, path: "#dashboard" },
    { name: "Analytics", icon: <FaChartPie className="mr-2" />, path: "#analytics" },
    { name: "Transactions", icon: <FaExchangeAlt className="mr-2" />, path: "#transactions" },
    { name: "Cards", icon: <FaCreditCard className="mr-2" />, path: "#cards" },
    { name: "Savings", icon: <FaPiggyBank className="mr-2" />, path: "#savings" }
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
            {/* Logo and Mobile Menu Button */}
            <div className="flex items-center">
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

              <div className="flex items-center gap-3">
                <div className="bg-green-500 rounded-full p-2">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <span className={`text-xl font-bold transition-colors ${
                  scrolled ? 'text-gray-900' : 'text-white'
                }`}>
                  <span className={scrolled ? 'text-green-600' : 'text-green-100'}>Swift</span>Pay
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((item) => (
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

            {/* Right side controls */}
            <div className="flex items-center space-x-3">
              {/* Search Button (Mobile) */}




              {/* Language Selector */}
              <div className="relative group">
                <button className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  scrolled
                    ? 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                    : 'text-white hover:text-green-100 hover:bg-white/10'
                }`}>
                  <div className="w-5 h-5 rounded-full mr-2 bg-green-500 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">🇳🇬</span>
                  </div>
                  <span className="hidden sm:inline">EN</span>
                  <FaChevronDown className="w-3 h-3 ml-1" />
                </button>
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 hidden group-hover:block z-50 border border-gray-200">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">English</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Français</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Español</a>
                </div>
              </div>

              {/* User Profile */}
              <div className="relative group">
                <button className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  scrolled
                    ? 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                    : 'text-white hover:text-green-100 hover:bg-white/10'
                }`}>
                  <FaUserCircle className="h-6 w-6 mr-2" />
                  <span className="hidden sm:inline">John Doe</span>
                  <FaChevronDown className="w-3 h-3 ml-1" />
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block z-50 border border-gray-200">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
                </div>
              </div>
            </div>
          </div>


        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`mobile-menu-container md:hidden fixed inset-y-0 left-0 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-40 ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full overflow-y-auto">
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

          <div className="flex-1 px-2 pt-4 pb-8 space-y-1">
            {navLinks.map((item) => (
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

          <div className="px-4 py-4 border-t border-gray-200 bg-gray-50">
            <div className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-white">
              <div className="w-5 h-5 rounded-full mr-3 bg-green-500 flex items-center justify-center">
                <span className="text-white text-xs">🇳🇬</span>
              </div>
              <span>English (EN)</span>
              <FaChevronDown className="w-3 h-3 ml-auto text-gray-400" />
            </div>
            
            <button 
              onClick={closeMobileMenu}
              className="w-full mt-4 px-4 py-2 rounded-md bg-green-600 hover:bg-green-700 text-white font-medium shadow-sm transition-colors"
            >
              New Transaction
            </button>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <a href="#" className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-white">
                <FaUserCircle className="mr-3" />
                Profile Settings
              </a>
              <a href="#" className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-white">
                Sign Out
              </a>
            </div>
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


    </>
  );
}