import React from 'react'
import Container from './Container'
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Logo from "../assets/logo.png"

const Footer = () => {
  return (
    <div className=" py-[55px] bg-[#F5F5F3] mt-[100px]">
                <Container className="">
                    <div className="lg:flex lg:justify-between lg:mx-0 mx-[10px]">
                        <div className="lg:w-[65%] lg:flex lg:justify-between lg:text-start text-center">
                            <div className="flex justify-between lg:w-[65%] w-full">
                            <div className="">
                                <div className="">
                                    <span className='text-[16px] text-[#262626] font-dm font-bold mb-[17px] '>MENU</span>
                                    <ul>
                                        <li className='text-[14px] text-[#6D6D6D] font-dm font-medium py-1'>Home</li>
                                        <li className='text-[14px] text-[#6D6D6D] font-dm font-medium py-1'>Shop</li>
                                        <li className='text-[14px] text-[#6D6D6D] font-dm font-medium py-1'>About</li>
                                        <li className='text-[14px] text-[#6D6D6D] font-dm font-medium py-1'>Contact</li>
                                        <li className='text-[14px] text-[#6D6D6D] font-dm font-medium py-1'>Journal</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="">
                                <div className="">
                                    <span className='text-[16px] text-[#262626] font-dm font-bold mb-[17px] '>SHOP</span>
                                    <ul>
                                        <li className='text-[14px] text-[#6D6D6D] font-dm font-medium py-1'>Category 1</li>
                                        <li className='text-[14px] text-[#6D6D6D] font-dm font-medium py-1'>Category 2</li>
                                        <li className='text-[14px] text-[#6D6D6D] font-dm font-medium py-1'>Category 3</li>
                                        <li className='text-[14px] text-[#6D6D6D] font-dm font-medium py-1'>Category 4</li>
                                        <li className='text-[14px] text-[#6D6D6D] font-dm font-medium py-1'>Category 5</li>
                                    </ul>
                                </div>
                            </div>


                            <div className="">
                                <div className="w-[90%]">
                                    <span className='text-[16px] text-[#262626] font-dm font-bold mb-[17px] '>HELP</span>
                                    <ul>
                                        <li className='text-[14px] text-[#6D6D6D] font-dm font-medium py-1'>Privacy Policy</li>
                                        <li className='text-[14px] text-[#6D6D6D] font-dm font-medium py-1'>Terms & Conditions</li>
                                        <li className='text-[14px] text-[#6D6D6D] font-dm font-medium py-1'>Special E-shop</li>
                                        <li className='text-[14px] text-[#6D6D6D] font-dm font-medium py-1'>Shipping</li>
                                        <li className='text-[14px] text-[#6D6D6D] font-dm font-medium py-1'>Secure Payments</li>
                                    </ul>
                                </div>
                            </div>
                            </div>


                            <div className="lg:w-[20%] w-full text-center lg:text-start lg:pb-0 pb-7">
                            
                            <div className="">
                                <div className=" ">
                                    <ul>
                                        <li> <a href="" className='text-[16px] text-[#262626] font-dm font-bold mb-[17px] '>(052) 611-5711</a></li>
                                        <li><a href="" className='text-[16px] text-[#262626] font-dm font-bold mb-[17px] '>company@domain.com</a></li>
                                        <li><p className='text-[14px] text-[#6D6D6D] font-dm font-medium py-1'>575 Crescent Ave. Quakertown, PA 18951</p></li>
                                    </ul>



                                </div>
                            </div>
                            </div>
                            
                        </div>
                        <div className="lg:w-[25%]">
                            <div className="">
                                <img className='lg:mx-0 mx-auto' src={Logo} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className=" lg:flex lg:justify-between pt-[65px] ">
                        <div className="flex items-center lg:justify-start justify-center ">
                            <FaFacebookF />
                            <FaLinkedinIn className='mx-[26px]' />
                            <FaInstagram />
                        </div>
                        <div className="">
                            <div className="text-center">
                                <p className='text-[14px] text-[#6D6D6D] font-dm font-medium '>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
  )
}

export default Footer