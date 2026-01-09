
import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Mail, Clock, Menu} from 'lucide-react';

const NavBar = () => {
const [isVisible, setIsVisible] = useState(true);
const [lastScrollY, setLastScrollY] = useState(0);
const [isOpen, setIsOpen] = useState(false);

const toggleMenu = () => {setIsOpen(!isOpen)};

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
  return (
    <>
        <nav
        className={`fixed top-0 left-0 right-0 bg-[#FFFEF6] shadow-lg z-50 transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="bg-slate-800 text-white py-2 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
        {/* Left side - Contact info */}
        <div className="flex items-center gap-8">
          {/* Phone */}
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>+31 10 714 4922</span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>info@andartsvanalpen.nl</span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Julianalaan 2, 2661 EL Bergschenhoek</span>
          </div>
        </div>

        {/* Right side - Opening hours */}
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>We are open today until 5:00 PM</span>
        </div>
      </div>
    </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#FFFEF6]">
          <div className="flex items-center justify-between h-16">
            <div className=" flex items-center gap-2">
              <img src="/navbar_logo2.png" alt="HealthCare Logo" className="h-16 w-54" />
              {/* <h1 className="text-2xl font-bold text-blue-600">Bergschenhoek Dental </h1> */}
            </div>
            
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  className="px-4 py-2 text-gray-700 hover:text-blue-300 transition-colors duration-200 text-sm"
                >
                  {item}
                </button>
              ))}
            </div>

            <button className="md:hidden p-2" onClick={toggleMenu}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            
          </div>
        </div>
      </nav>
    </>
)
}

export default NavBar