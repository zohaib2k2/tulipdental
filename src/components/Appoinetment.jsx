import {React, useState} from 'react'
import { Calendar, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { useLanguage } from "../context/LanguageContext"


const Appoinetment = () => {

  const { language } = useLanguage();
  const lang_appointmentText = {
    nl: {
      heading: " AFSPRAAK AANVRAGEN",
      title: "AFSPRAAK AANVRAGEN",
      description: "Vul het onderstaande formulier in en wij nemen spoedig contact met u op.",
      successMessage: "Uw afspraak is succesvol gepland. We nemen spoedig contact met u op."
    },
    en: {
      heading: "REQUEST AN APPOINTMENT",
      title: "REQUEST AN APPOINTMENT",
      description: "Fill out the form below and we'll get back to you shortly.",
      successMessage: "Your appointment has been successfully scheduled. We will get back to you shortly."
    }
  };
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    preferredDate: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch("http://192.168.0.108:5500/api/appointments", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      setSuccess(true);
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        preferredDate: '',
        message: ''
      });

      // Hide success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);

    } catch (err) {
      setError(err.message || 'Failed to schedule appointment. Please try again.');
    } finally {
      setLoading(false);
    }
  };
    return (
     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {lang_appointmentText[language].title}
            </h1>
            <p className="text-gray-600">
              {lang_appointmentText[language].description}
            </p>
          </div>

          {/* Success Message */}
          {success && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-green-800">{language === 'nl' ? 'Succes!' : 'Success!'}</h3>
                <p className="text-green-700 text-sm">
                  {lang_appointmentText[language].successMessage}
                </p>
              </div>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start">
              <AlertCircle className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-red-800">Error</h3>
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                {language === 'nl' ? 'Volledige naam' : 'Full Name'}
                <span className="text-red-500">*</span>
              </label>
              <input 
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder={language === 'nl' ? 'Voer uw volledige naam in' : 'Enter your full name'}
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                {language === 'nl' ? 'E-mail' : 'Email'}
                <span className="text-red-500">*</span>
              </label>
              <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder={language === 'nl' ? 'Voeg uw e-mailadres toe' : 'Enter your email'}
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                {language === 'nl' ? 'Telefoonnummer' : 'Phone'}
                <span className="text-red-500">*</span>
              </label>
              <input 
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder={language === 'nl' ? 'Voer uw telefoonnummer in' : 'Enter your phone number'}
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                {language === 'nl' ? 'Voorkeursdatum' : 'Preferred Date'}
              </label>
              <input 
                type="date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                required
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                {language === 'nl' ? 'Bericht' : 'Message'}
              </label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                placeholder= {`${language === 'nl' ? 'Voeg hier uw bericht toe (optioneel)' : 'Add your message here (optional)'}`}
              />
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="w-full px-10 py-4 border-2 border-slate-800 text-slate-800 rounded-full font-bold hover:bg-slate-800 hover:text-white transition-all text-sm tracking-wide disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {loading ? (
                <>
                  <Loader className="w-5 h-5 mr-2 animate-spin" />
                  {language === 'nl' ? 'Bezig met verzenden...' : 'Submitting...'}
                </>
              ) : (
                language === 'nl' ? 'Afspraak plannen' : 'Schedule Appointment'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Appoinetment