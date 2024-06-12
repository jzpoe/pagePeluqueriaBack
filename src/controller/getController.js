const appPeluqueria = require('../model/model');


exports.obtenerClientes = async (req, res )=>{

    try {
        const obetenerDatosClientes = await appPeluqueria.find();
        console.log(obetenerDatosClientes)
        res.status(200).send(obetenerDatosClientes)

    } catch (error) {
        res.status(400).send({
            message: 'Error al buscar cliente',
            error: error.message
        }); 
    }
    

}