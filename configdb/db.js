const mongoose = require('mongoose');
require('dotenv').config();

//Conexion con mongoDB
const conectarBD = () => {
    mongoose
    .connect(process.env.MongoDB)
    .then(()=>{console.log("Conectado a la base de datos")})
    .catch((err)=>{console.log(err)})
}

module.exports = conectarBD; 
