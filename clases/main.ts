class Avenger {
  apellido: string;
  nombre: string;

  //el siguiente es un método
  constructor(nombre:string, apellido:string) {
    this.nombre = nombre;
    this.apellido = apellido;
  }

  imprimirNombre = () => console.log(this.nombre);
}

class AvengerVolador extends Avenger {
  vuela: boolean;
  constructor (nombre, apellido) {
    super(nombre, apellido);
    this.vuela = true;
  }
}

let hulk = new Avenger("Pajaro", "Volador");
console.log(hulk);
let falco = new AvengerVolador("Perror", "Espia");
console.log(falco);
