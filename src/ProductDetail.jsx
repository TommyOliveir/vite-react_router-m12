import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function ProductDetail() {
  const { id } = useParams()
  const [products, setProducts] = useState([])



  useEffect(() => {
    fetch('https://dummyjson.com/products/')
      .then(response => response.json())
      // 4. Setting *dogImage* to the image url that we received from the response above
      .then(data => setProducts(data.products))
  }, [])

  const thisproduct = products ? products.find(prod => prod.id.toString() === id) :
    console.log("no")

  return (

    <div>
      <h1>Product Details</h1>
      <h4>Using useParams</h4>
      <p>Product Id: {id} </p>
      <p>  {thisproduct ? `${thisproduct.title} ` : ""}</p>
      <p> {thisproduct ? `${thisproduct.description} ` : ""}</p>
      <p> {thisproduct ? `Price: ${thisproduct.price} ` : ""}</p>

      <img src={thisproduct ? ` ${thisproduct.images[2]} ` : ""} alt="" />


    </div>
  )
}

export default ProductDetail
