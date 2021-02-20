let archivoTareas = require('./tareas');
let misTareas = archivoTareas.leerJSON();


let tareaNueva = {
    "titulo": "ejercitar",
    "estado": "en proceso"
}
let tareas = {
    listar: function(){
    for (let i = 0;  i < misTareas.length; i++) {
        console.log(misTareas[i].titulo);
    };

},
    agregar: function(){
    misTareas.push(tareaNueva);
    this.listar();
    this.grabar();

},
    grabar: function (){
    archivoTareas.grabarJSON(JSON.stringify(misTareas));
}
}      


module.exports = tareas;
