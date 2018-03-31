var thor = {
    nombre: "Thor",
    arma: "Pajaro"
};
var ironman = {
    nombre: "Ironman",
    arma: "Armadura"
};
var capitan = {
    nombre: "Capitan",
    arma: "Escudo"
};
var avengers = [thor, ironman, capitan];
//forma compleja
for (var i in avengers) {
    var avenger = avengers[i];
    console.log(avenger.nombre);
}
//nueva forma
for (var _i = 0, avengers_1 = avengers; _i < avengers_1.length; _i++) {
    var avenger = avengers_1[_i];
    console.log(avenger.nombre);
}
