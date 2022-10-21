import React, { useEffect, useState } from 'react'
import { Card } from './Card'

export const Products = () => {

    const [dataItems, setdataItems] = useState([])

    const fetchData = async () => {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        console.log(data.products);
        return setdataItems(data.products);
      }
    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className='product__container'>
            {dataItems.map((product, index) => (
                <Card key={index} name={product.title} price={product.price} thumb={product.thumbnail} />
            ))}

        </div>
    )
}
