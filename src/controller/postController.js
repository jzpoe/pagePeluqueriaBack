const appPeluqueria = require('../model/model');


exports.createroutePostt = async (req, res)=>{
    const nuevoCliente = new appPeluqueria(req.body);

     try {
        console.log(nuevoCliente)
        await  nuevoCliente.save();
        res.status(200).send({
            message: 'Cita creada exitosamente',
            appointment: nuevoCliente
                })

     } catch (error) {
        res.status(400).send({
            message: 'Error al crear la cita',
            error: error.message
        });    
    
    }

}




