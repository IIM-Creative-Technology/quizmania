import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({
    quizType,
    handleChange
}) {

  return (
    <Box mt={3} width="100%" >
        <FormControl size="small" fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={quizType}
            label="Question type"
            onChange={handleChange}
            >
            <MenuItem value={9}>General Knowledge</MenuItem>
            <MenuItem value={10}>Entertainment : Books</MenuItem>
            <MenuItem value={11}>Entertainment : Film</MenuItem>
            <MenuItem value={12}>Entertainment : Music</MenuItem>
            <MenuItem value={13}>Entertainment : Musical and Theatres</MenuItem>
            <MenuItem value={14}>Entertainment : Television</MenuItem>
            <MenuItem value={15}>Entertainment : Games</MenuItem>

            </Select>
        </FormControl>
    </Box>
  );
}