const mongoose  = require('mongoose');
const {Schema} = mongoose;

const userSchema = Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        unique: true,
        required: true
    },
    imageUrl: {
        type: String
    },

},{
    timestamps: true
})