import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Container,Row,Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Update() {
    const move=useNavigate()
    const[id,setid]=useState(0)
    const[name,setname]=useState("")
    const[working,setworking]=useState("")
    useEffect(()=>{
        setid(localStorage.getItem("id"))
        setname(localStorage.getItem("name"))
        setworking(localStorage.getItem("working"))
    },[])

    const uddatechange=(e)=>{
        e.preventDefault();
        axios.put(`https://65fc018a14650eb2100b45e6.mockapi.io/Crud/${id}`, {
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
  return (
    <div>
    
    <Container>
    <h4>update</h4>
    <Row>
    
    <Col lg={12}>

    <Form onSubmit={uddatechange} >
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Name:</Form.Label>
    <Form.Control type="name" placeholder="Enter the Name" value={name} onChange={(e)=>setname(e.target.value)}  />
  </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Working</Form.Label>
      <Form.Control value={working} type="input" placeholder="Enter Working" onChange={(e)=>setworking(e.target.value)} />
    </Form.Group>
 
    <Button variant="primary" type="submit">
Update
  </Button>
  </Form>
    </Col>
    </Row>
    
    </Container>
    </div>
  )
}
