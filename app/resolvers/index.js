const mutations = require('./mutations');
const subscriptions = require('./subscriptions');
const queries = require('./queries');

const UserResolver = {
    Subscription: {
        ...subscriptions,
    },
    Query: {
        ...queries,
    },
    Mutation: {
        ...mutations,
    },
};

module.exports = UserResolver;
