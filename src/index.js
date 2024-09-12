const express = require('express');
const conectarBD = require('../configdb/db');
const cors = require ('cors');

//creamos el servidor
const app = express();

//Conectamos a la base de datos
conectarBD();
app.use(cors());
app.use(express.json());

//Ruta principal del proyecto
app.use('/api/usuarios', require('../ruta/rutas'));

//Ruta para verificar el servidor
app.get('/', (req,res)=>{
    res.send('Conectado desde la Web')
});
app.listen(5000,()=>{
    console.log("El servidor esta conectado localhost:5000")
});
 