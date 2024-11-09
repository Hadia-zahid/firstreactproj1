import React from 'react'
import './contact.css'
import msg from '../../assets/msg-icon.png'
import mail from '../../assets/mail-icon.png'
import phone from '../../assets/phone-icon.png'
import location from '../../assets/location-icon.png'
import arrow from '../../assets/white-arrow.png'
const contact = () => {
  return (
    <div className='contact'>
<div className='contact-col'>
    <h3>Send us a message<img src={msg } alt=''></img></h3>
    <p>Feel free to reach out through contact form or find our 
    contact information below. Your feedback, questions, and suggestions are
     important to us as we strive to provide exceptional service to our university community.</p>
     <ul>
        <li><img src={mail} alt=''></img>Contact@GreatStack.dev</li>
        <li><img src={phone} alt=''></img>+1 123-456-7890</li>
        <li><img src={location} alt=''></img>77 Massachusetts Ave, Cambridge
        MA 02139, United States</li>
     </ul>
</div>
<div className='contact-col'>
    <form>
        <label>Your Name</label>
        <input type='text' name='name' placeholder='Enter your name' required></input>
        <label>Phone Number</label>
        <input type='tel' name='phone' placeholder='Enter Your mobile number' required></input>
        <label>Your Email</label>
        <input type='email' name='email' placeholder='Enter your email id' required></input>
        <label>Write your message here</label>
        <textarea  name='message' rows="6" placeholder='Enter Your message' required></textarea>
        <button type='submit' className='btn dark-btn'>Submit now<img src={arrow} alt=''></img></button>
    </form>
</div>
    </div>
  )
}

export default contact