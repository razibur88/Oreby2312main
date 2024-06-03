import React from 'react'
import Container from "../components/Container"
import Flex from "../components/Flex"
import {Link} from "react-router-dom"
import { RxCross2 } from "react-icons/rx";
import CartImage from "../assets/cartimage.png"
import { useDispatch, useSelector } from 'react-redux';
import { productDecrement, productIncrement, removeProduct } from '../components/slice/productSlice';

const Cart = () => {
  let dispatch = useDispatch()

  let data = useSelector((state) => state.product.cartItem)



  const {totalprice, totalQuntity} = data.reduce((acc, item)=>{
    acc.totalprice += item.price * item.qun
    acc.totalQuntity += item.qun
    
    return acc

  },{totalprice:0, totalQuntity:0})

  return (
    <>
      <Container>
        <h2 className='mb-10'>Cart</h2>
        <span>Home &#62; Cart</span>
        <Flex className="justify-between bg-[#F5F5F3] h-[50px] items-center mt-[100px]">
          <div className="w-[35%]">
            <h4 className='text-center'>Product</h4>
          </div>
          <div className="w-[25%]">
            <h4 className='text-center'>Price</h4>
          </div>
          <div className="w-[25%]">
            <h4>Quantity</h4>
          </div>
          <div className="w-[15%]">
            <h4>Total</h4>
          </div>
        </Flex>
        {data.map((item, i) => (
          <Flex className="justify-between my-10 items-center">
            <div className="w-[35%]">
              <div className="flex justify-around items-center">
                <div className="" onClick={() => dispatch(removeProduct(i))}>
                  <RxCross2 />
                </div>
                <div className="">
                  <img className='h-[100px] w-[100px]' src={item.thumbnail} alt="" />
                </div>
                <div className="">
                  <h4>{item.title}</h4>
                </div>
              </div>
            </div>
            <div className="w-[25%]">
              <h4 className='text-center'>${item.price}</h4>
            </div>
            <div className="w-[25%]">
              <div className="w-40 border-[1px] border-[#222] h-[50px] flex justify-around items-center">
                <div className="">
                  <span onClick={() => dispatch(productDecrement(i))}>-</span>
                </div>
                <div className="">
                  <span>{item.qun}</span>
                </div>
                <div className="">
                  <span onClick={() => dispatch(productIncrement(i))}>+</span>
                </div>
              </div>
            </div>
            <div className="w-[15%]">
              <h4>${item.price * item.qun}</h4>
            </div>
          </Flex>
        ))}

        <div className=" flex justify-end">
          <div className="w-[40%]  pt-[50px]">
            <div className="">
              <div className="pb-[24px] ">
                <p className='text-[20px] text-[#262626] font-dm font-bold text-end '>Cart totals</p>
              </div>
              <div className="flex">
                <div className=" border-[1px] border-[#F0F0F0] h-[54px] w-[322px] ">
                  <p className='text-[16px] text-[#262626] font-dm font-bold leading-[50px] pl-[20px] '>Subtotal</p>
                </div>
                <div className="">
                  <div className=" border-[1px] border-[#F0F0F0] h-[54px] w-[322px] ">
                    <p className='text-[16px] text-[#767676] font-dm font-bold leading-[50px] pl-[20px] '> ${totalprice}</p>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className=" border-[1px] border-[#F0F0F0] h-[54px] w-[322px] ">
                  <p className='text-[16px] text-[#262626] font-dm font-bold leading-[50px] pl-[20px] '>Total Quntity</p>
                </div>
                <div className="">
                  <div className=" border-[1px] border-[#F0F0F0] h-[54px] w-[322px] ">
                    <p className='text-[16px] text-[#767676] font-dm font-bold leading-[50px] pl-[20px] '>{totalQuntity}</p>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className=" border-[1px] border-[#F0F0F0] h-[54px] w-[322px] ">
                  <p className='text-[16px] text-[#262626] font-dm font-bold leading-[50px] pl-[20px] '>Total</p>
                </div>
                <div className="">
                  <div className=" border-[1px] border-[#F0F0F0] h-[54px] w-[322px] ">
                    <p className='text-[16px] text-[#767676] font-dm font-bold leading-[50px] pl-[20px] '>${totalprice}</p>
                  </div>
                </div>
              </div>
              <div className="pt-[20px] flex justify-end">
                <div className="">
                  <Link to="/checkout">
                  <button className='h-[50px] w-[200px] items-center text-[14px] text-[#262626] font-dm font-semibold border-[1px] border-[#767676] hover:text-[#fff] hover:bg-[#262626] duration-500 ease-in-out'>Proceed to Checkout</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>



      </Container>
    </>
  )
}

export default Cart