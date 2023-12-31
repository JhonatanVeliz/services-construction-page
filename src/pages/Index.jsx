import React from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import About from '../components/About';
import LocationMap from '../components/LocationMap';
import Testimonials from '../components/Testimonials';
import Formulario from '../components/Formulario';
import ButtonContacto from '../components/ButtonContacto';
import Fundador from '../components/Fundador';

const Index = () => {
  return (
    <>
      <ButtonContacto />
      <Hero />
      <Fundador />
      <Skills />
      <About />
      <LocationMap />
      <Testimonials />
      <Formulario />
    </>
  )
}

export default Index