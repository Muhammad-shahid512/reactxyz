import React, { useState, useEffect } from 'react';
import "./Read.css";
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { Link, useNavigate } from 'react-router-dom';

export default function Read() {
 
    const [showdata, setData] = useState([]);
    const fetchData = async () => {
        try {
            const response = await axios.get("https://65fc018a14650eb2100b45e6.mockapi.io/Crud");
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const deletedata=(id)=>{
        console.log(id)
        axios.delete(`https://65fc018a14650eb2100b45e6.mockapi.io/Crud/${id}`)
        .then(()=>{
            fetchData()
        })  
    }
    let movepage=useNavigate()
    const setLocalStorage=(id,name,working)=>{
movepage("/update")
        console.log(id)
        console.log(name)
        console.log(working)
        localStorage.setItem("id",id)
        localStorage.setItem("name",name)
        localStorage.setItem("working",working)
        console.log("this is  a shahid")
    }
  useEffect(()=>{
    fetchData()
  },[])

  let home=useNavigate();
  const gotohome=()=>{
home("/")
  }

    return (
        <div>
        <h5>Read</h5>
        <Button className='my-2' onClick={gotohome}>Goto Create</Button>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Working</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>

                    {showdata.map((ele, index) => (
                        <tr key={index}>
                            <td>{ele.id}</td>
                            <td>{ele.name}</td>
                            <td>{ele.working}</td>
                            <td><Button variant="danger" size="sm" onClick={()=>deletedata(ele.id)}>Delete</Button></td>

                          <td><Button path="/update" variant="primary" size="sm" onClick={()=>setLocalStorage(ele.id,ele.name,ele.working)}>Edit</Button></td>
                   
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}
