import { Jugador } from './jugador';
import { Joc } from './joc';

export class Marcador {
  private static instance: Marcador;
  private constructor() {
    this.games = [];
    if (Marcador.instance) {
      return Marcador.instance;
    }
    Marcador.instance = this;
  }

  games : Joc[];

  static getInstance(): Marcador {
    return Marcador.instance ?? new Marcador();
  }


  addGame(name : string){
    const game = new Joc(name);
    this.games.push(game);
  }

  joc: Joc = new Joc("testing String GAME NAME");
  joc2: Joc = new Joc("another game");
  //add new games
  
}

module.exports = { Marcador };