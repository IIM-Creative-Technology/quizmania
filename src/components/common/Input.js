import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields({
  quizCount,
  setQuizCount
}) {

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      <TextField fullWidth 
      size='small' 
      type="number"
      id="outlined-basic" 
      label="Number of questions" 
      variant="outlined"
      onChange={(e) => setQuizCount(e.target.value)}
      value={quizCount}

    />

    </Box>
  );
}