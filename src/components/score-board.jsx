import React from 'react'
import '../style/score.css'
import starIcon from '../assets/Star 1.svg'
import { useNavigate } from 'react-router-dom'
export const ScoreBoard = () => {
    let navigateTo=useNavigate(null)
setInterval(()=>{
    navigateTo('/topic/nextlevel/nextstage')
},6000)
 
  return (
 
    
    <div className='score-board  animate__animated animate__fadeIn animate__delay-1s'>
        <div id='score-line'>Your Score</div>
        <div id='score-count'>9 | 9</div>
        <div id='score-comment'>  Excellent Performance !</div>
         </div>
    
    
  )
}
