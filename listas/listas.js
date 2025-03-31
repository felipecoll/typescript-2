var nombres = ['Felipe', 'Jero', 'Joaquin', 'Pablo', 'Diego'];
console.log("Nombres: ", nombres);
var edades = [20, 21, 22, 23, 24];
console.log("Edades: ", edades);
var booleanos = [true, false, true, false, true];
console.log("Booleanos: ", booleanos);
var mixto = [true, 20, 'Felipe', false, 21];
console.log("Mixto: ", mixto);
var personas = [
    { nombre: 'Felipe', edad: 20, esDev: true },
    { nombre: 'Jero', edad: 21, esDev: false },
    { nombre: 'Joaquin', edad: 22, esDev: true },
    { nombre: 'Pablo', edad: 23, esDev: false },
    { nombre: 'Diego', edad: 24, esDev: true }
];
//console.log("Personas: ", personas);
personas.push({ nombre: 'Joaquin', edad: 22, esDev: true });
//console.log("Personas: ", personas);
//Tuplas
var personasTupla = [
    ['Felipe', 20, true],
    ['Jero', 21, false],
    ['Joaquin', 22, true],
    ['Pablo', 23, false],
    ['Diego', 24, true]
];
console.log("Personas Tupla: ", personasTupla);
