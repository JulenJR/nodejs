import { Joc } from '../app/joc';
import { Jugador } from '../app/jugador';
import { Marcador } from '../app/marcador';

describe('Marcador', () => {

    // let marcador: Marcador;

    // beforeEach(() => {
    //     marcador = Marcador.getInstance();
    // });

    // afterEach(() => {
    //     marcador.joc.jugadors = [];
    // });

    test('afegirJugador adds a new player to the game', () => {
    const marcador = Marcador.getInstance();

    marcador.afegirJugador('player1');

    expect(marcador.joc.jugadors.length).toBe(1);
    });

    test('afegirPunts adds points to the specified player', () => {
        const marcador = Marcador.getInstance();

        marcador.afegirJugador('player');
        marcador.afegirPunts('player', 10);

        expect(marcador.joc.jugadors[1].puntuacio).toBe(10);
    });

    test('treurePunts subtracts points from the specified player', () => {
        const marcador = Marcador.getInstance();

        marcador.afegirJugador('player2');
        marcador.afegirPunts('player2', 10);
    
        marcador.treurePunts('player2', 5);
    
        expect(marcador.joc.jugadors[2].puntuacio).toBe(5);
      });

      test('mostrarMarcador displays the current scoreboard', () => {
        const marcador = Marcador.getInstance();
        marcador.joc.jugadors  = [];
        const spy = jest.spyOn(console, 'log').mockImplementation();
    
        marcador.afegirJugador('player');
        marcador.afegirPunts('player', 10);
    
        marcador.mostrarMarcador();
    
        expect(spy).toHaveBeenCalledWith('player: 10 punts');
    
        spy.mockRestore();
      });
});