// packages import
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');

// TODO: inserire i pacchetti per la sicurezza
// security packages
//const helmet = require('helmet');
//const xss = require('xss-clean');
//const mongoSanitize = require('express-mongo-sanitize');

// cookie
const cookieParser = require('cookie-parser');

dotenv.config();
require('express-async-errors');

// db import
const {connect} = require('./db/connect');

// middleware import 
const auth = require('./middleware/auth.js');
const notFoundMiddleware = require('./middleware/not-found.js');
const errorHandlerMiddleware = require('./middleware/error-handler.js');

// routers import
// TODO: inserire i routers
const auth_routes = require('./routes/auth_routes');

const app = express();

// morgan middleware
if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'));
}

// cors
app.use(cors());

// Only in deployment -> serve the react app
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, '../client/build')));
}

// json middleware
app.use(express.json());

// cookies
app.use(cookieParser());

// TODO: inserire i middleware per la sicurezza
// security middleware
//app.use(helmet());
//app.use(xss());
//app.use(mongoSanitize());

// routes
// TODO: inserire le routes
app.use('/api/v1/auth', auth_routes);

// middleware use
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
    console.log('Starting server...');
    try {
        // Test connessione a DB
        let pool = await connect();
        console.log('Connected to DB');
        pool.close();

        app.listen(port, () => {
            console.log(`Listening on port ${port}...`);
        });
    } catch (err) {
        console.log(err);
    }
}

start();