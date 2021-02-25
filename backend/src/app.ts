require('dotenv').config();
import express from 'express';
import bodyParser from 'body-parser';
// import _cors from 'cors';
// import _logger from './utils/logger';
import proRoutes from './api/routes/pro';
// import _tokensRoutes from './api/routes/tokens';
import config from './config/config';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Database
const db = require('./config/database');

db.authenticate()
    .then(() => console.log('Database is connected...'))
    .catch(err => console.log('Error: ' + err));

// Routes to handle requests
app.use('/pro', proRoutes);
// app.use('/tokens', _tokensRoutes);

// Error handling
app.use((req, res, next) => {
    const error: any = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({ error: { message: error.message } });
    next();
});

process
    .on('unhandledRejection', (reason, promise) => {
        console.log(reason, 'Unhandled Rejection at Promise', promise);
    })
    .on('uncaughtException', error => {
        console.error(new Error(`Uncaught Exception thrown - ${error.message}`));
        process.exit(1);
    });

app.listen(config.port, () => {
    console.info(`Server started on port ${config.port}`);
});

export default app;
