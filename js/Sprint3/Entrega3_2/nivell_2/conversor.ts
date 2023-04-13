import * as conversions from './currency_conversions.json';

function currencyConversion(target: any, key: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
      const originalCurrency = args[0];
      const value = args[1];
      const conversionRate = conversions[originalCurrency];
      const convertedValue = value * conversionRate;
      return originalMethod.call(this, args, convertedValue);
    };
    return descriptor;
}

class CurrencyConverter {
  @currencyConversion
  convertToEuros(currency: string, value: number) {
    let roundValue = Math.round(value *100) / 100;
    console.log(`Converted ${currency[1]} ${currency[0].slice(0,3)} to ${roundValue} EUR`);
  }
}

const converter1 = new CurrencyConverter();
converter1.convertToEuros("USD_EUR", 100);

const converter2 = new CurrencyConverter();
converter2.convertToEuros("GBP_EUR", 75);

const converter3 = new CurrencyConverter();
converter3.convertToEuros("CHF_EUR", 50);

const converter4 = new CurrencyConverter();
converter4.convertToEuros("JPY_EUR",2500);
