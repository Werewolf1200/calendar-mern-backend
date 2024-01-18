const express = require('express');

require('dotenv').config();

// Servidor
const app = express();

// Rutas

// Publico
app.use(express.static('public'));

app.use('/api/auth', require('./routes/auth'))

// Escuchar peticiones
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`);
});