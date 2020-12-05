const mutations = require('./mutations');
const queries = require('./queries');

const UserResolver = {
    Query: {
        ...queries,
    },
    Mutation: {
        ...mutations,
    },
};

module.exports = UserResolver;
