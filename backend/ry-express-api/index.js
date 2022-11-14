import bodyParser from "body-parser";
import express from 'express';
import {UserRoutes, ProfileRoutes} from './routes/index.js';

const app = express();
app.use(bodyParser.json());

new UserRoutes(app).initializeRoutes();
new ProfileRoutes(app).initializeRoutes();

app.listen(8080);