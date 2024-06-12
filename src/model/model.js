const mongoose = require('mongoose');

const appPeluqueriaMongoose = new mongoose.Schema({
    clientName: String,
    appointmentDate: String,
    serviceType: String
})

const appPeluqueria = mongoose.model('appPeluqueria', appPeluqueriaMongoose);

module.exports = appPeluqueria;