import { Nav, Row } from 'react-bootstrap';
import { Routes , Route, BrowserRouter } from 'react-router-dom';
import SignUp from './components/SignUp';
import { Container, Col} from 'react-bootstrap';
import Login from './components/Login';
import Navbar from './components/Navbar'
import './Navbar.css';
import { UserAuthContextProvider } from './contexts/UserAuthContext';
import React from 'react';


function App() {
  return (
   < >
      <Container>
        <Row>
          <Col>
          

          
          <BrowserRouter>
        
        <Routes>
        <Route path='/Navbar' element= {<Navbar />} />
        <Route path='/' element= {<SignUp />} />
          <Route path='/SignUp' element= {<SignUp />} />
          <Route path='/Login' element= {<Login />} />
        </Routes>
        </BrowserRouter>
        
          </Col>
        </Row>
      </Container>
       
        
       
    </>
  );
}

export default App;


