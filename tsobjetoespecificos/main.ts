


let flash:{nombre:string, edad:number, poderes:string[]} = {
  nombre: "Barry",
  edad: 24,
  poderes: ["Puede caminar", "Puede ir por todo lado"]
}

//el intentar hacer otras cosas lo typescript controlará el error.

flash = {
  nombre: "Pajaro",
  poderes: ["comer"],
  edad: 2
}
