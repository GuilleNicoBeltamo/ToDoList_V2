function retorno (Parametro){

    const {read} = require('./read.js');

    var Path = './taskData.json';
    var Datos = read(Path);

    var Res_Busq = 'Registro no encontrado, reintente';

    for (let i=0; i<Datos.length ; i++){
         if(Datos[i].title == Parametro) {
             Res_Busq= Datos[i].desc;
             break;
         }
        }
    return Res_Busq;
    }

    module.exports = {
        retorno
    }