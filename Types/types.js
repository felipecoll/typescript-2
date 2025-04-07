var persona = {
    nombre: 'Juan',
    edad: 30
};
console.log(persona.nombre);
function esNumero(valor) {
    return typeof valor === 'number';
}
var resultado1 = esNumero(5); // true
var resultado2 = esNumero("5"); // false
console.log(resultado1); // true
console.log(resultado2); // false
