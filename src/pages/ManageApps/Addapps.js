import React , {useRef, useState} from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

import axios from 'axios';

const AddAppointments =() => {
   const[appointment,setAppointments]=useState({
      Fromm: '',
      Too: '',
      day_and_time:'',
      Ticket_price:'',
      max_num_trav:'',
      err:"",
      loading:false,
      successMessage:null
     })
     const createappointment = (e) => {
   
      e.preventDefault();
      
      setAppointments({...appointment, loading: true});

      
      axios
      .post("http://localhost:4000/appointment/create" ,{
      Fromm:appointment.Fromm ,
      Too:appointment.Too,
      day_and_time:appointment.day_and_time,
      Ticket_price:appointment.Ticket_price,
      max_num_trav:appointment.max_num_trav
    })
    .then((resp)=>{
      setAppointments({...appointment,loading:false,err:[]});
     
    })

    .catch(_err=>{
      setAppointments({
      ...appointment,
      loading:false,
      successMessage:null,
      err:"something went wrong, please try again later !"
      });

    })

   };
   return(
<div className="Login-container">
   <h1>Add New Appointment Form</h1>

    {/* {
      appointment.err &&(
         <Alert variant="danger" className="p-2">
         {appointment.err}
      </Alert> 
      )
      } */}
   
   {
      appointment.successMessage &&(
         <Alert variant="success" className="p-2">
         {appointment.successMessage}
      </Alert> 
      )

   }
    <Form onSubmit={createappointment}>
      <Form.Group className="mb-3">
         <Form.Control value ={appointment.Fromm} required onChange={(e)=> setAppointments({...appointment,Fromm: e.target.value})} type="text" placeholder="From"/>
      </Form.Group>
      <Form.Group className="mb-3">
         <Form.Control value ={appointment.Too} required onChange={(e)=> setAppointments({...appointment,Too: e.target.value})} type="text" placeholder="To"/>
      </Form.Group>
      <Form.Group className="mb-3">
         <Form.Control value ={appointment.day_and_time} required onChange={(e)=> setAppointments({...appointment,day_and_time: e.target.value})} type="text" placeholder="Day and Time"/>
         <br></br>
      <Form.Group className="mb-3">
          <Form.Control value ={appointment.Ticket_price} required onChange={(e)=> setAppointments({...appointment,Ticket_price: e.target.value})} type="text" placeholder="Ticket Price"/>  
      </Form.Group>
      <Form.Group className="mb-3">
          <Form.Control value ={appointment.max_num_trav} required onChange={(e)=> setAppointments({...appointment,max_num_trav: e.target.value})} type="text" placeholder="Max number of Travelers"/>  
      </Form.Group>    
      </Form.Group>

      <Button className="btn btn-dark w-100" variant="primary" type="submit">
         Add New Appointment
      </Button>
      </Form>    
    </div>
   )

};

export default AddAppointments;



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