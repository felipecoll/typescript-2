"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, edad, esDev) {
        if (esDev === void 0) { esDev = false; }
        this.nombre = nombre;
        this.edad = edad;
        this.esDev = esDev;
    }
    Persona.prototype.saludar = function () {
        return "Hola, mi nombre es ".concat(this.nombre, " y tengo ").concat(this.edad, " a\u00F1os.");
    };
    Persona.prototype.soyDev = function () {
        return "Soy un desarrollador: ".concat(this.esDev);
    };
    Persona.prototype.soyDevPrivado = function () {
        return "Soy un desarrollador privado: ".concat(this.esDev);
    };
    return Persona;
}());
exports.Persona = Persona;
//const juan = new Persona("Juan", 30);
//console.log(juan.saludar()); // Hola, mi nombre es Juan y tengo 30 años.
