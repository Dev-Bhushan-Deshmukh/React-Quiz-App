import React, { useState } from 'react'
import '../style/topic.css'
import topImg from '../assets/Group 12.svg'
import bottomImg from '../assets/Group 13.svg'
import 'animate.css';
import { MyContext } from '../contexts/difficultycontext';

import { Outlet, useNavigate } from 'react-router-dom';
import { Level } from '../components/level-selection';
export const Topic = () => {
  const[difficulty,setdifficulty]=useState();
  const[topicName,setTopic]=useState();



  return (
    <div className='topic-main-container'>
<img id='top-img' src={bottomImg} />
<MyContext.Provider   value={{ difficulty, setdifficulty,topicName,setTopic }}>
<Outlet/>
</MyContext.Provider>
<img id='bottom-img' src={topImg} />


    </div>
  )
}
