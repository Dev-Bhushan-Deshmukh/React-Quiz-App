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
function App() {
  const [difficulty, setdifficulty] = useState();
  return (

    <Routes>
      <Route path='/' element={<Splash />} />


      <Route path='/home' element={<Home />} />
      <Route path='/topic' element={<Topic />}>
        <Route path='/topic/level' element={<Level />} />

        <Route path='/topic/topicselection' element={<TopicSelection />} />
        <Route path='/topic/nextlevel' element={<NextLevel/>} />
        <Route path='/topic/questionbank' element={<QuestionBank/>} />



      </Route>

    </Routes>

  );
}

export default App;
