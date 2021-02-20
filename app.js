let tareas = require('./funcionesDeTareas'); 

let accion = process.argv[2];

switch(accion) {
    case 'listar':
      tareas.listar() 
        break;
    case 'agregar':
        console.log('Agregando...')
        tareas.agregar();
        
    case undefined:
        console.log('Tenés que pasarme una acción');
        break;

    default:
       console.log('No entiendo qué me estás pidiendo');
       console.log('Las acciones disponibles son: listar');
        break;
}




