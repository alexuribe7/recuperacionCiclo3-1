const express = require('express');
// import express from 'express'
var morgan = require('morgan');
// import morgan from 'morgan';
var cors = require('cors');
// import cors from 'cors';
var mongoose = require('mongoose');
// import mongoose from 'mongoose';
const router = require('./routes');   // si no hay nombre de archivo automaicamente llama a archivo index.js o escribir el nombre del archivo si no es index
// import apiRouter from './routes/index';

//conexión a la base de datos
// const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//const urlDB = 'mongodb://localhost:27017/dbsistema';
const urlDB = 'mongodb+srv://mongodbuser:uXFc2j9RezBZFUIb@mongodbtest.txg21.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(urlDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(mongoose => console.log('Conectado con Atlas'))
.catch(err => console.log(err))

const app = express();
app.use(morgan('dev'));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));


//rutas
app.use('/api', router);

app.set('PORT', process.env.PORT || 3000);

//middleware



app.listen(app.get('PORT'), () => {
  console.log(`Server started on port: ${app.get('PORT')}`);
});

app.get('/', (req,res) => { //Una peticion de tipo get a la ruta principal '/' local host 3000 y se reponde mensae Hello Word
    res.send('Hello World');
})