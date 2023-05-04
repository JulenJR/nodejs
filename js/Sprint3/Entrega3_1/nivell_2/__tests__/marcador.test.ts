import { Joc } from "../app/joc";
import { Jugador } from "../app/jugador";
import { Marcador } from "../app/marcador";

describe("Marcador", () => {
  test("addGame adds a new game to games", () => {
    const marcador = Marcador.getInstance();

    marcador.addGame("Game 1");

    expect(marcador.games.length).toBe(1);
    expect(marcador.games[0].name).toBe("Game 1");
  });

  test('getGames returns the correct "Joc" object', () => {
    const marcador = Marcador.getInstance();

    marcador.addGame("Game 1");
    const game = marcador.getGame("Game 1");

    expect(game).toBeDefined();
    expect(game?.name).toBe("Game 1");
  });

  test("Tests that mostrarMarcador displays the correct scoreboard for each game in the games array.", () => {
    const marcador = Marcador.getInstance();

    marcador.addGame("Game 1");
    marcador.addGame("Game 2");
    marcador.getGame("Game 1")?.afegirJugador("Player 1");
    marcador.getGame("Game 1")?.getPlayer("Player 1").afegirPunts(10);
    marcador.getGame("Game 2")?.afegirJugador("Player 2");
    marcador.getGame("Game 2")?.getPlayer("Player 2").afegirPunts(20);

    const consoleSpy = jest.spyOn(console, "log");
    marcador.mostrarMarcador();

    expect(consoleSpy).toHaveBeenCalledWith("-----    Game 1    ----- ");
    expect(consoleSpy).toHaveBeenCalledWith("Player 1: 10 punts");
    expect(consoleSpy).toHaveBeenCalledWith("Guanyador/a: Player 1 amb 10 punts");
    expect(consoleSpy).toHaveBeenCalledWith("-----    Game 2    ----- ");
    expect(consoleSpy).toHaveBeenCalledWith("Player 2: 20 punts");
    expect(consoleSpy).toHaveBeenCalledWith("Guanyador/a: Player 2 amb 20 punts");
  });
});
