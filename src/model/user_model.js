module.exports = () => {
    const mongoose = require('mongoose');
    const UserSchema = new mongoose.Schema({
        name: String,
        email: String,
        password: String
    }, {
        versionKey: false
    });

    return mongoose.model('user_data', UserSchema);
}