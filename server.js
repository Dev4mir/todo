const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const path = require("path");

const $port = 8080;
const app = express();

//Requiring APIs Router
const user_api = require('./server/routes/user_api.js');
const task_api = require('./server/routes/task_api.js');

app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

//Configuration API Router
app.use('/user-api', user_api);
app.use('/task-api', task_api);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});
const db="mongodb://admin:123123123@localhost:27017/admin";
mongoose.Promise = global.Promise;
mongoose.connect(db, (err) => {
    err ? console.log("error:", err) : console.log("connected");
});
const server = app.listen($port, "0.0.0.0", () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`example app listening at http://${host}:${port}`);
});