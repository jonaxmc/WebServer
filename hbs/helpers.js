const hbs = require('hbs');

//Define un helper que va a retornar el año actual
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

//Define un helper que permite convertir la primera letra de cada palabra en mayúscula y las demás en minúsculas
hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' '); //Divide el objeto de tipo String en un array
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + //La primera letra de cada palabra en mayúscula
            palabra.slice(1).toLowerCase(); //las demás letras en minúsculas
    });

    return palabras.join(' '); //retorna la cadena unida
});