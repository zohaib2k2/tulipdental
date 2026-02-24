import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Appoinetment from './Appoinetment';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { language } = useLanguage();

  const lang_text = {
    nl: {
      heading: "NEEM CONTACT OP",
      title: "NEEM CONTACT OP",
      description: "Maak een afspraak of neem contact met ons op voor vragen",
      contact_info: "Contact Informatie"
    },
    en: {
      heading: "GET IN TOUCH",
      title: "GET IN TOUCH",
      description: "Schedule an appointment or reach out to us with any questions",
      contact_info: "Contact Information"
    }
  };
  return (
    <>
    <section id="contact" className="py-20 bg-[#f2fafb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4 text-xl text-bold">{lang_text[language].title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {lang_text[language].description}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-gray-900 mb-6">{}</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-gray-900">Address</p>
                  <p className="text-gray-600">123 Dental Street, Suite 100<br />New York, NY 10001</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-gray-900">Phone</p>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-gray-900">Email</p>
                  <p className="text-gray-600">contact@dentalcare.com</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-gray-900">Hours</p>
                  <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 2:00 PM<br />Sunday: Closed</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <img 
                src="https://images.unsplash.com/photo-1758653500342-5476c8ec3da6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50aXN0JTIwcGF0aWVudCUyMGNhcmV8ZW58MXx8fHwxNzY1MDg3MDg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Patient care"
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>
          </div>
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-2 rounded-xl shadow-lg">
            <Appoinetment />
          </div>
        </div>
      </div>
    </section>
  );
    </>
)
}

export default Contact;
