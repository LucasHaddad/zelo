const mongoose = require('mongoose');

const NurseSchema = new mongoose.Schema({
    name: String,
    cpf: String,
    bed: Number,
    room: Number,
    lesureDegree: Number,
    timeToFlipOver: Number
});

const Nurse = mongoose.model('Nurse', NurseSchema);