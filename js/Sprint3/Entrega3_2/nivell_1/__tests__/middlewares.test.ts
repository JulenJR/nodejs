import { Request } from "express";
import { MathMiddleware } from "../app/middlewares";

describe("MathMiddleware", () => {
  let mathMiddleware: MathMiddleware;

  beforeEach(() => {
    mathMiddleware = new MathMiddleware(2, 3);
  });

  afterEach(() => {
    mathMiddleware = null;
  });

  it("should calculate the square of num1 and num2", () => {
    mathMiddleware.square(null);

    expect(mathMiddleware["num1"]).toBe(4);
    expect(mathMiddleware["num2"]).toBe(9);
  });

  it("should calculate the cube of num1 and num2", () => {
    mathMiddleware.cube(null);

    expect(mathMiddleware["num1"]).toBe(8);
    expect(mathMiddleware["num2"]).toBe(27);
  });

  it("should divide num1 and num2 by 2", () => {
    mathMiddleware.divByTwo(null);

    expect(mathMiddleware["num1"]).toBe(1);
    expect(mathMiddleware["num2"]).toBe(1.5);
  });

  it("should calculate the sum of num1 and num2", () => {
    const sum = mathMiddleware.sum(null);

    expect(sum).toBe(5);
  });

  it("should calculate the subtraction of num1 and num2", () => {
    const sub = mathMiddleware.sub(null);

    expect(sub).toBe(-1);
  });

  it("should calculate the multiplication of num1 and num2", () => {
    const mult = mathMiddleware.mult(null);

    expect(mult).toBe(6);
  });
});