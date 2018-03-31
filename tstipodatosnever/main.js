//Tipo de datos para funciones con el fin de gestionar errores
//al ejecutarse esta función en el navegador aparecerá un traza de error en color rojo.
function error(mensaje) {
    throw new Error(mensaje);
}
error("Error critico");
