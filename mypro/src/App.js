import React, { useState } from 'react'
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero'
import Program from './components/program/program'
import Title from './components/title/title'
import About from './components/About/about'
import Campus from './components/campus/campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import Video from './components/video/video'
const App = () => {
  const [playState, setplayState] = useState(false);
  return (
    <div>
        <Navbar/>
        <Hero/>
        <div className='contoall'>
        <Title subTitle='OUR PROGRAM' title='What We Offer'/>
        <Program/>
        <About setplayState={setplayState} />
        <Title subTitle='Gallery' title='Campus Photos'/>
        <Campus/>
        <Title subTitle='TESTIMONIALS' title='What Student Says'/>
        <Testimonials/>
        <Title subTitle='Contact Us' title='Get in Touch'/>
        <Contact/>
        <Footer/>
        </div>
        <Video playState={playState} setplayState={setplayState}/>
    </div>
  )
}

export default App