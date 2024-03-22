import React, { useEffect, useState } from 'react';

export default function Displaydata() {
    const [api, setApi] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setApi(data);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            { api.map((ele, index) => {
                const{id,name,username,email}=ele
                const{street,suit,city,zipcode}=ele.address
                const{lat,Ing}=ele.address.geo
                    return (
                        <div key={index}>
                             <p>{id}</p>
                             <p>{name}</p>
                             <p>{username}</p>
                             <p>{email}</p>
                             <h3>{street}</h3>
                             <h3>{city}</h3>
                             <h5>{lat}</h5>
                        </div>
                    );
                })
            }
        </div>
    );
}
