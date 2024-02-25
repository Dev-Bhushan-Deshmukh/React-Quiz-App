

import React, { useEffect } from 'react'
import { useContext } from 'react'
import { MyContext } from '../contexts/difficultycontext'
import { useState } from 'react'
export const Questions = () => {
    // let [difficulty,setdifficulty]=useContext(MyContext);
    const { difficulty, setdifficulty } = useContext(MyContext);
    const[questions,setQuestions]=useState([]);
    const[currentQuestion,setCurrentQuestion]=useState({});
    const[questionIndex,setQuestionIndex]=useState();
    const[questionCount,setQuestionout]=useState();
    const[countDown_,setCountdown]=useState();
    const[score,setScore]=useState(0);
    const[total,setTotal]=useState(0);
    let ques=[
        {question:'capital of India?',
        option:['Mumbai','Delhi','Chandigarh','Pune'],
        answer:1,
        difficulty:'moderate',
        category:'general-knowledge'
        
        },
        {question:'capital of America?',
        option:['city1','New York',' Washington','Boston'],
        answer:2,
        difficulty:'moderate',
        category:'general-knowledge'
        
        },
        {question:'capital of Maharashtra?',
        option:['Pune','Akola','Mumbai','Nagpur'],
        answer:2,
        difficulty:'moderate',
        category:'general-knowledge'
        
        },
        {question:'National Animal of Bangladesh?',
        option:['Lion','Elephant','Deer','Tiger'],
        answer:3,
        difficulty:'moderate',
        category:'general-knowledge'
        
        },
        {question:'Prime minister of India?',
        option:['Modi','Chodi','Godi','Rodi'],
        answer:0,
        difficulty:'easy',
        category:'general-knowledge'
        
        },
        {question:'capital of China?',
        option:['1','hongkong','c','d'],
        answer:1,
        difficulty:'easy',
        category:'general-knowledge'
        
        },
        {question:'capital of usa?',
        option:['1','b','c','dingdong'],
        answer:3,
        difficulty:'easy',
        category:'general-knowledge'
        
        },
        {question:'capital of shri lanka?',
        option:['1','b','colombo','d'],
        answer:2,
        difficulty:'easy',
        category:'general-knowledge'
        
        },
        {question:'capital of russia?',
        option:['siberia','b','c','d'],
        answer:0,
        difficulty:'easy',
        category:'general-knowledge'
        
        },
        {question:'capital of UAE?',
        option:['1','dubai','c','d'],
        answer:1,
        difficulty:'difficult',
        category:'general-knowledge'
        
        },
        {question:'capital of Japan?',
        option:['1','b','c','tokyo'],
        answer:3,
        difficulty:'difficult',
        category:'general-knowledge'
        
        },
        {question:'capital of England?',
        option:['1','b','c','don'],
        answer:3,
        difficulty:'difficult',
        category:'general-knowledge'
        
        }
        
        
        ]

useEffect(()=>{



    let x=ques.filter(item=>item.difficulty==difficulty);

    setQuestions(x)
    setQuestionIndex(0)
    setQuestionout(x.length-1)
    setTotal(x.length)

},[difficulty])

useEffect(()=>{
setTimeout(() => {
  if(countDown_>0){
    setCountdown(countDown_-1)
  
  }
  else if(countDown_==0){

setCountdown('time-up!!!')

  }
  
}, 1000);

  

},[countDown_])



const startQuizz=()=>{
  setCurrentQuestion(questions[0])
  setQuestionIndex(0);
  setCountdown(20);
}
const previousQuestion=()=>{
  setCurrentQuestion(questions[questionIndex-1])
  setQuestionIndex(questionIndex-1);
}

const nextQuestion=()=>{
  setCurrentQuestion(questions[questionIndex+1])
  setQuestionIndex(questionIndex+1);

// let startCountdown=setInterval(()=>{
//   if(countDown_==0){
//     clearInterval(startCountdown);
    
//       }
//       else{
//         setCountdown(countDown_-1);
//       }
     

// }, 1000);

}



const selectAnswer=(e)=>{
let selectedOption=e.target.getAttribute('data-option');
if(selectedOption==currentQuestion['option'][currentQuestion['answer']])
{
  setScore(score+1)
console.log('selectedOption',selectedOption)
console.log('correct answer',currentQuestion['option'][currentQuestion['answer']])

}
else{
  console.log(' wrong answer');
 
}

}

  return (
    <div>
<h1>Diffivulty:{difficulty}:{questionCount}:{countDown_}</h1>
<h1>{score}/{total}</h1>

<button onClick={startQuizz}>start</button>
{currentQuestion.question}
{currentQuestion['option']?.map((item)=>(

  <li data-option={item} onClick={selectAnswer} >{item}</li>
))}









<button  disabled={questionIndex==0?true:false} onClick={previousQuestion}>prev</button><button   disabled={questionIndex==questionCount?true:false} onClick={nextQuestion}>next</button>



    </div>
  )
}

