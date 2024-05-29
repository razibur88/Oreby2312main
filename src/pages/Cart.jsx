import React from 'react'
import Container from "../components/Container"
import Flex from "../components/Flex"
import { RxCross2 } from "react-icons/rx";
import CartImage from "../assets/cartimage.png"
import { useDispatch, useSelector } from 'react-redux';
import { productDecrement, productIncrement } from '../components/slice/productSlice';

const Cart = () => {
  let dispatch = useDispatch()

  let data = useSelector((state)=>state.product.cartItem)

  
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
        {data.map((item,i)=>(
        <Flex className="justify-between my-10 items-center">
          <div className="w-[35%]">
           <div className="flex justify-around items-center">
           <div className="">
              <RxCross2/>
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
                    <span onClick={()=>dispatch(productDecrement(i))}>-</span>
                </div>
                <div className="">
                    <span>{item.qun}</span>
                </div>
                <div className="">
                    <span onClick={()=>dispatch(productIncrement(i))}>+</span>
                </div>
            </div>
          </div>
          <div className="w-[15%]">
            <h4>${item.price * item.qun}</h4>
          </div>
        </Flex>
        ))}


      </Container>
    </>
  )
}

export default Cart