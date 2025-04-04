"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pi = void 0;
exports.suma = suma;
exports.resta = resta;
exports.multiplicacion = multiplicacion;
exports.division = division;
function suma(a, b) {
    return a + b;
}
function resta(a, b) {
    return a - b;
}
function multiplicacion(a, b) {
    return a * b;
}
function division(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir entre cero");
    }
    return a / b;
}
exports.pi = 3.141592653589793;
