const express = require('express');
require('./models/db');//!!
const ejs = require('ejs');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');

const app = express();

// set view engine with ejs
app.set('view engine', ejs);

// use express static method for public folder
app.use(express.static('public'));

// use bodyParser to endcode url
app.use(bodyParser.urlencoded({ extended: true }));

// use routes
app.use(routes);

const port = 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));