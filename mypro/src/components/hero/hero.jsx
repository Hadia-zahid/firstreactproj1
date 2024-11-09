import React from 'react'
import './hero.css'
import ex_arrow from '../../assets/dark-arrow.png'
const hero = () => {
  return (
    <div className='hero contoall'>
    <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>Our cutting-edge curriculum is designed to empower students with
        the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
        <button className="btn">Explore more <img src={ex_arrow} alt=''></img></button>
    </div>
    </div>
  )
}

export default hero