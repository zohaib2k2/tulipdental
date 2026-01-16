import React from 'react';

import { useLanguage } from '../context/LanguageContext';

const OurTeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "DEES",
      image: "https://images.unsplash.com/photo-1706565029539-d09af5896340?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3IlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjQ5ODI2Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 2,
      name: "EVA",
      image: "https://images.unsplash.com/photo-1615177393114-bd2917a4f74a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZG9jdG9yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY1MDI0NTI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const lang_aboutText = {
    nl: {
      heading: "ONS TEAM",
      title: "UW BETROUWBARE TANDARTS IN NOORDWIJKERHOUT",
      description: "Het Dentist van Alphen team bestaat uit meerdere mondzorgprofessionals. Onze professionals hebben ervaring in diverse disciplines in de tandheelkunde zoals kindertandheelkunde, esthetische tandheelkunde en implantologie."
    },
    en: {
      heading: "OUR TEAM",
      title: "YOUR TRUSTED DENTIST IN NOORDWIJKERHOUT",
      description: "The Dentist van Alphen team consists of several oral care professionals. Our professionals have experience in various disciplines in dentistry such as pediatric dentistry, aesthetic dentistry and implantology."
    }
  };

  const { language } = useLanguage();
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Team Photos */}
          <div className="grid grid-cols-2 gap-6">
            {teamMembers.map((member) => (
              <div key={member.id} className="relative group cursor-pointer">
                <div className="relative overflow-hidden rounded-3xl aspect-[3/4] shadow-xl">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-8">
                    <h3 className="text-white font-bold text-3xl tracking-wider">
                      {member.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Content */}
          <div className="lg:pl-12">
            <p className="text-sm text-blue-400 uppercase tracking-widest mb-3">{lang_aboutText[language].heading}</p>
            <h1 className="text-5xl font-light text-gray-800 mb-6 leading-tight">
              {lang_aboutText[language].title.split(' ')[0]} <span className="font-bold text-slate-900">
                {lang_aboutText[language].title.split(' ').slice(1,3).join(' ')}
                </span><br/>
              {lang_aboutText[language].title.split(' ').slice(3, 4).join(' ')}<br/>
              <span className="font-bold text-slate-900">NOORDWIJKERHOUT</span>
            </h1>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              {lang_aboutText[language].description}
            </p>
            <button className="px-10 py-4 border-2 border-slate-800 text-slate-800 rounded-full font-bold hover:bg-slate-800 hover:text-white transition-all text-sm tracking-wide">
              VIEW OUR TEAM
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeamSection;