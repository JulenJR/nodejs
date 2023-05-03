import { CurrencyConversionDecorator } from '../app/conversor';

describe('CurrencyConverter', () => {
  let currencyConverter: CurrencyConversionDecorator;

  beforeEach(() => {
    currencyConverter = new CurrencyConversionDecorator();
  });


  //propper functionallity of conversor and usage of Decorator
  test('convertToEuros should convert currency and log the result', () => {
    const consoleSpy = jest.spyOn(console, 'log');

    currencyConverter.convertToEuros('USD_EUR', 100);

    expect(consoleSpy).toHaveBeenCalledWith('Converted 100 USD to 81.99 EUR');

    consoleSpy.mockRestore();
  });
});