const mongoose = require('mongoose');

const NurseTechnicianSchema = new mongoose.Schema({
    name: String,
    cpf: String,
    bed: Number,
    room: Number,
    lesureDegree: Number,
    timeToFlipOver: Number
});

const NurseTechnician = mongoose.model('NurseTechnician', NurseTechnicianSchema);