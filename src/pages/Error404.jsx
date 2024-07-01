import React from 'react'
import Container from '../components/Container';
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Error404 = () => {
    return (
        <Container>
            <div className='w-[45%] mb-[120px] mt-[81px]'>
                <h1 className='text-[200px] font-dm font-bold'> 404 </h1>
                <p className='mt-[40px] font-dm text-[#767676] text-[18px] leading-[35px] mb-[60px]'>The page you were looking for couldn't
                     be found. The page could be removed or you misspelled the word while searching for it. Maybe try 
                     a search?</p>

                   <div className='relative'>
                   <input type="text" placeholder='Type to search'
                      className='h-[60px] border-[2px] w-full pl-[20px] text-[20px] font-dm text-[#767676] '/>
                      <div className='absolute top-[50%] translate-y-[-50%] right-[20px] text-[20px]'><FaSearch /></div>
                   </div>
                 <Link to="/"> 
            <div className='px-[20px] py-[12px]  w-[35%] text-center mt-[80px] hover:bg-[#262626]
             border-[3px] border-black cursor-pointer hover:text-[white] text-[black] duration-500 ease-in-out'>
                <h3 className='font-dm text-[20px] font-bold'>Back to Home</h3>
            </div>
            </Link> 
            </div>

           
        </Container>
    )
}

export default Error404