import React from 'react'
import { Phone, MapPin, Mail, Clock, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    "/services_images/peridontology.png",
    "/services_images/endodontics.png",
    "/clinic_images/dentist_5.jpg",
    "/clinic_images/dentist_4.jpg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  
  const { language } = useLanguage();
 

  const lang_heroText = {
    nl: {
      welcome: "DENTIST BERGSCHENHOEK",
      title: "TANDHEELKUNDE VAN OPTIMALE KWALITEIT",
      description1: "Bij ons bent u in goede handen: ons enthousiaste en gekwalificeerde team werkt met de nieuwste apparatuur en is op de hoogte van de laatste ontwikkelingen. We hechten ook waarde aan een persoonlijke benadering.",
      description2: "We streven ernaar dat u een vaste behandelaar heeft en een luisterend oor voor al uw wensen en vragen."
    },
    en: {
      welcome: "DENTIST BERGSCHENHOEK",
      title: "DENTISTRY OF OPTIMAL QUALITY",
      description1: "With us you are in good hands: our enthusiastic and qualified team works with the latest equipment and is aware of the latest developments. We also value a personal approach.",
      description2: "We strive to ensure that you have a permanent practitioner and have a listening ear for all your wishes and questions."
    }
  };

  const bottom_langText = {
    nl: {
      feature1: "Alle behandelingen onder één dak!",
      feature2: "Een bezoek aan de tandarts wordt net zo gewoon als het poetsen van je tanden",
      feature3: "We werken continu volgens de nieuwste kwaliteitsnormen"
    },
    en: {
      feature1: "All treatments under one roof!",
      feature2: "A visit to the dentist becomes just as common as brushing your teeth",
      feature3: "We work continuously according to the latest quality standards"
    }
  };
  return (
    <>
    <div className="relative bg-gradient-to-br pt-16 mb-5 pb-1 bg-[#fffdf2]  overflow-hidden pb-30">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-col-2  gap-24 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <p className="text-blue-400 text-md font-semibold tracking-wider uppercase">
                {lang_heroText[language].welcome}
              </p>
              
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                {lang_heroText[language].title}
              </h1>
              
              <p className="text-gray-600 leading-relaxed text-xl">
                {lang_heroText[language].description1}
              </p>
              
              <p className="text-gray-800 font-medium text-xl">
                {lang_heroText[language].description2}
              </p>
              <div className='flex inline-flex grid-cols-1 md:grid-cols-2 items-center'>

                <button className="bg-blue-400 hover:bg-blue-500 text-white text-sm px-4 py-2 md:px-8 md:py-3 rounded-full font-medium transition-colors mt-8">
                  {language === 'nl' ? 'MAAK EEN AFSPRAAK' : 'BOOK AN APPOINTMENT'}
                </button>
              <a href="https://wa.me/+31626293999?text=Hello, I would like to inquire and book an appointment" 

              className="inline-flex bg-green-400 hover:bg-green-600 text-white  px-4 py-2 md:px-8 md:py-3 mt-8  rounded-full font-medium transition-colors ml-3">
                <svg className='h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z"/></svg>
                {language === 'nl' ? 'NEEM CONTACT OP' : 'CONTACT US'}
              </a>
              </div>
            </div>

            {/* Right Image Slider */}
            <div className="relative ">
              <div className="relative z-10 overflow-hidden rounded-lg shadow-2xl">
                {/* Slides Container */}
                <div className="relative w-full h-[500px] rounded-br-3xl">
                  {slides.map((slide, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <img
                        
                        src={slide}
                        alt={`Dentistry ${index + 1}`}
                        className="rounded-tl-3xl rounded-br-4xl w-full h-full object-cover my-2.5"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Decorative dots - indicator and navigation */}
              <div className="absolute right-8 top-1/2 transform translate-x-12 -translate-y-1/2 flex flex-col gap-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-blue-600 scale-125' 
                        : index === 0 
                        ? 'bg-blue-400' 
                        : index === 1 
                        ? 'bg-blue-600'
                        : index === 2
                        ? 'bg-slate-800'
                        : 'bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        </div>
        

         {/* Bottom Feature Bar */}
        <div className="mb-6 sticky bg-[#f7f7e8]">
          <div className="mx-auto pr-20 bg-[#fffef1]">
            <div className="bg-slate-900 text-white rounded-tr-3xl rounded-br-3xl md:rounded-tr-full md:rounded-br-full shadow-xl px-2 py-2 text-xs">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Feature 1 */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
                    </svg>
                  </div>
                  <p className="text-sm">{bottom_langText[language].feature1}</p>
                </div>

                {/* Feature 2 */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <p className="text-sm">{bottom_langText[language].feature2}</p>
                </div>

                {/* Feature 3 */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                    </svg>
                  </div>
                  <p className="text-sm">{bottom_langText[language].feature3}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    
    </>
  )
}

export default Hero