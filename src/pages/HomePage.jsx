import React from 'react'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import TreatmentsSlider from '../components/Treatment.jsx'
import Testimonial from '../components/Testimonial.jsx'
import OurTeamSection from '../components/OurTeamSection.jsx'
import Footer from '../components/Footer.jsx'
import TestNavBar from '../components/TestNavBar.jsx'
import Contact from '../components/Contact.jsx'


const HomePage = () => {
  

  return (
      <>
      <TestNavBar/>
      <Hero/>
      <About/>
      <TreatmentsSlider/>
      <Testimonial/>
      <OurTeamSection/>
      <Contact/>
      <Footer />
      </>
  )
}

export default HomePage