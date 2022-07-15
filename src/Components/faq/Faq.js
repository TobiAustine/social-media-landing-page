import React, {useEffect} from 'react'
import './Faq.css'
import {MdOutlineLibraryBooks} from 'react-icons/md'
import {questions} from './data.js'
import Question from './Question'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Faq = () => {
  useEffect(() =>{
    Aos.init({duration:3000, once:false})
  })
  return (
    <section id="faq">
      <div className="container faq">
        <div className="u-title" data-aos='fade-up'>
          <MdOutlineLibraryBooks color='orangered' size={33}></MdOutlineLibraryBooks>
            <h2>FAQS</h2>
            <p className="u-text-sm u-text-dark">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis maxime at dicta explicabo illum rerum!
            </p>
        </div>
        <div className="faqs" data-aos='fade-right'>
              {questions.map((question) => (
                <Question key={question.id} title={question.title} answer={question.answer}></Question>
              ))}
              
            </div>
      </div>
    </section>
  )
}

export default Faq