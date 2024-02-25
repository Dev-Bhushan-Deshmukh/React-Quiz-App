import React from 'react'
import { MyContext } from '../contexts/difficultycontext';
import { useContext } from 'react';
import '../style/topic.css'
import { useNavigate } from 'react-router-dom';
export const Level= () => {
  let navigateTo=useNavigate(null);
    const { difficulty, setdifficulty } = useContext(MyContext);





    function selectDifficulty(e){

        setdifficulty(e.target.value);
        setTimeout(() => {
          navigateTo('/topic/topicselection');
        }, 1000);
      
    
      }
  return (
    <div className="level animate__animated animate__fadeIn animate__delay-1s">

<h1>Select Difficulty Level</h1>

<div className="levelbtn">

<button className='level-btn' value='Easy'  onClick={selectDifficulty} >Easy</button>
<button className='level-btn' value='Moderate'  onClick={selectDifficulty}>Moderate</button>
<button className='level-btn' value='Difficult' onClick={selectDifficulty} >Difficult</button>
</div>


</div>
  )
}
