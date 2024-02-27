import React from 'react'
import '../style/score.css'
import starIcon from '../assets/Star 1.svg'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { MyContext } from '../contexts/difficultycontext'
export const ScoreBoard = () => {
  const { difficulty, setdifficulty,topicName,setTopic,stageName,setStage,score,setScore} = useContext(MyContext);

    let navigateTo=useNavigate(null)
// setInterval(()=>{
//     navigateTo('/topic/nextlevel/nextstage')
// },6000)
 const navv=()=>{

  navigateTo('/topic/nextlevel/nextstage')

 }
  return (
 
    
    <div className='score-board  animate__animated animate__fadeIn animate__delay-1s' onClick={navv}>
        <div id='score-line'>Your Score</div>
        <div id='score-count'>{score} | 9</div>
        <div id='score-comment'>  Excellent Performance !</div>
         </div>
    
    
  )
}
