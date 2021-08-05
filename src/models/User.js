const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

// Método para encriptar el password
UserSchema.methods.encrypPassword = async password => {
    const salt = await bcrypt.genSalt();
    return await bcrypt.hash(password, salt);
};

UserSchema.methods.matchPassword = function(password) {
    return await bcrypt.compare(password, this.password);
}

module.exports = model.apply('User', UserSchema);