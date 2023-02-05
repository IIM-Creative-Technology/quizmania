import React from 'react';
import './Navbar.css';
import { Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import SignUp from './components/SignUp';
import {  UserAuthContextProvider } from './contexts/UserAuthContext';
import { Container,Row,Col } from 'react-bootstrap';
import Login from './components/Login';



function App() {
  return (
    <Container>
      <Row>
        <Col>
        <UserAuthContextProvider>
        <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Navbar" element={<Navbar />} />
        </Routes>
        </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
    
  );
}

export default App;
