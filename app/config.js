module.exports = {
    port: process.env.PORT || 3007,
    dbUri: 'mongodb://localhost:27117/newapp?replicaSet=rs-newapp',
    superSecret: 'superSecret',
    dbOptions: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
        readPreference: 'primary',
        socketTimeoutMS: 90000,
        keepAlive: 10000,
        connectTimeoutMS: 30000,
    },
};
