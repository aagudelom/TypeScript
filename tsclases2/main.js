var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avenger = /** @class */ (function () {
    //el siguiente es un método
    function Avenger(nombre, apellido) {
        var _this = this;
        this.imprimirNombre = function () { return console.log(_this.nombre); };
        this.nombre = nombre;
        this.apellido = apellido;
    }
    Avenger.prototype.setEdad = function (edad) {
        this.edad = edad;
    };
    Avenger.prototype.getInformacion = function () {
        var mensaje = this.apellido + " " + this.nombre + " " + this.edad;
        console.log(mensaje);
    };
    //al igual que las varibale, los metodos también pueden tener definición de visibilidad
    Avenger.prototype.getPajaro = function () {
        return this.edad * 1;
    };
    return Avenger;
}());
var AvengerVolador = /** @class */ (function (_super) {
    __extends(AvengerVolador, _super);
    function AvengerVolador(nombre, apellido) {
        var _this = _super.call(this, nombre, apellido) || this;
        _this.vuela = true;
        return _this;
    }
    return AvengerVolador;
}(Avenger));
var antman = new Avenger("Hombre", "Raro");
//esta sería el unico atributo posible a utilizar.
antman.apellido;
