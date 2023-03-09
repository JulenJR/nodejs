//Exercici 2.2
//Crea una classe "Persona" que rebi un paràmetre 'nom' en ser instanciada.
//La classe inclourà un mètode dirNom que imprimeixi per consola el paràmetre 'nom'. Invoca el mètode dirNom des de fora de la classe.

class Persona {
  constructor(nom) {
    this.nom = nom;
  }

  dirNom() {
    return this.nom;
  }
}
const p = new Persona("username");
console.log(p.dirNom());

//Exercici 3.1
//Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta. Invoca-la amb diferents definicions.

class PersonaAbstract {
  constructor(nom, edad, altura) {
    if (new.target === PersonaAbstract) {
      throw new Error("Abstract classes can't be instantiated");
    }

    this.nom = nom;
    this.edad = edad;
    this.altura = altura;
  }
}

function crearpersona(nom, edad, altura) {
  return Object.create(PersonaAbstract.prototype, {
    nom: { value: nom },
    edad: { value: edad },
    altura: { value: altura },
  });
}

let per1 = crearpersona("n3e1 --->   username1", "21", "155");

//console.log(per1);

module.exports = {
  Persona,
  PersonaAbstract,
};
