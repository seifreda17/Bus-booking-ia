import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import axios from "axios";
import { useParams } from "react-router-dom";

const UpdateAppointment = () => {
  let { id } = useParams();
  const [appointment, setAppointments] = useState({
   Fromm: '',
   Too: '',
   day_and_time:'',
   Ticket_price:'',
   max_num_trav:'',
   err:"",
   loading:false,
   reload:false,
   successMessage:null
  });

  const UpdateAppointment = (e) => {
    e.preventDefault();

    setAppointments({ ...appointment, loading: true });


    axios
      .put("http://localhost:4000/appointment/update/"+id ,{
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

  useEffect(() => {
    axios
      .get("http://localhost:4000/appointment/" + id)
      .then((resp) => {
        setAppointments({
          ...appointment,
          Fromm: resp.data.Fromm,
          Too: resp.data.Too,
          day_and_time: resp.data.day_and_time,
          Ticket_price: resp.data.Ticket_price,
         max_num_trav: resp.data.max_num_trav,
          
        });
      })
      .catch((err) => {
        setAppointments({
          ...appointment,
          loading: false,
          success: null,
          err: "Something went wrong, please try again later !",
        });
      });
  }, [appointment.reload]);

  return (
    <div className="Login-container">
      <h1>Update Appointment Form</h1>

      {/* {appointment.err && (
        <Alert variant="danger" className="p-2">
          {appointment.err}
        </Alert>
      )} */}

      {appointment.success && (
        <Alert variant="success" className="p-2">
          {appointment.success}
        </Alert>
      )}

      <Form onSubmit={UpdateAppointment} className="text-center py-2">
        

        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="From"
            value={appointment.Fromm}
            onChange={(e) => setAppointments({ ...appointment, Fromm: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="To"
            value={appointment.Too}
            onChange={(e) => setAppointments({ ...appointment, Too: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Day and Time"
            value={appointment.day_and_time}
            onChange={(e) => setAppointments({ ...appointment, day_and_time: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Ticket Price"
            value={appointment.Ticket_price}
            onChange={(e) => setAppointments({ ...appointment, Ticket_price: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Max number of Travelers"
            value={appointment.max_num_trav}
            onChange={(e) => setAppointments({ ...appointment, max_num_trav: e.target.value })}
          />
        </Form.Group>

        <Button className="btn btn-dark w-100" variant="primary" type="submit">
          Update Appointment
        </Button>
      </Form>
    </div>
  );
};

export default UpdateAppointment;




























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