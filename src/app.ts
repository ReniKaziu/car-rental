import 'reflect-metadata';
require('dotenv').config();
import cors from 'cors';
import bodyParser from 'body-parser';
import { createConnection } from 'typeorm';
import { Action, useExpressServer } from 'routing-controllers';
import { HttpErrorHandler } from './middlewares/error-handler.middleware';
import path from 'path';
import express from 'express';
const chalk = require('chalk');
const figlet = require('figlet');

var app = express();

createConnection()
  .then(async () => {
    app.use(cors());
    app.use(bodyParser.json({ limit: '200mb' }));
    app.use(bodyParser.urlencoded({ limit: '200mb', extended: true }));

    // get api version
    app.get(process.env.URL + '/version', (req, res) => {
      res.status(200).send({
        success: true,
        message: 'the api call is successfull',
        body: {
          version: process.env.VERSION
        }
      });
    });

    useExpressServer(app, {
      controllers: [path.join(__dirname + '/controllers/*.controller.js')],
      defaultErrorHandler: false,
      routePrefix: '/api',
      middlewares: [HttpErrorHandler],
      currentUserChecker: async (action: Action) => {
        return action.request['user'];
      }
    });

    const port = process.env.PORT || 4500;

    app.listen(port, () => {
      const message = figlet.textSync(' # Server Running #', {
        font: 'Slant',
        horizontalLayout: 'default',
        verticalLayout: 'default'
      });

      console.log(chalk.green(message));
      console.log(chalk.blue(`🚀 Server is listening on port: ${port} 🚀`));
      console.log(chalk.yellow(`Visit: http://localhost:${port}`));
      console.log(chalk.cyan(`Press Ctrl + C to stop the server.`));
    });
  })
  .catch((error) => console.log(error));
