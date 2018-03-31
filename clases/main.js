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
var hulk = new Avenger("Pajaro", "Volador");
console.log(hulk);
var falco = new AvengerVolador("Perror", "Espia");
console.log(falco);
