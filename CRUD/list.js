function list (){

    const {read} = require('./read.js') 

    var Path = './taskData.json';
    var Datos = read(Path);
    
    const Titulos = [];
    for (let i=0; i<Datos.length ; i++){
         //console.log(Tasks[i].title)
         Titulos.push(Datos[i].title)
        }
        return Titulos
    }
    
//console.log(list())

    module.exports = {
        list
    }