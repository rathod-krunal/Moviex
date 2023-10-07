import React from 'react'
import "./style.scss"
import HeroBanner from './heroBanner/HeroBanner'
import Trending from './trending/Trending'
import Popular from './popular/Popular'
import TopReted from './topReted/TopReted'


function Home() {
  return (
    <div className='homePage'>
      <HeroBanner/>
      <Trending/>
      <Popular/>
      <TopReted/>
    </div>
  )
}

export default Home
