import express, { Request, Response } from "express";
import { MathMiddleware } from "./middlewares";
import * as fs from "fs";

const app = express();

app.get("/", (req, res) => {
  const path = require('path');
  const jsonData = fs.readFileSync(path.resolve(__dirname, 'data.json'), 'utf-8');

  const { num1, num2 } = JSON.parse(jsonData);
  const mathMiddleware = new MathMiddleware(num1, num2);

  mathMiddleware.square(req);
  mathMiddleware.cube(req);
  mathMiddleware.divByTwo(req);

  const resultAdd = mathMiddleware.sum(req);
  const resultSub = mathMiddleware.sub(req);
  const resultMult = mathMiddleware.mult(req);

  console.log("Result of addition: ", resultAdd);
  console.log("Result of subtraction: ", resultSub);
  console.log("Result of multiplication: ", resultMult);

  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});