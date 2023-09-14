import React, { useState, useEffect } from 'react';
import ping from 'ping.js';


// Importation des fichiers CSS
import './connectionStatus.css';

function ConnectionStatus() {
  const [isOnline, setIsOnline] = useState(true);
  const [isVisible, setIsVisible] = useState(true);


  // Effet pour vérifier l'état de la connexion Internet et gérer l'affichage
  useEffect(() => {
    function checkOnlineStatus (){
      setIsOnline(true);
      if (isOnline) {
        // La connexion est retablie, afficher le composant
        setIsVisible(true);
        // Masquer le composant après 5 secondes
        setTimeout(() => {
          setIsVisible(false);
        }, 5000);
      }
    };

    function checkofflineStatus (){
      setIsOnline(false);
      setIsVisible(true);
    };

    // Écoute des événements de changement d'état de la connexion
    window.addEventListener('online', checkOnlineStatus);
    window.addEventListener('offline', checkofflineStatus);

    // Retirer les écouteurs d'événements lorsque le composant est démonté
    return () => {
      window.removeEventListener('online', checkOnlineStatus);
      window.removeEventListener('offline', checkofflineStatus);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);

  };

  return isVisible ? (

    <div className={`ConnectionStatus ${isOnline ? 'online' : 'offline'}`}>
      <div className="close-button" onClick={handleClose}>
        Fermer
      </div>
      {isOnline === false ?(
      <div>
        <h1>Pas d'accès Internet</h1>
        <p>Il semble que vous n'ayez actuellement pas accès à Internet. Une accès Internet est essentielle pour accéder à SIRIUS et profiter de ses fonctionnalités. Nous vous recommandons de vérifier votre connexion Internet.</p>
      </div>
      ):(
        <div>
        <h1>Connexion rétablie</h1>
        <p>Il semble que vous n'ayez actuellement pas accès à Internet. Une accès Internet est essentielle pour accéder à SIRIUS et profiter de ses fonctionnalités. Nous vous recommandons de vérifier votre connexion Internet.</p>
        </div>
      )}
    </div>
  ) : null;
}

export default ConnectionStatus;