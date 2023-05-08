import { Marcador } from './marcador';


const marcador = Marcador.getInstance();

marcador.addGame("testing ading games");
const game1 = marcador.getGame("testing ading games");
game1?.afegirJugador("test_player_1");
const player = game1?.getPlayer("test_player_1");
player?.afegirPunts(25);
game1?.updatePlayers(game1.getPlayer("test_player_1"));
game1?.afegirJugador("test_player_2");
const player2 = game1?.getPlayer("test_player_2");
player2?.afegirPunts(2);
game1?.updatePlayers(game1?.getPlayer("test_player_2"));



marcador.addGame("game number 2 aded to games");
const game2 = marcador.getGame("game number 2 aded to games");
game2?.afegirJugador("game_2_player1");
const player1G2 = game2?.getPlayer("game_2_player1");
player1G2?.afegirPunts(10);
game2?.updatePlayers(game2?.getPlayer("game_2_player1"));
game2?.afegirJugador("game2_player2_!!!!")
const player2G2 = game2?.getPlayer("game2_player2_!!!!");
player2G2?.afegirPunts(395);
game2?.updatePlayers(game2?.getPlayer("game2_player2_!!!!"));

marcador.mostrarMarcador();