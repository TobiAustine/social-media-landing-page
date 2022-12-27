import React from 'react'
import './Navbar.css'
import {TbSocial} from 'react-icons/tb'
import {BiMenuAltRight} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import { useState } from 'react'
import Button from '../UI/button/Button'
import '../UI/button/Button.css'
const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)

    const togglemenu = () => {
        setShowMenu(!showMenu)
    }



  return (
    <nav className='navbar'>
        <div className="container nav">

     
        <div className="logo">
            <TbSocial color='#fff' size={33}></TbSocial>
            <p className="logo-text">chat<span>UP</span></p>
        </div>
        <menu>
            <ul className="nav-links" id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hidden"}>  
                <li><a href="#">Home</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#download">Download</a></li>
                <li><a href="#">Subscribe</a></li>
                {/* <li ><a href="" className='btn btn-dark'>Get Started</a></li> */}
                <li className='nav-btn'><Button href={'#faq'}  btnClass={'btn-dark'} text={'Get Started'} ></Button></li>
               
               
            </ul>
        </menu>
        <div className="menu-icons" onClick={togglemenu}>
            {showMenu ? <AiOutlineClose color='#fff' size={28}></AiOutlineClose>  :  <BiMenuAltRight color='#fff'size={28} ></BiMenuAltRight>}
        </div>
          </div>
    </nav>
  )
}

export default Navbar