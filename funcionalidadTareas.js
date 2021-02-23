let operacionesArchivo = require ('./operacionesArchivo');

let tareas = operacionesArchivo.leerArchivoJson();


let funcionalidadTareas = {

 listar: function (){
     console.log();
     console.log('Listado de tareas ');
     console.log('----------------');

    tareas.forEach(i => {
         console.log(i.titulo + ' -> ' + i.estado);         
     });
  
 },

 crear: function(tituloTerminal, estadoTerminal){

    let tareaNueva = 
    { 
        titulo: tituloTerminal,
        estado: estadoTerminal
    };
    console.log();
    console.log('Nueva tarea creada');
    console.log('------------------');

    console.log(tareaNueva.titulo);
    console.log(tareaNueva.estado);

    tareas.push(tareaNueva);

    this.listar();

    this.grabar();

}, 
 grabar: function(){
    operacionesArchivo.grabarUnJson(JSON.stringify(tareas));
 },

 filtrar: function(filtroEstado){
     console.log();
     console.log('Tareas ' + filtroEstado);
     console.log('-----------------------');
 

 let tareasFiltradas = tareas.filter((tarea) => {
     return tarea.estado == filtroEstado;
 });
 
    tareasFiltradas.forEach((i) => {
         console.log(i.titulo) });
 
 } 
}

module.exports = funcionalidadTareas; 
