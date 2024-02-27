import logo from './logo.svg';
import './App.css';
import { Home } from './pages/home';
import { Splash } from './pages/splash';
import { Topic } from './pages/Topic';


import { Route, Routes } from 'react-router-dom';
import { MyContext } from './contexts/difficultycontext'
import { Level } from './components/level-selection';
import { useState } from 'react';
import { TopicSelection } from './components/topics-selection';
import { NextLevel } from './components/next-level';
import { QuestionBank } from './components/question-bank';
import { ScoreBoard } from './components/score-board';
import { NextStageButton } from './components/next-stage-button';
import { QuestionBank2 } from './components/questionBank2';
function App() {
  const [difficulty, setdifficulty] = useState();
  return (

    <Routes>
      <Route path='/' element={<Splash />} />


      <Route path='/home' element={<Home />} />
      <Route path='/topic' element={<Topic />}>
        <Route path='/topic/level' element={<Level />} />

        <Route path='/topic/topicselection' element={<TopicSelection />} />
        <Route path='/topic/nextlevel' element={<NextLevel />} >

          <Route path='/topic/nextlevel/score/' element={<ScoreBoard />} />

          <Route path='/topic/nextlevel/nextstage/' element={<NextStageButton />} />





        </Route>
        <Route path='/topic/questionbank' element={<QuestionBank />} />

        <Route path='/topic/moderate' element={<QuestionBank2 />} />
      


      </Route>

    </Routes>

  );
}

export default App;
