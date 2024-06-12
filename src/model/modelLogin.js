const mongoose = require('mongoose');

const appRegisterMongoose = new mongoose.Schema({
    nombre: String,
    contraseña: String,
    correo: String
})

const appLogin = mongoose.model('appLogin', appRegisterMongoose);

module.exports = appLogin;