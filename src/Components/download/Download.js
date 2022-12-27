import React, {useEffect} from 'react'
import {FaApple, FaWindows} from 'react-icons/fa'
import {GrAndroid} from 'react-icons/gr'
import { IconContext } from 'react-icons'
import './Download.css'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Download = () => {
  useEffect(() => {
    Aos.init({ 
     duration:3000, once:false
    });
 })
  


  return (
    <section id='download'>
      <div className="container download">
        <h2 data-aos='fade-right'>ChatUP SOCIAL MESSENGER</h2>
        <p className="u-text-sm u-text-light">Our Apps are available on all OS...</p>

        <IconContext.Provider value={{size:'25', color:'white'}}>
        <div className="download-icons" data-aos='fade-left'>
          <div className="download-icon"><GrAndroid  ></GrAndroid> <p>Android</p></div>
          <div className="download-icon">
            <FaApple  ></FaApple> <p>IOS</p>
          </div>
          <div className="download-icon">
            <FaWindows  ></FaWindows> <p>Windows</p>
          </div>
         
        </div>
        
         </IconContext.Provider>
      </div>



    </section>
  )
}

export default Download