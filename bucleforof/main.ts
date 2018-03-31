
let thor = {
  nombre: "Thor",
  arma: "Pajaro"
};

let ironman = {
  nombre: "Ironman",
  arma: "Armadura"
};

let capitan = {
  nombre: "Capitan",
  arma: "Escudo"
}

let avengers = [thor, ironman, capitan];

//forma compleja
for(let i in avengers) {
  let avenger = avengers[i];
  console.log(avenger.nombre);
}

//nueva forma
for(let avenger of avengers) {
  console.log(avenger.nombre);
}
