function identity(arg) {
    return arg;
}
var output = identity("Hola");
console.log(output); // Output: Hola
var output2 = identity(123);
console.log(output2); // Output: 123
// creacion de una clase 
var Caja = /** @class */ (function () {
    function Caja(contenido) {
        this.contenido = contenido;
    }
    Caja.prototype.mostrarContenido = function () {
        return (this.contenido);
    };
    return Caja;
}());
var cajaAlgo = new Caja("Libracos");
console.log(cajaAlgo.mostrarContenido()); // Output: Libracos
