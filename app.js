const path = require('path')
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'public')))    /////     AGREGAR PUBLIC

app.listen(process.env.PORT || 3070, () => console.log('El servidor esta corriendo en el puerto 3070.'));

app.get('/', (req, res) => {   // parametro1 ('/') : pad,   // parametro2 : callback que obtiene como argumentos dos argumentos (req,res)
    res.sendFile(path.join(__dirname, '/views/index.html') )
}); 

app.get('/register', (req, res) => {   // parametro1 ('/') : pad,   // parametro2 : callback que obtiene como argumentos dos argumentos (req,res)
    res.sendFile(path.join(__dirname, '/views/register.html') )
}); 


app.get('/login', (req, res) => {   // parametro1 ('/') : pad,   // parametro2 : callback que obtiene como argumentos dos argumentos (req,res)
    res.sendFile(path.join(__dirname, '/views/login.html') )
}); 












