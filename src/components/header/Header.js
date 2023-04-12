import React, { useState } from 'react'
import './header.scss'
import { DateRange } from 'react-date-range';
import {format} from "date-fns"

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import FlightOutlinedIcon from '@mui/icons-material/FlightOutlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import ForestOutlinedIcon from '@mui/icons-material/ForestOutlined';
import LocalTaxiOutlinedIcon from '@mui/icons-material/LocalTaxiOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import BoyOutlinedIcon from '@mui/icons-material/BoyOutlined';
import {  useNavigate } from 'react-router-dom';

const Header = ({type}) => {
    const [destination, setDestination] = useState("")
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [options, setOptions] = useState({
        adult: 1,
        children: 1,
        room: 1
    });

    const [openDate, setOpenDate] = useState(false);
    const [openOptions, setopenOptions] = useState(false);

    const navigate = useNavigate()

    const handleOption = (name, operation) => {
        setOptions((prev) =>( 
            {
                ...prev,
                [name] : operation === "i" ? options[name]+1 : options[name]-1,
            }
        ))
    }

    const handleSearch = () => {
        navigate("/hotels", {state: {destination, date, options}})
    }

    return (
        <div className='header'>
            <div className="container">
                <div className="item active">
                    <BedOutlinedIcon />
                    Stays
                </div>
                <div className="item">
                    <FlightOutlinedIcon />
                    Flights
                </div>
                <div className="item">
                    <DirectionsCarFilledOutlinedIcon />
                    Car Rentals
                </div>
                <div className="item">
                    <ForestOutlinedIcon />
                    Attractions
                </div>
                <div className="item">
                    <LocalTaxiOutlinedIcon />
                    Airport Taxis
                </div>
            </div>
            { 
                type !== "hotels" && <>
                <div className="hero">
                <div className="heroDesc">
                    <h1 className="headerTitle">Home is where you book it</h1>
                    <p className="headerDesc">We've got just the place for you</p>
                    <button className="headerBtn">Explore vacation rentals</button>
                </div>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <BedOutlinedIcon />
                        <input type="text" placeholder='Where are you going?' className='headerSearchInput' onChange={(e) => setDestination(e.target.value)} />
                    </div>
                    <div className="headerSearchItem" style={{cursor: "pointer"}}>
                        <CalendarMonthOutlinedIcon />
                        <span className='headerSearchText' onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                        {openDate && <DateRange
                            minDate={new Date()}
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className="date"
                        />}
                    </div>
                    <div className="headerSearchItem" style={{cursor: "pointer"}}>
                        <BoyOutlinedIcon />
                        <span className='headerSearchText' onClick={() => setopenOptions(!openOptions)}>
                            {`${options.adult} adult · ${options.children} children · ${options.room} room`}
                        </span>
                        {openOptions && <div className="options">
                            <div className="optionItem">
                                <span className="optionText">Adult</span>
                                <button disabled={options.adult <= 1} className="optionCounterButton" onClick={() => handleOption("adult", "d")}>-</button>
                                <span className="optionCounterNumber">{options.adult}</span>
                                <button className="optionCounterButton" onClick={() => handleOption("adult", "i")}>+</button>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Children</span>
                                <button disabled={options.children <= 0} className="optionCounterButton" onClick={() => handleOption("children", "d")}>-</button>
                                <span className="optionCounterNumber">{options.children}</span>
                                <button className="optionCounterButton" onClick={() => handleOption("children", "i")}>+</button>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Room</span>
                                <button disabled={options.room <= 1} className="optionCounterButton" onClick={() => handleOption("room", "d")}>-</button>
                                <span className="optionCounterNumber">{options.room}</span>
                                <button className="optionCounterButton" onClick={() => handleOption("room", "i")}>+</button>
                            </div>
                        </div>}
                    </div>
                    <button className='searchBtn' onClick={handleSearch} >Search</button>
                </div>
                </div></>
            }
        </div>
    )
}

export default Header