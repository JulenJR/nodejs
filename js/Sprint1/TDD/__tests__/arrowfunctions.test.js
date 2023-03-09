
//Nivell 2 punt 2
//Crea un mock que comprovi les crides al constructor de la classe Persona
//i al seu mètode. dirNom() en l'exercici Classes & Arrow Functions - N2 E2 i testeja que funcionen.

const {Persona, PersonaAbstract} = require('../app/arrowfunctions.js');

jest.mock('../app/arrowfunctions.js');

test("call a la clase persona", () => {
    const p = new Persona("username");
    expect(p.dirNom()).toBe("username");
});


//Nivell 2 punt 3
//Verifica mitjançant tests la creació d'instàncies de la classe abstracta de l'exercici Classes & Arrow Functions N3 E1.

test("intent d'instanciar la clase -abstracta-", () => {
    const newAbstract = Object.create(PersonaAbstract.prototype, {
        nom: { value: "username" },
        edad: { value: "25" },
        altura: { value: "172" },
      });
    expect(newAbstract).toBe("username", "25", "172");
})