const validate = require('validator');
const min = { username: 8, password: 8 };
const max = { username: 20, password: 20 };

const Validator = {
    register: (params) => {
        if (!(validate.isLength(params.username, { min: min.username, max: max.username }))) {
            throw new Error(`Input error: username! Username must be between ${min.username} and ${max.username}`);
        }
        if (!(validate.isLength(params.password, { min: min.password, max: max.password }))) {
            throw new Error(`Input error: password! Password must be between ${min.password} and ${max.password}`);
        }
        if (!(validate.isEmail(params.email))) {
            throw new Error('Input error: email! Invalid email');
        }
    },
};

module.exports = Validator;
