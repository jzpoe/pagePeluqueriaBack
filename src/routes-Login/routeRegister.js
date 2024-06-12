const express = require('express');
const routerRegister = express.Router();

const register = require('../register/register');


routerRegister.post('/register', register.register)





module.exports=routerRegister;
