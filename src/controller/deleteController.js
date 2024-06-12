const appPeluqueria = require('../model/model');

exports.borrarCliente = async (req, res) => {
    try{
        const {id } = req.params;
        const result = await appPeluqueria.deleteOne({ _id: id })
        console.log(result)
        if (result.deletedCount === 1) {
          res.status(200).send("Tarea eliminada satisfactoriamente");
        } else {
          res.status(404).send("No se encontró ninguna tarea con el ID proporcionado");
        }
        
      }catch (error) {
        console.error("Error al obtener las tareas:", error);
        res.status(500).send("Hubo un error al obtener las tareas.");
      }
};