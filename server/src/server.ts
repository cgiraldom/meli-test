import qs from 'qs';
import express from 'express';

import router from './routes/items';
const app = express();

app.settings('query parser', function (str: string) {
  return qs.parse(str);
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'origin, X-Requested-With,Content-Type,Accept, Authorization'
  );

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
    return res.status(200).json({});
  }

  next();
});

app.use('/', router);

const port = process.env.PORT || 6000;

app.listen(port, () => console.log(`App listening on PORT ${port}`));
