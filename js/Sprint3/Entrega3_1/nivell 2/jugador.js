class Jugador {
    constructor(nom) {
      this.nom = nom;
      this.puntuacio = 0;
    }
  
    afegirPunts(punts) {
      this.puntuacio += punts;
    }
  
    treurePunts(punts) {
      this.puntuacio -= punts;
    }
  }
  
  module.exports = Jugador;
  