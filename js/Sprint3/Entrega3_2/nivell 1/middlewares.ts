export class MathMiddleware {
  private num1: number;
  private num2: number;

  constructor(num1: number, num2: number) {
    this.num1 = num1;
    this.num2 = num2;
  }

  public sum(): number {
    return this.num1 + this.num2;
  }

  public sub(): number {
    return this.num1 - this.num2;
  }

  public mult(): number {
    return this.num1 * this.num2;
  }

  public divByTwo(): void {
    this.num1 /= 2;
    this.num2 /= 2;
  }

  public square(): void {
    this.num1 = Math.pow(this.num1, 2);
    this.num2 = Math.pow(this.num2, 2);
  }

  public cube(): void {
    this.num1 = Math.pow(this.num1, 3);
    this.num2 = Math.pow(this.num2, 3);
  }
}
