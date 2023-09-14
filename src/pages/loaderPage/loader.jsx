import React from 'react'

// Importation du style
import './_loader.css'

function loader() {
  return (
    <div className="loader-container">
      <div class="loader loader-7"></div>
      <div className='blurBackground'>
        <div className="blur Box1"></div>
        <div className="blur Box2"></div>
        <div className="blur Box3"></div>
      </div>
      
    </div>
  )
}

export default loader