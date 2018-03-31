
function nombreCompleto(nombre:string, ...losDemasNombre:string[]):string {
  return `${nombre} ${losDemasNombre.join(" ")}`;
}

let superman:string = nombreCompleto("clar", "jose", "pajaro");

let ironman:string = nombreCompleto("antony", "eduar");


console.log(superman);
