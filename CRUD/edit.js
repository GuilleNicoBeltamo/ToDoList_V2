function update (Titulo,NvaDescripcion){

    const {read} = require('./read.js')
    const {write} = require('./write.js')
    
    var Path = './taskData.json';
    var Datos = read(Path);

    for (let i=0; i<Datos.length ; i++){
        if(Datos[i].title == Titulo) {
            Datos[i].desc = NvaDescripcion;            
        break
        }
    }

    write (Path,Datos);
    
    }
    
    //console.log(update('TEST',['Queso','Pan']))

    module.exports = {
        update
    }