const pubsub = require('../../pubsub');

module.exports = {
    subscribe() {
        return pubsub.asyncIterator('userUpdated');
    },
    resolve: (payload) => payload,
};
