const express = require('express');
const app = express();
const mongoose = require('mongoose');

let db;

const connectToMongo = (errorCallback, successCallback) => {
    mongoose.connect('mongodb+srv://cluster0-vpsxe.mongodb.net/test');
    db = mongoose.connection;
    db.on('error', errorCallback);
    db.once('open', successCallback);
};

const errorConnectingToDb = (err) => {
    console.error(err);
};

const successConnectionToDb = () => {
    console.log("Connected to the mongo database!");
};

const defaultResponseCallback = (err, data) => {
    if (err) return console.error(err);
    return data;
};

app.all('/', function (req, res) {
    res.send("It's working!");
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});