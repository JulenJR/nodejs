import * as conversions from "../currency_conversions.json";

interface CurrencyConverter {
  convertToEuros(currency: string, value: number): void;
}

export class EuroCurrencyConverter implements CurrencyConverter {
  private conversions: any;

  constructor() {
    this.conversions = conversions;
  }

  convertToEuros(currency: string, value: number): void {
    const conversionKey = `${currency.split("_")[0]}_EUR`;
    const conversionRate = this.conversions[conversionKey];
    const convertedValue = value * conversionRate;

    const roundedValue = Math.round(convertedValue * 100) / 100;
    console.log(
      `Converted ${value} ${currency.split("_")[0]} to ${roundedValue} EUR`
    );
  }
}

const converter1 = new EuroCurrencyConverter();
converter1.convertToEuros("USD_EUR", 100);

const converter2 = new EuroCurrencyConverter();
converter2.convertToEuros("GBP_EUR", 75);

const converter3 = new EuroCurrencyConverter();
converter3.convertToEuros("CHF_EUR", 50);

const converter4 = new EuroCurrencyConverter();
converter4.convertToEuros("JPY_EUR", 2500);

module.exports = { EuroCurrencyConverter };