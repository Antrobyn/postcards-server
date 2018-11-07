const express = require('express');
const app = express();
const morgan = require('morgan');
const errorHandler = require('./utils/error-handler');

require('./models/register-plugins');

const redirectHttp = require('./utils/redirect-http');
const checkConnection = require('./utils.check-connection');

if(process.env.NODE_ENV === 'production') {
    app.use(redirectHttp());
}

app.use(morgan('dev'));
app.use(express.static('./public'));
app.use(express.json());

const postcards = require('./routes/postcards');

if(process.env.NODE_ENV !== 'production') {
    app.use(checkConnection());
}

app.use('./api/postcards', postcards);

app.use((req, res) => {
    res.sendFile('index.html', { root: './public'} );
});

app.use(errorHandler());

module.exports = app;
