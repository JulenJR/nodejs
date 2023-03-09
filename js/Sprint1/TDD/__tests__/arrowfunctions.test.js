//Nivell 2 punt 2
//Crea un mock que comprovi les crides al constructor de la classe Persona
//i al seu mètode. dirNom() en l'exercici Classes & Arrow Functions - N2 E2 i testeja que funcionen.

const { PersonaAbstract } = require("../app/PersonaAbstract.js");
const { Persona } = require("../app/Persona.js");

jest.mock("../app/Persona.js");
jest.mock("../app/PersonaAbstract.js");

test("Given a username when I create a class Person with username then should call the constructor with username", () => {
  // Arrange / Given
  const username = "username";

  // Act / when
  new Persona(username);

  //Assert / then
  expect(Persona).toHaveBeenCalledWith(username);
});

test("call al metode dirNom de la clase persona", () => {
  const username = "username";
  const p = new Persona(username);

  const dirNomMock = jest.fn((name) => username);

  Persona.mockImplementation(() => ({
    dirNom: dirNomMock,
  }));

  expect(dirNomMock("username")).toBe(username);
});

//Nivell 2 punt 3
//Verifica mitjançant tests la creació d'instàncies de la classe abstracta de l'exercici Classes & Arrow Functions N3 E1.

test("intent d'instanciar la clase -abstracta-", () => {
  const newAbstract = {
    nom: { value: "username" },
    edad: { value: "26" },
    altura: { value: "172" },
  };
  new PersonaAbstract(newAbstract);

  expect(PersonaAbstract).toHaveBeenCalledWith(newAbstract);
});
