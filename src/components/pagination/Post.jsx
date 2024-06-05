import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Post = ({ allPage,categoryFilter }) => {
        let [filterShow, setFilterShow] = useState([])

        useEffect(()=>{
            let filterVag = categoryFilter.slice(0,5)
            setFilterShow(filterVag)
        },[categoryFilter])

        let handleFilShow = () =>{
            setFilterShow(categoryFilter)
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
                <h2 onClick={handleFilShow}>Show all</h2>
                </div>
            :
            <div className="flex justify-between flex-wrap">
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
            
            }
        </>
        
        
        
    )
}

export default Post