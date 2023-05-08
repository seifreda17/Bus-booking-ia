import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { removeAuthUser ,getAuthUser} from '../helper/Storage';
const Header = () =>{
  const navigate=useNavigate();
  const auth=getAuthUser();
    const Logout=()=>{
    
      removeAuthUser();
      navigate("/");
    }

    return(<>
      <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand style={{'text-decoration':'none'}}>
      <Link className='nav-link' to={'/'}>Wave Travel</Link>
      </Navbar.Brand>
        <Nav className="me-auto">
            <Link className='nav-link' to={'/'}>List Appointments</Link>
           
          
        
      
        
        {/**UNAUTHENTICATED ROUTES */}
        {!auth&& <>
        
          <Link className='nav-link' to={'/login'}>Login</Link>
            <Link className='nav-link' to={'/register'}>Register</Link>
        
        </>
        }

           {/*ADMIN ROUTES*/}
       {auth&& auth.role===1&& <>
       <Link className='nav-link' to={'/Manage-Appointment'}>Manage Appointments </Link>
       
       
      </>}
      {auth&& auth.role===1&& <>
       <Link className='nav-link' to={'/Manage-Travellers'}>Manage Travellers </Link>
       
       
      </>}
      {auth&& auth.role===1&& <>
       <Link className='nav-link' to={'/Manage-Requests'}>Manage Requests </Link>
       
       
      </>}
      
        {/**User ROUTES */}
      { <>
       <Link className='nav-link' to={'/Show_History'}>Show my history </Link>
       
       
      </>}
      
      
      </Nav>
     


        


      

        <Nav className="ms-auto">
          {/**AUTHENTICATED ROUTES */}
       {auth&& <Nav.Link onClick={Logout}>Logout</Nav.Link>}
        </Nav>
      </Container>
    </Navbar>
    </>);
    };
    
  
  export default Header;
  