/* eslint-disable object-curly-newline */
const { Helper, Validator } = require('../../helpers');

module.exports = async (_, { user: { username, password, firstname, lastname, email, birthdate } }, { models }) => {
    Validator.register({ username, password, firstname, lastname, email, birthdate });

    let user = await models.User.findOne({ username });
    if (user) {
        throw new Error('Input error: username! The username is already in use.');
    }
    user = await models.User.findOne({ email });
    if (user) {
        throw new Error('Input error: email! The email is already in use.');
    }

    password = Helper.getHashedPassword(password);
    const newUser = new models.User({ username, password, firstname, lastname, email, birthdate });
    const res = await newUser.save();

    const token = Helper.signToken(res);

    return { id: res._id, username: res.username, token };
};
