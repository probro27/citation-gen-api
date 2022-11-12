import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';

const app: Application = express();

app.use(bodyParser.json());
