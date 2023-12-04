import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutImg from '../assets/4444.jpg'

const Contact = () => {
  return (
    <>
    <Navbar />
    <Hero 
    cName="hero-mid"
    heroImg={AboutImg}
    title="Contact Us"
    btnClass="hide"
    />
    </>
  )
}

export default Contact