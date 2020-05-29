import { json } from 'body-parser';
import * as express from 'express';
import { router as loginRouter } from './routes/login';
import { router as meRouter } from './routes/me';

const port = process.env.PORT || 3333;

const app = express();

app.use(json());

app.use(loginRouter);
app.use(meRouter);

app.listen(port, () => {
  console.log(`Server listening at <http://localhost:${port}>.`);
});
