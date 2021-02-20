const fs = require('fs'); 

let archivoTareas =
{
   archivo: 'tareas.json', 
   
   leerJSON: function () { 
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },
    leerArchivo: function(){
        return fs.readFileSync(this.archivo, 'utf-8');
    },
    
    grabarUnJson: function(tareas){
        return fs.writeFileSync(this.archivo, tareas)
    },
    
};

module.exports = archivoTareas;
