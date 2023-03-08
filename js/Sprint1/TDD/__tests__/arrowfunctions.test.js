
//Nivell 2 punt 1 & 2
//Crea un mock que comprovi les crides al constructor de la classe Persona i al seu mètode.

const {Persona, PersonaAbstract} = require('../app/arrowfunctions.js');

jest.mock('../app/arrowfunctions.js');

test("call a la clase persona", () => {
    const novaPersona = new Persona("username").dirNom();
    expect(novaPersona.dirNom()).toBe("username");
})


//Nivell 2 punt 3
//Verifica mitjançant tests la creació d'instàncies de la classe abstracta de l'exercici Classes & Arrow Functions N3 E1.

test("intent d'instanciar la clase -abstracta-", () => {
    const newAbstract = new PersonaAbstract("username", "25", "172");
    expect(newAbstract).toBe("username", "25", "172");
})