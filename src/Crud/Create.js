import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Container,Row,Col } from 'react-bootstrap';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
export default function Create() {
    const[name,setname]=useState(null)
    let move=useNavigate();
    const[working,setworking]=useState(null)
    const submitdata=(e)=>{
e.preventDefault();
console.log("Submit Data")
console.log({name:name,working:working})
if(name  &&  working!=="")
{
    console.log("lol 3nd")
    axios.post("https://65fc018a14650eb2100b45e6.mockapi.io/Crud", {
    name: name,
    working: working
  })

  .then((response) => {
    console.log(response);
  })
  .then(()=>{
move("/read")
  })
}

else{
    alert("Please Fill form")
}
// axios.post("https://65fc018a14650eb2100b45e6.mockapi.io/Crud", {
//     name: name,
//     working: working
//   })

//   .then((response) => {
//     console.log(response);
//   })
//   .then(()=>{
// move("/read")
//   })
    }
  return (
    <div>

    <Container>
    <h4>Create</h4>

    <Row>
    
    <Col lg={12}>

    <Form onSubmit={submitdata}>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Name:</Form.Label>
    <Form.Control type="name" placeholder="Enter the Name" value={name} onChange={(e)=>setname(e.target.value)} />
  </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Working</Form.Label>
      <Form.Control type="input" placeholder="Enter Working" value={working} onChange={(e)=>setworking(e.target.value)} />
    </Form.Group>
 
    <Button variant="primary" type="submit">
    Submit
  </Button>
  </Form>
    </Col>
    </Row>
    
    </Container>
  
    </div>
  )
}
