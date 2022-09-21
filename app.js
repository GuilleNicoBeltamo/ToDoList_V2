const {create} = require('./CRUD/create.js');
const {deletear} = require('./CRUD/deletear.js');
const {update} = require('./CRUD/edit.js');
const {list} = require('./CRUD/list.js');
const {find} = require('./CRUD/find.js');
const {retorno} = require('./CRUD/retorno.js');
const {filter} = require('./CRUD/filter.js');

var entrada = process.argv; 
const comando = entrada[2];
const Parametro1 = entrada[3];
const Parametro2 = entrada[4];

switch (comando) {
    case 'add':
        create(Parametro1,Parametro2);
        console.log("Comida e ingredientes agregados!")
        break;
    case 'delete':
       deletear(Parametro1);
        console.log("Registro ", Parametro1 ," modificado!")        
        break;    
    case 'edit':
        update(Parametro1,Parametro2);
        console.log("Registro modificado!")
        break;
    case 'list':
        console.log("Lista de comidas:")
        console.log(list());
        break;
   case 'find':
        console.log(find(Parametro1));
        break;
   case 'return':
        if(find(Parametro1)) {
            console.log("Ingredientes de: ",Parametro1)
            console.log(retorno(Parametro1));
        } else {
        console.log(retorno(Parametro1));
        console.log("Quizas te refieras a:");
        console.log(filter(Parametro1));
        }
        break;   
    case 'filter':
        console.log("Registros que incluyen: ",Parametro1)
        console.log(filter(Parametro1));
        break;    
    }