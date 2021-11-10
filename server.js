// allows usage of .env to contain our "hidden variables"
require("dotenv").config();
// importing express server
const express = require("express");
// importing mongoose for database connection
const mongoose = require('mongoose');
const port = process.env.PORT || 8000;
const path = require("path");


const app = express();
//think this is setting up the static file server, pre-set for both dev and production (public = dev version) & (build = production version)
const staticDir = process.env.DEV ? "./client/public" : "./client/build";

app.use(express.static(staticDir));

// allows for server to read data as a json Obj
app.use(express.urlencoded({extended: true}));


app.listen(port, () => {
  console.log('listening on port: ' + port) 
})

