
//funcion con atributos opcionales
function unirNombres(nombre:string, apellido?:string):string {
  if(apellido) {
    return `Unir nombre ${nombre} ${apellido}`;
  } else {
    return `Unir nombre ${nombre}`;
  }
}
