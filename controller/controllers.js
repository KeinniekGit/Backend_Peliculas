const usuarios = require('../modelo/usuarios');

//Funcion para buscar los usuarios en la base de datos
exports.buscarUsuarios = async (req,res)=>{
    try{
        const usuario = await usuarios.find();
        res.json(usuario);
    }catch(error){
        console.log(error)
        res.status(500).send("Hubo un error al buscar a los usuario")
    }
}

// Función para buscar usuario por ID
exports.buscarUsuariosPorId = async (req, res) => {
    try {
        const { id } = req.params; 
        const usuario = await usuarios.findById(id);

        if (!usuario) {
            return res.status(404).send("Usuario no encontrado");
        }

        return res.json(usuario);
    } catch (error) {
        console.log(error);
        return res.status(500).send("Hubo un error al buscar el usuario");
    }
};

//Funcion agregar usuarios
exports.agregarUsuarios = async (req, res)=>{
    try{
        let usuario;
        usuario = new usuarios(req.body)
        await usuario.save();
        res.json(usuario);
    }catch(err){
        console.log(err)
        res.status(500).send('Hubo un error al agregar un usuario');    
    }
} 

// Función para editar usuario utilizando PUT
exports.editarUsuarios = async (req, res) => {
    try {
        const usuario = await usuarios.findByIdAndUpdate(req.params.id, req.body, { new: true });
        
        if (!usuario) {
            return res.status(404).send({ msg: "El usuario no existe" });
        }

        return res.json(usuario);
    } catch (error) {
        console.log("Error al mostrar un usuario:", error);
        return res.status(500).send("Hubo un error al mostrar el usuario");
    }   
};

// Función para eliminar un usuario por ID
exports.eliminarUsuarioPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await usuarios.findByIdAndDelete(id);

        if (!usuario) {
            return res.status(404).send("Usuario no encontrado");
        }

        return res.json({ mensaje: "Usuario eliminado", usuario: usuario });
    } catch (error) {
        console.log(error);
        return res.status(500).send("Hubo un error al eliminar el usuario");
    }
};

