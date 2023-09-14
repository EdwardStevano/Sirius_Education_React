import React from 'react'
import { Outlet } from 'react-router-dom';

// Importation des composant
import AuthHead from './components/authHeader'
import AuthFooter from './components/authFooter'
import BlurBackground from './components/blurBackground';

// Importation des styles
import './_authentificationStyle.css'
import './_authResponsive.css'

function Authentification() {
  return (
    <div className='authentification-container container'>
      <div className="authentification-content">
        <BlurBackground />
        <AuthHead />
          <Outlet />
        <AuthFooter />
      </div>
    </div>
  )
}

export default Authentification