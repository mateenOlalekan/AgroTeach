import { Menu, ChevronDown, X } from 'lucide-react';
import { useState, useCallback, useMemo } from 'react';
import country from "../assets/nigeria.png";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

 
  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);


  const navLinks = useMemo(() => [
    { href: '#', label: 'Products' },
    { href: '#', label: 'Pricing' },
    { href: '#', label: 'About' },
    { href: '#', label: 'Blog' },
    { href: '#', label: 'Support' }
  ], []);

  return (
    <nav className="w-full bg-gradient-to-br from-emerald-900 to-emerald-950  sticky top-0 z-50 ">
      <div className="max-w-7xl mx-auto  ">
        {/* Main Navbar */}
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-yellow-400 text-2xl font-bold mr-1">⚡</span>
            <span className="font-bold text-2xl text-white">Fintech</span>
          </div>

          
          <div className="hidden md:flex md:items-center md:space-x-4">
            <div className="flex space-x-4">
              {navLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href} 
                  className="text-white text-lg hover:text-yellow-500 px-3 py-2 text-sm font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-yellow-400"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-3 ml-2">
              <div className="flex items-center cursor-pointer group relative">
                <img 
                  src={country} 
                  alt="UK Flag" 
                  className="w-5 h-5 rounded-full mr-2" 
                />
                <span className="text-white">EN</span>
                <ChevronDown className="w-4 h-4 ml-1 text-white group-hover:text-yellow-500 transition-colors duration-200" />
              </div>
              
              <span className='text-xl text-white'>|</span>
              <button 
                className="bg-yellow-400 hover:bg-yellow-500 text-emerald-950 px-4 py-2 rounded-full font-medium transition-colors duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                aria-label="Sign Up"
              >
                Open Account
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-yellow-500 focus:outline-none transition-colors duration-200"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Slide from right */}
      <div 
        className={`fixed inset-y-0 right-0 md:hidden flex flex-col w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } z-50`}
      >
        <div className="flex justify-between items-center px-4 h-16 border-b border-gray-200">
          <div className="font-bold text-lg text-gray-900">Menu</div>
          <button
            onClick={closeMobileMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-yellow-500 focus:outline-none transition-colors duration-200"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto py-4">
          <div className="px-4 space-y-3">
            {navLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href} 
                className="block px-3 py-2.5 text-base font-medium text-gray-700 hover:text-yellow-500 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                onClick={closeMobileMenu}
              >
                {link.label}
              </a>
            ))}
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-200 px-4">
            <div className="flex items-center px-3 py-2.5 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors duration-200">
              <img 
                src="/api/placeholder/20/20" 
                alt="UK Flag" 
                className="w-5 h-5 rounded-full mr-2" 
              />
              <span className="text-gray-700">EN</span>
              <ChevronDown className="w-4 h-4 ml-1 text-gray-500" />
            </div>
            
            <div className="mt-4 space-y-3">
              <a 
                href="#" 
                className="block px-3 py-2.5 text-base font-medium text-gray-700 hover:text-yellow-500 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                onClick={closeMobileMenu}
              >
                Login
              </a>
              <button 
                className="w-full text-left px-3 py-2.5 bg-yellow-400 hover:bg-yellow-500 text-emerald-950 rounded-lg font-medium transition-colors duration-200 shadow-sm"
                aria-label="Sign Up"
                onClick={closeMobileMenu}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Backdrop overlay when mobile menu is open */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-25 md:hidden z-40"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}
    </nav>
  );
}

export default Navbar;