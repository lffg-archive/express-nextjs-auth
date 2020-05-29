import { json } from 'body-parser';
import * as express from 'express';
import { session } from './middlewares/session';
import { router as loginRouter } from './routes/login';
import { router as meRouter } from './routes/me';
import { env } from './utils';

const app = express();

app.use(json());
app.use(session());

app.use(loginRouter);
app.use(meRouter);

const port = env.getDefault('PORT', '4000');

app.listen(port, () => {
  console.log(`Server listening at <http://localhost:${port}>.`);
});
