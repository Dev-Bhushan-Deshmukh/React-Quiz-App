import React from 'react'
import { MyContext } from '../contexts/difficultycontext';
import { useContext } from 'react';
export const Difficultyselection = () => {
    const { difficulty, setdifficulty } = useContext(MyContext);
    
  return (
    <div>
<h1>Select Difficulty</h1>


<input type="radio" name="difficulty" id="Easy" value='easy' onClick={(e)=>setdifficulty(e.target.value)}  /><label for='Easy'>Easy</label> <br/>

<input type="radio" name="difficulty" id="Moderate" value='moderate' onClick={(e)=>setdifficulty(e.target.value)} /><label for='Moderate'>Moderate</label> <br />

<input type="radio" name="difficulty" id="Difficult" value='difficult' onClick={(e)=>setdifficulty(e.target.value)} /><label for='Difficult'>Difficult</label>

    </div>
  )
}
