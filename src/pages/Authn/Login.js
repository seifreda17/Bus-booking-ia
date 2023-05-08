import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import '../../css/Login.css'
import axios from 'axios';
import { setAuthUser } from '../../helper/Storage';
import { useNavigate } from 'react-router-dom';

const Login =() => {
  const navigate=useNavigate();
   
  const[login,setLogin]=useState({

    email:'',
    password:'',
    loading:false,
    err:[],
  });

  const LoginFun = (e)=>{
    e.preventDefault();
    setLogin({...login,loading:true,err:[]});
  axios.post("http://localhost:4000/auth/login",{
    email:login.email,
    password:login.password
  }).then((resp)=>{
    setLogin({...login,loading:false,err:[]});
    setAuthUser(resp.data)
    navigate("/")
  })
  .catch((errors)=>{

    setLogin({
      ...login,
      loading:false,
      err:errors.response.data.errors});
  });
  };
  
  return(

<div className='Login-container'>

   <h1>Welcome to the best booking site</h1>
   
   {login.err.map((error)=>(
   <Alert  variant={'danger'} className='p-2'>
  {error.msg}
 </Alert>
   
   ))}
   
        <Form onSubmit={LoginFun}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" required placeholder="Please Enter your email" value={login.email} 
        onChange={(e)=>setLogin({...login,email:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Please Enter your Password" 
        required
        value={login.password} onChange={(e)=>setLogin({...login,password:e.target.value})}/>
      </Form.Group>
      <Button className='btn btn-dark w-100' variant="primary" type="submit">
        Login
      </Button>
    </Form>

</div>
    
   )
};

export default Login;
