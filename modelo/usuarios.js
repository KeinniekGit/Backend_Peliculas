const mongoose = require('mongoose')

//El modelo que se cree aca debe ser igual al de la base de datos.
const usuarioSchema = mongoose.Schema({
    nombre: {
        type:String,
        required:true},
    correo: {
        type:String,
        required:true},
    direccion: {
        type:String,
        required:true},
    comentario: {
        type:String,
        required:true}
    },{versionkey:false})
    
module.exports = mongoose.model('usuarios', usuarioSchema)