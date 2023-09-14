import React from 'react';
import Spline from '@splinetool/react-spline';
import CountUp from 'react-countup';

import './_banner.css';

// Importation des ressources
import IllustrationImage from '../../../../assets/image/illustration/Banner.png';
import playIcon from '../../../../assets/image/icon/png/icons8_circled_play_120px.png';
import freeCourseIcon from '../../../../assets/image/icon/png/icons8_classroom_120px.png';
import certificatIcon from '../../../../assets/image/icon/png/icons8_certificate_48px.png';
import themeIcon from '../../../../assets/image/icon/png/icons8_verified_account_120px.png';

const Banner1 = () => {
  return (
    <div className="banner-with-illustration">
      <div className="banner-content">
        <div className="left-side">
          <span className="banner-preheading">🎓 Explorez Sirius</span>
          <h2 className="banner-heading">Soyez plus <span>brillant</span> que les étoiles.</h2>
          <p className="banner-text">Chez Sirius, nous croyons en l'éducation comme un chemin vers l'illumination. Que vous soyez un étudiant passionné, un professionnel en quête de nouvelles compétences, ou un enseignant désireux d'inspirer, Sirius est votre compagnon d'apprentissage dévoué.</p>

          <div clasName={"Banner-btn"}>
            <button className="banner-button">En Savoir Plus</button>
            <button className="banner-button2">Comment ça marche ? <img src={playIcon} alt="play icon" width={'20px'}/></button>
          </div>

          <div className="banner-info">
            <div className="info">
              <img src={freeCourseIcon} alt="info icon" width={'24px'}/>
              <span>Cours gratuit</span>
            </div>

            <div className="info">
              <img src={certificatIcon} alt="info icon" width={'24px'}/>
              <span>Avec nos meilleurs </span>
            </div>

            <div className="info">
              <img src={themeIcon} alt="info icon" width={'24px'}/>
              <span>Apprennez à votre rythme</span>
            </div>
          </div>
          {/* <div className={"textcount-global"}>
              <div className="textCount">
                <h5>Nos Cours</h5>
                <CountUp
                  start={0}
                  end={200}
                  duration={2}
                  separator=" "
                  suffix="+"
                  onEnd={() => console.log('Ended count! 👏')}
                  onStart={() => console.log('Started count! 💨')}
                  >
                  {({ countUpRef, start }) => (
                      <div>
                      <span ref={countUpRef} />
                      </div>
                  )}
              </CountUp>
              </div>
              <div className="textCount">
                <h5>Nos Super profs</h5>
                <CountUp
                  start={0}
                  end={20}
                  duration={3}
                  separator=" "
                  suffix="+"
                  onEnd={() => console.log('Ended count! 👏')}
                  onStart={() => console.log('Started count! 💨')}
                  >
                  {({ countUpRef, start }) => (
                      <div>
                      <span ref={countUpRef} />
                      </div>
                  )}
              </CountUp>
              </div>
              <div className="textCount">
                <h5>Utilisateur</h5>
                <CountUp
                  start={0}
                  end={40}
                  duration={4}
                  separator=" "
                  suffix="k+"
                  onEnd={() => console.log('Ended count! 👏')}
                  onStart={() => console.log('Started count! 💨')}
                  >
                  {({ countUpRef, start }) => (
                      <div>
                      <span ref={countUpRef} />
                      </div>
                  )}
              </CountUp>
              </div>
          </div> */}
        </div>
        <div className="right-side">
          <img src={IllustrationImage} alt="Illustration" className="illustration" />
          {/* <Spline scene="https://prod.spline.design/OxT02Q06G55YlGAR/scene.splinecode" /> */}
        </div>
      </div>
    </div>
  );
};

export default Banner1;
