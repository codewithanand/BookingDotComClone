import React from 'react'
import './featuredProperties.scss'

const FeaturedProperties = () => {
  return (
    <div className='fProperties'>
        <div className="fPropItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/286659200.webp?k=9206fc9239b3e4538c22d04b85213d6d5e6257015022de8a37effd956fcde4b6&o=&s=1" alt="" />
            <div className="fPropTitles">
                <h2>La Roulotte de Ciney</h2>
                <p>Belgium, Ciney</p>
                <div className="fPropReview">
                    <span className="rating">8.4</span>
                    <span className="remarks">Very Good</span>
                    <span className="reviewCount">90 reviews</span>
                </div>
            </div>
        </div>
        <div className="fPropItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/280950287.webp?k=b984c542b8b1a2ee0e019e4491da338a85b660caa10c5e1197225c5f3052d629&o=&s=1" alt="" />
            <div className="fPropTitles">
                <h2>Wierszyki Shelters</h2>
                <p>Poland, Zakopane</p>
                <div className="fPropReview">
                    <span className="rating">9.7</span>
                    <span className="remarks">Exceptional</span>
                    <span className="reviewCount">89 reviews</span>
                </div>
            </div>
        </div>
        <div className="fPropItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/132452060.webp?k=8448bab55c87dbb42ab7c6643fbbce542124c908f63f6b36dc3cdc859e60cb0a&o=&s=1" alt="" />
            <div className="fPropTitles">
                <h2>Ranczo w Dolinie</h2>
                <p>Poland, Kiszkowo</p>
                <div className="fPropReview">
                    <span className="rating">9.5</span>
                    <span className="remarks">Exceptional</span>
                    <span className="reviewCount">232 reviews</span>
                </div>
            </div>
        </div>
        <div className="fPropItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/187855604.webp?k=bbb45aa5b540c7608ea3af52d92b95a215df9af831dd3ae0e4c4cce501e28b1b&o=&s=1" alt="" />
            <div className="fPropTitles">
                <h2>Tiny House Dreischwestrnherz</h2>
                <p>Germany, Trier</p>
                <div className="fPropReview">
                    <span className="rating">9.6</span>
                    <span className="remarks">Exceptional</span>
                    <span className="reviewCount">137 reviews</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeaturedProperties