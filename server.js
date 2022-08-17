require('dotenv').config();

const express = require('express');
const db = require('./api/db/db');
const Book = require('./api/models/bookModel'); //created model loading here
const bodyParser = require('body-parser'); // mongoose instance connection url connection


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


var routes = require('./api/routes/bookRoute');
//importing route 
routes(app);

const port = process.env.PORT || 8080;

db.connect(process.env.COSMOS_DB_CONNECTION_STRING)
    .catch(err => {
        console.error(err.stack);
        process.exit(1)
    })
    .then(app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    }));
