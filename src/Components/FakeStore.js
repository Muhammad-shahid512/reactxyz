import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container,Row,Col } from 'react-bootstrap';
export default function FakeStore() {


    const[api,setapi]=useState([])
    // useEffect(()=>{
    //     fetch("https://fakestoreapi.com/products")
    //     .then(response=>response.json())
    //     .then((data)=>{
    //         console.log(data)
    //         setapi(data)
    //     })
    // },[])

useEffect(()=>{
    apiData()
},[])

    let apiData=async()=>{
        try {
            // Make a GET request using the Fetch API
            const response = await fetch('https://fakestoreapi.com/products');            
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const result = await response.json();
            setapi(result);
          } catch (error) {
            console.error('Error fetching data:', error.message);
          }

    }
  return (
    <div>

   <Container>
   <Row>
   
   {
    api.map((ele,index)=>(
<Col key={index} className='py-4'>
<Card style={{ width: '18rem' }}>
<Card.Img variant="top" src={ele.image} />
<Card.Body>
<Card.Title>{ele.category}</Card.Title>
<Card.Text>
{ele.description}
</Card.Text>
<h6>Title:{ele.title}</h6>
<div className="price my-2">Price:{ele.price}</div>
<Button variant="primary">Go somewhere</Button>
<div>
{
<h5>{ele.rating.rate}</h5>
// <h5>{ele.rating.count</h5>
}
</div>
</Card.Body>
</Card>
</Col>
))

}

   </Row>
   
   </Container>
    </div>
  )
}
