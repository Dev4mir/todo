const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

const user_schema = new Schema({
    FIRST_NAME: { type: String, required: true },
    LAST_NAME: { type: String, required: true },
    EMAIL: { type: String, required: true },
    USERNAME: { type: String, index: true, unique: true, required: true, uniqueCaseInsensitive: true },
    PASSWORD: { type: String, required: true }
});

user_schema.plugin(uniqueValidator, { type: 'mongoose-unique-validator' });


// user_schema.index({USERNAME: 1},{unique: true} )


module.exports = mongoose.model('login',user_schema,'login');
