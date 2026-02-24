import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay] = useState(true);
  const { language } = useLanguage();

  const lang_testimonialText = {
    nl: {
      heading: "ERVARINGEN",
      title: "REVIEWS VAN ONZE PATIËNTEN",
      description: "We zijn erg trots op de waardering die we van onze patiënten ontvangen. Daarom delen we dit graag met u. Zo krijgt u een beter beeld van ons als tandartspraktijk.",
      button: "LEES HIER MEER REVIEWS"
    },
    en: {
      heading: "EXPERIENCES",
      title: "REVIEWS OF OUR PATIENTS",
      description: "We are very proud of the appreciation we receive from our patients. That is why we are happy to share this with you. This way you will get a better idea of us as a dental practice.",
      button: "READ MORE REVIEWS HERE"
    }
  };
  const testimonials = [
    {
      id: 1,
      text_en: "Many people are afraid of going to the dentist, but at dentist Haude I walk in whistling and whistling outside. You hardly feel prick for anesthesia and excellent and competent treatment. My teeth are 100% healthy again and look nice. If you are looking for a dentist, I can highly recommend her.",
      text_nl: "Veel mensen zijn bang om naar de tandarts te gaan, maar bij tandarts Haude loop ik fluitend naar binnen en fluitend weer naar buiten. Je voelt nauwelijks prik voor verdoving en uitstekende en vakkundige behandeling. Mijn tanden zijn weer 100% gezond en zien er mooi uit. Als je op zoek bent naar een tandarts, kan ik haar van harte aanbevelen.",
      name: "Johan Vermeulen"
    },
    {
      id: 2,
      text_en: "I ended up at this dental practice at the beginning of 2020. I was looking for a professional, professional and honest dentist to thoroughly maintain my teeth. Dentist Haude is friendly, knowledgeable and has helped me excellently with a number of treatments! In short: highly recommended for the whole family.",
      text_nl: "Ik eindigde in deze tandartspraktijk aan het begin van 2020. Ik was op zoek naar een professionele, professionele en eerlijke tandarts om mijn tanden goed te onderhouden. Tandarts Haude is vriendelijk, kundig en heeft me uitstekend geholpen met een aantal behandelingen! In het kort: sterk aanbevolen voor de hele familie.",
      name: "Be Art"
    },
    {
      id: 3,
      text_en: "The entire team is professional and friendly. My dental anxiety has completely disappeared thanks to their patient approach and excellent care. Highly recommended!",
      text_nl: "Het hele team is professioneel en vriendelijk. Mijn tandenangst is helemaal verdwenen dankzij hun patiëntgerichte aanpak en uitstekende zorg. Sterk aanbevolen!",
      name: "Michael from Amsterdam"
    },
    {
      id: 4,
      text_en: "After years of avoiding the dentist, I finally found a practice where I feel comfortable. The modern facilities and gentle treatment make all the difference.",
      text_nl: "Na jaren van vermijden van de tandarts heb ik eindelijk een praktijk gevonden waar ik me comfortabel voel. De moderne faciliteiten en zachte behandeling maken het verschil.",
      name: "Lisa from Rotterdam"
    },
    {
      id: 5,
      text_en: "Outstanding service from start to finish. The staff is welcoming, the dentist is skilled, and the results speak for themselves. My smile has never looked better!",
      text_nl: "Uitstekende service van begin tot eind. Het personeel is gastvrij, de tandarts is deskundig en de resultaten spreken voor zichzelf. Mijn glimlach heeft nooit beter gekeurd!",
      name: "Thomas from Den Haag"
    }
  ];
  // Map testimonials to include text based on current language
  const mappedTestimonials = testimonials.map(testimonial => ({
    ...testimonial,
    text: language === 'nl' ? testimonial.text_nl : testimonial.text_en
  }));

  const cardsPerView = 1;
  const maxIndex = testimonials.length - cardsPerView;

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, maxIndex]);

  const goToNext = () => {
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  };

  const goToPrev = () => {
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br bg-[#f2fafb]  flex items-center justify-center p-8">
      <div className="w-full max-w-7xl" id="testimonials">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-2">
            <p className="text-sm text-blue-400 uppercase tracking-widest mb-3"> {lang_testimonialText[language].heading} </p>
            <h1 className="text-5xl font-light text-gray-800 mb-6 leading-tight">
              {lang_testimonialText[language].title.split(' ')[0]} <span className="font-bold text-slate-900">{lang_testimonialText[language].title.split(' ').slice(1,3).join(' ')}<br/>{lang_testimonialText[language].title.split(' ').slice(3).join(' ')}</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              {lang_testimonialText[language].description}
            </p>
            <button className="px-8 py-4 border-2 border-slate-800 text-slate-800 rounded-full font-semibold hover:bg-slate-800 hover:text-white transition-all text-sm tracking-wide inline-flex items-center gap-2">
              <span>READ MORE REVIEWS HERE</span>
            </button>
          </div>

          {/* Right Slider */}
          <div className="lg:col-span-3 relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}
              >
                {mappedTestimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="min-w-[100%] md:win-w-[50%] px-4"
                    style={{ flex: '0 0 50%' }}
                  >
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full min-h-[320px] flex flex-col">
                      <Quote className="w-12 h-12 text-blue-200 mb-6" />
                      <p className="text-gray-700 text-lg leading-relaxed mb-8 flex-grow">
                        {testimonial.text}
                      </p>
                      <p className="font-bold text-slate-900 text-lg">
                        {testimonial.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-3 mt-8 justify-end">
              <button
                onClick={goToPrev}
                className="bg-slate-800 hover:bg-slate-700 p-4 rounded-full shadow-lg transition-all hover:scale-110"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={goToNext}
                className="bg-slate-800 hover:bg-slate-700 p-4 rounded-full shadow-lg transition-all hover:scale-110"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;