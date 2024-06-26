const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
// const mongoDB = require('mongodb');
// const path = require('path');


const connectDB = require('./server/database/connection');

const app = express();

dotenv.config[{path:'config.env'}]
const PORT = process.env.PORT || 8080

// log requests
app.use(morgan('tiny'));

// mongoDB connection
connectDB();

// parse request to body parser
app.use(bodyParser.urlencoded({extended: true}))

// set view engine
app.set('view engine', 'ejs')
// app.set('views', path.resolve(__dirname, 'views/ejs'))

// load assets 
// app.use(express.static('public'))
app.use('/css', express.static((__dirname, 'assets/css')))
app.use('/img', express.static((__dirname, 'assets/img')))
app.use('/js', express.static((__dirname, 'assets/js')))

// load routers
app.use('/', require('./server/routes/router'))

app.listen(PORT, ()=> (console.log(`Server is running on http://localhost:${PORT}`)))