import React, { useEffect } from 'react'
import './portfolio.css'
import { autoSlider } from './portfolio.js'
function Portfolio() {

  useEffect(() => { 
    // autoSlider()
  }, [])

  
  return (
    <div className='portfolio'>
      <h1>Glimpses of Pinnacle 2020</h1>
      <div className="portfolio_cards_container">

        <div className="portfolio_card rightTransfer  ">
          <img src="/images/Glimses/Glim1.JPG" alt="" />
        </div>
        <div className="portfolio_card rightTransfer ">
          <img src="/images/Glimses/Glim2.JPG" alt="" />
        </div>
        <div className="portfolio_card rightTransfer ">
          <img src="/images/Glimses/Glim3.JPG" alt="" />
        </div>
        <div className="portfolio_card rightTransfer ">
          <img src="/images/Glimses/Glim4.JPG" alt="" />
        </div>
        <div className="portfolio_card rightTransfer ">
          <img src="/images/Glimses/Glim5.JPG" alt="" />
        </div>
        <div className="portfolio_card rightTransfer ">
          <img src="/images/Glimses/Glim6.JPG" alt="" />
        </div>
        <div className="portfolio_card rightTransfer ">
          <img src="/images/Glimses/Glim7.JPG" alt="" />
        </div>
        <div className="portfolio_card rightTransfer ">
          <img src="/images/Glimses/Glim8.JPG" alt="" />
        </div>


      </div>
    </div>
  )
}

export default Portfolio