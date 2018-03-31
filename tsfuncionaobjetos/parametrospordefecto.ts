//funcion con parametros por defecto
function unirPersona(nombre:string, apellido?:string, segundoapellido:string = "paloma"):string {
  if(apellido) {
    return `Unir nombre ${nombre} ${apellido}`;
  } else {
    return `Unir nombre ${nombre} ${segundoapellido}`;
  }
}
