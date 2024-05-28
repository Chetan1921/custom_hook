import React from 'react'

const ProductCard=({title,imageurl,price}) =>{
  return (
    <div className='ProductCard'>
        <img src={imageurl} alt={title}/>
        <p>{title}</p>
        <p>{price}</p>
    </div>
  )
}

export default ProductCard