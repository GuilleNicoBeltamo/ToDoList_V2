function write (PathFile,ACrear){
    const fs = require('fs');
    ACrearParseado = JSON.stringify(ACrear,null,2)
    fs.writeFileSync(PathFile,ACrearParseado);
    //console.log("Se escribio un archivo en ", PathFile);
    return
}

    //write(".\DataTest.js","[1,2,3,4]");

module.exports = {
    write
}