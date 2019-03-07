var express = require('express');
var graphqlHTTP = require('express-graphql');
var cors = require("cors");
var { makeExecutableSchema } = require("graphql-tools");

// var typeDefs = require("./types");
// var resolvers = require("./resolvers");

const schema = makeExecutableSchema({
//   typeDefs,
//   resolvers
});

var app = express();

app.use(cors());