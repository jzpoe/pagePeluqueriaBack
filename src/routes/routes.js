const createroutePostt = require('../controller/postController');
const encontrarclientes = require('../controller/getController')
const borrarCliente = require('../controller/deleteController')
const express = require('express');
const router = express.Router();



router.post('/agregarcliente', createroutePostt.createroutePostt )
router.get('/encontrarclientes', encontrarclientes.obtenerClientes)
router.delete('/eliminarcliente/:id', borrarCliente.borrarCliente)




module.exports= router;

