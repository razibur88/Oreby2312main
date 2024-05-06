import React from 'react'
import BanImg from "../assets/banner.png"
import Slider from "react-slick";
import { FaCarSide } from "react-icons/fa6";
import { IoReloadOutline } from "react-icons/io5";
import Container from './Container';
import Flex from './Flex';
const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        autoplay: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
            <div className='tumi'
                style={{
                    borderRadius: "10px",
                    padding: "10px",
                    position: "absolute",
                    left: "60px",
                    top: "50%",
                    transform: "translateY(-50%)"
                }}
            >
                <ul style={{ margin: "0px", }}> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div className='ami'
                style={{
                    width: "30px",
                    color: "transparent",
                    fontWeight: "500",
                    padding: "10px 0",
                    borderRight: "3px #fff solid"
                }}
            >
                0{i + 1}
            </div>
        )
    }
    return (
        <section className='pt-5 border-b-[1px] border-[rgba(38,38,38,0.47)] '>
            <Slider {...settings}>
                <div className="">
                    <img src={BanImg} alt="banner" />
                </div>
                <div className="">
                    <img src={BanImg} alt="banner" />
                </div>
                <div className="">
                    <img src={BanImg} alt="banner" />
                </div>
                <div className="">
                    <img src={BanImg} alt="banner" />
                </div>
            </Slider>
            <Container>
                <Flex className="justify-between pb-4">
                    <div className="">
                        <div className="">
                            <span className='font-dm text-[#262626] font-bold text-[24px] pr-2'>2</span>
                            <span className='font-dm text-[#6D6D6D] font-normal text-[16px]'>Two years warranty</span>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex items-center">
                            <FaCarSide />
                            <span className='font-dm text-[#6D6D6D] font-normal text-[16px] ml-2'>Free shipping</span>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex items-center">
                            <IoReloadOutline />
                            <span className='font-dm text-[#6D6D6D] font-normal text-[16px] ml-2'>Free shipping</span>
                        </div>

                    </div>
                </Flex>
            </Container>


        </section>
    )
}

export default Banner