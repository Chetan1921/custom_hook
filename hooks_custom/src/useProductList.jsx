import React from 'react'


function useProductList() {
    const [products,setproduct]=useState([]);
    useEffect(()=>{
        getproduct(); 
       
    },[])
    const getproduct=async()=>{
        const list=await fetch("https://fakestoreapi.com/products");
        const listjson=await list.json();
        setproduct(listjson);
    }
  return (
     {
        products
     }
  )
}

export default useProductList