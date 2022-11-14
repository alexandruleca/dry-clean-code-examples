import bodyParser from "body-parser";
import express from 'express';
import {UserRoutes, ProfileRoutes} from './routes/index.js';

const app = express();
app.use(bodyParser.json());

new UserRoutes('user', app).initializeRoutes();
new ProfileRoutes('profile', app).initializeRoutes();

app.listen(8080);