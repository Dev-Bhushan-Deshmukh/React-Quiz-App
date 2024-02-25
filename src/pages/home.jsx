import React, { useState } from 'react'
import '../style/home.css'
import { Difficultyselection } from '../components/difficultyselection';
import { Questions } from '../components/questions';
import {MyContext} from '../contexts/difficultycontext'
export const Home = () => {
    const[difficulty,setdifficulty]=useState();
  
















  return (
    <div className='home-container'>
         <MyContext.Provider   value={{ difficulty, setdifficulty }}>
         <Difficultyselection  />
         <Questions/>
      </MyContext.Provider>






    </div>
  )
}
