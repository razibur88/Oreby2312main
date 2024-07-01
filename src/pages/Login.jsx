import React from 'react'
import Container from '../components/Container'

const LogIn = () => {
  return (
    <Container className="mb-[140px]">
        <div className='mt-[125px]'>
            <h2 className='text-[40px] text-[#262626] font-dm font-bold'>Login</h2>
            <a href="">Home &#62; Login</a>
        </div>

        <div className='w-[50%] mt-[130px]'>
            <p className='font-dm text-[18px] text-[#767676] leading-[35px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
        </div>

        <div className='mt-[120px] border-t-2 pt-[80px]'>
            <h2 className='text-[40px] text-[#262626] font-dm font-bold'>Returning Customer</h2>
        </div>
        
        <div className='flex gap-x-20 mt-[45px]'>
                <div className='w-[30%] border-b-2 border-[rgba(118,118,118,0.23)] py-5'>
                    <div className="">
                        <h2 className='text-[20px] text-[#262626] font-dm font-bold'>Email address</h2>
                    </div>
                    <div className="pt-[10px]">
                        <input type="text" className='outline-none  w-full font-dm text-[18px]' placeholder='company@domain.com' />
                    </div>
                </div>

                <div className='w-[30%] border-b-2 border-[rgba(118,118,118,0.23)] py-5'>
                    <div className="">
                        <h2 className='text-[20px] text-[#262626] font-dm font-bold'>Password</h2>
                    </div>
                    <div className="pt-[10px]">
                        <input type="password" className='outline-none  w-full font-dm text-[18px]' placeholder='password' />
                    </div>
                </div>
            </div>

            <div className='mt-[50px] border-2 text-[black] hover:text-[white] cursor-pointer
           border-black hover:bg-[#262626] w-[18%] py-[20px] text-center font-bold duration-500 ease-in-out'>
         <a href="" className=' text-[20px] font-dm '>Log in</a>
          </div>

          <div className='mt-[120px] border-t-2 pt-[80px]'>
            <h2 className='text-[40px] text-[#262626] font-dm font-bold'> New Customer</h2>
          </div>
          <div className='w-[50%] mt-[40px]'>
          <p className='font-dm text-[18px] text-[#767676] leading-[35px]'>Lorem Ipsum is simply dummy text of the printing and typesetting 
          industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
          </div>

          <div className='mt-[50px] border-2 text-[black] hover:text-[white] cursor-pointer
           border-black hover:bg-[#262626] w-[18%] py-[20px] text-center font-bold duration-500 ease-in-out'>
         <a href="" className=' text-[20px] font-dm '>Continue</a>
          </div>

    </Container>
  )
}

export default LogIn