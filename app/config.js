module.exports = {
    port: process.env.PORT || 3007,
    dbUri: 'mongodb://localhost:27117/newapp?replicaSet=rs-newapp',
    superSecret: 'superSecret',
    dbOptions: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
    },
};
