require('dotenv').config();
import express from 'express';

import {jwtMiddleware, corsMiddleware, rbacMiddleware, sessionMiddleware} from '@dracul/user-backend'
import DraculLogger from "@dracul/logger-backend";
const {ResponseTimeMiddleware,RequestMiddleware} = DraculLogger;

import unauthorizedErrorMiddleware from "./middlewares/UnauthorizedErrorMiddleware.js";
import ErrorHandlerMiddleware from "./middlewares/ErrorHandlerMiddleware.js ";

import mediaRoute from "./routes/MediaRoute.js";
import statusRoute from "./routes/StatusRoute.js";

export const expressApp = express();

//Middlewares
expressApp.use(corsMiddleware)
expressApp.use(express.json())
expressApp.use(jwtMiddleware)
expressApp.use(unauthorizedErrorMiddleware);
expressApp.use(RequestMiddleware)
expressApp.use(ResponseTimeMiddleware)
expressApp.use(rbacMiddleware)
expressApp.use(sessionMiddleware)

//Routes
expressApp.use(mediaRoute)
expressApp.use(statusRoute)

//Error handler Middleware
expressApp.use(ErrorHandlerMiddleware);

export default expressApp
