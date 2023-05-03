import { Jugador } from './jugador';

export class Joc {
  constructor(name : string) {
    this.jugadors = [];
    this.name = name;
  }

  name: string;
  jugadors: Jugador[];
  

  afegirJugador(jugador: Jugador) {
    this.jugadors.push(jugador);
  }

  mostrarMarcador() {
    let guanyador: Jugador | null = null;
    let maxPuntuacio = -Infinity;

    console.log(`-----    ${this.name}    ----- `)

    for (const jugador of this.jugadors) {
      console.log(`${jugador.nom}: ${jugador.puntuacio} punts`);

      if (jugador.puntuacio > maxPuntuacio) {
        guanyador = jugador;
        maxPuntuacio = jugador.puntuacio;
      }
    }
    console.log(`Guanyador/a: ${guanyador?.nom} amb ${guanyador?.puntuacio} punts`);
  }
}

module.exports = { Joc };