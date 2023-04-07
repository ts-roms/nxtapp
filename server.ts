import express from 'express';
import next from 'next';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import Router from 'express-promise-router';

const app = express();
const server = next({ dev: process.env.NODE_ENV !== 'production' });
const router = Router();


const morganMiddleware = morgan('dev');
const bodyParserMiddleware = bodyParser.json();
const corsMiddleware = cors();

router.use(setupMiddlewares({
  morgan: morganMiddleware,
  bodyParser: bodyParserMiddleware,
  cors: corsMiddleware,
}))

app.use('/api', router);


async function startServer() {
  await app.setupMiddlewares([
    morganMiddleware,
    bodyParserMiddleware,
    corsMiddleware,
  ]);
  
  server.getRequestHandler()(app);
}

startServer();
