import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import { Fade } from "react-awesome-reveal";

function App() {
  return (
    <>
      <Fade>
        <Navbar />
        <Hero />
      </Fade>
      <Fade>
        <Features />
        <Testimonials />
        <CTA />
      </Fade>
      <Fade>
        <Footer />
      </Fade>
      
    </>
  )
}

export default App