import React from 'react'
import Cards from './Cards'
import "./Work.css"


function Work() {
  return (
    <div className="work-section"works id="works">
        <div className="container">
        <div className="section-text__header">
            <h3 className="section-text__title">A collection of side hustle projects.</h3>
            <div className="divider" />
            <div className="cards">
              <Cards />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Work