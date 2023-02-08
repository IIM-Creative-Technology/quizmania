import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#EBB9EC',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid({options,correctAnswer,nextQuestion, setResult, result}) {

  const handleOptions = (option) => {
    console.log(option)
    console.log(correctAnswer)

    if(correctAnswer === option){
        setResult(result + 1)
        toast.success("Right :)", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    })
    }
    else{
        setResult(result - 1)
        toast.error("Wrong ... ", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    })
    }

    nextQuestion()
  }
  
  console.log({result})

  return (
    <Box sx={{ flexGrow: 1 }}>
      <ToastContainer />
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={5} style={{margin: 10}} >
          <Item 
          className='option-grid'
          onClick={() => handleOptions(options)}>
            {options}
          </Item>
        </Grid>
      </Grid>
    </Box>
    
  );
}