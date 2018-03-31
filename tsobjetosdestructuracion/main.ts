


let avengers = {
  nick: "Samuel jackson",
  ironman: "Robert",
  vision: "Paul Bettany"
}

let { nick, ironman:warmanchine, vision = "Pajaro"} = avengers;

console.log(nick);
console.log(warmanchine);
console.log(vision);


let animales = ["Samuel", "Pajaro", "Volador"];

let [paco, pedro, victor] = animales;

console.log(paco);
console.log(pedro);
console.log(victor);
//de esta forma obtenemos el de la posición 2
let [,,paloma] = animales;
