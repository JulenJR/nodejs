const Jugador = require('./jugador');
const Joc = require('./joc');

class Marcador {
  constructor() {
    if (Marcador.instance) {
      return Marcador.instance;
    }

    this.joc = new Joc();
    Marcador.instance = this;
  }

  afegirJugador(nom) {
    const jugador = new Jugador(nom);
    this.joc.afegirJugador(jugador);
  }

  afegirPunts(nom, punts) {
    const jugador = this.joc.jugadors.find((jugador) => jugador.nom === nom);

    if (!jugador) {
      throw new Error(`Jugador/a ${nom} no trobat/da`);
    }

    jugador.afegirPunts(punts);
  }

  treurePunts(nom, punts) {
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

module.exports = Marcador;
