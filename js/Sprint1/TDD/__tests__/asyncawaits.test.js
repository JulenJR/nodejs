const {
  retornaDoble
} = require('../app/asyncawaits.js');


//---------------------------------------------------------------------------------------------------------------
//Nivell 2 Exercici 1 
//Verifica mitjançant tests l'execució de l'exercici Async / Await N2 E1 utilitzant Jest Fake Timers.

jest.useFakeTimers();
jest.spyOn(global, "setTimeout");

describe("Comprovem el doble de un numero en 2 segons", () => {
  test("El doble de 2 es 4", () => {
    expect(retornaDoble(2)).resolves.toBe(4);
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);
    expect(retornaDoble("abc")).rejects.toMatch("Error, algún nombre no es numèric.");
    
  });
});

