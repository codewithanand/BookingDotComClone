import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'

import './hotels.scss'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import SearchItem from '../../components/searchItem/SearchItem'
import Footer from '../../components/footer/Footer'

const Hotels = () => {

  const location = useLocation()

  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [options, setOptions] = useState(location.state.options)

  const [openDate, setOpenDate] = useState(false);

  return (
    <div className='hotels'>
      <Navbar />
      <Header type="hotels" />
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <div className="searchContainer">
            <h1>Search</h1>
            <div className="searchItem">
              <label htmlFor="">Destination/property name:</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="searchItem">
              <label htmlFor="">Date:</label>
              <span className='headerSearchText' onClick={() => setOpenDate(!openDate)}>
                {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}
              </span>
              {openDate && 
                <DateRange
                    minDate={new Date()}
                    onChange={item => setDate([item.selection])}
                    ranges={date}
                    className="date"
                />
              }
            </div>
            <div className="searchItem">
              <label htmlFor="">Options</label>
              <div className="searchOptions">
                <label>Min Price</label>
                <input type="text" />
              </div>
              <div className="searchOptions">
                <label>Max Price</label>
                <input type="text" />
              </div>
              <div className="searchOptions">
                <label>Adult</label>
                <input type="number" placeholder={options.adult} />
              </div>
              <div className="searchOptions">
                <label>Children</label>
                <input type="number" placeholder={options.children} />
              </div>
              <div className="searchOptions">
                <label>Room</label>
                <input type="number" placeholder={options.room} />
              </div>
            </div>
            <button className='searchBtn'>Search</button>
          </div>
          <div className="resultContainer">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Hotels