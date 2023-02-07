import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({
    quizDificulty,
    handleDifficulty
}) {

  return (
    <Box mt={3} width="100%" >
        <FormControl size="small" fullWidth>
            <InputLabel id="demo-simple-select-label">Difficulty</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={quizDificulty}
            label="Quiz Difficulty"
            onChange={handleDifficulty}
            >
            <MenuItem value={`easy`}>Easy</MenuItem>
            <MenuItem value={`medium`}>Medium</MenuItem>
            <MenuItem value={`hard`}>Hard</MenuItem>


            </Select>
        </FormControl>
    </Box>
  );
}