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
    let [multi, setMulti] = useState("")
    let [priceShow, setPriceShow] = useState(false)
    let [priceLow, setPriceLow] = useState("")
    let [priceHigh, setPriceHigh] = useState("")
    let [priceDispay, setPriceDisplay] = useState([])

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

let handleList = () =>{
    setMulti("activeMulti")
}

let handleShowChange = (e) =>{
    setPerPage(e.target.value);
}

let handleOneToTen = (value)=>{
    setPriceLow(value.low)
    setPriceHigh(value.high)
    let priceFilter = data.filter((item)=> item.price > value.low && item.price < value.high)
    setPriceDisplay(priceFilter);
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
                    <div className="">
                    <h2 onClick={()=>setPriceShow(!priceShow)} className='text-[18px] text-[#292929] font-dm font-bold '>Show Price</h2>
                    {priceShow &&
                    <ul>
                        <li onClick={()=>handleOneToTen({low:0, high:10})}>$0-$9.99</li>
                      
                        <li onClick={()=>handleOneToTen({low:10, high:20})}>$10-$19.99</li>

                    </ul>
                    }
                    </div>
                </div>
                <div className="w-[80%]">
                    <div className="flex items-center justify-between ">
                        <div className="">
                        <div className="flex">
                        <div onClick={()=>setMulti("")} className="mr-[20px] py-[12px] px-[12px] border-2 duration-500 ease-in-out hover:bg-[#262626] hover:text-[#fff]">
                            <IoGrid />
                        </div>
                        <div onClick={handleList} className="py-[12px] px-[12px] border-2 duration-500 ease-in-out hover:bg-[#262626] hover:text-[#fff]">
                            <TfiMenuAlt />
                        </div>
                        </div>
                        </div>
                        <div className="">
                            <label htmlFor="" className='pr-2'>Show :</label>
                            <select onChange={handleShowChange} className='w-[100px] h-[30px] border-2 border-[#262626] text-center'>
                                <option value="6">6</option>
                                <option value="12">12</option>
                                <option value="18">18</option>
                            </select>
                        </div>
                    </div>
                     
                     <Post priceDispay={priceDispay} allPage={allPage} categoryFilter={categoryFilter} multi={multi}/>
                     <div className="text-end">
                       <PaginationArea pageNumber={pageNumber} paginate={paginate} pageStart={pageStart} next={next} prve={prve}/>
                     </div>
                      
                   
                 
                </div>
            </Flex>
        </Container>
    )
}

export default Product