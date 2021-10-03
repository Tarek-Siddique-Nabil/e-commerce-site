import { useEffect } from "react";
import { useState } from "react"

const useProducts= () =>{
    const [product , setProducts] = useState([]);
    useEffect(()=>{
        fetch('./products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return[product]
}
export default useProducts;