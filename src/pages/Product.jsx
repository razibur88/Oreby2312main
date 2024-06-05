import React, { useContext, useEffect, useState } from 'react';
import { FaPlus } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";
import { TiMinus } from "react-icons/ti";
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import { ApiData } from '../components/ContextApi';
import Flex from '../components/Flex';
import PaginationArea from '../components/pagination/PaginationArea';
import Post from '../components/pagination/Post';



const Product = () => {
    let data = useContext(ApiData)
    let [showCate, setShowCate] = useState(false)
    let [pageStart, setPageStart] = useState(1)
    let [category, setCategory] = useState([])
    let [perPage, setPerPage] = useState(6)
    let [categoryFilter, setCategoryFilter] = useState([])

   let lastPage  = pageStart * perPage
   let firstPage =  lastPage - perPage
   
   let allPage = data.slice(firstPage, lastPage)

   let pageNumber = []

   for(let i = 0; i < Math.ceil(categoryFilter.length> 0 ? categoryFilter : data.length / perPage); i++){
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

useEffect(()=>{
    setCategory([...new Set(data.map((item)=> item.category))])
},[data])


let handleCategory = (citem) =>{
    let cateFilter = data.filter((item)=>item.category == citem)
    setCategoryFilter(cateFilter)
}



   







    return (
        <Container>
            <div className="">
                <h3 className='text-[49px] text-[#292929] font-dm font-bold '>Products</h3>
                <span className='text-[14px] text-[#767676] font-dm font-normal'><Link to="/">Home</Link> &#62; Products</span>
            </div>
            <Flex>
                <div className="w-[20%]">
                    <div className="pr-10 pt-10">
                        <div onClick={()=>setShowCate(!showCate)} className="flex items-center justify-between">
                            <h2 className='text-[18px] text-[#292929] font-dm font-bold '>Shop by Category</h2>
                            {showCate == true ?  <TiMinus/> :  <FaPlus/>}
                        </div>
                        {showCate &&
                        <ul>
                            {category.map((item)=>(
                            <li onClick={()=>handleCategory(item)}>{item}</li>
                            ))}
                        </ul>
                        }
                    </div>
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
                     
                     <Post allPage={allPage} categoryFilter={categoryFilter}/>
                     <div className="text-end">
                       <PaginationArea pageNumber={pageNumber} paginate={paginate} pageStart={pageStart} next={next} prve={prve}/>
                     </div>
                      
                   
                 
                </div>
            </Flex>
        </Container>
    )
}

export default Product