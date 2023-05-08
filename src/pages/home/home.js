import React, { useEffect, useState } from "react";
import Appointments from "../../components/Appointment";
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { Spinner } from "react-bootstrap";
import { Alert } from "react-bootstrap";



const  Home = () =>{
   const[appointment,setAppointments]=useState({
    loading:true,
    results:[],
    err:null,
    reload:0
   })

   const[search,setSearch]=useState("");


   //Call Api to get List of Appointmetns
   useEffect(()=>{
    setAppointments({...appointment, loading:true});
    axios
    .get("http://localhost:4000/appointment",{
        params:{
            search:search,
        },
    })
    .then((resp)=>{
        console.log(resp);
        setAppointments({...appointment, results:resp.data , loading:false , err:null});
    }).catch((err)=>{
        setAppointments({...appointment, loading:false,err:"Something is wrong"});
    })

   }, [appointment.reload] )

   const searchApps=(e)=>{
    e.preventDefault()
    setAppointments({...appointment,reload:appointment.reload+1})
   }




    return(
  <div className="home-container p-5">
    {/* Loader */}
    {
        appointment.loading===true&&(
            <div className="text-center">
             <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading....</span>
    </Spinner>
    </div>
    )
    }
   {/* List Appointment */}
{appointment.loading===false&& appointment.err==null&&(
<>
    {/* SEARCH */}

<Form onSubmit={searchApps}>
<Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
  <Form.Control type="text"
  
   placeholder="Search Appointment" 
   className="rounded-0"
   value={search}
    onChange={(e)=>setSearch(e.target.value)}/>
  <button className='btn btn-dark rounded-0'>Search</button>
  </Form.Group>
  </Form>

{/* //LIST of appointment */}
<div className="row">
{appointment.results.map((appointment)=>(
<div className="col-3 card-movie-container"  key={appointment.Appointment_id}>
       <Appointments
        Fromm={appointment.Fromm}
        Too={appointment.Too}
        Ticket_Price={appointment.Ticket_price} day_and_time={appointment.day_and_time}
        max_num_trav={appointment.max_num_trav} 
        id={appointment.Appointment_id}
        user_id_app={appointment.user_id_app}
        />
   </div>
    )
    )}
 </div>
</>
)}


 {/* List Appointment error */}
{appointment.loading===false&& appointment.err!=null&&(
    <Alert  variant={'danger'} className='p-2'>
        {appointment.err}
        </Alert>
)}
{appointment.loading===false&& appointment.err==null&& appointment.results.length === 0 &&(
    <Alert  variant="info" className='p-2'>
        No Appointment Sorry! ":)"
        </Alert>
)}
     
 </div>
 )
 }
  export default Home;