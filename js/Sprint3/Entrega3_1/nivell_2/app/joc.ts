import { Jugador } from './jugador';

export class Joc {
  constructor() {
    this.jugadors = [];
  }

  jugadors: Jugador[];

  afegirJugador(jugador: Jugador) {
    this.jugadors.push(jugador);
  }

  mostrarMarcador() {
    let guanyador: Jugador | null = null;
    let maxPuntuacio = -Infinity;

    for (const jugador of this.jugadors) {
      console.log(`${jugador.nom}: ${jugador.puntuacio} punts`);

      if (jugador.puntuacio > maxPuntuacio) {
        guanyador = jugador;
        maxPuntuacio = jugador.puntuacio;
      }
    }
    console.log(`Guanyador/a: ${guanyador?.nom}`);
  }
}

module.exports = { Joc };