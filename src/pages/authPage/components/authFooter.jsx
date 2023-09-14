import React from 'react'
import { Link } from 'react-router-dom'

// Importation du styles
import './_authFooter.css'


function authFooter() {
  return (
    <div className='authFooter-container'>
      <div className="leftfooter">
        <p>copyright&copy;2023-Sirius Tous droits reservé à Supernova Team 🚀</p>
      </div>

      <div className="rightfooter">
        <Link to={'/'} className='juridic-btn'>Termes et conditions d'utilisations</Link>
        <Link to={'/'} className='juridic-btn'>politique de confidentialité</Link>
        
      </div>
      
    </div>
  )
}

export default authFooter