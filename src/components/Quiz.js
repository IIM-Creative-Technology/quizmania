import React from 'react'
import { Typography } from "@mui/material";
import Select from './common/Select';
import Input from './common/Input';
import Difficulty from './common/DifficultySelect';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from  'react-router-dom';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';


function Quiz() {

  const navigate = useNavigate();
  const [quizCount, setQuizCount] = React.useState('');
  const [quizType, setQuizType] = React.useState('');
  const [quizDificulty, setQuizDifficulty] = React.useState('');

  const handleChange = (event) => {
    console.log(event.target.value);
    setQuizType(event.target.value);
  };

  const handleDifficulty = (event) => {
    console.log(event.target.value);
    setQuizDifficulty(event.target.value);
  };

  console.log(quizCount)

  const getQuiz = () => {
    axios.get(
        `https://opentdb.com/api.php?amount=${quizCount}&difficulty=${quizDificulty}&category=${quizType}`)
        .then((response) => {
            navigate('/play',
            {
                state:{
                    quizData: response.data.results,
                    quizCount: quizCount, 
                    quizType: quizType,
                    quizDificulty: quizDificulty, 
                }
            }
            )
        })
  }
 
  return (
    <div>
        <Box sx={{ minWidth: 275 }} style={{margin: 70}}>

            <Card style={{backgroundColor: "#BCE2E4"}} variant="outlined">
                <CardContent>
                <Typography mt={4} variant="h5" fontWeight="bold">
                    Quizmania choices
                </Typography>
                
                <Input
                    quizCount={quizCount} 
                    setQuizCount={setQuizCount}
                    
                />
                <Select 
                    quizType={quizType} 
                    handleChange={handleChange} 
                />
                <Difficulty
                    quizDificulty={quizDificulty} 
                    handleDifficulty={handleDifficulty} 
                />

                <Button 
                    onClick={getQuiz}
                    variant="contained" 
                    style ={{borderRadius:10,marginTop: 50, backgroundColor: "#B58EE7"}}>
                    Start
                </Button>

                </CardContent>
            </Card>
        </Box>

    </div>
  )
}

export default Quiz
