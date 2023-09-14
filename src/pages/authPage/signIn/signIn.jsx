import React, { useState as state} from 'react'
import Spline from '@splinetool/react-spline';
import { Tooltip as ReactTooltip } from 'react-tooltip'

// importation du styles
import './_signInStyle.css'

// importation des ressources
import mailIcon from '../../../assets/image/icon/png/icons8_email_sign_60px_1.png'
import passwordIcon from '../../../assets/image/icon/png/icons8_good_pincode_60px.png'
import doneIcon from '../../../assets/image/icon/png/icons8_ok_60px.png'
import cancelIcon from '../../../assets/image/icon/png/icons8_cancel_60px.png'
import loadIcon from '../../../assets/image/icon/png/icons8_stream_60px.png'


// importation des styles de librairies
import 'react-tooltip/dist/react-tooltip.css'

function signIn() {
  const [text, setText] = state('');
  const [isValid, setIsValid] = state(false);
  const [isLoading, setIsLoading] = state(false);

  const handleChange = (e) => {
    const inputText = e.target.value;
    setText(inputText);

    setIsLoading(true);

    setTimeout(() => {
      const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
      setIsValid(emailPattern.test(inputText));

      setIsLoading(false);
    }, 1000); 
  };

  const handleCancelClick = () => {
    setText('');
  };

  return (
    <div className='SignUp MiddleContent'>
      <div className="signIn-left">
        <h1>Bienvenue sur Sirius😊</h1>
        <span>un pas de plus vers votre avenir brillant!</span>
        <p>La porte vers l'apprentissage en ligne de demain. Connectez-vous pour explorer un univers de connaissances infini..</p>

        <div className="signForm">
            <div className="inputform">
                <div className="input-content">
                  <img src={mailIcon} alt="email icon" width={"20px"}/>
                  <input type="text" value={text} placeholder='Adresse email' onChange={handleChange}/>

                  {isLoading && (
                  <img
                    src={loadIcon}
                    alt="Indicator"
                    width="30px"
                    className="authLoadIcon"
                    data-tip="Chargement en cours"
                    data-for="loadingTooltip"
                  />
                )}
                {text && !isLoading && (
                  isValid ? (
                    <img
                      src={doneIcon}
                      alt="Indicator"
                      width="30px"
                      data-tip="Adresse e-mail valide"
                      data-for="validTooltip"
                    />
                  ) : (
                    <img
                      src={cancelIcon}
                      alt="Indicator"
                      width="30px"
                      onClick={handleCancelClick}
                      data-tip="Adresse e-mail invalide"
                      data-for="invalidTooltip"
                    />
                  )
                )}

                <ReactTooltip id="loadingTooltip" />
                <ReactTooltip id="validTooltip" />
                <ReactTooltip id="invalidTooltip" />
                              
                </div>
                
            </div>
            <div className="inputform">
                <div className="input-content">
                  <img src={passwordIcon} alt="password icon" width={"20px"}/>
                  <input type="password" placeholder='Mot de passe'/>
                  {/* <img src={cancelIcon} alt="Indicator" width={"20px"}/> */}
                </div>
            </div>
        </div>

        <div className="btn-signForm">
          <div className="remreber-check">
            <input type="checkbox" name="remenber" id="remenber" />
            <label htmlFor="remenber">Se souvenir de moi</label>
          </div>

          <div className="passForget">
            <a href="#">Mot de passe oublié?</a>
          </div>
        </div>

        <div className="btn-group">
          <button type="button">Se connecter</button>
          <button type="button">Créer un compte</button>
        </div>
        
      </div>

      <div className="signIn-right">
        {/* <Spline scene="https://prod.spline.design/zdx0mSowln3BJhFw/scene.splinecode" /> */}
        <Spline scene="https://prod.spline.design/qyGkX0nScAeyxmRq/scene.splinecode" />
      </div>
    </div>
  )
}

export default signIn