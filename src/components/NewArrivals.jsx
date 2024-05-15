import React, { useContext, useEffect, useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import { IoIosHeart } from "react-icons/io";
import { TfiReload } from "react-icons/tfi";
import { FaCartPlus } from "react-icons/fa";
import axios from 'axios';
import Slider from "react-slick";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { ApiData } from './ContextApi';

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div className='absolute top-[50%] right-0 h-[40px] w-[40px] rounded-full bg-[#979797] text-center text-white !leading-[40px] translate-y-[-50%]' onClick={onClick}
        ><GrFormNextLink className='inline-block' /></div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className='absolute top-[50%] left-[-20px] h-[40px] w-[40px] rounded-full bg-[#979797] text-center text-white !leading-[40px] translate-y-[-50%] z-50' onClick={onClick}
        ><GrFormPreviousLink className='inline-block' /></div>
    );
}


const NewArrivals = () => {
    let data = useContext(ApiData)
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 624,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },


        ]
    };



    return (
        <section>

            <Container>
                <div className="">
                    <h2 className='text-[39px] text-[#292929] font-dm font-bold'>New Arrivals</h2>
                </div>
                <Slider {...settings}>
                    {data.map((item,i) => (
                        <div key={i} className="!w-[96%] my-3">
                            <div className="relative group overflow-hidden">
                                <img src={item.thumbnail} className='w-full h-[300px]' alt="" />
                                <div className="bg-[#fff] h-[150px] absolute bottom-[-150px] left-0 w-full flex justify-end items-center group-hover:bottom-0 group-hover:opacity-100 duration-500 ease-in-out">
                                    <div className="">
                                        <div className="flex items-center justify-end gap-x-3 py-2 mr-2">
                                            <p className='text-[16px] text-[#767676] font-dm font-normal hover:text-[#292929] hover:font-bold duration-500 ease-in-out'>Add to Wish List</p>
                                            <IoIosHeart />
                                        </div>
                                        <div className="flex items-center justify-end gap-x-3 py-2 mr-2">
                                            <p className='text-[16px] text-[#767676] font-dm font-normal hover:text-[#292929] hover:font-bold duration-500 ease-in-out'>Compare</p>
                                            <TfiReload />
                                        </div>
                                        <div className="flex items-center justify-end gap-x-3 py-2 mr-2">
                                            <p className='text-[16px] text-[#767676] font-dm font-normal hover:text-[#292929] hover:font-bold duration-500 ease-in-out'>Add to Cart</p>
                                            <FaCartPlus />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center pt-4">
                                <div className="">
                                    <h3 className='text-[16px] text-[#292929] font-dm font-bold'>{item.title}</h3>
                                </div>
                                <div className="">
                                    <h3 className='text-[16px] text-[#292929] font-dm font-bold'>${item.price}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

            </Container>
        </section>
    )
}

export default NewArrivals