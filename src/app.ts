import express, { Request, Response } from 'express';

export const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world');
});

app.all('*', (req: Request, res: Response) => {
  res.status(404).json({ error: `Not Found Route - ${req.method} ${req.path}` });
});
