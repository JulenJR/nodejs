import { Jugador } from './jugador';

export class Joc {
  constructor(name : string) {
    this.jugadors = [];
    this.name = name;
  }

  name: string;
  jugadors: Jugador[];
  

  afegirJugador(nom: string): void {
    const jugador = new Jugador(nom);
    this.jugadors.push(jugador);
  }
  getPlayer(nom: string) {
    const jugador = this.jugadors.find((jugador) => jugador.nom === nom);

    if (!jugador) {
      throw new Error(`Jugador/a ${nom} no trobat/da`);
    }
    return jugador;
  }

  updatePlayers(playerUpdated : Jugador){
    this.jugadors = this.jugadors.filter(player => player.nom !== playerUpdated.nom);
    this.jugadors.push(playerUpdated); 
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