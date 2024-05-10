import express from 'express';
import dotenv from 'dotenv';
import Connection from './database/db.js';
import router from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';
const app= express();

dotenv.config();
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', router);

const username= process.env.DB_USERNAME;
const password= process.env.DB_PASSWORD;

const PORT= 8000;
Connection(username, password);
app.listen(PORT, ()=> console.log(`Running successfully on Port ${PORT} hello`));