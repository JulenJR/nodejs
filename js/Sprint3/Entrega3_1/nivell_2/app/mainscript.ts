import { Marcador } from './marcador';


const marcador = Marcador.getInstance();

marcador.joc.afegirJugador("p1_game1");
marcador.joc.afegirJugador("p2_game1");
marcador.joc.afegirPunts("p1_game1", 7);
marcador.joc.afegirPunts("p2_game1", 17);
marcador.joc.treurePunts("p2_game1", 2);

marcador.joc2.afegirJugador("p1_game2");
marcador.joc2.afegirJugador("p2_game2");
marcador.joc2.afegirPunts("p1_game2", 7);
marcador.joc2.afegirPunts("p2_game2", 17);
marcador.joc2.treurePunts("p2_game2", 2);



marcador.joc.mostrarMarcador();
marcador.joc2.mostrarMarcador();
