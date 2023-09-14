import React, { useState as state} from 'react'
import "./supernovaStarterStyle.css"
import { useTranslation as translate} from 'react-i18next';

// importation des section
import Background from './components/background/blurBackground'
import SiriusNavbar from './components/navbar/navbar'
import SiriusBanner from './components/banner/banner'

// importation des composant
import ConnectionStatus from '../../components/connexionStatus/connectionStatus'

function main() {

  const [isThemeDark, setIsThemeDark] = state(false);
  const [Themeicon, setThemeicon] = state();
  const [selectedLanguage, setSelectedLanguage] = state('fr');

  const handleChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const { t, i18n} = translate();

  const changeLanguage = (event) => {
      i18n.changeLanguage(event.target.value);
  };

  return (
    <div className='main-container'>
      {/* <div className="staterSupernova">
        <div className="headbar">
          <span>SUPERNOVA</span>
          <div className="language-dropdown">
              {(localStorage.getItem("i18nextLng") == "fr") ? 
              <select className={`select-style ${selectedLanguage}-style`}onChange={changeLanguage}>
                <option value="fr" selected>Français</option>
                <option value="en">English</option>
                <option value="mg">Malagasys</option>
              </select>
                :
                <select onChange={changeLanguage}>
                  <option value="fr">Français</option>
                  <option value="en" selected>English</option>
                  <option value="mg">Malagasy</option>
                </select>
              }            
            </div>

          <div className="mode-btn">
            <span onClick={()=> switch_mode()}>Mode {localStorage.getItem('SuperMode')==="true" ? "Sombre" : "Claire"} </span>
            <img src={localStorage.getItem('SuperMode')==="true" ? sun_icon : moon_icon} alt='EMIT logo'
              className='switchmode_icon svgicon' width='35px' onClick={()=> switch_mode()}
            />
          </div>
        </div>
        
        <div className="content">
          <div className="left">
            <img src={supernovaLogo} alt="Supernova Logo" />
          </div>

          <div className="right">
            <h1>{t('supertitle')}</h1>
            <p>{t('superintro')}</p>
            <a href="http://www.supernovadigit.tech" target="_blank" rel="noopener noreferrer">Visit our website
              web</a>
          </div>
        </div>

        <div className="footer">
          <div className="left">
            <p>A React starter project By Edouardo Stevano</p>
            <a href="http://" target="_blank" rel="noopener noreferrer">Mada Unity Group</a>
            <a href="http://" target="_blank" rel="noopener noreferrer">Université de Fianarantsoa</a>
          </div>

          <div className="right">Team Supernova</div>

        </div>
      </div> */}
      {/* <Background/> */}
      <SiriusNavbar/>
      <SiriusBanner/>
      <ConnectionStatus/>
    </div>
  )
}

export default main