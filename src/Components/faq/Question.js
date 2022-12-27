import {React, useState} from 'react'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
import './Question.css'

const Question = ({title, answer}) => {

    const [showAnswer, setShowAnswer] = useState(false)

    const toggleIcon = () => {
        setShowAnswer(!showAnswer)
    }


  return (
    <div>
        <div className="container questions">
            <div className="question-title">  
                <h1>{title}</h1>
               <div className="question-icon" onClick={toggleIcon}>
                {showAnswer ? <AiOutlineMinus size={20} color='red'></AiOutlineMinus> : <AiOutlinePlus size={20} color='var(--light-blue)'></AiOutlinePlus>}

                 </div>
            </div>

            <div className={showAnswer ? 'show-answer ' : 'hide-answer'}>
            <h3 u-text-light>{answer}</h3>
            </div>
            
        </div>

    </div>
  )
}

export default Question