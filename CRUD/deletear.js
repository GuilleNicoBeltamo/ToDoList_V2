function deletear (Titulo){

    const {read} = require('./read.js')
    const {write} = require('./write.js')
    
    var Path = './taskData.json';
    var Datos = read(Path);

    for (let i=0; i<Datos.length ; i++){
        if(Datos[i].title == Titulo) {
            Datos.splice(i,1)    
            break
        }
    }
  
    write (Path,Datos)
    
    }

module.exports = {
    deletear
}