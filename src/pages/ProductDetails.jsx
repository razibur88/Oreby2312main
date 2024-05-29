import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Container from '../components/Container'
import Flex from '../components/Flex'
import SingImg from "../assets/SingImg.png"
import { FaPlus,FaRegStar,FaRegStarHalfStroke  } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { useDispatch } from 'react-redux'
import { addToCart } from '../components/slice/productSlice'


const ProductDetails = () => {
    let [show, setShow]= useState(false)
    let productId = useParams()
    const dispatch = useDispatch()
    let [singleProduct, setSingleProduct]= useState([])

    let dataId = () =>{
        axios.get(`https://dummyjson.com/products/${productId.id}`).then((response)=>{
            setSingleProduct(response.data)
        })
    }

    useEffect(()=>{
        dataId()
    },[])

    let clicentRating = Array.from({length:5},(elm, index)=>{
        let number = index + 0.5
        return(
            singleProduct.rating > index + 1 ? <FaStar/> : singleProduct.rating > number ? <FaRegStarHalfStroke /> : <FaRegStar/>
        )
    })

    let handleAddtoCart = (item) =>{
        dispatch(addToCart({...item, qun:1}))
    }

  

  return (
    <Container>
        <Flex className="flex-wrap justify-between pt-4">
            {singleProduct?.images?.map((item)=>(
            <div className="w-[48%]">
                <img className='w-full' src={item} alt="" />
            </div>
            ))}
            
            
        </Flex>
        <h2 className='text-[39px] text-[#292929] font-dm font-bold'>Product</h2>
        <div className="">
            <p className='text-[#FFD881] flex pt-3'> {clicentRating}</p>
               
        </div>
        

      <div className=" w-[50%] py-[24px] border-b-[1px] border-[#F0F0F0]">
        <div className="flex">
            <h4 className='text-[16px] font-dm font-semibold pr-[27px]'>STATUS:</h4>
            <h4 className='text-[16px] font-dm font-normal text-[#767676]'>{singleProduct.stock}</h4>
            
        </div>
      </div>
      <div className="py-[29px]">
            <button className='h-[50px] w-[200px] border-[1px] border-[#262626] hover:bg-[#262626] hover:text-[#fff] duration-500 ease-in-out mr-[10px]'>Add to Wish List</button>
            <Link to="/cart">
            <button onClick={()=>handleAddtoCart(singleProduct)} className='h-[50px] w-[200px] border-[1px] border-[#262626] hover:bg-[#262626] hover:text-[#fff] duration-500 ease-in-out'>Add to Cart</button>
            </Link>
        </div>
      <div className="w-[50%] py-[24px] border-b-[1px] border-[#F0F0F0]">
        <div className="">
            <div onClick={()=>setShow(!show)} className="flex justify-between items-center">
            <h4 className='text-[16px] font-dm font-semibold pr-[27px]'>FEATURES  & DETAILS</h4>
            {show == true ? "cross" : <span><FaPlus/></span>}
            </div>
            {show &&
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas neque ad nam consequuntur dignissimos tempore ut dicta voluptates ratione, quod fugiat voluptatibus sint accusantium iste quia placeat id alias omnis.</p>
            }
        </div>
      </div>
      <div className="w-[50%] py-[24px] border-b-[1px] border-[#F0F0F0]">
        <div className="flex justify-between items-center">
            <h4 className='text-[16px] font-dm font-semibold pr-[27px]'>SHIPPING & RETURNS</h4>
            <span><FaPlus/></span>
            
        </div>
      </div>

    </Container>
  )
}

export default ProductDetails