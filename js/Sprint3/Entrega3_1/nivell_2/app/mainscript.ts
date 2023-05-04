import { Marcador } from './marcador';


const marcador = Marcador.getInstance();

marcador.addGame("testing ading games");
const game1 = marcador.getGame("testing ading games");
game1?.afegirJugador("test_player_1");
game1?.afegirJugador("test_player_2");
game1?.afegirPunts("test_player_2", 25)

marcador.addGame("game number 2 aded to games");
const game2 = marcador.getGame("game number 2 aded to games");
game2?.afegirJugador("game_2_player1");
game2?.afegirJugador("game2_player2_!!!!")
game2?.afegirPunts("game2_player2_!!!!", 395);

marcador.mostrarMarcador();