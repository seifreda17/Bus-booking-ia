import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';
import { setAuthUser } from '../../helper/Storage';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const Register =() => {
  const navigate=useNavigate();
   
  const[register,setRegister]=useState({

    email:'',
    password:'',
    name:'',
    phone:'',
    loading:false,
    err:[],
  });

  const RegisterFun = (e)=>{
    e.preventDefault();
    setRegister({...register,loading:true,err:[]});
  axios.post("http://localhost:4000/auth/register",{
    email:register.email,
    password:register.password,
    name:register.name,
    phone:register.phone
  }).then((resp)=>{
    setRegister({...register,loading:false,err:[]});
    setAuthUser(resp.data)
    navigate("/")
  })
  .catch((errors)=>{

    setRegister({
      ...register,
      loading:false,
      err:errors.response.data.errors});
  });
  };
   return(
<div className='Login-container'>
<h1>Registeration Form</h1>
  {register.err.map((error)=>(
   <Alert  variant={'danger'} className='p-2'>
  {error.msg}
 </Alert>))}
<Form onSubmit={RegisterFun}>
   
  
      <Form.Group className="mb-3" controlId="registerEmail">
        <Form.Control type="email" placeholder="Please Enter your email" 
         value={register.email} onChange={(e)=>setRegister({...register,email:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="registerName">
        <Form.Control type="text" placeholder="Please Enter your name" 
         value={register.name} onChange={(e)=>setRegister({...register,name:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="registerPhone">
        <Form.Control type="text" placeholder="Please Enter your Phone number"
         value={register.phone} onChange={(e)=>setRegister({...register,phone:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Please Enter your Password" 
         value={register.password} onChange={(e)=>setRegister({...register,password:e.target.value})}/>
      </Form.Group>
      <Button className='btn btn-dark w-100' variant="primary" type="submit">
        Register
      </Button>
    </Form>

</div>
    
   )
   
};

export default Register;
