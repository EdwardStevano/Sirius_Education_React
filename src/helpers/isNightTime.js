  // Fonction pour vérifier si l'heure actuelle est entre 18h et 6h
  export const isNightTime = () => {
    const now = new Date();
    const hour = now.getHours();
    return hour >= 18 || hour < 6;
  };