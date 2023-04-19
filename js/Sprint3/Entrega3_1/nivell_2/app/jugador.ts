export class Jugador {
    constructor(nom: string) {
      this.nom = nom;
      this.puntuacio = 0;
    }
  
    nom: string;
    puntuacio: number;
  
    afegirPunts(punts: number) {
      this.puntuacio += punts;
    }
  
    treurePunts(punts: number) {
      this.puntuacio -= punts;
    }
  }  

  module.exports = { Jugador };