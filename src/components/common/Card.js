import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function OutlinedCard({
    questionsArray, 
    questionCounter
}) {
    console.log(questionsArray[questionCounter - 1])
  return (
    <Box sx={{ minWidth: 275 }} style={{margin: 50}}>
        {questionsArray.length > 0 ? (

            <Card variant="outlined">
                <CardContent>

                    <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                        Question: {questionsArray[questionCounter - 1].question}
                    </Typography>
                
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Category: {questionsArray[questionCounter - 1].category}
                    </Typography>

                    {[
                        ...questionsArray[questionCounter - 1].incorrect_answers,
                        questionsArray[questionCounter - 1].correct_aswer
                    ].map((option) => {
                        return (
                            <div>
                                <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={4}>
                                        <Item>xs=8</Item>
                                    </Grid>
                                </Grid>
                                </Box>
                                <p>{option}</p>
                            </div>
                            
                        )
                    })}

                </CardContent>
            </Card>
        ) : (
            ""
        )}
    </Box>
  );
}