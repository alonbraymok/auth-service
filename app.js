const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const cors = require("cors");

const graphqlHttp = require("express-graphql");

const graphqlSchema = require("./graphql/schema");
const graphqlResolvers = require("./graphql/resolvers");

const { DB_CONNECT } = require("./config");

const app = express();

app.use(cors());
app.use(bodyParser.json()); // application/json
app.use(
  "./graphql",
  graphqlHttp({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
  })
);

mongoose
  .connect(DB_CONNECT)
  .then(app.listen(8081))
  .catch((err) => console.log(err));
