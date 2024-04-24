import React from 'react'
import Container from './Container'
import Flex from './Flex'
import One from "../assets/one.png"
import Two from "../assets/two.png"
import Three from "../assets/three.png"

const Sale = () => {
  return (
    <section className='py-10'>
        <Container>
        <Flex className="justify-between">
            <div className="w-[49%]">
                <div className="">
                    <img src={One} alt="one" />
                </div>
            </div>
            <div className="w-[49%]">
                <div className="">
                    <img src={Two} alt="two" />
                </div>
                <div className="pt-10">
                    <img src={Three} alt="three" />
                </div>
            </div>
        </Flex>
    </Container>
    </section>
  )
}

export default Sale