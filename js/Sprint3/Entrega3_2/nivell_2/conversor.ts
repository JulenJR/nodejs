import * as conversions from './currency_conversions.json';

function currencyConversion(target: any, key: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
      const originalCurrency = args[0];
      const value = args[1];
      const conversionRate = conversions[originalCurrency];
      const convertedValue = value * conversionRate;
      return originalMethod.call(this, 'EUR', convertedValue);
    };
    return descriptor;
}

class CurrencyConverter {
  @currencyConversion
  convertToEuros(currency: string, value: number) {
    console.log(`Converted ${currency} ${value} to EUR`);
  }
}

const converter = new CurrencyConverter();
converter.convertToEuros("USD_EUR", 100);