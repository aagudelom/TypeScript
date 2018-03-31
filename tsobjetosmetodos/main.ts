


let flash:{nombre:string, edad:number, poderes:string[], getNombre:()=>string} = {
  nombre: "Barry",
  edad: 24,
  poderes: ["Puede caminar", "Puede ir por todo lado"],
  getNombre(){
    return this.nombre;
  }
};

flash.getNombre();
