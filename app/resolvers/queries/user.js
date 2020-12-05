const { superSecret } = require('../../config');
const { Helper } = require('../../helpers');

module.exports = async ({ token }, { models }) => {
    if (!token) {
        throw new Error('Permission denied!');
    }

    const decoded = await Helper.decodeToken(token, superSecret);
    const user = await models.User.findOne({ _id: decoded.id });
    if (!user) {
        throw new Error('Not found: user');
    }

    return user;
};
