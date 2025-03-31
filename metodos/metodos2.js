function saludar(nombre, saludo) {
    if (saludo) {
        return "".concat(saludo, ", ").concat(nombre);
    }
    else {
        return "Hola, ".concat(nombre);
    }
}
console.log(saludar("Felipe"));
console.log(saludar("Felipe", "Buenos dias perri!"));
// Parametros multiples
function sumarTodos() {
    var numeros = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numeros[_i] = arguments[_i];
    }
    return numeros.reduce(function (a, b) { return a + b; }, 0);
}
console.log(sumarTodos(1, 2, 3, 4, 5));
// Valores por defecto 
function despedirse(nombre, saludo) {
    if (saludo === void 0) { saludo = "Adios"; }
    return "".concat(saludo, ", ").concat(nombre);
}
console.log(despedirse("Felipe"));
console.log(despedirse("Felipe", "Hasta luego perri!"));
