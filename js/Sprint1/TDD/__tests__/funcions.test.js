const {
  suma,
  resta,
  multiplica,
  divideix
} = require('../app/funcions.js');


describe('Operacions Suma, Resta, Multiplicar i Dividir correctes', () => {

  test('2 + 2 = 4', () => {
    expect(suma(2, 2)).toBe(4);
  });

  test('2 - 1 = 1', () => {
    expect(resta(2, 1)).toBe(1);
  });

  test(' 2 * 3 = 6', () => {
    expect(multiplica(2, 3)).toBe(6);
  });

  test('4 / 2 = 2', () => {
    expect(divideix(4, 2)).toBe(2);
  });

});


describe('Revisió de paràmetres', () => {

  test('parámetres que rebi no sigui buit', () => {
    expect(suma("", "")).toBe(false);
  });

  test('parámetres que rebi no siguin text', () => {
    expect(suma("si", "no")).toBe(false);
  });

  test('parámetres que rebi no sigui buit', () => {
    expect(resta("", "")).toBe(false);
  });

  test('parámetres que rebi no siguin text', () => {
    expect(resta("si", "no")).toBe(false);
  });

  test('parámetres que rebi no sigui buit', () => {
    expect(multiplica("", "")).toBe(false);
  });

  test('parámetres que rebi no siguin text', () => {
    expect(multiplica("si", "no")).toBe(false);
  });

  test('parámetres que rebi no sigui buit', () => {
    expect(divideix("", "")).toBe(false);
  });

  test('parámetres que rebi no siguin text', () => {
    expect(divideix("si", "no")).toBe(false);
  });

});
