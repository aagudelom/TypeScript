//definición de un tipo
type Heroe = {
  nombre:string,
  edad:number
};

//union de tipos
let loquesea: string | number | Heroe = "Fernando";

loquesea = {
  nombre: "Flash",
  edad:56
}
