import React from 'react'
import Banner from "../components/Banner"
import Sale from "../components/Sale"
import NewArrivals from "../components/NewArrivals"
import BestSeller from "../components/BestSeller"


const Home = () => {
  return (
    <>
        <Banner/>
        <Sale/>
        <NewArrivals/>
        <BestSeller/>
         
    </>
  )
}

export default Home