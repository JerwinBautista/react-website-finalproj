import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutImg from '../assets/2222.jpg'
import Footer from '../components/Footer'
import AboutUs from '../components/AboutUs'
const About = () => {
  return (
    <>
        <Navbar />
        <Hero 
        cName="hero-mid"
        heroImg={AboutImg}
        title="About Crafted"
        btnClass="hide"
        />
        <AboutUs />
        <Footer />
        </>
  )
}

export default About