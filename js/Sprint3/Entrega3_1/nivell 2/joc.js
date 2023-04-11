class Joc {
    constructor() {
      this.jugadors = [];
    }
  
    afegirJugador(jugador) {
      this.jugadors.push(jugador);
    }
  
    mostrarMarcador() {
      let guanyador = null;
      let maxPuntuacio = -Infinity;
  
      for (const jugador of this.jugadors) {
        console.log(`${jugador.nom}: ${jugador.puntuacio}`);
  
        if (jugador.puntuacio > maxPuntuacio) {
          guanyador = jugador.nom;
          maxPuntuacio = jugador.puntuacio;
        }
      }
  
      console.log(`Guanyador/a: ${guanyador}`);
    }
  }
  
  module.exports = Joc;
  