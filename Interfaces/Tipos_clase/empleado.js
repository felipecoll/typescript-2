"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empleado = void 0;
var clase_1 = require("./clase");
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado(nombre, edad, puesto, salario) {
        var _this = _super.call(this, nombre, edad) || this;
        _this.puesto = puesto;
        _this.salario = salario;
        return _this;
    }
    Empleado.prototype.saludar = function () {
        return "Hola, mi nombre es ".concat(this.nombre, " y soy ").concat(this.puesto, ".");
    };
    Empleado.prototype.obtenerInfo = function () {
        return "Soy ".concat(this.nombre, ", tengo ").concat(this.edad, " a\u00F1os y mi salario es ").concat(this.salario, ".");
    };
    return Empleado;
}(clase_1.Persona));
exports.Empleado = Empleado;
