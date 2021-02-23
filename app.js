let funcionalidadTareas = require('./funcionalidadTareas');

let accion = process.argv[2]; 
let tituloTerminal = process.argv[3];
let estadoTerminal = process.argv[4];
let filtroEstado = process.argv[3];



switch (accion) {
    case 'listar':
       funcionalidadTareas.listar();

        break;
    case 'crear':
        funcionalidadTareas.crear(tituloTerminal, estadoTerminal);
        
        break; 
    case 'filtrar':
        funcionalidadTareas.filtrar(filtroEstado);
        
        break;  
    case undefined:
        console.log('Debes darme una instrucción');
        break; 

    default:
        console.log('Las opciones disponibles son: listar, filtrar y crear');
        break;
}
