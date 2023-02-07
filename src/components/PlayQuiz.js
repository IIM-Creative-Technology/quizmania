import React, { useState } from 'react'
import { Typography } from "@mui/material";
import { useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import Card from './common/Card'
import { Box } from '@mui/system';

function PlayQuiz() {
  const { state } = useLocation();
  const [questionCounter, setQuesCounter] = useState(1);
  const [totalQuiz, setTotalQuiz] = useState(1);
  const [questionsArray, setQuesArray] = useState([]);

  React.useEffect(() => {
    const { quizData, quizCount } = state;
    setQuesArray(quizData)
    setTotalQuiz(quizCount)
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

  return (
    <div className='app-main'> 

    <Box>

        <Typography variant="h5" fontWeight="bold">
                Quizmania
        </Typography>

        <Typography variant="h7">
                Question Number : {questionCounter}
        </Typography> 

        <Card 
            questionsArray={questionsArray} 
            questionCounter={questionCounter}
        />

        <div>
        <Button 
            onClick={prevQuestion}
            disabled={questionCounter === 1 ? true: false }
            variant="contained" 
            style ={{marginRight: 10}}>
            Previous Question
        </Button>

        <Button
            onClick={nextQuestion} 
            disabled={questionCounter === Number(totalQuiz) ? true: false }
            variant="contained" 
            style ={{marginLeft: 10}}>
            Next Question
        </Button>
        </div>

    </Box>

    </div>
  )
}

export default PlayQuiz