import React, { useEffect ,useState} from 'react'
import '../style/questionbank.css'
import { useContext } from 'react'
import { MyContext } from '../contexts/difficultycontext'
import { questions_Bank } from '../data/questionData'
export const QuestionBank = () => {


  const[questions,setQuestions]=useState([]);
  const[currentQuestion,setCurrentQuestion]=useState({});
  const[questionIndex,setQuestionIndex]=useState();
  const[questionCount,setQuestionout]=useState();
  const[countDown_,setCountdown]=useState();
  const[score,setScore]=useState(0);
  const[total,setTotal]=useState(0);





  const { difficulty, setdifficulty,topicName,setTopic} = useContext(MyContext);


  useEffect(()=>{

    let x=questions_Bank[topicName][difficulty]
    setQuestions(x)
    setQuestionIndex(0)
    setQuestionout(x.length-1)
    setTotal(x.length)
    setCurrentQuestion(x[0])
    startQuizz()
  },[])


  // useEffect(()=>{
  //   setTimeout(() => {
  //     if(countDown_>0){
  //       setCountdown(countDown_-1)
      
  //     }
  //     else if(countDown_==0){
    
  //   setCountdown('time-up!!!')
    
  //     }
      
  //   }, 1000);
    
      
    
  //   },[countDown_])
    

console.log(topicName,difficulty)
console.log(questions_Bank[topicName][difficulty])


const startQuizz=()=>{
 
  setQuestionIndex(0);
  setCountdown(20);
}


const nextQuestion=()=>{
  setCurrentQuestion(questions[questionIndex+1])
  setQuestionIndex(questionIndex+1);



}


const selectAnswer=(e)=>{
  let selectedOption=e.target.getAttribute('data-option');
  if(selectedOption==currentQuestion['options'][currentQuestion['answer']])
  {
    setScore(score+1)
  console.log('selectedOption',selectedOption)
  console.log('selectedOption',currentQuestion)
  console.log('correct answer',currentQuestion['options'][currentQuestion['answer']])
  
  }
  else{
    console.log(' wrong answer');
   
  }
  
  }












  return (
    <div className="levels animate__animated animate__fadeIn animate__delay-1s">

    <label>Question {difficulty} {topicName}{score}/{total}</label>
    

    <div className="quetion-container">
    <label>{currentQuestion?.question} </label> 
    <div className='q-options'>

    {currentQuestion['options']?.map((item)=>(

<button className='question_' data-option={item} onClick={selectAnswer}>{item}</button>
))}


    {/* <button className='question_'>Math</button>
    <button className='question_'>History</button>
    <button className='question_'>Math</button>
    <button className='question_'>History</button> */}


    </div>
    </div>
    <button className='next-btn'   
    style={{visibility:questionIndex==questionCount?'hidden':''}}
    
    onClick={nextQuestion}>Next</button>
    
    </div>
  )
}
