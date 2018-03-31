//definición de un tipo
type Heroe = {
  nombre:string,
  edad:number,
  poderes:string[],
  getNombre:()=>string
};


let flash:Heroe = {
  nombre: "Barry",
  edad: 24,
  poderes: ["Puede caminar", "Puede ir por todo lado"],
  getNombre(){
    return this.nombre;
  }
};


let superman:Heroe = {
  nombre: "Clarck",
  edad: 24,
  poderes: ["Volando", "Corriendo"],
  getNombre(){
    return this.nombre;
  }
};
