import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from '../components/Container'
import Flex from '../components/Flex'
import SingImg from "../assets/SingImg.png"
import { FaPlus } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

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
    <Container>
        <Flex className="flex-wrap justify-between pt-4">
            {singleProduct?.images?.map((item)=>(

            <div className="w-[48%]">
                <img className='w-full' src={item} alt="" />
            </div>
            ))}
            
            
        </Flex>
        <h2 className='text-[39px] text-[#292929] font-dm font-bold'>Product</h2>
        <div className="flex pt-3">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
        </div>
        <div className="flex items-center py-6 border-b-[1px] border-[#222]">
            <h4 className='pr-5'>QUANTITY:</h4>
            <div className="border-2 border-[#222] w-40 h-[50px] flex justify-around items-center">
                <div className="">
                    <span>-</span>
                </div>
                <div className="">
                    <span>0</span>
                </div>
                <div className="">
                    <span>+</span>
                </div>
            </div>
        </div>

      <div className=" w-[50%] py-[24px] border-b-[1px] border-[#F0F0F0]">
        <div className="flex">
            <h4 className='text-[16px] font-dm font-semibold pr-[27px]'>STATUS:</h4>
            <h4 className='text-[16px] font-dm font-normal text-[#767676]'>In Stock</h4>
            
        </div>
      </div>
      <div className="py-[29px]">
            <button className='h-[50px] w-[200px] border-[1px] border-[#262626] hover:bg-[#262626] hover:text-[#fff] duration-500 ease-in-out mr-[10px]'>Add to Wish List</button>
            <button className='h-[50px] w-[200px] border-[1px] border-[#262626] hover:bg-[#262626] hover:text-[#fff] duration-500 ease-in-out'>Add to Cart</button>
        </div>
      <div className="w-[50%] py-[24px] border-b-[1px] border-[#F0F0F0]">
        <div className="flex justify-between items-center">
            <h4 className='text-[16px] font-dm font-semibold pr-[27px]'>FEATURES  & DETAILS</h4>
            <span><FaPlus/></span>
            
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