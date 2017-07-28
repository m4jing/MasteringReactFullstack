import http from 'http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
// import mongoose from 'mongoose';
import falcor from 'falcor';
import falcorExpress from 'falcor-express';
import falcorRouter from 'falcor-router';

import routes from './routes';


const app = express();
app.server = http.createServer(app);

app.use(cors());

app.use(bodyParser.json({extended: false}));
app.use(bodyParser.urlencoded({extended: false}));

app.use('/model.json', falcorExpress.dataSourceRoute((req, res) => {
  return new falcorRouter(routes);
}))

app.use(express.static('dist'));

app.server.listen(process.env.PORT || 3000);
console.log(`Server started on port: ${app.server.address().port}`);

export default app;
