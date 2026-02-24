

import { useLanguage } from "../context/LanguageContext"

const About = () => {
  const { language } = useLanguage();
  
  const lang_aboutText = {
    nl: {
      heading: "HEEL WELKOM",
      title: "OVER TANDARTS VAN ALPHEN",
      description: "Tandarts van Alphen is een professionele organisatie waar tandheelkunde van optimale kwaliteit wordt geleverd. Wij streven er naar om onze patiënten tevreden te laten vertrekken.",
      description2: "Wij betrekken veel aandacht voor goede service en geloven dat het belangrijk is om u goed te informeren over behandelingen voorafgaand aan de behandeling. Wij gebruiken procedures gebaseerd op richtlijnen van de professionele vereniging en wetenschappelijke verenigingen in mondhygiëne."
    },
    en: {
      heading: "VERY WELCOME",
      title: "ABOUT DENTIST OF ALPHEN",
      description: "Dentist of Alphen is a professional organization where dental care of optimal quality is provided. We strive to ensure that our patients go home satisfied.",
      description2: "We pay a lot of attention to good service and believe it is important to inform you carefully about treatments in advance. We use procedures based on guidelines from the professional association and scientific associations in oral care."
    }
  };

  return (
    <>
      <div className="bg-[#f2fafb] flex items-center justify-center" id="about">
        <div className="max-w-7xl mt-4 w-full grid md:grid-cols-2 gap-40 items-center md-20 pb-7">
          {/* Left Side - Image */}
          <div className="relative m-4 md:m-0">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-zinc-700 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80"
                alt="Dental office waiting room"
                className="w-[2000px] h-[460px] md:w-[2000px] md:h-[600px] object-cover border-3 border-zinc-100"
              />
            </div>

            {/* Contact Card */}
            <div className="absolute bottom-0 left-0 bg-white rounded-2xl shadow-xl p-6 m-4 max-w-xs">
              <h3 className="text-slate-400 text-sm font-medium mb-2">
                {language === 'nl' ? 'Neem contact met ons op' : 'Contact Us'}
              </h3>
              <p className="text-slate-800 text-lg">
                Call us: <span className="font-semibold">(0252) - 37 29 96</span>
              </p>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-2">
            <div>
              <p className="text-slate-400 font-medium tracking-wider mb-1 pl-4">
                {lang_aboutText[language].heading}
              </p>
              <h1 className="text-5xl font-bold text-slate-800 mb-1 pl-3">
                {lang_aboutText[language].title}
              </h1>
            </div>

            <div className="space-y-9 text-slate-600 leading-relaxed max-w-xl text-base md:text-xl pl-3">
              <p>
                {lang_aboutText[language].description}
              </p>
              <p>
                {lang_aboutText[language].description2}
              </p>
            </div>
            <a href="https://wa.me/+31626293999?text=Hello, I would like to inquire and book an appointment">
            <button class="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-colors z-50" aria-label="Contact us on WhatsApp"><svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"></path></svg></button>
            </a>
           <div className='flex'>
            <button className="border-2 border-slate-800 text-slate-800 px-8 py-3 rounded-full font-medium hover:bg-slate-800 hover:text-white transition-colors duration-300 mt-4 mx-auto">
              {language === 'nl' ? 'MEER OVER ONS' : 'MORE ABOUT US'}
            </button>
            </div> 
          </div>
        </div>
      </div>
    </>
  )
}

export default About