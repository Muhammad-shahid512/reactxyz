import React, { useState } from 'react'

export default function Objectbase() {
    let object={
        limit:2,
        name:"shahid",
        product:[
            {
            id:1,
            name:"product1",
            price:100,
            array:["shahid","ahmad"],
            item:10
        },
             {
            id:2,
            name:"product2",
            array:["shahid","ahmad"],
            price:200,
            item:30
        },
             {
            id:3,
            name:"product3",
            price:300,
            array:["shahid","ahmad"],
            item:40
        },
    
    ]
        }

        const[api,setapi]=useState(object)
    return (
    <div>
    

    <h4>{api.limit}</h4>



    {
        api.product.map((ele,index)=>(
            <li key={index}>
            <h6>{ele.id}</h6>
            <h6>{ele.name}</h6>
            <h6>{ele.price}</h6>
            <h6>{ele.item}</h6>
            <div>
            {ele.array.map((data, index) => (
                <li key={index}>
                    <h4>{data}</h4>
                </li>
            ))}
            
            
            </div>

            </li>

        ))
    }
    </div>
  )
}
