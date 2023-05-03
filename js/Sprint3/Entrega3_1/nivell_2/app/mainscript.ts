import { Marcador } from './marcador';


const marcador = Marcador.getInstance();

marcador.afegirJugador("Jugador_1");
marcador.afegirJugador("Jugador_2");

marcador.afegirPunts("Jugador_1", 25);
marcador.afegirPunts("Jugador_2", 233);

marcador.treurePunts("Jugador_1", 2);

marcador.mostrarMarcador();