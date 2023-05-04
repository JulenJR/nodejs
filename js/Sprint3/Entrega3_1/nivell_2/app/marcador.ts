import { Joc } from './joc';

export class Marcador {

  private static instance: Marcador;
  private constructor() {
    this.games = [];
  }

  games : Joc[];

  static getInstance(): Marcador {
    return Marcador.instance ?? new Marcador();
  }

  addGame(name : string){
    const game = new Joc(name);
    this.games.push(game);
  }

  getGame(name : string){
    const game = this.games.find((game) => game.name === name);
    return game;
  }

  mostrarMarcador(){
    this.games.forEach(game => {
        game.mostrarMarcador();
    });
  }
}

module.exports = { Marcador };