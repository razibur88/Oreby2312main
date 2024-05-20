import React, { useContext, useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { Link } from 'react-router-dom'
import { IoGrid } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";
import { ApiData } from '../components/ContextApi';
import Post from '../components/pagination/Post';
import PaginationArea from '../components/pagination/PaginationArea';

const Product = () => {
    let data = useContext(ApiData)

    let [pageStart, setPageStart] = useState(1)
    let [perPage, setPerPage] = useState(6)

   let lastPage  = pageStart * perPage
   let firstPage =  lastPage - perPage
   
   let allPage = data.slice(firstPage, lastPage)

   let pageNumber = []

   for(let i = 0; i < Math.ceil(data.length / perPage); i++){
    pageNumber.push(i)
   }


let paginate = (pageNumber) =>{
    setPageStart(pageNumber + 1)
}

let next = ()=>{
    if(pageStart < pageNumber.length){
        setPageStart((state) => state + 1)
    }
}

let prve = () =>{
    if(pageStart > 1){

        setPageStart((state)=> state - 1)
    }
}
   







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
                     
                     <Post allPage={allPage}/>
                     <div className="text-end">
                       <PaginationArea pageNumber={pageNumber} paginate={paginate} pageStart={pageStart} next={next} prve={prve}/>
                     </div>
                      
                   
                 
                </div>
            </Flex>
        </Container>
    )
}

export default Product