import React, {useState , useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ShowMyHistory =() => {
   
  const[Requests,setRequests]=useState({
    loading:true,
    results:[],
    err:null,
    reload:0
   })
   useEffect(()=>{
    setRequests({...Requests, loading:true});
    axios
    .get("http://localhost:4000/Requests/list/"+ id)
    .then((resp)=>{
      setRequests({ 
        ...Requests,
        users_id:resp.data.users_id
        ,req_id: resp.data.req_id,
        request: resp.data.request,
      appointment_id: resp.data.appointment_id,
      });
        
    }).catch(_err=>{
        setRequests({ ...Requests,
            loading: false,
            success: null,
            err: "Something went wrong, please try again later !",
          });
        });
        

   }, [Requests.reload] )


   return( <div className="manage-Requestss p-5" >
    <div className="header d-flex justify-content-between mb-5">
    <h3 className="text-center" >My History</h3>
   
     
    </div>

    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Request</th>
          <th>User Id</th>
          <th>Appointment Id</th> 
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        
        {  Requests.results.map((Requests) => (
            <tr key={Requests.req_id}>
            <td>{Requests.req_id}</td> 
            <td>{Requests.request}</td>  
            <td>{Requests.appointment_id}</td>
            
            <td>
              
  
            </td>
          </tr>

         ))}
        
         
      </tbody>
    </Table>
   
  </div>
);


};

export default ShowMyHistory ;














