const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    firstname: { type: String, default: null },
    lastname: { type: String, default: null },
    email: { type: String, required: true },
    birthdate: { type: String, default: null },
    dateCreated: { type: Date, default: Date.now() },
},
{
    versionKey: false,
    minimize: false,
});

UserSchema.index({ username: 1 }, { unique: true });
UserSchema.index({ email: 1 }, { unique: true });

UserSchema.methods.comparePassword = function (password) {
    return password.toUpperCase() === this.password.toUpperCase();
};

const User = mongoose.model('User', UserSchema);

module.exports = User;
