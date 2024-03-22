import React, { useEffect, useState } from 'react';

export default function APipractics() {
    const [api, setApi] = useState({ products: [], images: [], limit: 0 }); 
    useEffect(() => {
        fetch("https://dummyjson.com/products")
    
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                setApi(data);
            })
    }, []);

    return (
        <div>
            <h1>Product List</h1>
            <h6>{api.limit}</h6>
            <ul>
                {api.products.map((product, index) => (
                    <li key={index}>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>Price: {product.price}</p>
                        <p>Price: {product.description}</p>
                        <div>
                            {product.images.map((image, imageIndex) => (
                                <img key={imageIndex} src={image} alt="this lol"/>
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
