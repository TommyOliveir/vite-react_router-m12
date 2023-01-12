import React from 'react'
import { Link } from "react-router-dom"
import { useEffect, useState } from 'react'
import ProductDetail from './ProductDetail'

function Products() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      // 4. Setting *dogImage* to the image url that we received from the response above
      .then(data => setProducts(data.products))
  }, [])

  const displayproducts = products.map(prod => (
    <div key={prod.id}>
      <Link to={`/products/${prod.id}`} ><h3>{prod.title}</h3></Link>

      <hr />
    </div>
  ))


  console.log(products)


  return (
    <div>
      <h1>Products are </h1>
      <h4>(Dynamic routes)</h4>
      {displayproducts}
      <Link to="/products/1">Product 1</Link><br></br>
      <Link to="/products/2">Product 2</Link>
    </div>
  )
}

export default Products
