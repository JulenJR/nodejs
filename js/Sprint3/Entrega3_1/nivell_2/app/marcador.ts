import { Jugador } from './jugador';
import { Joc } from './joc';

export class Marcador {
  private static instance: Marcador;

  private constructor() {
    if (Marcador.instance) {
      return Marcador.instance;
    }

    this.joc = new Joc();
    Marcador.instance = this;
  }

  static getInstance(): Marcador {
    return Marcador.instance ?? new Marcador();
  }

  joc: Joc = new Joc();

  afegirJugador(nom: string): void {
    const jugador = new Jugador(nom);
    this.joc.afegirJugador(jugador);
  }

  afegirPunts(nom: string, punts: number) {
    const jugador = this.joc.jugadors.find((jugador) => jugador.nom === nom);

    if (!jugador) {
      throw new Error(`Jugador/a ${nom} no trobat/da`);
    }

    jugador.afegirPunts(punts);
  }

  treurePunts(nom: string, punts: number) {
    const jugador = this.joc.jugadors.find((jugador) => jugador.nom === nom);

    if (!jugador) {
      throw new Error(`Jugador/a ${nom} no trobat/da`);
    }

    jugador.treurePunts(punts);
  }

  mostrarMarcador() {
    this.joc.mostrarMarcador();
  }
}

module.exports = { Marcador };