import React, {useState , useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import {Link} from "react-router-dom";
import axios from 'axios';
import {getAuthUser} from '../../helper/Storage'


const ManageRequest =() => {
  
  const auth = getAuthUser();
  const[Requests,setRequests]=useState({
    loading:true,
    results:[],
    err:null,
    reload:0
   })
   useEffect(()=>{
    setRequests({...Requests, loading:true});
    axios
    .get("http://localhost:4000/Requests/admin_list")
    .then(resp=>{
      setRequests({...Requests,results:resp.data, loading:false,err:null});
        
    }).catch(_err=>{
        
    })

   }, [Requests.reload] )

   const deleteRequests =(req_id) =>{
    axios
    .delete("http://localhost:4000/Requests/reject/" + req_id, {
    
      })
   
    .then(_resp=>{
      setRequests({ ...Requests, reload: Requests.reload + 1 });
    }).catch(_err=>{
        
    })

   }

   return( <div className="manage-Requestss p-5" >
    <div className="header d-flex justify-content-between mb-5">
    <h3 className="text-center" >Manage Requests</h3>
   
     
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
            <td>{Requests.users_id}</td>
            <td>{Requests.appointment_id}</td>
            
            <td>
              <button className="btn btn-sm btn-danger" onClick={(_e) => {deleteRequests(Requests.req_id)}}>Reject</button>
              <Link to={""+Requests.req_id} className="btn btn-sm btn-primary mx-2">Accept</Link>
              
  
            </td>
          </tr>

         ))}
        
         
      </tbody>
    </Table>
   
  </div>
);


};

export default ManageRequest ;














