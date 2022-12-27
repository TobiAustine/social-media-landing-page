import React, {useEffect} from 'react'
import './Header.css'
import phonend from '../../Images/phoneInHand.jpg'
import Button from '../UI/button/Button'
import {CgScrollV} from 'react-icons/cg'

import Aos from 'aos';
import 'aos/dist/aos.css'

const Header = () => {
  useEffect(() => {
     Aos.init({ 
      duration:3000, once:false
     });
  })
  

  return (
    <section id="header">
        <div className="container header">
          
          <div className="header-left" data-aos='fade-right'>
            <h1> <span> THE WORLD'S BEST</span>SOCIAL MEDIA PLATFORM</h1>

            <hr/>
           
            <p className='u-text-sm u-text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis officia obcaecati modi rem ut recusandae fuga asperiores? Voluptatum, dolorum.</p>

            <div className="header-cta">
            <Button text={'Learn More'} href={'#faq'} btnClass={'btn-orange'}></Button>
            <Button text={'Sign In'} href={'#faq'} btnClass={'btn-dark'}></Button>
            </div>
            
          </div>
          
          <div className="header-right" data-aos= 'fade-left' data-aos-once="false">
            <img src={phonend} alt="" />
            </div>


           
        </div>  <div className="floating-icon">
                <a href="#features">
                <CgScrollV size={45} className='mouse'  ></CgScrollV>
                </a>
            </div>
       
    </section>
  )
}

export default Header