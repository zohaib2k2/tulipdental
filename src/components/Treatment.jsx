
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import cosmeticImage from '../../public/services_images/cosmetic_dentist.jpg';
import hygieneImage from '../../public/services_images/dental_hygiene.jpg';
import endodonticsImage from '../../public/services_images/endodontics.png';
import impantImage from '../../public/services_images/impant.png';
import whitteningImage from '../../public/services_images/teeth_whitening.png';
import dentist4Image from '../../public/clinic_images/dentist_4.jpg';
import { useLanguage } from '../context/LanguageContext';

const Treatment = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const { language } = useLanguage();

  const treatments = [
    {
      id: 1,
      title: "GENERAL DENTISTRY",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      title: "FILLS",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      title: "INJECTABLES",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop"
    },
    {
      id: 4,
      title: "IMPLANTOLOGY",
      image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&h=400&fit=crop"
    },
    {
      id: 5,
      title: "ORTHODONTICS",
      image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&h=400&fit=crop"
    },
    {
      id: 6,
      title: "COSMETIC DENTISTRY",
      image: cosmeticImage
    },
    {
      id: 7,
      title: "DENTAL HYGIENE",
      image: hygieneImage

    },
    {
        id: 8,
        title: "PERODIC DENTISTRY",
        image: dentist4Image
    },
    {
        id: 9,
        title: "DENTAL  PROSTHETICS",
        image: impantImage
    },
    {
        id: 10,
        title: "ENDODONTICS",
        image: endodonticsImage
    },
    {
        id: 11,
        title: "TEETH WHITENING",
        image: whitteningImage
    }
  ];

  // onmobile show 1 card, on desktop show 4 cards
  const cardsPerView = isDesktop ? 4 : 1;
  const maxIndex = treatments.length - cardsPerView;

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay, maxIndex]);

  const goToNext = () => {
    setIsAutoPlay(false);
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  };

  const goToPrev = () => {
    setIsAutoPlay(false);
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
  };

  const lang_treatmentText = {
    nl: {
      title: "WAT WE AANBIEDEN",
      description: "Onze uitgebreide tandheelkundige diensten zijn gericht op het waarborgen van de mondgezondheid van uw gezin, terwijl we mooie, zelfverzekerde glimlachen creëren en behouden."
    },
    en: {
      title: "WHAT WE OFFER",
      description: "Our comprehensive dental services are dedicated to safeguarding your family's oral health while creating and maintaining beautiful, confident smiles."
    }
  };
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-3 md:p-8" id="treatments">
      <div className="w-full max-w-7xl">
        {/* Header Section */}
        <div className="mb-12">
          <p className="text-sm text-gray-400 uppercase tracking-widest mb-2">
            {language === 'nl' ? 'Onze Behandelingen' : 'Our Treatments'}
          </p>
          <h1 className="text-5xl font-light text-gray-800 mb-6">
            {lang_treatmentText[language].title.split(' ').splice(0, 2).join(' ')} <span className="font-bold">{lang_treatmentText[language].title.split(' ').slice(2).join(' ')}</span>
          </h1>
          <p className="text-gray-600 max-w-2xl text-lg">
            {lang_treatmentText[language].description}
          </p>
        </div>

        <div className="relative">
          {/* Slider Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 md:duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}
            >
              {treatments.map((treatment) => (
                <div
                  key={treatment.id}
                  className={`min-w-[100%] ${isDesktop ? 'md:min-w-[25%]' : ''} px-3`}
                  style={{ flex: isDesktop ? '0 0 25%' : '0 0 100%' }}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer">
                    <img 
                      src={treatment.image} 
                      alt={treatment.title}
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div className="absolute -top-1 -left-1 ">
                      <h3 className="text-white border-4 border-blue-400 font-bold text-lg tracking-wide bg-slate-800/90 px-4 py-2 rounded-br-xl ">
                        {treatment.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-3 mt-8 mb-0">
            <button
              onClick={goToPrev}
              className="bg-slate-800 hover:bg-slate-700 p-4 rounded-full shadow-lg transition-all hover:scale-110 z-10"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={goToNext}
              className="bg-slate-800 hover:bg-slate-700 p-4  rounded-full shadow-lg transition-all hover:scale-110 z-10"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* All Treatments Button */}
        <div className="flex justify-center mt-8">
          <button className="px-10 py-4 border-2 border-slate-800 text-slate-800 rounded-full font-semibold hover:bg-slate-800 hover:text-white transition-all text-sm tracking-wide">
            {language === 'nl' ? 'ALLE BEHANDELINGEN' : 'ALL TREATMENTS'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Treatment;