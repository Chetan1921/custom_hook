import {useEffect,useState} from 'react'
import ProductCard from './ProductCard';
import {useProductList} from './useProductList'

const Productlist=() =>{
    const {products}=useProductList()
  return (
    <div className='ProductList'>
      
       {
        products.map(p=><ProductCard key={p.id} title={p.title} imageurl={p.image} price={p.price}/>)
       }
    </div>
  )
}

export default Productlist