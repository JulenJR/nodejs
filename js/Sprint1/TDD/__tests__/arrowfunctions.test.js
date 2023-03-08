
//Nivell 2 Exercici 2
//Crea un mock que comprovi les crides al constructor de la classe Persona i al seu mètode. 
//dirNom() en l'exercici Classes & Arrow Functions - N2 E2 i testeja que funcionen.

const Persona = require('../app/arrowfunctions.js');

jest.mock('../app/arrowfunctions.js');

test("Comprova la crida al constructor de la Classe Persona", () => {
    const novaPersona = new Persona("Tomas").dirNom();
    expect(novaPersona.dirNom()).toBe("Tomas");
})



//Nivell 2 Exercici 2
//Verifica mitjançant tests la creació d'instàncies de la classe abstracta de l'exercici Classes & Arrow Functions N3 E1.