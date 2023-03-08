//Nivell 1 punt 2
//Crea els tests corresponents per verificar el funcionament de les dues funcions de l'exercici Promises i Callbacks N1 E2.

const {
  getEmployee,
  getSalary,
  funcion_asincrona,
} = require("../app/promisescallbacks.js");

describe("Verificar funcionament de getEmployee (Promises & Callbacks)", () => {
  test("El Id no pot ser buit", () => {
    expect(getEmployee("")).toBe(false);
  });

  test("El Id ha de ser numèric", () => {
    expect(getEmployee("alpha")).toBe(false);
  });

  test("El Id ha de ser major que 0", () => {
    expect(getEmployee("-1")).toBe(false);
  });
});

//Nivell 1 punt 3
//Crea els tests corresponents per verificar el funcionament de les funcions de l'exercici
//Promises i Callbacks N2 E1 i Promises i Callbacks N2 E2 (getEmployee() i getSalary()).

describe(`Tests del getEmployee`, () => {
  test(`Espera simplement que torni una promise`, () => {
    expect(getEmployee(1)).toBeInstanceOf(Promise);
  });
});

describe("getSalary no li pots pasar un paràmetre buit", () => {
  test("El Id no pot ser buit", () => {
    expect(getSalary("")).toBe(false);
  });
});

//--------------------------------------------------------------------------------------------------------------
//Nivell 1 punt 4
//Crea els tests corresponents per verificar el funcionament de l'exercici Async / Await N1 E2.

describe(`Tests de la funció asíncrona`, () => {
  test(`Espera simplement que torni true`, () => {
    expect(funcion_asincrona()).toBeTruthy();
  });
});
