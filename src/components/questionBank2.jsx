import React, { useEffect ,useState} from 'react'
import '../style/questionbank2.css'
import { useContext } from 'react'
import { MyContext } from '../contexts/difficultycontext'
import { questions_Bank } from '../data/questionData'
import { useNavigate } from 'react-router-dom'
export const QuestionBank2 = () => {
let navigateTo=useNavigate(null);

  const[questions,setQuestions]=useState([]);
  const[currentQuestion,setCurrentQuestion]=useState({});
  const[questionIndex,setQuestionIndex]=useState();
  const[questionCount,setQuestionout]=useState();
  const[countDown_,setCountdown]=useState();
  // const[score,setScore]=useState(0);
  const[total,setTotal]=useState(0);
const[answer_,setAnsswer]=useState(null);
const[color_,setColor]=useState('');




const { difficulty, setdifficulty,topicName,setTopic,stageName,setStage,score,setScore} = useContext(MyContext);


  useEffect(()=>{
    setScore(0)
    // alert('effect')
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
  //   nextQuestion();
  //   //  setCountdown(20);
  //     }
      
  //   }, 1000);
    
      
    
  //   },[countDown_])
    

console.log(topicName,difficulty)
console.log(questions_Bank[topicName][difficulty])


const startQuizz=()=>{
  // alert('start')
  setQuestionIndex(0);
  setCountdown(20);
}


const nextQuestion=()=>{
  // alert('next q')
  setCurrentQuestion(questions[questionIndex+1])
  setQuestionIndex(questionIndex+1);
  let btn=document.getElementsByClassName('question_');
  for(var i=0; i< btn.length; i++){
    btn[i].disabled = false;
    btn[i].style.background='';
}
  // setCountdown(20);

}


const selectAnswer=(e)=>{
  alert('ansss')
  console.log('---',questionIndex,questionCount)
if(questionIndex==questionCount){
  console.log('---',questionIndex,questionCount)
  setStage('questionbank');
  navigateTo('/topic/nextlevel/score/')

}
  else{
  let btn=document.getElementsByClassName('question_');
  for(var i=0; i< btn.length; i++){
    btn[i].disabled = true;
}
  let selectedOption=e.target.getAttribute('data-option');
  // console.log(selectedOption)
  let optionSelected=document.getElementById(selectedOption);
  if(selectedOption==currentQuestion['options'][currentQuestion['answer']])
  {
    optionSelected.style.background='green';
    setAnsswer(selectedOption);
    // setColor('green');
    setScore(score+1)
  // console.log('selectedOption',selectedOption)
  // console.log('selectedOption',currentQuestion)
  // console.log('correct answer',currentQuestion['options'][currentQuestion['answer']])
  
  }
  else{
    //  console.log(selectedOption)
    optionSelected.style.background='red';
    // console.log(' wrong answer');
   
  }
      
  }
}











  return (
    <div className="levels animate__animated animate__fadeIn animate__delay-1s">


    <label>Question {difficulty} {topicName}{score}/{total} {countDown_}</label>
    

    <div className="quetion-container">
    <label>{currentQuestion?.question} </label> 
    <div className='q-options'>

    {currentQuestion['options']?.map((item)=>(

<button className='question_' data-option={item} id={item}  onClick={selectAnswer}>{item}</button>
))}


    {/* <button className='question_'>Math</button>
    <button className='question_'>History</button>
    <button className='question_'>Math</button>
    <button className='question_'>History</button> */}


    </div>
    </div>
    <button className='next-btn' style={{visibility:questionIndex==questionCount?'hidden':''}} onClick={nextQuestion}>Next</button>
    
    </div>
  )
}
