import React from 'react'
import '../style/nextLevel.css'
import { NextStageButton } from './next-stage-button'
import { ScoreBoard } from './score-board';
import { Outlet } from 'react-router-dom';
export const NextLevel = () => {
  return (
    <div className="next-levels animate__animated animate__fadeIn animate__delay-1s">

    {/* <label>Select Difficulty Level</label> */}
    
    <div className="next-topic-btns">
      <Outlet  />
    {/* <NextStageButton/>
    <ScoreBoard/> */}
    {/* <button className='next-level-btn_'>Start Next <img src={nextIcon} alt="" /></button> */}
    
    </div>
    
    
    </div>
  )
}
