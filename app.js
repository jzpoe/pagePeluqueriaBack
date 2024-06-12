const express = require('express');
const mongoose = require('./src/db/mongo')
const createroutePostt = require('./src/routes/routes')
const routerRegister= require('./src/routes-Login/routeRegister')
const cors = require('cors')
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors())

app.use(createroutePostt)
app.use(routerRegister)

app.listen(port, ()=>{
    console.log(`escuchando el puerto: ${port}`)
})