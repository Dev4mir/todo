const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const task_schema = new Schema({
    USERNAME : String,
    TITLE : String,
    BODY: String,
    DATE: Date,
    DONE: Boolean
});


module.exports = mongoose.model('task',task_schema,'task');