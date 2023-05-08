import React , {useRef, useState} from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

import axios from 'axios';

const AddTrav =() => {
   const[users,setUsers]=useState({
      name: '',
      email: '',
      // phone:'',
      password:'',
      err:"",
      loading:false,
      successMessage:null
     })
     const createUser = (e) => {
   
      e.preventDefault();
      
      setUsers({...users, loading: true});

      
      axios
      .post("http://localhost:4000/Users/create_user" ,{
      name:users.name ,
      email:users.email,
     password:users.password,
     phone:users.phone
    })
    .then((resp)=>{
      setUsers({...users,loading:false,err:[]});
     
    })

    .catch(_err=>{
      setUsers({
      ...users,
      loading:false,
      successMessage:null,
      err:"something went wrong, please try again later !"
      });

    })

   };
   return(
<div className="Login-container">
   <h1>Add New Traveller</h1>

    {/* {
      users.err &&(
         <Alert variant="danger" className="p-2">
         {users.err}
      </Alert> 
      )
      } */}
   
   {
      users.successMessage &&(
         <Alert variant="success" className="p-2">
         {users.successMessage}
      </Alert> 
      )

   }
    <Form onSubmit={createUser}>
      <Form.Group className="mb-3">
         <Form.Control value ={users.name} required onChange={(e)=> setUsers({...users,name: e.target.value})} type="text" placeholder="Name"/>
      </Form.Group>
      <Form.Group className="mb-3">
         <Form.Control value ={users.email} required onChange={(e)=> setUsers({...users,email: e.target.value})} type="text" placeholder="Email"/>
      </Form.Group>
      <Form.Group className="mb-3">
         <Form.Control value ={users.password} required onChange={(e)=> setUsers({...users,password: e.target.value})} type="text" placeholder="Password"/>
         <br></br>
      <Form.Group className="mb-3">
          <Form.Control value ={users.phone} required onChange={(e)=> setUsers({...users,phone: e.target.value})} type="text" placeholder="phone"/>  
      </Form.Group>
      </Form.Group>

      <Button className="btn btn-dark w-100" variant="primary" type="submit">
         Add New Appointment
      </Button>
      </Form>    
    </div>
   )

};

export default AddTrav;



// 



// import { Button } from "react-bootstrap";
// import Form from "react-bootstrap/Form";
// import Alert from "react-bootstrap/Alert";

// const Addappointments =() => {
//    return(
//  <div className="Login-container">
//    <h1>Add New Appointment Form</h1>

//    <Alert variant="danger" className="p-2">
//       THis is simple alert
//    </Alert>
//    <Alert variant="success" className="p-2">
//       THis is simple alert
//    </Alert>

//     <Form>
//       <Form.Group className="mb-3">
//          <Form.Control type="text" placeholder="From"/>
//       </Form.Group>
//       <Form.Group className="mb-3">
//          <Form.Control type="text" placeholder="To"/>
//       </Form.Group>
//       <Form.Group className="mb-3">
//          <Form.Control type="text" placeholder="Day and time"/>
//       </Form.Group>
//       <Form.Group className="mb-3">
//          <Form.Control type="text" placeholder="Ticket Price"/>
//       </Form.Group>
//       <Form.Group className="mb-3">
//          <Form.Control type="text" placeholder="Max number of travelers"/>
//       </Form.Group>
//       <Form.Group className="mb-3">
//          <input type="file"className="form-control"/>
//       </Form.Group>
      

//       <Button className="btn btn-dark w-100" variant="primary" type="submit">
//          Add New Appointment
//       </Button>
//       </Form>    
//     </div> 
//    )

// };

// export default Addappointments;