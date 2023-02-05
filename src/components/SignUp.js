import React, {useContext, useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import {  useUserAuth } from '../contexts/UserAuthContext';
import { Link } from 'react-router-dom';
import { auth  } from '../firebase';




    const SignUp = () => {
        const [email, setEmail] =useState('');
        const [password, setPassword] =useState('');
        // const { signUp } =useUserAuth();
        // const [error, setError] =useState('');


        // const handleSubmit = async(e) => {
        //     e.preventDefault();
        //     setError('');
        //     try{
        //         await signUp(auth, email,password);
        //     }catch (err){
        //         setError(err.message);
        //     }
        // }
        
        
       
    
        
            
          
            
        
        return (
            <>
                <h2 className='mb-3 ' >Sign Up</h2>
                
                <Form >
                    <Form.Group className='mb-3' controlId='formBasicEmail'>
                        <Form.Control type='email' placeholder='Email adress' />
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
                    Already registered? <Link to='/Login' >sign In</Link> 
                </div>
    

        
        </>
    );
}


export default SignUp;