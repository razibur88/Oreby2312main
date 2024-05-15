import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    let productId = useParams()
    let [singleProduct, setSingleProduct]= useState([])

    let dataId = () =>{
        axios.get(`https://dummyjson.com/products/${productId.id}`).then((response)=>{
            setSingleProduct(response.data)
        })
    }

    useEffect(()=>{
        dataId()
    },[])


    console.log(singleProduct);
  return (
    <div>
        hello
    </div>
  )
}

export default ProductDetails