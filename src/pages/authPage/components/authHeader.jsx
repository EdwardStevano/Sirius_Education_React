import React, { useState as state} from 'react'
import { Link } from 'react-router-dom'

// Importation du styles
import './_authHeader.css'

// Importation des ressources
import siriusLogo from '../../../assets/image/sirius/LogoSirius.png'
import moon_icon from '../../../assets/image/icon/svg/Moon_Icon.svg'
import sun_icon from '../../../assets/image/icon/svg/Sun_Icon.svg'

function authHeader() {

  const [isThemeDark, setIsThemeDark] = state(false);
  const [Themeicon, setThemeicon] = state();
  
  const switch_mode = () =>{
    if(localStorage.getItem('SuperMode')==="true"){
        localStorage.setItem('SuperMode', "false");
        document.body.classList.remove('darktheme');
        setIsThemeDark(false);
        setThemeicon('usericon');
    }else{
        localStorage.setItem('SuperMode', "true");
        document.body.classList.add('darktheme');
        setIsThemeDark(true);
        setThemeicon('moon_icon');
    }
  }

  return (
    <div className='authHeader-container'>
        <img src={siriusLogo} alt="Sirius Logo" />
        <Link to={'/'} className='authBack-btn'>retour</Link>
        {/* <div className="mode-btn">
          <img src={localStorage.getItem('SuperMode')==="true" ? sun_icon : moon_icon} alt='EMIT logo' className='switchmode_icon svgicon' width='35px' onClick={()=> switch_mode()}/>
        </div> */}
    </div>
  )
}

export default authHeader