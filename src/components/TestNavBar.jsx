import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Mail, Clock, Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';


export default function TestNavBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const { language, setLanguage } = useLanguage();
  const switchLanguage = () => {
  setLanguage(language === 'nl' ? 'en' : 'nl');
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);
  
  const navItems = [
    'Corporate',
    'Our Branches',
    'Our Treatments',
    'Our Doctors',
    'Blog',
    'Appointments'
  ];
  const lang_navItems = {
    nl: [
      'Bedrijf',
      'Onze Vestigingen',
      'Onze Behandelingen',
      'Onze Artsen',
      'Blog',
      'Afspraken'
    ],
    en: [
      'Corporate',
      'Our Branches',
      'Our Treatments',
      'Our Doctors',
      'Blog',
      'Appointments'
    ]
  };
  return (
    <div className="bg-gray-50">
      <nav
        className={`fixed top-0 left-0 right-0 bg-[#FFFEF6] shadow-lg z-50 transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Top Bar - Hidden on mobile */}
        <div className="hidden md:block bg-slate-800 text-white py-2 px-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+31 10 714 4922</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@andartsvanalpen.nl</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Julianalaan 2, 2661 EL Bergschenhoek</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>We are open today until 5:00 PM</span>
            </div>
          </div>
        </div>
        
        {/* Main Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#FFFEF6]">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-32 h-12 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-sm">
                <img src="/navbar_logo2.png" alt="HealthCare Logo" className="h-16 w-54" />
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {lang_navItems[language].map((item, index) => (
                <button
                  key={index}
                  className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 text-sm font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
            {/* <button
            onClick={() => setLanguage('nl')}
            className={`px-5 py-1 rounded font-medium ${
              language === 'nl' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            NL
          </button>
          <button
            onClick={() => setLanguage('en')}
            className={`px-5 py-1 rounded font-medium ${
              language === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            EN
          </button> */}
           {/* <button
            onClick={switchLanguage}
            className="relative w-16 h-8 bg-gray-300 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            style={{ backgroundColor: language === 'dutch' ? '#3b82f6' : '#d1d5db' }}
          >
            <div
              className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300"
              style={{ transform: language === 'dutch' ? 'translateX(32px)' : 'translateX(0)' }}
            />
          </button> */}
          <div className="flex items-center justify-center gap-3">
          <span className={`text-sm font-medium ${language === 'en' ? 'text-blue-600' : 'text-gray-400'}`}>
            English
          </span>
          
          <button
            onClick={switchLanguage}
            className="relative w-16 h-8 bg-gray-300 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            style={{ backgroundColor: language === 'nl' ? '#3b82f6' : '#d1d5db' }}
          >
            <div
              className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300"
              style={{ transform: language === 'nl' ? 'translateX(32px)' : 'translateX(0)' }}
            />
          </button>
          
          <span className={`text-sm font-medium ${language === 'nl' ? 'text-blue-600' : 'text-gray-400'}`}>
            Dutch
          </span>
        </div>
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden bg-[#FFFEF6] overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 pt-2 pb-4 space-y-1 border-t border-gray-200">
            {navItems.map((item, index) => (
              <button
                key={index}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 rounded-md font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </button>
            ))}
            
            {/* Mobile Contact Info */}
            <div className="pt-4 mt-4 border-t border-gray-200 space-y-3 text-sm text-gray-600">
              <div className="flex items-center gap-2 px-4">
                <Phone className="w-4 h-4 text-blue-600" />
                <span>+31 10 714 4922</span>
              </div>
              <div className="flex items-center gap-2 px-4">
                <Mail className="w-4 h-4 text-blue-600" />
                <span className="text-xs">info@andartsvanalpen.nl</span>
              </div>
              <div className="flex items-center gap-2 px-4">
                <Clock className="w-4 h-4 text-blue-600" />
                <span>Open until 5:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
    </div>
  );
}