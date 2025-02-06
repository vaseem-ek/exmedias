import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Service from '../components/Service'
import Experience from '../components/Experience'
import Deliverables from '../components/Deliverables'
import Comment from '../components/Comment'
import About from '../components/About'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className=''>
      <Navbar/>
      <Hero/>
      <Service/>
      <Experience/>
      <Deliverables/>
      <Comment/>
      <About/>
      <Footer/>
    </div>
  )
}

export default Home
