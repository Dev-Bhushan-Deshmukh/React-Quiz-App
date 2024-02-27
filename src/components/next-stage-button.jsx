import React from 'react'
import '../style/nextLevelBtn.css'
import nextIcon from '../assets/Group 25.svg'
import { useNavigate } from 'react-router-dom'
import { MyContext } from '../contexts/difficultycontext';
import { useContext } from 'react';
export const NextStageButton= () => {
  
  let navigateTo=useNavigate(null)
  const { difficulty, setdifficulty,topicName,setTopic,stageName,setStage} = useContext(MyContext);
  const navigateToLevel=()=>{
    navigateTo(`/topic/${stageName}`)
  }

  return (
    <button className='next-level-btn_  animate__animated animate__fadeIn animate__delay-1s' onClick={navigateToLevel} >Start Next <img src={nextIcon} alt="" /></button>
  )
}
