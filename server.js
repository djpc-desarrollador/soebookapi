require('dotenv').config();

const express = require('express');
const db = require('./api/db/db');
const Book = require('./api/models/bookModel'); //created model loading here
const bodyParser = require('body-parser'); // mongoose instance connection url connection


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


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