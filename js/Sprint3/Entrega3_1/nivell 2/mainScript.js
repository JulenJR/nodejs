const Jugador = require('./jugador');
const Joc = require('./joc');
const Marcador = require('./marcador');

const marcador = new Marcador();

marcador.afegirJugador("Jugador_1");
marcador.afegirJugador("Jugador_2");

marcador.afegirPunts("Jugador_1", 25);
marcador.afegirPunts("Jugador_2", 33);

marcador.mostrarMarcador();