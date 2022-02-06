import React ,{useState,useEffect} from 'react';
import axios from 'axios';
import { ListGroup , Button  , Modal} from 'react-bootstrap';
const ListUser = () => {
  const  styleObject = {borderRadius : 50}
    const [user , setUser ] = useState([])
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{
            console.log(res);
            setUser(res.data)
        }
        )
    },[])
return<div>
{user.map(us=>
 <ListGroup>
 <ListGroup.Item  variant="primary"><h6>Name:</h6> {us.name} <br/>
   <Button  variant="danger"style={styleObject} onClick={handleShow}>
       click me for details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h6>Username: {us.username}</h6>
            <h6>Address: {us.address.city}</h6>
            <h6>Phone: {us.phone} </h6>
            <h6>Web: {us.website}</h6>
            <h6>Company : {us.company.name}</h6>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
 </ListGroup.Item>
</ListGroup>
    )}
     
  </div>;
};

export default ListUser;

