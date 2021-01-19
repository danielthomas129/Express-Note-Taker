
const express = require('express');
const path = require('path');
const fs = require('fs');
const PORT = process.env.PORT || 8001;
const htmlroutes = require("./htmlroutes")
const apiroutes = require("./apiroutes")

const dbJson = require('./db/db.json')
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.static('./'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Require the Routes.js files in order to communicate when to generate api routes and html files
require("./apiroutes")(app);
require("./htmlroutes")(app);


// Starts the server to begin listening
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});