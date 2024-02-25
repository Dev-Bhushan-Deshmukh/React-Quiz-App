import React, { useEffect } from 'react'
import '../style/splash.css'
import logo from '../assets/Group 10.svg'
import { useNavigate } from 'react-router-dom'
export const Splash = () => {
let navigateTo=useNavigate(null);
  useEffect(()=>{

setTimeout(() => {
  navigateTo('topic/level');
}, 3000);


  },[])



  return (
    <div className='splash-container'>

<img id='logo' src={logo}/>



    </div>
  )
}
