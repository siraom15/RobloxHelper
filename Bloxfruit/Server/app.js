import express from 'express';
import serverRoute from './routes/server.routes.js';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';

const app = express();
app.use(cors());
const port = 80;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'Server OK',
  });
  return;
});
app.use('/server', serverRoute);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

export default app;
