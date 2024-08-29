import { useState } from 'react'
import './App.css'
import Header from './sections/Header'
import Hero from './sections/Hero'
import About from './sections/About'
import SkillsSection from './sections/TecnologiesSection'
import ServiceSection from './sections/ServiceSection'
import ProjectSection from './sections/ProjectSection'
import ContactSection from './sections/ContactSection'
import Footer from './sections/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <SkillsSection />
      <ServiceSection />
      <ProjectSection />
      <ContactSection /> 
      <Footer />
    </div>
  )
}

export default App
