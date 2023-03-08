//Nivell 1 punt 2
//Crea els tests corresponents per verificar el funcionament de les dues funcions de l'exercici Promises i Callbacks N1 E2.

const {
  getEmployee,
  getSalary,
  asyncEmployee
} = require("../app/promisescallbacks.js");

describe(`getEmployee (Promises & Callbacks)`, () => {
  test(`nomes accepta valors nomerics`, () => {
    expect(getEmployee(" ")).toBe(false);
  });

  test("nomes accepta valors nomerics", () => {
    expect(getEmployee("Hola")).toBe(false);
  });

  test("nomes accepta valors nomerics", () => {
    expect(getEmployee("-5")).toBe(false);
  });
});

//Nivell 1 punt 3
//Crea els tests corresponents per verificar el funcionament de les funcions de l'exercici
//Promises i Callbacks N2 E1 i Promises i Callbacks N2 E2 (getEmployee() i getSalary()).

describe(`Test getEmployee`, () => {
  test(`retorna un apromise`, () => {
    expect(getEmployee(1)).toBeInstanceOf(Promise);
  });
});

describe("getSalary amb valor numeric", () => {
  test("El Id no pot ser buit", () => {
    expect(getSalary("")).toBe(false);
  });
});

//Nivell 1 punt 4
//Crea els tests corresponents per verificar el funcionament de l'exercici Async / Await N1 E2.

describe(`Tests de la funció asíncrona`, () => {
  test(`await untill true`, () => {
    expect(asyncEmployee(3)).toBeTruthy();
  });
});
