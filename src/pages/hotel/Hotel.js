import React, { useState } from 'react'
import './hotel.scss'

import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const Hotel = () => {
  const [openSlider, setOpenSlider] = useState(false)
  const [slideNumber, setSlideNumber] = useState(0)
  const hotelImg = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/447269738.jpg?k=83e41c8423ee2d25f028c0083877c4312f0b6cec35bf4d15dea19ca62171b80b&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/447269869.jpg?k=fd19a94095021dcc73a811bfd38ef99ebdf52ad48f4dafaa509dbfd230cfe43b&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/447269830.jpg?k=6326602c08495535eb6acd469cb150018f174b344e7d3d137e1fa2a781d7fdfe&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/447269960.jpg?k=bab9ef262f29e05b0908c2c345f8cc8ca18694e19eae83533cbb89fc020db417&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/447269948.jpg?k=57a86cf49365360de35238e23a7bf88e7162d97fa5a6765545642bca3d0fa3b9&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/447269853.jpg?k=a4f132ca95b32ef2950e1c352425b4d471f4be462d3326f40f78e03bff40a92f&o=&hp=1",
    },
  ]

  const handleOpenSlider = (index) => {
    setSlideNumber(index)
    setOpenSlider(true)
  }

  const handleSlide = (direction) => {
    let newSlideNumber
    if(direction == "l"){
      newSlideNumber = slideNumber === 0 ? hotelImg.length-1 : slideNumber-1
    }
    else{
      newSlideNumber = slideNumber === hotelImg.length-1 ? 0 : slideNumber+1
    }
    setSlideNumber(newSlideNumber)
  }

  return (
    <div className='hotel'>
      {
        openSlider && 
        <div className="sliderContainer">
          <CloseOutlinedIcon className='closeBtn' onClick={() => setOpenSlider(false)} />
          <ArrowBackIosNewOutlinedIcon className='arrow' onClick={() => handleSlide("l")} />
          <div className="sliderWrapper">
            <img src={hotelImg[slideNumber].src} alt="" />
          </div>
          <ArrowForwardIosOutlinedIcon className='arrow' onClick={() => handleSlide("r")} />
        </div>
      }
      <Navbar />
      <Header type="hotels" />
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <LocationOnOutlinedIcon />
            <span>Elton St 125 New York</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from Center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {
              hotelImg.map((img, index) => (
                <div className="imgWrapper" key={index}>
                  <img onClick={() => handleOpenSlider(index)} src={img.src} alt="" />
                </div>
              ))
            }
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailTexts">
              <h1 className="hotelDescTitle">Saty in the heart of Krakow</h1>
              <p className="hotelDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime explicabo quas esse cumque impedit recusandae consequatur iste optio sed, amet, quidem, et omnis! Dolorem rerum impedit officiis eos, nihil similique. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime explicabo quas esse cumque impedit recusandae consequatur iste optio sed, amet, quidem, et omnis! Dolorem rerum impedit officiis eos, nihil similique.</p>
            </div>
            <div className="hotelDetailPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>Located in the real heart of Krakow, this property has an excellent location score of 9.8!</span>
              <h2><b>$945</b> (9 nights)</h2>
              <button>Reserve of Book Now!</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Hotel