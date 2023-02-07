import React from 'react';
import './App.css';
import Quiz from "./components/Quiz"
import PlayQuiz from "./components/PlayQuiz"
//import './Navbar.css';
//import Navbar from "./components/Navbar";
import { 
  Route,
  Routes, 
} from "react-router-dom";

function App() {
  return (
      <div className='app-main'> 
        <Routes>
          <Route exact path='/' element={<Quiz/>}/>
          <Route exact path='/play' element={<PlayQuiz/>}/> 
        </Routes>
      </div>
     //<Navbar/>
     //<Settings/>
  );
}

export default App;
