class Avenger {
  //por defecto todas los atributos son publicos
  public apellido: string;
  protected nombre: string;
  private edad:number;

  //el siguiente es un método
  constructor(nombre:string, apellido:string) {
    this.nombre = nombre;
    this.apellido = apellido;
  }

  public imprimirNombre = () => console.log(this.nombre);

  public setEdad(edad:number):void {
    this.edad = edad;
  }

  public getInformacion():void {
    let mensaje:string = `${this.apellido} ${this.nombre} ${this.edad}`;
    console.log(mensaje);
  }
  //al igual que las varibale, los metodos también pueden tener definición de visibilidad
  private getPajaro():number {
    return this.edad * 1;
  }
}

class AvengerVolador extends Avenger {
  vuela: boolean;
  constructor (nombre, apellido) {
    super(nombre, apellido);
    this.vuela = true;
  }
}
let antman = new Avenger("Hombre", "Raro");
//esta sería el unico atributo posible a utilizar.
console.log(antman.apellido);
