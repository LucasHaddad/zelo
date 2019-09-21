const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
    name: String,
    cpf: String,
    bed: Number,
    room: Number,
    lesureDegree: Number,
    timeToFlipOver: Number
});

const Patient = mongoose.model('Patient', PatientSchema);