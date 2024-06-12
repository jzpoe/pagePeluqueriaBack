const mongoose = require('mongoose');
require('dotenv').config()

const mongo= process.env.MONGODB_URI

mongoose.connect(mongo,   {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('conectado a la base de datos con mongoose')
}).catch((error)=>{
    console.log('error al conectarse a la base de datos', error)
})


module.exports = mongoose