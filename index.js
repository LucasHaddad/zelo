var mongoose = require('mongoose');
var express = require('express');
var app = express();
var db;

const PatientSchema = new mongoose.Schema({
    name: String,
    cpf: String,
    bed: Number,
    room: Number,
    lesureDegree: Number,
    timeToFlipOver: Number
});

var Patient = mongoose.model('Patient', PatientSchema);

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
  
app.get('/nurse', function (req, res) {
    res.send("Not implemented yet!");
});

app.post('/nurse', function (req, res) {
    res.send("Not implemented yet!");

});
  
app.delete('/nurse', function (req, res) {
    res.send("Not implemented yet!");

});

app.put('/nurse', function (req, res) {
    res.send("Not implemented yet!");

});

app.get('/nurseTechnician', function (req, res) {
    res.send("Not implemented yet!");

});

app.post('/nurseTechnician', function (req, res) {
    res.send("Not implemented yet!");

});
  
app.delete('/nurseTechnician', function (req, res) {
    res.send("Not implemented yet!");

});

app.put('/nurseTechnician', function (req, res) {
    res.send("Not implemented yet!");

});

app.get('/accompanying', function (req, res) {
    res.send("Not implemented yet!");

});

app.post('/accompanying', function (req, res) {
    res.send("Not implemented yet!");

});
  
app.delete('/accompanying', function (req, res) {
    res.send("Not implemented yet!");

});

app.put('/accompanying', function (req, res) {
    res.send("Not implemented yet!");

});

app.get('/patient', function (req, res) {
    connectToMongo(errorConnectingToDb, defaultResponseCallback);
    res.json(Patient.find({}, defaultResponseCallback));
});

app.post('/patient', function (req, res) {
    res.send("Not implemented yet!");

});
  
app.delete('/patient', function (req, res) {
    res.send("Not implemented yet!");

});

app.put('/patient', function (req, res) {
    res.send("Not implemented yet!");

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});