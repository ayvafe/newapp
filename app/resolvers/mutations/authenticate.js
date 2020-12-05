/* eslint-disable object-curly-newline */
const { Helper } = require('../../helpers');

module.exports = async (_, { username, password }, { models }) => {
    const user = await models.User.findOne({ username });
    if (!user) {
        throw new Error('Not found: user');
    }
    const passwordCheck = user.comparePassword(Helper.getHashedPassword(password));
    if (!passwordCheck) {
        throw new Error('Input error: password!');
    }

    const token = Helper.signToken(user);
    return { id: user._id, username: user.username, token };
};
