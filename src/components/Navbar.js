import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container } from '@mui/system';
import { useLocation, useNavigate } from 'react-router-dom';



export default function ButtonAppBar() {

  const { state } = useLocation();
  const navigate = useNavigate();

  const startquiz = () => {
    navigate('/quiz')
  }

    return (
      <Container>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar style={{ background: 'transparent', boxShadow: 'none' }} className='Navbar' position="static">
          <Toolbar>
            <Button className='sign'>Login</Button>
            <Button className='sign'>Register</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <div>
        <img className='logo' src='./logo.png' alt='logo'/>
        <h1>Welcome to Quizzmania! Our application allows you to test and improve your knowledge on
          <br></br> a large range of subjects.
           You will be able to answer questions on a variety of topics and <br></br> get detailed feedback on your performance. 
           So, ready to take the challenge? <br></br> Let's get started!
           <br></br>
           <br></br>
           <Button className='btn' variant='contained'
           style ={{borderRadius:10, backgroundColor: "#B58EE7",marginLeft: 1 }}>
            Click here to Log In</Button>
           </h1>
           <Button 
           onClick={startquiz}
           className='btn' 
           variant='contained'
           style ={{borderRadius:10, backgroundColor: "#B58EE7",marginLeft: 1 }}>
            Click here to Play
          </Button>

      </div>
    </Container>
    );
    
  }

