import React, {useEffect} from 'react'
import './Subscribe.css'
import {TiSocialGooglePlus} from 'react-icons/ti'
import {FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa'

import Aos from 'aos'
import 'aos/dist/aos.css'



const Subscribe = () => {

  useEffect(() => {
    Aos.init({ 
     duration:3000, once:false
    });
 })


  return (
   <section id="subscribe">
    <div className="container subscribe">
      <h2 data-aos='fade-up'>Subscribe Now...</h2>
      <form>
        <div className="form"  data-aos='fade-right'>
        <input type="text" placeholder='Enter Email here...' />
        <button>Subscribe</button></div>
        
      </form>
      <div className="social-icons" data-aos='fade-left'>
        <div className="social-icon">
          <TiSocialGooglePlus></TiSocialGooglePlus>
        </div>
        <div className="social-icon">
          <FaFacebookF></FaFacebookF>
        </div>
        <div className="social-icon">
          <FaTwitter></FaTwitter>
        </div>
        <div className="social-icon">
          <FaInstagram></FaInstagram>
        </div>

      </div>
    </div>

   </section>
  )
}

export default Subscribe