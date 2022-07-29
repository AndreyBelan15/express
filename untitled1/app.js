
// Чтение данных из файла .env
require('dotenv').config();


// Сам веб сервер (приложение)
let express = require('express');
let app = express();

// Для технических сообщений
let logger = require('morgan');
app.use(logger('dev'));

// Для работы JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Для работы с куками
let cookieParser = require('cookie-parser');
app.use(cookieParser());

// Для статических файлов
let path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// Для работы с базой данных
require("./config/mongo").connect();


let cors = require('cors')
app.use(cors())

//CONTACTS
let contactRouter = require('./routes/contacts')
app.use('/api/contacts', contactRouter);



module.exports = app;
