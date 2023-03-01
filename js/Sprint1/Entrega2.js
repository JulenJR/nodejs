//nivell 1 exercici 1
//Les arrow functions són una evolució de les funcions tradicionals.
//Les classes van ser introduïdes en EcmaScript 6 i treballarem amb elles en profunditat.
//Utilitza l'intèrpret de node en tots els casos.

const { default: test } = require("node:test");

((a, b) => {
  console.log("n1e1 --->", a + b);
})(1, 2);

//nivell 2 exercici 1
//Crea una arrow function que, rebent un paràmetre, retorni un objecte amb un atribut que tingui com a valor el paràmetre rebut.

const arrowfunc = (atributeValue) => {
  let e1Object = new Object();
  e1Object.atribute = atributeValue;
  return e1Object;
};

console.log(arrowfunc("newAtribute"));

//nivell 2 exercici 2
//Crea una classe "Persona" que rebi un paràmetre 'nom' en ser instanciada. La classe inclourà un mètode dirNom que imprimeixi per consola el paràmetre 'nom'.
//Invoca el mètode dirNom des de fora de la classe.

class Persona {
  constructor(nom) {
    this.nom = nom;
  }

  dirNom() {
    console.log("n2e2 --->   parameter name = " + this.nom);
  }
}
const p1 = new Persona("username");
p1.dirNom();

//nivell 3 execici 1
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

console.log(per1);
