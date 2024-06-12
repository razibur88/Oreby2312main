import React from 'react'
import img from "../assets/aboutimg.png"
import  Container  from "../components/Container"
const About = () => {
  return (
    <Container>
    <div className="">
      <h2 className='text-[49px] text-[#262626] font-dm font-bold'>About</h2>
      <span className='text-[12px] text-[#767676] font-dm font-normal'>Home &gt; About</span>
    </div>

    <div className="pt-[136px]">
      <div className="flex justify-between">
        <div className="w-[48%] relative ">
          <div className="">
              <img src={img} alt="" />
          </div>
          <div className="absolute bottom-[70px] left-[50%] translate-x-[-50%]">
            <button className='text-[16px] text-[#fff] bg-[#262626] font-dm font-bold border-[1px] hover:bg-[#26262680] hover:text-[#FFFFFF] duration-300 ease-in-out px-[60px] py-[18px]'>Our Brands</button>
          </div>
        </div>
        <div className="w-[48%] relative ">
          <div className="">
              <img src={img} alt="" />
          </div>
          <div className="absolute bottom-[70px] left-[50%] translate-x-[-50%]">
            <button className='text-[16px] text-[#fff] bg-[#262626] font-dm font-bold border-[1px] hover:bg-[#26262680] hover:text-[#FFFFFF] duration-300 ease-in-out px-[60px] py-[18px]'>Our Brands</button>
          </div>
        </div>
       
      </div>
    </div>


    <div className="pt-[128px]">
      <div className="">
        <h4 className='text-[39px] text-[#262626] font-dm font-normal'>Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</h4>
      </div>
    </div>

    <div className="py-[116px]">
      <div className="flex justify-between">
        <div className="w-[31%]">
          <h6 className='text-[26px] text-[#262626] font-dm font-bold'>Our Vision</h6>
          <p className='text-[16px] text-[#767676] font-dm font-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>


        <div className="w-[31%]">
          <h6 className='text-[26px] text-[#262626] font-dm font-bold'>Our Story</h6>
          <p className='text-[16px] text-[#767676] font-dm font-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>


        <div className="w-[31%]">
          <h6 className='text-[26px] text-[#262626] font-dm font-bold'>Our Brands</h6>
          <p className='text-[16px] text-[#767676] font-dm font-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </div>
    </div>
  </Container>
  )
}

export default About