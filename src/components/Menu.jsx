import React, { useEffect, useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import { FaBars } from "react-icons/fa6";
import { FaUser,FaCartArrowDown,FaSearch  } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { useRef } from 'react';

const Menu = () => {
    let [cateshow, setCateshow] = useState(false)

    let cateMenu = useRef()

    useEffect(()=>{
        document.addEventListener("click",(e)=>{
            if(cateMenu.current.contains(e.target)== true){
                setCateshow(true)
            }else{
                setCateshow(false)
            }
        })
    },[cateshow])

    
  return (
    <Container>
        <Flex className="items-center">

            <div className="w-[30%] relative">
                <div className="flex items-center gap-x-3" ref={cateMenu}>
                <FaBars/>
                <h3 className='font-dm text-[#262626] font-normal text-[16px]'>Shop by Category</h3>
                </div>
                {cateshow &&
                <div className="absolute top-[35px] left-0 bg-[#262626] w-[300px]">
                    <ul className='py-3'>
                        <li className='py-2 pl-3 text-[#fff] opacity-70 hover:opacity-100 hover:pl-8 duration-700 ease-in-out'>Accesories</li>
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
                        <FaSearch/>
                    </div>
                </div>
            </div>
            <div className="w-[30%]">
                <div className="flex justify-end gap-x-4">
               <div className="flex">
               <FaUser/>
                    <IoMdArrowDropdown/>
               </div>
               
                <FaCartArrowDown />
                
                </div>
            </div>
        </Flex>
       
    </Container>
  )
}

export default Menu