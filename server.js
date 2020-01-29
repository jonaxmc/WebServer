//Hace un llamado a las librerias
const express = require('express'); //Hace el llamado al módulo express
const app = express(); //Llama a la función express y coloca una nueva aplicación Express dentro de la variable app (para iniciar una nueva aplicación Express)
const hbs = require('hbs'); //Hace el llamado al módulo hbs
require('./hbs/helpers');

//use el puerto 3000 a menos que exista un puerto preconfigurado
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//Le dice a HBS la ruta donde se encuentran los fragmentos de plantilla para ser usado en la web
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

//Crea una ruta a la página home
app.get('/', function(req, res) {
    res.render('home', {
        nombre: "joNaThan mAñaY" //Guarda el nombre para ser utilizado en la página home
    });
});

//Crea una ruta a la pestaña about
app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});