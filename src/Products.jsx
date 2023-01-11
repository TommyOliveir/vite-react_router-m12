import React from 'react'
import { Link} from "react-router-dom"

function Products() {
  return (
    <div>
      <h1>Products</h1>
      <Link to="/products/1">Product 1</Link>
      <Link to="/products/2">Product 2</Link>
    </div>
  )
}

export default Products
