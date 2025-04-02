var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Persona.prototype.saludar = function () {
        return "Hola, mi nombre es ".concat(this.nombre, " y tengo ").concat(this.edad, " a\u00F1os.");
    };
    return Persona;
}());
var juan = new Persona("Juan", 30);
console.log(juan.saludar()); // Hola, mi nombre es Juan y tengo 30 años.
