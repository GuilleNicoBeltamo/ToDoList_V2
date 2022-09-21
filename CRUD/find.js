function find (Parametro){

    const {read} = require('./read.js') 

    var Path = './taskData.json';
    var Datos = read(Path);

    Res_Busq= false;

    for (let i=0; i<Datos.length ; i++){
         if(Datos[i].title == Parametro) {
             Res_Busq= true;
             break
         }
        }
    return Res_Busq
    }

    module.exports = {
        find
    }