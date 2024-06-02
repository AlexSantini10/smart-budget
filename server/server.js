// packages import
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');

// TODO: inserire i pacchetti per la sicurezza

// cookie
const cookieParser = require('cookie-parser');

dotenv.config();
require('express-async-errors');

// db import
// TODO: inserire il pacchetto di connessione

// middleware import 
// TODO: inserire i middleware

// routers import
// TODO: inserire i routers

const app = express();

// morgan middleware
if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'));
}

// cors
app.use(cors());

// Only in deployment -> serve the react app
//app.use(express.static('client/build'));

// json middleware
app.use(express.json());

// cookies
app.use(cookieParser());

// security middleware
//app.use(helmet());
//app.use(xss());
//app.use(mongoSanitize());

// routes
// TODO: inserire i routers

// middleware use
//app.use(notFoundMiddleware);
//app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
    console.log('Starting server...');
    try {
        //await connectDB(process.env.MONGO_URL);
        console.log('Connected to DB');

        app.listen(port, () => {
            console.log(`Listening on port ${port}...`);
        });
    } catch (err) {
        console.log(err);
    }
}

start();