import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDetail() {
    const {id} = useParams()
  return (
    <div>
      <h1>Using useParams</h1>
      <h2>Product Detail {id} </h2>
    </div>
  )
}

export default ProductDetail
