import { MathMiddleware } from "../app/middlewares";

describe("MathMiddleware", () => {
  //Test square() method
  it("should correctly calculate square of num1 and num2", () => {
    
    const mathMiddleware = new MathMiddleware(2, 3);

    mathMiddleware.square({} as any);

    expect(mathMiddleware.num1).toEqual(4);
    expect(mathMiddleware.num2).toEqual(9);
  });

  //Test cube() method
  it("should correctly calculate cube of num1 and num2", () => {
    
    const mathMiddleware = new MathMiddleware(2, 4);

    mathMiddleware.cube({} as any);

    expect(mathMiddleware.num1).toEqual(8);
    expect(mathMiddleware.num2).toEqual(64);
  });

  // Test case 3: Test divByTwo() method
  it("should correctly divide num1 and num2 by 2", () => {
   
    const mathMiddleware = new MathMiddleware(10, 5);
    
    mathMiddleware.divByTwo({} as any);

    expect(mathMiddleware.num1).toEqual(5);
    expect(mathMiddleware.num2).toEqual(2.5);
  });

  //Test sum() method
  it("should correctly calculate sum of num1 and num2", () => {
    
    const mathMiddleware = new MathMiddleware(3, 7);

    const result = mathMiddleware.sum({} as any);

    expect(result).toEqual(10);
  });

  //Test sub() method
  it("should correctly calculate subtraction of num1 and num2", () => {
   
    const mathMiddleware = new MathMiddleware(15, 8);

    const result = mathMiddleware.sub({} as any);

    expect(result).toEqual(7);
  });

  //Test mult() method
  it("should correctly calculate multiplication of num1 and num2", () => {
    
    const mathMiddleware = new MathMiddleware(4, 6);

    const result = mathMiddleware.mult({} as any);

    expect(result).toEqual(24);
  });
});