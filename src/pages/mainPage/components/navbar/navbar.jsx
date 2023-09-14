import React, { useState as state, useEffect as effect} from 'react'
import {Link} from 'react-router-dom'

// Importation du style
import './_navbar.css'

// importation des ressources
import supernovaLogo from '../../../../assets/image/supenova/logo512.png'
import moon_icon from '../../../../assets/image/icon/svg/Moon_Icon.svg'
import sun_icon from '../../../../assets/image/icon/svg/Sun_Icon.svg'
import siriusLogo from '../../../../assets/image/sirius/LogoSirius.png'
import siriusLogo2 from '../../../../assets/image/sirius/LogoSiriusWhite.png'

function navbar() {

    const [isThemeDark, setIsThemeDark] = state(false);
    const [Themeicon, setThemeicon] = state();
    const [appIcon, setAppicon] = state();
    const [selectedLanguage, setSelectedLanguage] = state('en');
    const [menuVisible, setMenuVisible] = state(false);
    const [isFixed, setIsFixed] = state(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    effect(() => {
        const handleScroll = () => {
          const scrollPosition = window.pageYOffset;
          if (scrollPosition > 120) {
            setIsFixed(true);
          } else {
            setIsFixed(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    

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
    <div className={isFixed ? 'navbar-container fixed-nav' : 'navbar-container'}>
        <nav className="navbar">
        <div className="logo">
            <img src={siriusLogo} alt="Sirius Logo" />
        </div>

        <button className="menu-button" onClick={toggleMenu}>
            Menu
        </button>

        <ul className={`menu ${menuVisible ? 'active' : ''}`}>
            <li><a href="/" className='menu-btn active'>Accueil</a></li>
            <li><a href="/services" className='menu-btn'>Services</a></li>
            <li><a href="/cours" className='menu-btn'>Cours</a></li>
            <li><a href="/contact" className='menu-btn'>Contact</a></li>
        </ul>

        <div className="buttons">
            <Link to={'/login/signup'} className="signup-button">Inscription</Link>
            <Link to={'/login'} className="login-button">Connexion</Link>
            <div className="mode-btn">
                <img src={localStorage.getItem('SuperMode')==="true" ? sun_icon : moon_icon} alt='EMIT logo'
                className='switchmode_icon svgicon' width='35px' onClick={()=> switch_mode()}
                />
            </div>
        </div>
        </nav>
    </div>
  )
}

export default navbar