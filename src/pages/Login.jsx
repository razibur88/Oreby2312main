import React from 'react'
import Container from '../components/Container'

const Login = () => {
  return (
    <Container>
        <div className="">
            <div className="py-[120px]">
                <h2 className=' font-dm font-bold text-[49px] text-[#262626]'>Login</h2>
                <p className=' font-dm text-[12px] text-[#767676] font-normal'>Home  &gt;  Login</p>
            </div>

            <div className="border-b-[1px] border-[#F0F0F0] pb-[62px]">
                <p className='text-[16px] text-[#767676] font-dm w-[644px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
            </div>

            <div className="">
                <h2 className=' font-dm font-bold text-[39px] text-[#262626] py-[55px]'>Returning Customer</h2>

                <div className="flex justify-between flex-wrap">
                    <div className="w-[49%] border-b-[1px] border-[#F0F0F0]">
                        <h5 className='text-[16px] text-[#262626] font-dm font-bold'>Email address</h5>
                        <input className='text-[14px] text-[#767676] font-dm outline-none' type="mail" placeholder='company@domain.com' />
                    </div>
                    <div className="w-[49%]"></div>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Login