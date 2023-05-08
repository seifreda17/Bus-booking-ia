import React, {useState , useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import {Link} from "react-router-dom";
import axios from 'axios';
import {getAuthUser} from '../../helper/Storage'


const ManageTrav =() => {
  
  const auth = getAuthUser();
  const[users,setUsers]=useState({
    loading:true,
    results:[],
    err:null,
    reload:0
   })
   useEffect(()=>{
    setUsers({...users, loading:true});
    axios
    .get("http://localhost:4000/Users")
    .then(resp=>{
      setUsers({...users,results:resp.data, loading:false,err:null});
        
    }).catch(_err=>{
        
    })

   }, [users.reload] )

   const deleteUsers =(user_id) =>{
    axios
    .delete("http://localhost:4000/Users/delete_user/" + user_id, {
      
      })
   
    .then(_resp=>{
      setUsers({ ...users, reload: users.reload + 1 });
    }).catch(_err=>{
        
    })

   }

   return( <div className="manage-appointments p-5" >
    <div className="header d-flex justify-content-between mb-5">
    <h3 className="text-center" >Manage users </h3>
    <Link to="create" className="btn btn-success">
     Add New User +
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
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        
        {  users.results.map((users) => (
            <tr key={users.user_id}>
            <td>{users.user_id}</td>  
            <td>{users.name}</td>
            <td>{users.email}</td>
            <td>{users.phone}</td>
            
            <td>
              <button className="btn btn-sm btn-danger" onClick={(_e) => {deleteUsers(users.user_id)}}>Delete</button>
              <Link to={""+users.user_id} className="btn btn-sm btn-primary mx-2">Update</Link>
              <Link to={"/" + users.user_id} className="btn btn-sm btn-info">Show</Link>
  
            </td>
          </tr>

         ))}
        
         
      </tbody>
    </Table>
   
  </div>
);


};

export default ManageTrav ;













