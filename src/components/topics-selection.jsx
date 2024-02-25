import React from 'react'
import '../style/topics.css'
export const TopicSelection = () => {
  return (
    <div className="levels animate__animated animate__fadeIn animate__delay-1s">

    <label>Select Topic </label>
    
    <div className="topic-btns">
    
    <button className='level-btn_'>Math</button>
    <button className='level-btn_'>History</button>
    {/* <button className='level-btn'>Difficult</button> */}
    </div>
    <div className="topic-btns">
    
    <button className='level-btn_'>Geography</button>
    <button className='level-btn_'>General Knowledge</button>
    <button className='level-btn_'>Computer</button>
    </div>
    <div className="topic-btns">
    
    <button className='level-btn_'>Statistics</button>
    <button className='level-btn_'>Moderate</button>
    {/* <button className='level-btn'>Difficult</button> */}
    </div>
    
    </div>
  )
}
