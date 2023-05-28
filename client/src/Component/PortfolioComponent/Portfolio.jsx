import React, { useEffect } from 'react'
import './portfolio.css'
import { autoSlider } from './portfolio.js'
function Portfolio() {

  useEffect(() => { 
    // autoSlider()
  }, [])

  
  return (
    <div className='portfolio'>
      <h1>Glimpse of Pinnacle</h1>
      <div className="portfolio_cards_container">

        <div className="portfolio_card rightTransfer  ">
          <img src="/images/glimses/glim1.JPG" alt="" />
        </div>
        <div className="portfolio_card rightTransfer ">
          <img src="/images/glimses/glim2.JPG" alt="" />
        </div>
        <div className="portfolio_card rightTransfer ">
          <img src="/images/glimses/glim3.JPG" alt="" />
        </div>
        <div className="portfolio_card rightTransfer ">
          <img src="/images/glimses/glim4.JPG" alt="" />
        </div>
        <div className="portfolio_card rightTransfer ">
          <img src="/images/glimses/glim5.JPG" alt="" />
        </div>
        <div className="portfolio_card rightTransfer ">
          <img src="/images/glimses/glim6.JPG" alt="" />
        </div>
        <div className="portfolio_card rightTransfer ">
          <img src="/images/glimses/glim7.JPG" alt="" />
        </div>
        <div className="portfolio_card rightTransfer ">
          <img src="/images/glimses/glim8.JPG" alt="" />
        </div>


      </div>
    </div>
  )
}

export default Portfolio