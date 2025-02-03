import React from 'react'

const Product = () => {
    const product = {
        name: "Iphone",
        model: "Max 23"
    }
  return (
    <>
    <div>
        <h2>Product name - {product.name}</h2>
        <h2>Product model - {product.model}</h2>
    </div>
    </>
  )
}

export default Product