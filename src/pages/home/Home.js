import React from 'react'
import './home.scss'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import Featured from '../../components/featured/Featured'
import PropertyList from '../../components/propertyList/PropertyList'
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div className='home'>
        <Navbar />
        <Header />
        <div className="homeContainer">
          <Featured />
          <h1 className="homeTitle">Browse by property type</h1>
          <PropertyList />
          <h1 className="homeTitle">Stay at our top unique properties</h1>
          <p className="homeSubTitle">From castles and villas to boats and igloos, we have it all</p>
          <FeaturedProperties />
        </div>
        <Footer />
    </div>
  )
}

export default Home