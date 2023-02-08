import React, { useState } from 'react'
import { Typography } from "@mui/material";
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Card from './common/Card'
import { Box } from '@mui/system';

function PlayQuiz() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [questionCounter, setQuesCounter] = useState(1);
  const [totalQuiz, setTotalQuiz] = useState(1);
  const [questionsArray, setQuesArray] = useState([]);
  const [quizType, setQuizType] = useState([]);
  const [quizDificulty, setQuizDificulty] = useState([]);
  const [result, setResult] = useState(0);

  React.useEffect(() => {
    const { quizData, quizCount, quizType, quizDificulty } = state;
    setQuesArray(quizData)
    setTotalQuiz(quizCount)
    setQuizDificulty(quizDificulty)
    setQuizType(quizType)
  }, [])

  const prevQuestion = () => {
    if(questionCounter > 1){
        setQuesCounter(questionCounter - 1)
    }
  }

  const nextQuestion = () => {
    if(questionCounter < totalQuiz){
        setQuesCounter(questionCounter + 1)
    }
  }
  console.log(typeof questionCounter)
  console.log(typeof Number(totalQuiz))

  const submitQuiz = () => {
    navigate('/result', {
        state:{
            final: result,
        }
    })
  }

  return (
    <div className='app-main'> 

    <Box>

        <Typography variant="h3" >
                Quizmania
        </Typography>

        <Card 
            questionsArray={questionsArray} 
            questionCounter={questionCounter}
            nextQuestion={nextQuestion}
            setResult={setResult}
            result={result}
        />

        {questionCounter === Number(totalQuiz) ? (
            <Button
            onClick={submitQuiz} 
            variant="contained" 
            style ={{backgroundColor: "#B58EE7"}}>
            Submit
            </Button>

        ) : (
            ""
        )}
    </Box>

    </div>
  )
}

export default PlayQuiz