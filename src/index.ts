import 'reflect-metadata';

import dotenv from 'dotenv';

import AppBootstrap from './config/App-Bootstrap';
import DiContainer from './config/DiContainer';

import './controllers/CatController';

dotenv.config();

if (!('PORT' in process.env)) throw new Error('PORT environment varianle is missing');

const PORT = process.env.PORT || 8081;
const diContainer = new DiContainer();
const application = new AppBootstrap(diContainer.Container);
application.listen(Number(PORT));
