
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

import { useLanguage } from "../context/LanguageContext"


const Footer = () => {
  const { language } = useLanguage();
  return (
    <footer className="bg-[#35737e] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Dentist van Alphen</h3>
            <p className="text-white leading-relaxed mb-6">
              {language === 'nl' ?
              'Bij Dentist van Alphen streven we ernaar om hoogwaardige tandheelkundige zorg te bieden in een comfortabele en vriendelijke omgeving. Ons toegewijde team van professionals staat klaar om aan al uw tandheelkundige behoeften te voldoen.'
              :
              'At Dentist van Alphen, we strive to provide high-quality dental care in a comfortable and friendly environment. Our dedicated team of professionals is ready to meet all your dental needs.'
              }
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">
              { language === 'nl' ? 'Snelle Links' : 'Quick Links' }
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white hover:text-white transition-colors">
                { language === 'nl' ? 'Home' : 'Home' }
                </a></li>
              <li><a href="#" className="text-white hover:text-white transition-colors">
                { language === 'nl' ? 'Over ons' : 'About Us' }</a></li>
              <li><a href="#" className="text-white hover:text-white transition-colors">
                { language === 'nl' ? 'Behandelingen' : 'Treatments' }</a></li>
              <li><a href="#" className="text-white hover:text-white transition-colors">
                { language === 'nl' ? 'Ons team' : 'Our Team' }</a></li>
              <li><a href="#" className="text-white hover:text-white transition-colors">
                { language === 'nl' ? 'Reviews' : 'Reviews' }</a></li>
              <li><a href="#" className="text-white hover:text-white transition-colors">
                { language === 'nl' ? 'Contact' : 'Contact' }</a></li>
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="text-lg font-bold mb-6">
              { language === 'nl' ? 'Behandelingen' : 'Treatments' }
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white hover:text-white transition-colors"> 
                { language === 'nl' ? 'Tandimplantaten' : 'Dental Implants' }
              </a></li>
              <li><a href="#" className="text-white hover:text-white transition-colors">
                { language === 'nl' ? 'Tandenblekken' : 'Teeth Whitening' }</a></li>
              <li><a href="#" className="text-white hover:text-white transition-colors">
                { language === 'nl' ? 'Orthodontie' : 'Orthodontics' }</a></li>
              <li><a href="#" className="text-white hover:text-white transition-colors">
                { language === 'nl' ? 'Algemene tandheelkunde' : 'General Dentistry' }</a></li>
              <li><a href="#" className="text-white hover:text-white transition-colors">
                { language === 'nl' ? 'Cosmetische tandheelkunde' : 'Cosmetic Dentistry' }</a></li>
              <li><a href="#" className="text-white hover:text-white transition-colors">
                { language === 'nl' ? 'Injectables' : 'Injectables' }</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">
              { language === 'nl' ? 'Contact Informatie' : 'Contact Information' }
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <span className="text-white">
                  Hoofdstraat 123<br/>
                  2211 XA Noordwijkerhout<br/>
                  Netherlands
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="tel:+31123456789" className="text-white hover:text-white transition-colors">
                  +31 12 345 6789
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:info@dentistvanalphen.nl" className="text-white hover:text-white transition-colors">
                  info@dentistvanalphen.nl
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <div className="text-white">
                  <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                  <p>Sat: 9:00 AM - 2:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex flex-row justify-between items-center gap-4">
            <p className="text-white text-sm">
              © 2024 Dentist van Alphen. {language === 'nl' ? 'Alle rechten voorbehouden.' : 'All rights reserved.'}
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-white hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-white hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;