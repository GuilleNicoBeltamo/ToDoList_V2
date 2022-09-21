function create (Titulo,Descripcion){

const {read} = require('./read.js')
const {write} = require('./write.js')

var Path = './taskData.json';
var Datos = read(Path);

Datos.push({title: Titulo, desc: Descripcion});  
//console.log(Datos)
write (Path,Datos)

}   

//console.log(create('TEST',['Masa','Jamon','Queso','Oregano']));

module.exports = {
    create
}