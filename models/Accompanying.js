const mongoose = require('mongoose');

const AccompanyingSchema = new mongoose.Schema({
    name: String,
    cpf: String,
    bed: Number,
    room: Number,
    lesureDegree: Number,
    timeToFlipOver: Number
});

const Accompanying = mongoose.model('Accompanying', AccompanyingSchema);