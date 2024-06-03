import React, { useEffect, useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import { FaBars } from "react-icons/fa6";
import { FaUser, FaCartArrowDown, FaSearch } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { useRef } from 'react';
import { RxCross2 } from "react-icons/rx";
import { useSelector } from 'react-redux';

const Menu = () => {
    let data = useSelector((state)=>state.product.cartItem)
    let [cateshow, setCateshow] = useState(false)
    let [cateshowcart, setCateshowCart] = useState(false)
    let [cateshowuser, setCateshowUser] = useState(false)

    let cateMenu = useRef()
    let catecart = useRef()
    let cateuser = useRef()


    useEffect(() => {
        document.addEventListener("click", (e) => {
            if (cateMenu.current.contains(e.target) == true) {
                setCateshow(!cateshow)
            } else {
                setCateshow(false)
            }
            if (catecart.current.contains(e.target) == true) {
                setCateshowCart(!cateshowcart)
            } else {
                setCateshowCart(false)
            }
            if(cateuser.current.contains(e.target) == true){
                setCateshowUser(!cateshowuser)
            }else{
                setCateshowUser(false)
            }
        })
    }, [cateshow, cateshowcart,cateshowuser])


    
   

    return (
        <Container>
            <Flex className="items-center">
                <div className="w-[30%] relative">
                    <div className="flex items-center gap-x-3" ref={cateMenu}>
                        <FaBars />
                        <h3 className='font-dm text-[#262626] font-normal text-[16px]'>Shop by Category</h3>
                    </div>
                    {cateshow &&
                        <div className="absolute z-50 top-[35px] left-0 bg-[#262626] w-[300px]">
                            <ul className='py-3'>
                                <li className='py-2 pl-3 text-[#fff] opacity-70 hover:opacity-100 hover:pl-8 duration-700 ease-in-out'></li>
                                <li className='py-2 pl-3 text-[#fff] opacity-70 hover:opacity-100 hover:pl-8 duration-700 ease-in-out'>Furniture</li>
                                <li className='py-2 pl-3 text-[#fff] opacity-70 hover:opacity-100 hover:pl-8 duration-700 ease-in-out'>Electronics</li>
                                <li className='py-2 pl-3 text-[#fff] opacity-70 hover:opacity-100 hover:pl-8 duration-700 ease-in-out'>Clothes</li>
                                <li className='py-2 pl-3 text-[#fff] opacity-70 hover:opacity-100 hover:pl-8 duration-700 ease-in-out'>Bags</li>
                                <li className='py-2 pl-3 text-[#fff] opacity-70 hover:opacity-100 hover:pl-8 duration-700 ease-in-out'>Home appliances</li>
                            </ul>
                        </div>
                    }
                </div>
                <div className="w-2/5">
                    <div className="relative">
                        <input placeholder='Search....' className='border-2 border-[#222] w-full h-12 pl-2' type="text" />
                        <div className="absolute top-[50%] translate-y-[-50%] right-[15px]">
                            <FaSearch />
                        </div>
                    </div>
                </div>
                <div className="w-[30%] relative">
                    <div className="flex justify-end gap-x-4">
                        <div className="flex" ref={cateuser}>
                            <FaUser />
                            <IoMdArrowDropdown />
                        </div>

                        <div className='relative' ref={catecart}>
                            {data.length ? <div className="bg-[#F5F5F3] h-[20px] w-[20px] absolute top-[-12px] left-[12px] text-center leading-[20px]">{data.length}</div> : ""}
                            <FaCartArrowDown />
                        </div>

                    </div>
                    {cateshowcart &&
                        <div className="absolute z-50 top-[40px] right-0 ">
                            <div className="flex bg-[#F5F5F3] py-[20px] px-[20px]">
                                <div className="flex items-center justify-between w-[350px]">
                                    <div className="h-[100px] w-[100px] bg-[#979797] mr-[20px]"></div>
                                    <div className="">
                                        <h4 className='text-[14px ] text-[#262626] font-dm font-bold'>Black Smart Watch</h4>
                                        <p className='text-[14px ] text-[#262626] font-dm font-bold'>$44.00</p>
                                    </div>
                                    <div className="ml-[30px]">
                                        <RxCross2 />
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[white] py-[20px] px-[20px]">
                                <div className="">
                                    <h3 className=''><span className='text-[16px] text-[rgba(38,38,38,0.67)] font-dm font-normal'>Subtotal:</span> <span className='text-[16px] text-[rgb(38,38,38)] font-dm font-bold'> $44.00</span></h3>
                                </div>
                                <div className="flex justify-between py-[20px]">
                                    <div className="">
                                        <a href="#" className='py-[16px] px-[40px] border text-[16px] text-[#262626] font-dm font-normal hover:bg-[#262626] hover:text-[white] duration-500 '>View Cart</a>
                                    </div>
                                    <div className="">
                                        <a href="#" className='py-[16px] px-[40px] border text-[16px] text-[#262626] font-dm font-normal hover:bg-[#262626] hover:text-[white] duration-500 '>Checkout</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    {cateshowuser &&
                    <div className="absolute z-50 top-10 right-[0px]">
                        <div className="text-center">
                            <ul>
                                <li className='text-[#262626] bg-[#FFFFFF]  h-[50px] w-[150px] leading-[50px] hover:bg-[#262626] hover:text-[#fff] duration-500 '>My Account</li>
                                <li className='text-[#262626] bg-[#FFFFFF]  h-[50px] w-[150px] leading-[50px] hover:bg-[#262626] hover:text-[#fff] duration-500 '>Log Out</li>
                            </ul>
                        </div>
                    </div>
                    }

                </div>
            </Flex>

        </Container>
    )
}

export default Menu