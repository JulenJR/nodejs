export class MathMiddleware {
  square(req: any, res: any, next: any) {
    req.body.num1 = req.body.num1 ** 2;
    req.body.num2 = req.body.num2 ** 2;
    next();
  }

  cube(req: any, res: any, next: any) {
    req.body.num1 = req.body.num1 ** 3;
    req.body.num2 = req.body.num2 ** 3;
    next();
  }

  divByTwo(req: any, res: any, next: any) {
    req.body.num1 /= 2;
    req.body.num2 /= 2;
    next();
  }

  sum(num1: number, num2: number): number {
    return num1 + num2;
  }

  sub(num1: number, num2: number): number {
    return num1 - num2;
  }

  mult(num1: number, num2: number): number {
    return num1 * num2;
  }
}