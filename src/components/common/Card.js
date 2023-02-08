import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from './GridAnswer';



export default function OutlinedCard({
    questionsArray, 
    questionCounter, 
    nextQuestion,
    setResult, 
    result

}) {
    console.log(questionsArray[questionCounter - 1])
  return (
    <Box sx={{ minWidth: 275 }} style={{margin: 70}}>
        {questionsArray.length > 0 ? (

            <Card style={{backgroundColor: "#BCE2E4"}} variant="outlined">
                <CardContent>

                <Typography variant="h7">
                Question {questionCounter}
                </Typography> 

                    <Typography sx={{ fontSize: 20 }} fontWeight="bold" gutterBottom>
                        {questionsArray[questionCounter - 1].question}
                    </Typography>
                
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Category: {questionsArray[questionCounter - 1].category}
                    </Typography>

                    {[
                        ...questionsArray[questionCounter - 1].incorrect_answers,
                        questionsArray[questionCounter - 1].correct_answer
                    ].sort(() => Math.random() - 0.5)
                        .map((options) => {
                            return (
                                <div>
                                    <Grid 
                                    nextQuestion={nextQuestion}
                                    options={options} 
                                    setResult={setResult}
                                    result={result}
                                    correctAnswer={questionsArray[questionCounter - 1].correct_answer}                               
                                    />
                                </div>     
                            )
                        })}


                    <Typography variant="h7">
                        Score :  {result}
                    </Typography> 


                </CardContent>
            </Card>
        ) : (
            ""
        )}
    </Box>
  );
}