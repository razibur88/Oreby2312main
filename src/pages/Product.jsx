import React, { useContext } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { Link } from 'react-router-dom'
import { FiPlus } from "react-icons/fi";
import { IoMdArrowDropup } from "react-icons/io";
import { IoGrid } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";
import { TfiReload } from "react-icons/tfi";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import BestImg from "../assets/best.png"
import { ApiData } from '../components/ContextApi';

const Product = () => {
    let data = useContext(ApiData)
    console.log(data);
  return (
    <Container>
         <div className="">
            <h3 className='text-[49px] text-[#292929] font-dm font-bold '>Products</h3>
            <span className='text-[14px] text-[#767676] font-dm font-normal'><Link to="/">Home</Link> &#62; Products</span>
          </div>
        <Flex>
            <div className="w-[20%]">
                <h2>category</h2>
            </div>
            <div className="w-[80%]">
            <div className="flex items-center ">
                <div className="mr-[20px] py-[12px] px-[12px] border-2 duration-500 ease-in-out hover:bg-[#262626] hover:text-[#fff]">
                  <IoGrid />
                </div>
                <div className="py-[12px] px-[12px] border-2 duration-500 ease-in-out hover:bg-[#262626] hover:text-[#fff]">
                  <TfiMenuAlt />
                </div>
              </div>
              <div className="">
                      <div className="w-[32%]">
                          <div className="relative group overflow-hidden">
                              <img src={BestImg} className='w-full lg:h-[270px]' alt="" />

                              <div className=" absolute left-0 bottom-[-150px]  w-full bg-[#fff] h-[150px] duration-500 ease-in-out flex items-center justify-end group-hover:bottom-0" >
                                  <div className="">
                                      <div className="flex items-center justify-end mr-2 py-2">
                                          <h3 className='mr-2 text-[16px] text-[#767676] font-normal font-dm hover:text-[#262626] hover:font-bold duration-500 ease-in-out'>Add to Wish List</h3>
                                          <FaHeart />
                                      </div>
                                      <div className="flex items-center justify-end mr-2 py-2 ">
                                          <h3 className='mr-[10px] text-[16px] text-[#767676] font-normal font-dm hover:text-[#262626] hover:font-bold duration-500 ease-in-out'>Compare</h3>
                                          <TfiReload />
                                      </div>
                                      <div className="flex items-center justify-end mr-2 py-2">
                                          <h3 className='mr-[10px] text-[16px] text-[#767676] font-normal font-dm hover:text-[#262626] hover:font-bold duration-500 ease-in-out'>Add to Cart</h3>
                                          <FaShoppingCart />
                                      </div>
                                  </div>

                              </div>
                          </div>

                          <div className="flex justify-between items-center  py-5">
                              <div className="">
                                  <p className='text-[16px] text-[#262626] font-dm font-bold'>Basic Crew Neck Tee</p>
                              </div>
                              <div className="">
                                  <h3 className='text-[16px] text-[#262626] font-dm font-bold'>$44.00</h3>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
        </Flex>
    </Container>
  )
}

export default Product