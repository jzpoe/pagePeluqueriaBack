const  appLogin = require('../model/modelLogin')



exports.register=async(req, res)=>{


    try {
        const nuevoRegistro =  new appLogin(req.body);

        await nuevoRegistro.save();
        res.status(200).send({
            message:'nuevo usuario creado con exito',
            registro: nuevoRegistro
        })
    } catch (error) {
        res.status(400).send({
            message: 'Error al crear usuario',
            error: error.message
        }); 
    }

}