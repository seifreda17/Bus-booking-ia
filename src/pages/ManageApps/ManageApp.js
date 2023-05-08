import React, {useState , useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import {Link} from "react-router-dom";
import axios from 'axios';
import {getAuthUser} from '../../helper/Storage'


const ManageAppointments =() => {
  
  const auth = getAuthUser();
  const[appointment,setAppointments]=useState({
    loading:true,
    results:[],
    err:null,
    reload:0
   })
   useEffect(()=>{
    setAppointments({...appointment, loading:true});
    axios
    .get("http://localhost:4000/appointment")
    .then(resp=>{
      setAppointments({...appointment,results:resp.data, loading:false,err:null});
        
    }).catch(_err=>{
        
    })

   }, [appointment.reload] )

   const deleteAppointment =(Appointment_id) =>{
    axios
    .delete("http://localhost:4000/appointment/delete/" + Appointment_id, {
      
      })
   
    .then(_resp=>{
      setAppointments({ ...appointment, reload: appointment.reload + 1 });
    }).catch(_err=>{
        
    })

   }

   return( <div className="manage-appointments p-5" >
    <div className="header d-flex justify-content-between mb-5">
    <h3 className="text-center" >Manage Appointments </h3>
    <Link to="create" className="btn btn-success">
     Add New Appointment +
     </Link>
    </div>
{/*     
    <Alert variant="danger" className="p-2">
      THis is simple alert
   </Alert>
   <Alert variant="success" className="p-2">
      THis is simple alert
   </Alert> */}

    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>From</th>
          <th>To</th>
          <th>Day and Time</th>
          <th>Ticket Price</th>
          <th>Max number of Travelers</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        
        {  appointment.results.map((appointment) => (
            <tr key={appointment.Appointment_id}>
            <td>{appointment.Appointment_id}</td>  
            <td>{appointment.Fromm}</td>
            <td>{appointment.Too}</td>
            <td>{appointment.day_and_time}</td>
            <td>{appointment.Ticket_price}</td>
            <td>{appointment.max_num_trav}</td>
            <td>
              <button className="btn btn-sm btn-danger" onClick={(_e) => {deleteAppointment(appointment.Appointment_id)}}>Delete</button>
              <Link to={""+appointment.Appointment_id} className="btn btn-sm btn-primary mx-2">Update</Link>
              <Link to={"/" + appointment.Appointment_id} className="btn btn-sm btn-info">Show</Link>
  
            </td>
          </tr>

         ))}
        
         
      </tbody>
    </Table>
   
  </div>
);


};

export default ManageAppointments ;













