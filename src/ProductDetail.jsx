import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function ProductDetail() {
    const {id} = useParams()
    const [products, setProducts] = useState([])

    useEffect(() => {
      fetch('https://dummyjson.com/products')
        .then(response => response.json())
        // 4. Setting *dogImage* to the image url that we received from the response above
        .then(data => setProducts(data.products))
    }, [])
    const thisproduct = products.find(prod => prod.id == id)
   console.log(thisproduct)
  return (
    <div>
      <h3>Product Details</h3>
      <h3>Using useParams</h3>
      <p>Product Id: {id} </p>
       <p>Product Name: <span className='product-name product-text-info'>{thisproduct.title}</span> </p>
      <p>Description: <span className='product-description product-text-info'>{thisproduct.description}</span> </p>
      <p>Product price: <span className='product-price product-text-info'>{thisproduct.price} Euro</span> </p> 
    
     
    </div>
  )
}

export default ProductDetail
