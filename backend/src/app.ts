import express, {Application, Request, Response} from 'express';
import cors from 'cors';
import 'dotenv/config';

import gameRoute from './routes/gameRoute';

const app: Application =express();

app.use(express.json());

// here we will import routes

// here we will declare the routes paths
app.use('/api/games', gameRoute);

export {app};