import React from 'react'
import '../style/nextLevel.css'
import nextIcon from '../assets/Group 25.svg'
export const NextLevel = () => {
  return (
    <div className="next-levels animate__animated animate__fadeIn animate__delay-1s">

    {/* <label>Select Difficulty Level</label> */}
    
    <div className="next-topic-btns">
    
    <button className='next-level-btn_'>Start Next <img src={nextIcon} alt="" /></button>
    
    </div>
    
    
    </div>
  )
}
