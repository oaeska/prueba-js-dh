/*
    FORMATO DE CADA TAREA
        - titulo: string
        - status: string (
           * terminada
           * pendiente
         )
*/
let fs = require('fs');

exports.leerTareas = function () {
    /*
        En esta función debes leer y retornar las tareas registradas.
    */
    return JSON.parse(fs.readFileSync('./tareas.json'));

}

exports.agregarTarea = function (tarea) {
    /*
        Registra y guarda una nueva tarea.
    */
        const tareas = JSON.parse(fs.readFileSync('./tareas.json'));
        tareas.push(tarea);
        fs.writeFileSync('./tareas.json', JSON.stringify(tareas))
        return tareas;

}

exports.filtrarTareasPorEstado = function (estado) {
    /*
        En esta función debes de leer las tareas y retornar las que tengan el estado que se
        manda en el parametro.
    */
        const tareas = JSON.parse(fs.readFileSync('./tareas.json'));
        return tareas.filter(item => item.status == estado);
}