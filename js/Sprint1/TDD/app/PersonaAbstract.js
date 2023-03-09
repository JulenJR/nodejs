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
  PersonaAbstract,
};
