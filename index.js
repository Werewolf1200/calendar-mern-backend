const express = require('express');
const { dbConnection } = require('./database/config');

require('dotenv').config();

// Servidor
const app = express();

// Base de Datos
dbConnection();

// Publico
app.use(express.static('public'));

// Lectura y Parseo del Body
app.use(express.json());
// Rutas
app.use('/api/auth', require('./routes/auth'))

// Escuchar peticiones
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`);
});