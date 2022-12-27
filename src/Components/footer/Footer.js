import React, {useEffect} from 'react'
import './Footer.css'
import {TbSocial} from 'react-icons/tb'
import {HiLocationMarker} from 'react-icons/hi'
import {BsTelephoneFill} from 'react-icons/bs'
import {FaFax}  from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import {CgWebsite} from 'react-icons/cg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

  useEffect(() => {
    Aos.init({ 
     duration:3000, once:false
    });
 })
  

  return (
    <footer id="footer">
      <div className="container footer">
        <div className="footer-box" data-aos='fade-right'>
           <h4>Useful Links</h4>
           <div className="useful-links">
            <ul>
             <li><a href="">&bull;Support</a></li>
            <li><a href="">&bull;About</a></li>
            <li><a href="">&bull;Learn</a></li>
            <li><a href="">&bull;Hosting</a></li>
            <li><a href="">&bull;Messenger</a></li>
            </ul>
           </div>
        </div>
        <div className="footer-box" data-aos='fade-right'>
          <h4>support</h4>
          <div className="useful-links">
            <ul>
             <li><a href="">&bull;Support</a></li>
            <li><a href="">&bull;About</a></li>
            <li><a href="">&bull;Learn</a></li>
            <li><a href="">&bull;Hosting</a></li>
            <li><a href="">&bull;Messenger</a></li>
            </ul>
           </div>
        </div>
        <div className="footer-box" data-aos='fade-right'>
          <h4>Contact Us</h4>
          <ul className='contact'>
            <li> <HiLocationMarker></HiLocationMarker>&nbsp; 
            <p> Address: Nigeria</p></li>


            <li>
              <BsTelephoneFill></BsTelephoneFill>&nbsp;
              <p>Phone: +2348066821089</p>
            </li>


            <li>
              <FaFax></FaFax>&nbsp; 
              <p>Fax:+234958832321</p>
            </li>
            <li>
              <AiOutlineMail></AiOutlineMail>&nbsp;
              <p>Mail: Osienetoby@gmail.com</p>
            </li>
            <li>
              <CgWebsite></CgWebsite>&nbsp;
              <p>Website:ThatDivDoctor.com</p>
            </li>
          </ul>
        </div>
        <div className="footer-box">
          <div className="footer-logo">
            <TbSocial size={33}></TbSocial>
            <h1>Chat<span>UP</span></h1>
          </div>
          <p >Website developed by &copy;@ThatDivDoctor</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer