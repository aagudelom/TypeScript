
class Arma {
  constructor(public tipo:string, private color:string) {

  }
protected getColor():string {
  return this.color;
}

}
let armamento:Arma = new Arma("Peligrosa", "Negra");

class Pistola extends Arma {
  constructor(tipo:string, colors:string, calibre?:string,) {
    super(tipo, colors);
  }

  public getColor():string{
    return super.getColor();
  }

  get calibre():string {
    return this.calibre;
  }

  set calibre(calibre:string){
    this.calibre = calibre;
  }
}
let calibre2:Pistola = new Pistola("","","");
console.log(calibre2.tipo);
console.log(calibre2.getColor());
let calibre3:Pistola = new Pistola("","");
console.log(calibre3.calibre);
