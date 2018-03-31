function sumar(a:number, b:number):number {
  return a + b;
}

function saludar(nombre:string):string {
  return `hola ${nombre}`;
}

function salvarMundo():void {
  console.log("El mundo vive");
}

//de esta forma podemos permitir que esta variable reciba lo que sea
let miFuncion;

//de la siguiente forma limitamos el tipo de dato
let miFuncionNumero: (z:number, x:number) => number;

miFuncion = 2;

miFuncion = sumar;
console.log(miFuncion(3, 4));

miFuncion = saludar;

miFuncion = salvarMundo;
