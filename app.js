const path = require('path')
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'public')))    /////     AGREGAR PUBLIC

app.listen(3070, () => {    // metodo listen de app para levantar el servidor : al ser un metodo necesita parametros : 
    // parametro1 : puerto donde lo queremos inicializar , // parametro2 : callback function 
        console.log('Servidor corriendo')
    });
    

app.get('/', (req, res) => {   // parametro1 ('/') : pad,   // parametro2 : callback que obtiene como argumentos dos argumentos (req,res)
    res.sendFile(path.join(__dirname, '/views/index.html') )
}); 






