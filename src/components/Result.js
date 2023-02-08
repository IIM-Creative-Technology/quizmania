import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Card from './common/Card'
//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';


export default function Result() {

  const { state } = useLocation();
  const [final, setFinal] = React.useState(0);
  const navigate = useNavigate(); 

  React.useEffect(() => {
    const { final } = state;
    setFinal(final)
  }, [])

  const retryQuiz = () => {
    navigate('/quiz')
  }

  return (
    
    <Box mt={2}>
    <Typography variant="h5" fontWeight="bold">
        Your results !
    </Typography>

    <Typography variant="h7" fontWeight="bold">
    Final score is : {final}
    </Typography>

    <div>
    <Button
            onClick={retryQuiz} 
            variant="contained" 
            style ={{borderRadius:20, backgroundColor: "#B58EE7",marginLeft: 10}}>
            Play Again
    </Button>
    </div>
    </Box>


  )
}
