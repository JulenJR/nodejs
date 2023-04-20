import { Request } from "express";

export class MathMiddleware {
  private num1: number;
  private num2: number;

  constructor(num1: number, num2: number) {
    this.num1 = num1;
    this.num2 = num2;
  }

  public square(req: Request): void {
    console.log(`Calculating square of ${this.num1} and ${this.num2}`);

    this.num1 *= this.num1;
    this.num2 *= this.num2;
  }

  public cube(req: Request): void {
    console.log(`Calculating cube of ${this.num1} and ${this.num2}`);

    this.num1 *= this.num1 * this.num1;
    this.num2 *= this.num2 * this.num2 * this.num2;
  }

  public divByTwo(req: Request): void {
    console.log(`Dividing ${this.num1} and ${this.num2} by 2`);

    this.num1 /= 2;
    this.num2 /= 2;
  }

  public sum(req: Request): number {
    console.log(`Calculating sum of ${this.num1} and ${this.num2}`);

    return this.num1 + this.num2;
  }

  public sub(req: Request): number {
    console.log(`Calculating subtraction of ${this.num1} and ${this.num2}`);

    return this.num1 - this.num2;
  }

  public mult(req: Request): number {
    console.log(`Calculating multiplication of ${this.num1} and ${this.num2}`);

    return this.num1 * this.num2;
  }
}

module.exports = { MathMiddleware };