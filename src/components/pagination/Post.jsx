import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { addToCart } from "../slice/productSlice";

const Post = ({ allPage,categoryFilter,multi }) => {
        let dispatch = useDispatch()
        let navigate = useNavigate()
        let [filterShow, setFilterShow] = useState([])
        let [count, setCount] = useState(true)
        useEffect(()=>{
            let filterVag = categoryFilter.slice(0,5)
            setFilterShow(filterVag)
        },[categoryFilter])

        let handleFilShow = () =>{
            setFilterShow(categoryFilter)
            setCount(false)
        }

        let handlePcart = (item)=>{
            dispatch(addToCart({...item, qun:1}))
            setTimeout(()=>{
                navigate("/product")
            })
        }

    
    return (
        <>
            {categoryFilter.length > 0 ? 
                <div className="">
                    <div className="flex justify-between flex-wrap">

                    {filterShow.map((item) => (
                        <div className="w-[32%]">
                            <Link to={`/product/${item.id}`}>
                            <div className="relative group overflow-hidden">
                                <img src={item.thumbnail} className='w-full lg:h-[270px]' alt="" />
        
                                <div className=" absolute left-0 bottom-[-150px]  w-full bg-[#fff] h-[150px] duration-500 ease-in-out flex items-center justify-end group-hover:bottom-0" >
                                    <div className="">
                                        <div className="flex items-center justify-end mr-2 py-2">
                                            <h3 className='mr-2 text-[16px] text-[#767676] font-normal font-dm hover:text-[#262626] hover:font-bold duration-500 ease-in-out'>Add to Wish List</h3>
                                            
                                        </div>
                                        <div className="flex items-center justify-end mr-2 py-2 ">
                                            <h3 className='mr-[10px] text-[16px] text-[#767676] font-normal font-dm hover:text-[#262626] hover:font-bold duration-500 ease-in-out'>Compare</h3>
                                        
                                        </div>
                                        <div className="flex items-center justify-end mr-2 py-2">
                                            <h3 className='mr-[10px] text-[16px] text-[#767676] font-normal font-dm hover:text-[#262626] hover:font-bold duration-500 ease-in-out'>Add to Cart</h3>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
        
                            <div className="flex justify-between items-center  py-5">
                                <div className="">
                                    <p className='text-[16px] text-[#262626] font-dm font-bold'>{item.title}</p>
                                </div>
                                <div className="">
                                    <h3 className='text-[16px] text-[#262626] font-dm font-bold'>${item.price}</h3>
                                </div>
                            </div>
                    </Link>
                        </div>
                ))}
                    </div>
                    {count ? categoryFilter.length > 5 &&
                    <div className="">
                        <h2 onClick={handleFilShow}>Show all</h2>
                    </div> 
                    :
                    <h2>hide</h2>
                    }
                </div>
            :
            <div className={`${multi == "activeMulti" ? "" : "flex justify-between flex-wrap"}`}>
                    {allPage.map((item) => (
                    <div className="w-[32%]">
                        <Link to={`/product/${item.id}`}>
                        <div className="relative group overflow-hidden">
                            <img src={item.thumbnail} className='w-full lg:h-[270px]' alt="" />

                            <div className=" absolute left-0 bottom-[-150px]  w-full bg-[#fff] h-[150px] duration-500 ease-in-out flex items-center justify-end group-hover:bottom-0" >
                                <div className="">
                                    <div className="flex items-center justify-end mr-2 py-2">
                                        <h3 className='mr-2 text-[16px] text-[#767676] font-normal font-dm hover:text-[#262626] hover:font-bold duration-500 ease-in-out'>Add to Wish List</h3>
                                        
                                    </div>
                                    <div className="flex items-center justify-end mr-2 py-2 ">
                                        <h3 className='mr-[10px] text-[16px] text-[#767676] font-normal font-dm hover:text-[#262626] hover:font-bold duration-500 ease-in-out'>Compare</h3>
                                    
                                    </div>
                                    <div className="flex items-center justify-end mr-2 py-2">
                                        <h3 onClick={()=>handlePcart(item)} className='mr-[10px] text-[16px] text-[#767676] font-normal font-dm hover:text-[#262626] hover:font-bold duration-500 ease-in-out'>Add to Cart</h3>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between items-center  py-5">
                            <div className="">
                                <p className='text-[16px] text-[#262626] font-dm font-bold'>{item.title}</p>
                            </div>
                            <div className="">
                                <h3 className='text-[16px] text-[#262626] font-dm font-bold'>${item.price}</h3>
                            </div>
                        </div>
                </Link>
                    </div>
            ))}
            </div>
            
            }
        </>
        
        
        
    )
}

export default Post