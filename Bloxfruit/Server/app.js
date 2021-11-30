import express from 'express';
import serverRoute from './routes/server.routes.js';
const app = express();
const port = 80;

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
