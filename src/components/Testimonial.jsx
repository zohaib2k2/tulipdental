import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const testimonials = [
    {
      id: 1,
      text: "Many people are afraid of going to the dentist, but at dentist Haude I walk in whistling and whistling outside. You hardly feel prick for anesthesia and excellent and competent treatment. My teeth are 100% healthy again and look nice. If you are looking for a dentist, I can highly recommend her.",
      name: "Johan Vermeulen"
    },
    {
      id: 2,
      text: "I ended up at this dental practice at the beginning of 2020. I was looking for a professional, professional and honest dentist to thoroughly maintain my teeth. Dentist Haude is friendly, knowledgeable and has helped me excellently with a number of treatments! In short: highly recommended for the whole family.",
      name: "Be Art"
    },
    {
      id: 3,
      text: "The entire team is professional and friendly. My dental anxiety has completely disappeared thanks to their patient approach and excellent care. Highly recommended!",
      name: "Michael from Amsterdam"
    },
    {
      id: 4,
      text: "After years of avoiding the dentist, I finally found a practice where I feel comfortable. The modern facilities and gentle treatment make all the difference.",
      name: "Lisa from Rotterdam"
    },
    {
      id: 5,
      text: "Outstanding service from start to finish. The staff is welcoming, the dentist is skilled, and the results speak for themselves. My smile has never looked better!",
      name: "Thomas from Den Haag"
    }
  ];

  const cardsPerView = 2;
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-8">
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-2">
            <p className="text-sm text-blue-400 uppercase tracking-widest mb-3">EXPERIENCES</p>
            <h1 className="text-5xl font-light text-gray-800 mb-6 leading-tight">
              REVIEWS OF <span className="font-bold text-slate-900">OUR<br/>PATIENTS</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              We are very proud of the appreciation we receive from our patients. That is why we are happy to share this with you. This way you will get a better idea of us as a dental practice.
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
                {testimonials.map((testimonial) => (
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