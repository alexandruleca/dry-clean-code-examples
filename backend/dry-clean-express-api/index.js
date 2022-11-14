import bodyParser from "body-parser";
import express from 'express';
import {UserRoutes, ProfileRoutes} from './routes/index.js';

const app = express();

// Make the app handle json body
app.use(bodyParser.json());

// Initialize routes with required parameters
new UserRoutes('user', app).initializeRoutes();
new ProfileRoutes('profile', app).initializeRoutes();

// Start the server
app.listen(8080);