import React from 'react'
import Container from "./Container"
import Flex from './Flex'
import BestImg from "../assets/best.png"
import Clock from "../assets/clock.png"
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";

const BestSeller = () => {
    return (
        <Container>
            <Flex className="justify-between flex-wrap py-20">
                <div className="w-[49%] lg:w-[24%]">
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
                <div className="w-[49%] lg:w-[24%]">
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
                <div className="w-[49%] lg:w-[24%]">
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
                <div className="w-[49%] lg:w-[24%]">
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
            </Flex>

            <div className="">
                <img src={Clock} alt="" />
            </div>
        </Container>
    )
}

export default BestSeller