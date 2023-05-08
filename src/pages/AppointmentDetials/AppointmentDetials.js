// import React from 'react';
// import '../../css/AppDetails.css'
// import { useState,useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { Spinner } from 'react-bootstrap';
// import { Alert } from 'react-bootstrap';
// import APPDetails from '../../components/Appointment';


// const AppDetails =() => {
    
//     let {id}=useParams();
//     const[appointment,setAppointment]=useState({
//         loading:true,
//         result:null,
//         err:null,
//        });
       
//        useEffect(()=>{
//         setAppointment({...appointment, loading:true});
//         axios
//         .get("http://localhost:4000/appointment/" + id)
//         .then((resp)=>{
//             setAppointment({...appointment, result:resp.data , loading:false , err:null});
//         }).catch((_err)=>{
//             setAppointment({...appointment, loading:false,err:"Appointment isn't available sorry :)"});
//         });
    
//        }, [] );
    
    
    
    
    

//    return(

// <div className='APPDetails-container p-5'>
//      {/* Loader */}
//      {
//         appointment.loading===true&&(
//             <div className="text-center">
//              <Spinner animation="border" role="status">
//         <span className="visually-hidden">Loading....</span>
//     </Spinner>
//     </div>
//     )}
//     {/*LIST MOVIE*/ }
//     {appointment.loading===false&&appointment.err==null&&(
// <>
// <div className='row'>
// <div className='col-3'>
// < img className='app-img' src="https://picsum.photos/200/300" alt='' />
// </div>
// <div className='col-9'>
// {appointment.result.map((appointment)=>(
// <div className="col-3 card-movie-container" >
//       <h3>
//         {/* {appointment.result.Fromm} */}
//       </h3>
//                  </div>
//     )
//     )}

 
   
    
// </div>
// </div>
// <button className='Bookbutton btn btn-dark'>Book Now</button>
// </>

//     )}
        
    
    
    
    
//       {/* List Appointment error */}
// {appointment.loading===false&& appointment.err!=null&&(
//     <Alert  variant={'danger'} className='p-2'>
//         {appointment.err}
//         </Alert>
// )}
// {appointment.loading===false&& appointment.err==null&& appointment.result.length === 0 &&(
//     <Alert  variant="info" className='p-2'>
// {appointment.err}
//         </Alert>
// )}
     
//  </div>
    

    
//    );
// };

// export default AppDetails;
