const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

var cors = require("cors");

const { DB_CONNECT } = require("./config");

const app = express();

app.use(cors());
app.use(bodyParser.json()); // application/json

mongoose
  .connect(DB_CONNECT)
  .then(app.listen(8080))
  .catch((err) => console.log(err));
