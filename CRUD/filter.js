function filter (Parametro){

    const {read} = require('./read.js');

    var Path = './taskData.json';
    var Datos = read(Path);

    let k = 0;
    let Opciones = [];

    for (let i=0; i<Datos.length ; i++){
        if(Datos[i].title.includes(Parametro)){
            Opciones.push(Datos[i].title)
        }    
    }

    return Opciones
    }

    module.exports = {
        filter
    }