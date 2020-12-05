const { ApolloServer } = require('apollo-server');
const connection = require('./app/dbConnection');
const { port } = require('./app/config');
const typeDefs = require('./app/types');
const resolvers = require('./app/resolvers');
const models = require('./app/models');

connection();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
        const auth = req.headers.token || req.query.token;

        return { auth, models };
    },
    formatError: (err) => {
        const { message } = err;
        if (message.indexOf('Input error') > -1
            || message.indexOf('Database') > -1
            || message.indexOf('Not found') > -1
            || message.indexOf('Permission') > -1) {
            return new Error(message);
        }

        return new Error('Internal error');
    },
});

server.listen({ port }).then(({ url }) => {
    console.log(`The server is ready at ${url} on port:${port}`);
});

// Server uncaught error handlers
process.on('uncaughtException', (err) => {
    console.log('Uncaught exception', err);
    process.exit();
});

process.on('unhandledRejection', (err) => {
    console.log('Unhandled rejection: ', err);
    process.exit();
});
