import express from 'express';
import serverRoute from './routes/serverhop.routes.js';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'Server OK',
  });
  return;
});
app.use('/server', serverRoute);

app.use(function (req, res, next) {
  res.status(err.status || 404).json({
    message: 'No such route exists',
  });
});

app.use(function (err, req, res, next) {
  console.log(err);
  res.status(err.status || 500).json({
    message: 'Error Message',
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

export default app;
