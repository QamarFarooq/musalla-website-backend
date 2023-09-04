const http = require('http');

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
//const mySql = require('mySql');

const app = express();

const graphqlSchema = require('./graphql/schema');
const graphqlResolver = require('./graphql/resolvers');
const { graphqlHTTP } = require('express-graphql');

app.use('/graphql', graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolver
}));

// app.use((req, res, next) => {
//     console.log("I am executed!!!!!!");
// });

const server = http.createServer(app);

server.listen(8081);