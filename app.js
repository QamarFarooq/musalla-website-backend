const http = require('http');

const express = require('express');

const { ApolloServer } = require('apollo-server-express');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const typeArray = require('./graphql/schema');
const resolversArray = require('./graphql/resolvers');


async function startApolloServer() {
    const app = express();

    const schema = makeExecutableSchema({
        typeDefs: typeArray,
        resolvers: resolversArray,
    })

    const server = new ApolloServer({
        schema: schema
    });

    await server.start();
    server.applyMiddleware({app, path: '/graphql'})

    app.listen(8081, () => {
        console.log('I am Running GraphQL server!');
    });
}

startApolloServer();







// app.use((req, res, next) => {
//     console.log("I am executed!!!!!!");
// });

// app.listen(8081);
