
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Treatment = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

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
      image: "/services_images/cosmetic_dentist.jpg"
    },
    {
      id: 7,
      title: "DENTAL HYGIENE",
      image: "/services_images/dental_hygiene.jpg"

    },
    {
        id: 8,
        title: "PERODIC DENTISTRY",
        image: "/clinic_images/dentist_4.jpg"
    },
    {
        id: 9,
        title: "DENTAL  PROSTHETICS",
        image: "/services_images/impant.png"
    },
    {
        id: 10,
        title: "ENDODONTICS",
        image: "/services_images/endodontics.png"
    },
    {
        id: 11,
        title: "TEETH WHITENING",
        image: "/services_images/teeth_whitening.png"
    }
  ];

  const cardsPerView = 4;
  const maxIndex = treatments.length - cardsPerView;

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

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-3 md:p-8">
      <div className="w-full max-w-7xl">
        {/* Header Section */}
        <div className="mb-12">
          <p className="text-sm text-gray-400 uppercase tracking-widest mb-2">TREATMENTS</p>
          <h1 className="text-5xl font-light text-gray-800 mb-6">
            WHAT WE <span className="font-bold text-gray-900">OFFER</span>
          </h1>
          <p className="text-gray-600 max-w-2xl text-lg">
            We offer comprehensive dental care, aimed at maintaining your oral health and a radiant smile for the whole family.
          </p>
        </div>

        <div className="relative">
          {/* Slider Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}
            >
              {treatments.map((treatment) => (
                <div
                  key={treatment.id}
                  className="min-w-[100%] md:min-w-[25%] px-3"
                  style={{ flex: '0 0 25%' }}
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
          <button
            onClick={goToPrev}
            className="absolute right-16 -bottom-20 bg-slate-800 hover:bg-slate-700 p-4 rounded-full shadow-lg transition-all hover:scale-110 z-10"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 -bottom-20 bg-slate-800 hover:bg-slate-700 p-4 rounded-full shadow-lg transition-all hover:scale-110 z-10"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* All Treatments Button */}
        <div className="flex justify-center mt-16">
          <button className="px-10 py-4 border-2 border-slate-800 text-slate-800 rounded-full font-semibold hover:bg-slate-800 hover:text-white transition-all text-sm tracking-wide">
            ALL TREATMENTS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Treatment;