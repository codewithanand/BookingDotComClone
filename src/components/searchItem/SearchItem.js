import React from 'react'
import './searchItem.scss'

const SearchItem = () => {
  return (
    <div className='resultItem'>
        <img src="https://cf.bstatic.com/xdata/images/hotel/square200/380580649.webp?k=905eceb49cccac9f5282375f1ed8f463b47a792f01112f4c09cd08703c0dd03c&o=&s=1" alt="" className='riImg' />
        <div className="riDesc">
            <h1 className="riTitle">OYO Hudco Grand</h1>
            <span className="riDistance">2.3 km</span>
            <span className="riTaxiOp">Free Airport Taxi</span>
            <span className="riSubtitle">Studio Apartment wit Air Conditioning</span>
            <span className="riFeatures">Entire Studio 1 bathroom  21m2 1 full bed </span>
            <span className="riCancelOp">Free Cancellation</span>
            <span className="riCancelOpSubtitle">You can cancel later, so lock in this great price today!</span>
        </div>
        <div className="riDetails">
          <div className="riRatings">
            <span className="riRemarks">Excellent</span>
            <span className="riRating">8.9</span>
          </div>
          <div className="riDetailText">
            <span className="riPrice">$123</span>
            <span className="riTaxOp">Includes taxes and fees</span>
            <button className="riAvail">See Availaibility</button>
          </div>
        </div>
    </div>
  )
}

export default SearchItem