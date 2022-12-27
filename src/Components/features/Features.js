import React, {useEffect} from 'react'
import {BsFillBookmarkStarFill} from 'react-icons/bs'
import './Features.css'
import phoneFeature from '../../Images/fistBump.jpg'
import Feature from './Feature' 
import { featureList } from './data.js'

import Aos from 'aos';
import 'aos/dist/aos.css'

const Features = () => {
  useEffect(() => {
    Aos.init({ 
     duration:2000, once:false
    });
 })
  return (
    <section id='features'>
    <div className="features"> 
    <div className="u-title"  data-aos= 'fade-up' data-aos-once="false"  >
       <BsFillBookmarkStarFill color='orangered' size={35}></BsFillBookmarkStarFill>
       <h2>MAIN FEATURES</h2>
       <p className="u-text-sm u-text-dark">
         ChatUp lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Excepturi ex itaque quidem deserunt ducimus asperiores.
       </p>
    </div>
    <div className="features-content">
      <div className="features-left"  data-aos= 'fade-left'>
        <img src={phoneFeature} alt="" />
      </div>
      <div className="features-right" data-aos= 'fade-right' data-aos-once="false">
          {featureList.map((feature) => (
              <Feature key={feature.id} icon= {feature.icon} heading={feature.heading} text={feature.text} > </Feature>
              
          ))
          }
      </div>
    </div>
   
    </div>
     </section>
  )
}

export default Features