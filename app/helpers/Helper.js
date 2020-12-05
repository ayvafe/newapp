const { AuthenticationError } = require('apollo-server');
const jwt = require('jsonwebtoken');
const md5 = require('js-md5');

const { superSecret } = require('../config');

const Helper = {
    decodeToken: async (token) => new Promise((resolve, reject) => {
        jwt.verify(token, superSecret, (err, decoded) => {
            if (err) {
                reject(new AuthenticationError('Invalid token!'));
            }
            resolve(decoded);
        });
    }),

    signToken: ({ id, username, email }) => jwt.sign({ id, username, email }, superSecret, { expiresIn: '24h' }),

    getHashedPassword: (password) => {
        // 2 bytes for each char
        const buf = new ArrayBuffer(password.length * 2);
        const bufView = new Uint16Array(buf);
        for (let i = 0, strLen = password.length; i < strLen; i++) {
            bufView[i] = password.charCodeAt(i);
        }
        const hashed = md5(buf).toUpperCase();

        return hashed;
    },
};

module.exports = Helper;
