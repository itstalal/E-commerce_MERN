import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
import Offers from '../components/Offers/Offers'
import NewCollection from '../components/NewCollection/NewCollection'
import Subscribe from '../components/Subscribe/Subscribe'

const Home = () => {
  return (
    <>
     <Hero/>
     <Popular />
     <Offers />
     <NewCollection />
     <Subscribe />
    </>
  )
}

export default Home