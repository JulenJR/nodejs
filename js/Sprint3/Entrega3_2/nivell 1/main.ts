import express from 'express';
import bodyParser from 'body-parser';
import { MathMiddleware } from './middlewares';

const app = express();
const mathMiddleware = new MathMiddleware();

app.use(bodyParser.json());

app.post('/', (req, res) => {
  const { num1, num2 } = req.body;
  const resultAdd = mathMiddleware.sum(num1, num2);
  const resultSub = mathMiddleware.sub(num1, num2);
  const resultMult = mathMiddleware.mult(num1, num2);

  res.json({ resultAdd, resultSub, resultMult });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});