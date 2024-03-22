import React, { useEffect } from 'react'
import axios from 'axios'
export default function Axios() {
    useEffect(()=>{
        axios
        .get("https://fakestoreapi.com/products")
        .then((res)=>{
            console.log(res.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[])
  return (
    <div>Axios</div>
  )
}
