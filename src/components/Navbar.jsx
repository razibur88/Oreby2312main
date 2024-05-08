import React, { useState } from 'react'
import Logo from "../assets/logo.png"
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import Container from './Container';
import Flex from './Flex';
import { Link } from 'react-router-dom';

const Navbar = () => {
    let [show, setShow] = useState(false)
    let handleShow = () =>{
        setShow(!show)
    }
  return (
    <>
        <Container className="py-7">
            <Flex className="items-center justify-between lg:px-0 px-2">
                <div className="lg:w-[15%]">
                    <img src={Logo} alt="" />
                </div>
                <div className="lg:w-[85%]">
                    <ul className={`lg:flex text-center justify-center absolute lg:static  -z-10 ${show == true ? 'top-[70px] duration-700 ease-in-out left-0 w-full ' : 'top-[70px] left-[-500px] duration-700 ease-in-out w-full'}`}>
                        <li className='font-dm text-[#262626] font-bold text-[16px] lg:px-5 py-2 lg:py-0 relative'><Link to="/">Home</Link>
                            
                        </li>
                        <li className='font-dm text-[#262626] font-bold text-[16px] lg:px-5 py-2 lg:py-0'><Link to="/product">Shop</Link></li>
                        <li className='font-dm text-[#262626] font-bold text-[16px] lg:px-5 py-2 lg:py-0'>About</li>
                        <li className='font-dm text-[#262626] font-bold text-[16px] lg:px-5 py-2 lg:py-0'>Contacts</li>
                        <li className='font-dm text-[#262626] font-bold text-[16px] lg:px-5 py-2 lg:py-0'>Journal</li>
                    </ul>
                </div>
                <div className="lg:hidden" onClick={handleShow}>
                    {show ?  <RxCross2/>: <FaBars/>}
                    
                </div>
            </Flex>
        
        </Container>
           
          
    </>
  )
}

export default Navbar