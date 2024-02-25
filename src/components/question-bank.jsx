import React from 'react'
import '../style/questionbank.css'
export const QuestionBank = () => {
  return (
    <div className="levels animate__animated animate__fadeIn animate__delay-1s">

    <label>Question </label>
    

    <div className="quetion-container">
    <label>levels animate__animated animate__fadeIn animate </label> 
    <div className='q-options'>
    <button className='question_'>Math</button>
    <button className='question_'>History</button>
    <button className='question_'>Math</button>
    <button className='question_'>History</button>


    </div>
    </div>
    <button className='next-btn'>History</button>
    
    </div>
  )
}
