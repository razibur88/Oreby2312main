import React from 'react'
import Container from "../components/Container"

const Contact = () => {
    return (
        <Container>
            <div className="py-[124px]">
                <div className=" ">
                    <h3 className='text-[49px] text-[#262626] font-dm font-bold ' >Contacts</h3>
                </div>
                <div className="">
                    <span className='text-[12px] text-[#767676] font-dm font-normal'>Home &gt; Contact</span>
                </div>
            </div>
            <div className="">
                <div className="pb-[42px]">
                    <h4 className='text-[39px] text-[#262626] font-dm font-bold'>Fill up a Form</h4>
                </div>
                <div className="">
                    <div className="">
                        <label className='text-[16px] text-[#262626] font-dm font-bold leading-6' htmlFor="">Name</label>
                        <div className="">
                            <input className='border-0 outline-none border-b-[1px] border-[#767676] w-[779px] py-[17px] font-dm' type="text" placeholder='Your name here' />
                        </div>
                    </div>


                    <div className="">
                        <label className='text-[16px] text-[#262626] font-dm font-bold leading-6' htmlFor="">Email</label>
                        <div className="">
                            <input className='border-0 outline-none border-b-[1px] border-[#767676] w-[779px] py-[17px] font-dm' type="email" placeholder='Your email here' />
                        </div>
                    </div>


                    <div className="">
                        <label className='text-[16px] text-[#262626] font-dm font-bold leading-6' htmlFor="">Message</label>
                        <div className="">
                            <textarea className='pt-[33px] pr-[615px] border-b-[1px] border-[#767676] pb-[86px] outline-none' name="" id="" placeholder='Your message here'></textarea>
                            {/* <input className='border-0 outline-none border-b-[1px] border-[#767676] w-[779px] pb-[86px] pr-[] font-dm' type="text-area" placeholder='Your message here' /> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-[30px]">
                <button className='text-[16px] text-[#262626] font-dm font-bold border-[1px] border-[#262626] py-[16px] px-[86px] hover:bg-[#262626] hover:text-[#fff] duration-500 ease-in-out'>Post</button>
            </div>

            <div className="pt-[140px]">
            <iframe className='w-full' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14607.604248453179!2d90.38425380000001!3d23.750907299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1718171868726!5m2!1sen!2sbd" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

        </Container>
    )
}

export default Contact