import React from 'react'
import '../style/nextLevelBtn.css'
import nextIcon from '../assets/Group 25.svg'
import { useNavigate } from 'react-router-dom'
export const NextStageButton= () => {
  let navigateTo=useNavigate(null)
  return (
    <button className='next-level-btn_  animate__animated animate__fadeIn animate__delay-1s' >Start Next <img src={nextIcon} alt="" /></button>
  )
}
