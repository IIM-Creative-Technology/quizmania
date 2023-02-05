import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useAuth } from '../contexts/UserAuthContext';
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <h2 className='mb-3' >Login</h2>
            <Form>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Control type='email' placeholder='Email adress'/>
                </Form.Group>

                <Form.Group className='mb-3' controlId='formBasicPassword'>
                    <Form.Control type='password' placeholder='Password'/>
                </Form.Group>

                <div className='d-gird gap-2'>
                    <Button variant='primary' type='submit'>
                        Log In
                    </Button>
                </div>
            </Form>
            <hr />
            <div className='p-4 boc mt-3 text-center'> 
               First time?  <Link to='/'>Sign up</Link>
            </div>
        </>
    );
}

export default Login;