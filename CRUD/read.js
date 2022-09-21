function read (PathFile){
    const fs = require('fs');
    let DataOriginal = fs.readFileSync(PathFile,'utf-8');
    let DataOriginalInterpretada = JSON.parse(DataOriginal);
    return DataOriginalInterpretada
    }

    //console.log(read('../taskData.json'));

module.exports = {
    read
}