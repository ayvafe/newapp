const mongoose = require('mongoose');
const { dbUri, dbOptions } = require('./config');

const connectDb = () => mongoose.connect(dbUri, dbOptions, (err) => {
    if (err) {
        console.log('Failed to connect to db!!!');
    } else {
        console.log('Successfull db conntecion!!!');
    }
});

module.exports = connectDb;
