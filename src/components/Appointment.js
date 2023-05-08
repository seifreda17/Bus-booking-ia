
import Card from 'react-bootstrap/Card';
import '../css/Appointment.css'
import { Link } from 'react-router-dom';

const AppDetails =(props)=> {
  
  return (
    <div>
    <Card>

      <Card.Img className='app-img' variant="top" src="https://picsum.photos/200/300" />
      <Card.Body>
          From : {props.Fromm}
          <br></br>
          To : {props.Too}
       <br></br>
          Ticket Price:{props.Ticket_price}
          <br></br>
          Day And Time:{props.day_and_time}
          <br></br>
          Max number of Travellers:{props.max_num_trav}
        <Card.Text>
         Click "show more" for more details
        </Card.Text>
        <Link className='btn btn-dark w-100' to={"/"+ props.id}>Boooook Now</Link>
     
      </Card.Body>
    </Card>
    </div>
  );
};

export default AppDetails;