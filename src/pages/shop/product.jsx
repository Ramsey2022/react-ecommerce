import React from 'react'

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data
  return (
    <div className='product'>
      <img src={productImage}></img>
      <div className='description'>
        <p>
          <em>{productName}</em>
        </p>
        <p>
          ${price}
        </p>
      </div>
    </div>
  )
}
