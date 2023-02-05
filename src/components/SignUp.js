import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useAuth } from '../contexts/UserAuthContext';
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <>
        <div className='p-4 box'>
            <h2 className='mb-3 ' >Sign Up</h2>
            <Form>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Control type='email' placeholder='Email adress'/>
                </Form.Group>

                <Form.Group className='mb-3' controlId='formBasicPassword'>
                    <Form.Control type='password' placeholder='Password'/>
                </Form.Group>

                <Form.Group className='mb-3' controlId='formBasicPassword'>
                    <Form.Control type='password' placeholder='Repeat Password'/>
                </Form.Group>

                <div className='d-gird gap-2'>
                    <Button variant='primary' type='submit'>
                        Sign Up
                    </Button>
                </div>
            </Form>
            <hr />
            <div className='p-4 boc mt-3 text-center'> 
                Already registered? <Link to='Login' >sign In</Link> 
            </div>
        </div>


        
        </>
    );
}

export default SignUp;