import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import axios from "axios";
import { useParams } from "react-router-dom";

const UpdateTrav = () => {
  let { id } = useParams();
  const [users, setUsers] = useState({
    name: '',
    email: '',
    // phone:'',
    password:'',
    err:"",
   loading:false,
   reload:false,
   successMessage:null
  });

  const UpdateTrav = (e) => {
    e.preventDefault();

    setUsers({ ...users, loading: true });


    axios
      .put("http://localhost:4000/Users/update_user/"+id ,{
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

  useEffect(() => {
    axios
      .get("http://localhost:4000/Users/" + id)
      .then((resp) => {
        setUsers({
          ...users,
          name: resp.data.name,
          email: resp.data.email,
        password: resp.data.password,
          phone: resp.data.data,
      
          
        });
      })
      .catch((err) => {
        setUsers({
          ...users,
          loading: false,
          success: null,
          err: "Something went wrong, please try again later !",
        });
      });
  }, [users.reload]);

  return (
    <div className="Login-container">
      <h1>Update User</h1>

      {/* {users.err && (
        <Alert variant="danger" className="p-2">
          {users.err}
        </Alert>
      )} */}

      {users.success && (
        <Alert variant="success" className="p-2">
          {users.success}
        </Alert>
      )}

      <Form onSubmit={UpdateTrav} className="text-center py-2">
        

        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="name"
            value={users.name}
            onChange={(e) => setUsers({ ...users,name: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Email"
            value={users.email}
            onChange={(e) => setUsers({ ...users, email: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Phone number"
            value={users.phone}
            onChange={(e) => setUsers({ ...users, phone: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Password"
            value={users.password}
            onChange={(e) => setUsers({ ...users, password: e.target.value })}
          />
        </Form.Group>

        <Button className="btn btn-dark w-100" variant="primary" type="submit">
          Update User
        </Button>
      </Form>
    </div>
  );
};

export default UpdateTrav;




























// import React from 'react';
// import { Button } from 'react-bootstrap';
// import Form from "react-bootstrap/Form";
// import Alert from "react-bootstrap/Alert";

// const Updateappoint =() => {
//    return(
//       <div className="Login-container">
//          <h1>Update Appointment Form</h1>
      
//          <Alert variant="danger" className="p-2">
//             THis is simple alert
//          </Alert>
//          <Alert variant="success" className="p-2">
//             THis is simple alert
//          </Alert>
      
//          <Form>
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
//          Update Appointment
//       </Button>
//       </Form>    
//     </div> 
//          )

// };

// export default Updateappoint;