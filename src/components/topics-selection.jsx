import React from 'react'
import '../style/topics.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { MyContext } from '../contexts/difficultycontext';
import { useContext } from 'react';
export const TopicSelection = () => {
  let navigateTo=useNavigate(null);
  const { difficulty, setdifficulty,topicName,setTopic} = useContext(MyContext);
function navigateToQuestionBank(e){
setTopic(e.target.value)

navigateTo('/topic/questionbank')

}

  return (
    <div className="levels animate__animated animate__fadeIn animate__delay-1s">

    <label>Select Topic  </label>
    
    <div className="topic-btns">
    
    <button className='level-btn_' value='Math' onClick={navigateToQuestionBank}>Math</button>
    <button className='level-btn_' value='History' onClick={navigateToQuestionBank}>History</button>
   
    </div>
    <div className="topic-btns">
    
    <button className='level-btn_' value='Geography' onClick={navigateToQuestionBank}>Geography</button>
    <button className='level-btn_' value='GeneralKnowledge' onClick={navigateToQuestionBank}>GeneralKnowledge</button>
    <button className='level-btn_ ' value='Computer' onClick={navigateToQuestionBank}>Computer</button>
    </div>
    <div className="topic-btns">
    
    <button className='level-btn_' value='Statistics' onClick={navigateToQuestionBank}>Statistics</button>
    <button className='level-btn_' value='Moderate' onClick={navigateToQuestionBank}>Moderate</button>
    {/* <button className='level-btn'>Difficult</button> */}
    </div>
    
    </div>
  )
}
